import os
import sys
import json
import urllib.request

# Step 1: Auto-install required packages if not available
REQUIRED_LIBS = ["pandas", "numpy", "xgboost", "scikit-learn"]
missing_libs = []
for lib in REQUIRED_LIBS:
    try:
        __import__(lib)
    except ImportError:
        missing_libs.append(lib)

if missing_libs:
    print(f"Required libraries missing: {missing_libs}. Attempting auto-installation...")
    import subprocess
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install"] + missing_libs)
        print("All libraries successfully installed!")
    except Exception as e:
        print(f"Error installing dependencies automatically: {e}")
        print("Please install them manually using: pip install xgboost scikit-learn pandas numpy")
        sys.exit(1)

# Now import the libraries
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_auc_score, roc_curve, confusion_matrix
import xgboost as xgb

# Step 2: Download the UCI Cleveland Heart Disease dataset
DATA_URL = "https://archive.ics.uci.edu/ml/machine-learning-databases/heart-disease/processed.cleveland.data"
DATA_FILE = "heart.csv"

if not os.path.exists(DATA_FILE):
    print(f"Downloading Heart Disease dataset from UCI repository...")
    try:
        import ssl
        ssl._create_default_https_context = ssl._create_unverified_context
        urllib.request.urlretrieve(DATA_URL, DATA_FILE)
        print("Dataset downloaded successfully!")
    except Exception as e:
        print(f"Failed to download dataset: {e}")
        sys.exit(1)
else:
    print("Local dataset 'heart.csv' already exists.")

# Step 3: Load and preprocess the dataset
columns = [
    'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 
    'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal', 'target'
]

# Read dataset, replacing '?' with NaN
df = pd.read_csv(DATA_FILE, names=columns, na_values='?')

# Check and impute missing values (Cleveland has a few missing values in 'ca' and 'thal')
print("\nDataset preprocessing:")
print(f"Initial shape: {df.shape}")
print(f"Missing values per column:\n{df.isnull().sum()}")

# Impute missing values with column medians
df['ca'] = df['ca'].fillna(df['ca'].median())
df['thal'] = df['thal'].fillna(df['thal'].median())
print("Missing values imputed with column medians.")

# In UCI Cleveland: 0 means no heart disease, 1, 2, 3, 4 indicate severity of heart disease.
# We cast this into a binary classification task: 0 = No Disease, 1 = Disease (values >= 1)
df['target'] = (df['target'] >= 1).astype(int)

# Split features and target
X = df.drop('target', axis=1)
y = df['target']

# Split train and test sets (80/20)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

print(f"Train size: {X_train.shape[0]}, Test size: {X_test.shape[0]}")

# Step 4: Train the XGBoost model
# We set small tree depth (3) and small number of estimators (25) to prevent overfitting,
# keep it fast, and ensure the exported model is compact and highly interpretable in JS!
print("\nTraining XGBoost Classifier...")
model = xgb.XGBClassifier(
    max_depth=3,
    learning_rate=0.1,
    n_estimators=30,
    random_state=42,
    use_label_encoder=False,
    eval_metric='logloss'
)
model.fit(X_train, y_train)
print("Model training completed successfully!")

# Step 5: Evaluate model
y_pred = model.predict(X_test)
y_pred_proba = model.predict_proba(X_test)[:, 1]

acc = accuracy_score(y_test, y_pred)
prec = precision_score(y_test, y_pred)
rec = recall_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)
auc = roc_auc_score(y_test, y_pred_proba)
cm = confusion_matrix(y_test, y_pred).tolist()

print("\nModel Evaluation Metrics (Test Set):")
print(f"Accuracy:  {acc:.4f}")
print(f"Precision: {prec:.4f}")
print(f"Recall:    {rec:.4f}")
print(f"F1-Score:  {f1:.4f}")
print(f"ROC-AUC:   {auc:.4f}")
print(f"Confusion Matrix:\n{np.array(cm)}")

# Get ROC curve coordinates for frontend plotting
fpr, tpr, _ = roc_curve(y_test, y_pred_proba)
# Downsample ROC coordinates to keep size reasonable
roc_points = [{"x": float(f), "y": float(t)} for f, t in zip(fpr, tpr)]

# Step 6: Extract Global Feature Importances
importances = model.feature_importances_
feature_imp_dict = {name: float(imp) for name, imp in zip(X.columns, importances)}
# Sort importances descending
sorted_imp = sorted(feature_imp_dict.items(), key=lambda x: x[1], reverse=True)
print("\nGlobal Feature Importances:")
for name, imp in sorted_imp:
    print(f"  {name:10}: {imp:.4f}")

# Step 7: Export model to JavaScript model_data.js
# We dump the XGBoost trees to a JSON structure
booster = model.get_booster()
trees_json_list = booster.get_dump(dump_format='json')

# Parse tree strings to dictionary objects
parsed_trees = [json.loads(tree_str) for tree_str in trees_json_list]

# Create model object containing all details needed for browser execution
exported_model_data = {
    "base_score": 0.5,  # Default base prediction score for XGBoost classification
    "learning_rate": 0.1, # Matches learning_rate hyperparameter
    "trees": parsed_trees,
    "feature_names": list(X.columns),
    "metrics": {
        "accuracy": float(acc),
        "precision": float(prec),
        "recall": float(rec),
        "f1": float(f1),
        "auc": float(auc),
        "confusion_matrix": cm,
        "feature_importances": feature_imp_dict
    },
    "roc_curve": roc_points
}

# Write to JS file
export_path = "model_data.js"
print(f"\nExporting trained XGBoost model and metrics to '{export_path}'...")
with open(export_path, "w") as f:
    f.write("// Pre-trained XGBoost Model and Evaluation Metrics\n")
    f.write("// Generated automatically by train.py\n\n")
    f.write("const MODEL_DATA = ")
    json.dump(exported_model_data, f, indent=2)
    f.write(";\n")

print("Export completed successfully! Ready for web deployment.")
