import sys
import pickle
import json
import numpy as np
import os

# -----------------------------
# SAFETY CHECK
# -----------------------------
if len(sys.argv) < 3:
    print(json.dumps({ "error": "Missing arguments from Node.js" }))
    sys.exit(1)

model_type = sys.argv[1]
input_data = json.loads(sys.argv[2])

# -----------------------------
# GET ABSOLUTE PATH
# -----------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MODEL_PATH = os.path.join(
    BASE_DIR,
    "day_bike_demand_model.pkl"
)

# -----------------------------
# LOAD MODEL
# -----------------------------
if model_type != "day":
    print(json.dumps({ "error": "Invalid model type" }))
    sys.exit(1)

with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)

# -----------------------------
# EXTRACT FEATURES
# -----------------------------
features = np.array([input_data["features"]], dtype=float)

# -----------------------------
# PREDICT
# -----------------------------
prediction = model.predict(features)[0]

# -----------------------------
# RETURN JSON ONLY
# -----------------------------
print(json.dumps({
    "model": "day",
    "prediction": int(round(prediction))
}))
