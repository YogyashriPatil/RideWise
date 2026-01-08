import sys
import json
import numpy as np
import os
import joblib
import pandas as pd

if len(sys.argv) < 3:
    print(json.dumps({ "error": "Missing arguments" }))
    sys.exit(1)

input_data = json.loads(sys.argv[2])

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "day_bike_demand_model.pkl")

model = joblib.load(MODEL_PATH)

# Get expected feature names from model
feature_names = list(model.feature_names_in_)

# Build DataFrame safely
row = {}
for name in feature_names:
    if name not in input_data:
        print(json.dumps({ "error": f"Missing feature: {name}" }))
        sys.exit(1)
    row[name] = input_data[name]

X = pd.DataFrame([row], columns=feature_names)

prediction = model.predict(X)[0]

print(json.dumps({
    "model": "day",
    "prediction": int(round(prediction))
}))
