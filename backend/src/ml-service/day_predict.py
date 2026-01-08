import sys
import json
import os
import joblib
import pandas as pd

# -----------------------------
# ARGUMENT CHECK
# -----------------------------
if len(sys.argv) < 3:
    print(json.dumps({ "error": "Missing arguments" }))
    sys.exit(1)

input_data = json.loads(sys.argv[2])

# -----------------------------
# LOAD MODEL
# -----------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "day_bike_demand_model.pkl")

model = joblib.load(MODEL_PATH)

# -----------------------------
# MAP INPUT → MODEL FEATURES
# -----------------------------
row = {
    "season": input_data["season"],

    # yr: model expects 0 or 1 (2011 / 2012)
    "yr": 1 if input_data["year"] >= 2012 else 0,

    # mnth: 1–12
    "mnth": input_data["month"],

    "holiday": input_data["holiday"],

    # weekday: 0 (Sunday) – 6 (Saturday)
    "weekday": input_data["dayofweek"],

    "workingday": input_data["workingday"],

    # weathersit: 1=Clear, 2=Cloudy, 3=Rain
    "weathersit": input_data["weather"] + 1,

    "temp": input_data["temp"],
    "atemp": input_data["atemp"],

    # hum is 0–1 in original dataset
    "hum": input_data["humidity"] / 100,

    # windspeed is 0–1 in original dataset
    "windspeed": input_data["windspeed"] / 67,

    # THESE TWO ARE REQUIRED BY MODEL
    # If you don't predict them separately, set safe defaults
    "casual": 0,
    "registered": 0
}

# -----------------------------
# CREATE DATAFRAME IN EXACT ORDER
# -----------------------------
feature_order = model.feature_names_in_
X = pd.DataFrame([[row[f] for f in feature_order]], columns=feature_order)

# -----------------------------
# PREDICT
# -----------------------------
prediction = model.predict(X)[0]

# -----------------------------
# OUTPUT
# -----------------------------
print(json.dumps({
    "model": "day",
    "prediction": int(round(prediction))
}))
