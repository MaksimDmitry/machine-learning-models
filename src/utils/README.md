"""
machine-learning-models
======================

A collection of machine learning models for various tasks.

Installation
------------

To get started with this project, you need to have Python installed on your system.
Then, create a new virtual environment and install the required packages using pip:
```bash
pip install -r requirements.txt
```
Usage
-----

To use this project, simply clone the repository and navigate to the project directory:
```bash
git clone https://github.com/your-username/machine-learning-models.git
cd machine-learning-models
```
Then, you can run the models using the following commands:
```bash
python train.py
python models/classification.py
python models/regression.py
```
Models
------

The project includes the following machine learning models:

*   Classification: `classification.py`
*   Regression: `regression.py`

Requirements
------------

*   Python 3.8+
*   TensorFlow 2.4+
*   scikit-learn 1.0+
*   pandas 1.3+

Author
------

This project was created by [Your Name](https://github.com/your-username).
"""

import sys
import os
import subprocess
import logging

try:
    from tensorflow import __version__ as tensorflow_version
    from sklearn import __version__ as sklearn_version
    from pandas import __version__ as pandas_version
except ImportError as e:
    print(f"Error: {e}")
    sys.exit(1)

if not (float(tensorflow_version.split('.')[0]) >= 2 and float(tensorflow_version.split('.')[1]) >= 4):
    print("Error: TensorFlow 2.4+ is required.")
    sys.exit(1)

if not float(sklearn_version.split('.')[0]) >= 1 and not float(sklearn_version.split('.')[1]) >= 0:
    print("Error: scikit-learn 1.0+ is required.")
    sys.exit(1)

if not float(pandas_version.split('.')[0]) >= 1 and not float(pandas_version.split('.')[1]) >= 3:
    print("Error: pandas 1.3+ is required.")
    sys.exit(1)