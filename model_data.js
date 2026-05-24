// Pre-trained XGBoost Model and Evaluation Metrics
// Generated automatically by train.py

const MODEL_DATA = {
  "base_score": 0.5,
  "learning_rate": 0.1,
  "trees": [
    {
      "nodeid": 0,
      "depth": 0,
      "split": "thal",
      "split_condition": 6,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "ca",
          "split_condition": 1,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "age",
              "split_condition": 58,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.157628372
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0646504983
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "cp",
              "split_condition": 4,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0677957311
                },
                {
                  "nodeid": 10,
                  "leaf": 0.113845222
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "cp",
          "split_condition": 4,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "ca",
              "split_condition": 1,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0379926972
                },
                {
                  "nodeid": 12,
                  "leaf": 0.105985418
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "oldpeak",
              "split_condition": 0.5,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0334056877
                },
                {
                  "nodeid": 14,
                  "leaf": 0.196680829
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "thal",
      "split_condition": 6,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "ca",
          "split_condition": 1,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "age",
              "split_condition": 58,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.145480528
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0593221262
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "cp",
              "split_condition": 4,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.062401522
                },
                {
                  "nodeid": 10,
                  "leaf": 0.10420078
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "cp",
          "split_condition": 4,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "thalach",
              "split_condition": 151,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": 0.0856239125
                },
                {
                  "nodeid": 12,
                  "leaf": -0.0475256108
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "oldpeak",
              "split_condition": 0.5,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0306725241
                },
                {
                  "nodeid": 14,
                  "leaf": 0.177145392
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "thal",
      "split_condition": 6,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "ca",
          "split_condition": 1,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "age",
              "split_condition": 59,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.132694244
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0476186052
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0757196173
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0821786448
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "oldpeak",
          "split_condition": 0.699999988,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "chol",
              "split_condition": 229,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0714279562
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0684442744
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "cp",
              "split_condition": 2,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": -0.0425254069
                },
                {
                  "nodeid": 14,
                  "leaf": 0.157269329
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "thal",
      "split_condition": 6,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "ca",
          "split_condition": 1,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "age",
              "split_condition": 58,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.127321228
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0495140217
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "cp",
              "split_condition": 4,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0570758246
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0934290513
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "cp",
          "split_condition": 4,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "ca",
              "split_condition": 1,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0378495306
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0885228366
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "oldpeak",
              "split_condition": 0.5,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0283165816
                },
                {
                  "nodeid": 14,
                  "leaf": 0.151205078
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "thal",
      "split_condition": 6,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "ca",
          "split_condition": 1,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "age",
              "split_condition": 58,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.120107725
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0455644876
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0693992749
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0737285092
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "ca",
          "split_condition": 1,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "age",
              "split_condition": 52,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": 0.104079857
                },
                {
                  "nodeid": 12,
                  "leaf": -0.0290262587
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "oldpeak",
              "split_condition": 0.300000012,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0478269011
                },
                {
                  "nodeid": 14,
                  "leaf": 0.142288312
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "thal",
      "split_condition": 6,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "cp",
          "split_condition": 4,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "ca",
              "split_condition": 2,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.104163565
                },
                {
                  "nodeid": 8,
                  "leaf": 0.00231507327
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "exang",
              "split_condition": 1,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0517321043
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0849391818
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "cp",
          "split_condition": 4,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "thalach",
              "split_condition": 151,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": 0.0677676052
                },
                {
                  "nodeid": 12,
                  "leaf": -0.048774939
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "oldpeak",
              "split_condition": 0.5,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0229876414
                },
                {
                  "nodeid": 14,
                  "leaf": 0.135334924
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "thal",
      "split_condition": 6,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "ca",
          "split_condition": 1,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "thalach",
              "split_condition": 162,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.0488194078
                },
                {
                  "nodeid": 8,
                  "leaf": -0.120354615
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "cp",
              "split_condition": 4,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0470054522
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0830077231
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "ca",
          "split_condition": 1,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "age",
              "split_condition": 52,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": 0.0926414579
                },
                {
                  "nodeid": 12,
                  "leaf": -0.0302192215
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "oldpeak",
              "split_condition": 0.300000012,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0440378711
                },
                {
                  "nodeid": 14,
                  "leaf": 0.128111482
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "cp",
      "split_condition": 4,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "thal",
          "split_condition": 6,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "age",
              "split_condition": 57,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.108255245
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0337147862
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "slope",
              "split_condition": 2,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0777314827
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0411865227
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "thal",
          "split_condition": 7,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "ca",
              "split_condition": 1,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0509478524
                },
                {
                  "nodeid": 12,
                  "leaf": 0.086496681
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "oldpeak",
              "split_condition": 0.5,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0291105341
                },
                {
                  "nodeid": 14,
                  "leaf": 0.130344182
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "cp",
      "split_condition": 4,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "slope",
          "split_condition": 2,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "ca",
              "split_condition": 2,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.0978736654
                },
                {
                  "nodeid": 8,
                  "leaf": 0.00934848655
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "ca",
              "split_condition": 1,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0466271751
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0786209032
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "ca",
          "split_condition": 1,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "thal",
              "split_condition": 7,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0471818149
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0768666491
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0256537348
                },
                {
                  "nodeid": 14,
                  "leaf": 0.119447567
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "thal",
      "split_condition": 7,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "ca",
          "split_condition": 1,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "chol",
              "split_condition": 273,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.0952231064
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0102979494
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0586744808
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0776442215
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "oldpeak",
          "split_condition": 0.699999988,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "trestbps",
              "split_condition": 122,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0750885233
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0387321897
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "cp",
              "split_condition": 2,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": -0.024827918
                },
                {
                  "nodeid": 14,
                  "leaf": 0.117011286
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "cp",
      "split_condition": 4,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "sex",
          "split_condition": 1,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "thalach",
              "split_condition": 173,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.10650631
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0183136147
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "age",
              "split_condition": 57,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0593494475
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0362077169
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "oldpeak",
          "split_condition": 0.699999988,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "ca",
              "split_condition": 1,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0337032638
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0514604449
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "trestbps",
              "split_condition": 117,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.00657231966
                },
                {
                  "nodeid": 14,
                  "leaf": 0.10852249
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "cp",
      "split_condition": 4,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "sex",
          "split_condition": 1,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "ca",
              "split_condition": 1,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.112827398
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0387585983
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "chol",
              "split_condition": 229,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0773980841
                },
                {
                  "nodeid": 10,
                  "leaf": 0.018571144
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "exang",
          "split_condition": 1,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "thal",
              "split_condition": 7,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0392617919
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0656134114
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "thalach",
              "split_condition": 163,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0992991626
                },
                {
                  "nodeid": 14,
                  "leaf": -0.0162930693
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "thal",
      "split_condition": 7,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "ca",
          "split_condition": 1,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "chol",
              "split_condition": 273,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.0869002491
                },
                {
                  "nodeid": 8,
                  "leaf": -0.00501260068
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0493298173
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0703278035
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "oldpeak",
          "split_condition": 0.699999988,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "trestbps",
              "split_condition": 122,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0723245367
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0341024362
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "cp",
              "split_condition": 2,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": -0.0202692524
                },
                {
                  "nodeid": 14,
                  "leaf": 0.106848076
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "cp",
      "split_condition": 4,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "slope",
          "split_condition": 2,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "thalach",
              "split_condition": 153,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.00884038117
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0911941156
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "chol",
              "split_condition": 212,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0868172795
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0260199644
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "oldpeak",
          "split_condition": 0.699999988,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "oldpeak",
              "split_condition": 0.300000012,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": 0.0235437695
                },
                {
                  "nodeid": 12,
                  "leaf": -0.0600769781
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "trestbps",
              "split_condition": 117,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.00233728369
                },
                {
                  "nodeid": 14,
                  "leaf": 0.0987742469
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "ca",
      "split_condition": 1,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "thal",
          "split_condition": 7,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "age",
              "split_condition": 58,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.088227421
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0141363591
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "slope",
              "split_condition": 2,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.044471845
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0574542768
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "slope",
          "split_condition": 2,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0765278786
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0428249836
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "oldpeak",
              "split_condition": 0.600000024,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": -0.000420952449
                },
                {
                  "nodeid": 14,
                  "leaf": 0.108444683
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "cp",
      "split_condition": 4,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "sex",
          "split_condition": 1,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "ca",
              "split_condition": 1,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.105118968
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0295532774
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "chol",
              "split_condition": 229,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0684040785
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0187664907
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "exang",
          "split_condition": 1,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "thal",
              "split_condition": 6,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0376531705
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0514062345
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "oldpeak",
              "split_condition": 0.699999988,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0183681585
                },
                {
                  "nodeid": 14,
                  "leaf": 0.101196073
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "ca",
      "split_condition": 1,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "thalach",
          "split_condition": 162,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.0467192866
                },
                {
                  "nodeid": 8,
                  "leaf": 0.0243648589
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "thal",
              "split_condition": 7,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0947640911
                },
                {
                  "nodeid": 10,
                  "leaf": -0.0179266129
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "slope",
          "split_condition": 2,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0711226165
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0392892212
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "oldpeak",
              "split_condition": 0.600000024,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": -0.000759113987
                },
                {
                  "nodeid": 14,
                  "leaf": 0.102657929
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "cp",
      "split_condition": 4,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "age",
          "split_condition": 57,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "thalach",
              "split_condition": 153,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": 0.0105755096
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0863877535
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "age",
              "split_condition": 60,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": 0.0679583177
                },
                {
                  "nodeid": 10,
                  "leaf": -0.0469277911
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "exang",
          "split_condition": 1,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "trestbps",
              "split_condition": 142,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0222857092
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0798845515
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "oldpeak",
              "split_condition": 0.699999988,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0173490476
                },
                {
                  "nodeid": 14,
                  "leaf": 0.0951212198
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "ca",
      "split_condition": 1,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "thalach",
          "split_condition": 162,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "trestbps",
              "split_condition": 117,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.0561831407
                },
                {
                  "nodeid": 8,
                  "leaf": 0.0187149569
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "thal",
              "split_condition": 7,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0901006982
                },
                {
                  "nodeid": 10,
                  "leaf": -0.0135063874
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "restecg",
          "split_condition": 1,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "age",
              "split_condition": 64,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": 0.0370749794
                },
                {
                  "nodeid": 12,
                  "leaf": -0.0754978806
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0173145812
                },
                {
                  "nodeid": 14,
                  "leaf": 0.0925003067
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "cp",
      "split_condition": 4,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "chol",
          "split_condition": 229,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "ca",
              "split_condition": 1,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.0929837972
                },
                {
                  "nodeid": 8,
                  "leaf": -0.00190087117
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "chol",
              "split_condition": 233,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": 0.125355557
                },
                {
                  "nodeid": 10,
                  "leaf": -0.0308481343
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "ca",
          "split_condition": 1,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "trestbps",
              "split_condition": 117,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.065381512
                },
                {
                  "nodeid": 12,
                  "leaf": 0.027191285
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.000868870702
                },
                {
                  "nodeid": 14,
                  "leaf": 0.0874055177
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "slope",
      "split_condition": 2,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "restecg",
          "split_condition": 1,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.100894712
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0410510711
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "age",
              "split_condition": 58,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0214904323
                },
                {
                  "nodeid": 10,
                  "leaf": 0.064015016
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "thal",
          "split_condition": 7,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "thalach",
              "split_condition": 114,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": 0.0871288553
                },
                {
                  "nodeid": 12,
                  "leaf": -0.0256461855
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "cp",
              "split_condition": 2,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.00106941618
                },
                {
                  "nodeid": 14,
                  "leaf": 0.0828455612
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "slope",
      "split_condition": 2,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "restecg",
          "split_condition": 1,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.0975476652
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0377338193
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "trestbps",
              "split_condition": 150,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0121217584
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0766778812
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "thal",
          "split_condition": 7,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "ca",
              "split_condition": 1,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0363557972
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0503172167
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "cp",
              "split_condition": 2,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0010025166
                },
                {
                  "nodeid": 14,
                  "leaf": 0.0784872547
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "cp",
      "split_condition": 4,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "age",
          "split_condition": 57,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "thalach",
              "split_condition": 153,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": 0.011465285
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0780868158
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "age",
              "split_condition": 60,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": 0.0634058118
                },
                {
                  "nodeid": 10,
                  "leaf": -0.0414244495
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "oldpeak",
          "split_condition": 0.699999988,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "thalach",
              "split_condition": 155,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0402698293
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0385583118
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "trestbps",
              "split_condition": 117,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": -0.0118669681
                },
                {
                  "nodeid": 14,
                  "leaf": 0.0817811191
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "ca",
      "split_condition": 1,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "chol",
          "split_condition": 229,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "age",
              "split_condition": 42,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": 0.0120197227
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0757704526
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "thalach",
              "split_condition": 133,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": 0.0909657553
                },
                {
                  "nodeid": 10,
                  "leaf": -0.0177798849
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "restecg",
          "split_condition": 1,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "age",
              "split_condition": 64,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": 0.0326421522
                },
                {
                  "nodeid": 12,
                  "leaf": -0.0728499591
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0125729842
                },
                {
                  "nodeid": 14,
                  "leaf": 0.0828977302
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "slope",
      "split_condition": 2,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "restecg",
          "split_condition": 1,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.0927048996
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0336224511
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "chol",
              "split_condition": 269,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0220604073
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0537585132
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "exang",
          "split_condition": 1,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0526116081
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0334632322
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "trestbps",
              "split_condition": 112,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": -0.0102652395
                },
                {
                  "nodeid": 14,
                  "leaf": 0.0931656361
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "cp",
      "split_condition": 4,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "age",
          "split_condition": 57,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "trestbps",
              "split_condition": 112,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": 0.0257214289
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0686464012
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "age",
              "split_condition": 60,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": 0.058505971
                },
                {
                  "nodeid": 10,
                  "leaf": -0.0367146544
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "exang",
          "split_condition": 1,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "trestbps",
              "split_condition": 142,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0202705301
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0701230839
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "oldpeak",
              "split_condition": 0.699999988,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0107833305
                },
                {
                  "nodeid": 14,
                  "leaf": 0.0836640522
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "thal",
      "split_condition": 7,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "age",
          "split_condition": 56,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "thalach",
              "split_condition": 157,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": 0.00684098294
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0882307887
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "thalach",
              "split_condition": 158,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0260109846
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0607568286
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "oldpeak",
          "split_condition": 0.699999988,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "trestbps",
              "split_condition": 122,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0649742559
                },
                {
                  "nodeid": 12,
                  "leaf": 0.027717201
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "cp",
              "split_condition": 2,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": -0.0141639579
                },
                {
                  "nodeid": 14,
                  "leaf": 0.0836289898
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "ca",
      "split_condition": 1,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "chol",
          "split_condition": 229,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "age",
              "split_condition": 42,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": 0.0160159729
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0722521469
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "thalach",
              "split_condition": 133,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": 0.0828748271
                },
                {
                  "nodeid": 10,
                  "leaf": -0.0148235932
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "restecg",
          "split_condition": 1,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "age",
              "split_condition": 64,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": 0.0318437777
                },
                {
                  "nodeid": 12,
                  "leaf": -0.0693254545
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.00942755211
                },
                {
                  "nodeid": 14,
                  "leaf": 0.0776017234
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "slope",
      "split_condition": 2,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "restecg",
          "split_condition": 1,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "thalach",
              "split_condition": 163,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.0215109419
                },
                {
                  "nodeid": 8,
                  "leaf": -0.0793124884
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "age",
              "split_condition": 58,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": -0.0176247992
                },
                {
                  "nodeid": 10,
                  "leaf": 0.0523398332
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "oldpeak",
          "split_condition": 0.699999988,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "thalach",
              "split_condition": 156,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0494492762
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0457913093
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "sex",
              "split_condition": 1,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": -0.00944399182
                },
                {
                  "nodeid": 14,
                  "leaf": 0.0692716166
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeid": 0,
      "depth": 0,
      "split": "cp",
      "split_condition": 4,
      "yes": 1,
      "no": 2,
      "missing": 2,
      "children": [
        {
          "nodeid": 1,
          "depth": 1,
          "split": "chol",
          "split_condition": 229,
          "yes": 3,
          "no": 4,
          "missing": 4,
          "children": [
            {
              "nodeid": 3,
              "depth": 2,
              "split": "ca",
              "split_condition": 1,
              "yes": 7,
              "no": 8,
              "missing": 8,
              "children": [
                {
                  "nodeid": 7,
                  "leaf": -0.0803571194
                },
                {
                  "nodeid": 8,
                  "leaf": -0.000902330328
                }
              ]
            },
            {
              "nodeid": 4,
              "depth": 2,
              "split": "chol",
              "split_condition": 233,
              "yes": 9,
              "no": 10,
              "missing": 10,
              "children": [
                {
                  "nodeid": 9,
                  "leaf": 0.112021267
                },
                {
                  "nodeid": 10,
                  "leaf": -0.0238158479
                }
              ]
            }
          ]
        },
        {
          "nodeid": 2,
          "depth": 1,
          "split": "ca",
          "split_condition": 1,
          "yes": 5,
          "no": 6,
          "missing": 6,
          "children": [
            {
              "nodeid": 5,
              "depth": 2,
              "split": "trestbps",
              "split_condition": 117,
              "yes": 11,
              "no": 12,
              "missing": 12,
              "children": [
                {
                  "nodeid": 11,
                  "leaf": -0.0563255511
                },
                {
                  "nodeid": 12,
                  "leaf": 0.0252671987
                }
              ]
            },
            {
              "nodeid": 6,
              "depth": 2,
              "split": "chol",
              "split_condition": 302,
              "yes": 13,
              "no": 14,
              "missing": 14,
              "children": [
                {
                  "nodeid": 13,
                  "leaf": 0.0728636682
                },
                {
                  "nodeid": 14,
                  "leaf": -0.0233630165
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "feature_names": [
    "age",
    "sex",
    "cp",
    "trestbps",
    "chol",
    "fbs",
    "restecg",
    "thalach",
    "exang",
    "oldpeak",
    "slope",
    "ca",
    "thal"
  ],
  "metrics": {
    "accuracy": 0.8852459016393442,
    "precision": 0.8620689655172413,
    "recall": 0.8928571428571429,
    "f1": 0.8771929824561403,
    "auc": 0.9415584415584415,
    "confusion_matrix": [
      [
        29,
        4
      ],
      [
        3,
        25
      ]
    ],
    "feature_importances": {
      "age": 0.04709884151816368,
      "sex": 0.04633114114403725,
      "cp": 0.13654248416423798,
      "trestbps": 0.033932410180568695,
      "chol": 0.05002955347299576,
      "fbs": 0.0,
      "restecg": 0.04021219536662102,
      "thalach": 0.041752271354198456,
      "exang": 0.05837618187069893,
      "oldpeak": 0.05691725015640259,
      "slope": 0.06304705888032913,
      "ca": 0.09368016570806503,
      "thal": 0.3320803642272949
    }
  },
  "roc_curve": [
    {
      "x": 0.0,
      "y": 0.0
    },
    {
      "x": 0.0,
      "y": 0.07142857142857142
    },
    {
      "x": 0.0,
      "y": 0.4642857142857143
    },
    {
      "x": 0.030303030303030304,
      "y": 0.4642857142857143
    },
    {
      "x": 0.030303030303030304,
      "y": 0.6428571428571429
    },
    {
      "x": 0.06060606060606061,
      "y": 0.6428571428571429
    },
    {
      "x": 0.06060606060606061,
      "y": 0.7142857142857143
    },
    {
      "x": 0.09090909090909091,
      "y": 0.7142857142857143
    },
    {
      "x": 0.09090909090909091,
      "y": 0.8571428571428571
    },
    {
      "x": 0.12121212121212122,
      "y": 0.8571428571428571
    },
    {
      "x": 0.12121212121212122,
      "y": 0.8928571428571429
    },
    {
      "x": 0.18181818181818182,
      "y": 0.8928571428571429
    },
    {
      "x": 0.18181818181818182,
      "y": 0.9285714285714286
    },
    {
      "x": 0.24242424242424243,
      "y": 0.9285714285714286
    },
    {
      "x": 0.24242424242424243,
      "y": 0.9642857142857143
    },
    {
      "x": 0.45454545454545453,
      "y": 0.9642857142857143
    },
    {
      "x": 0.45454545454545453,
      "y": 1.0
    },
    {
      "x": 1.0,
      "y": 1.0
    }
  ]
};
