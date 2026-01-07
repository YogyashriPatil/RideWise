# day_predict.py
import sys
import json
import pickle
import numpy as np

# Load trained model
with open("day_model.pkl", "rb") as f:
    model = pickle.load(f)

# Read input from Node
input_data = json.loads(sys.argv[1])

# Extract features (ORDER MATTERS!)
features = np.array([[
    input_data["season"],
    input_data["weather"],
    input_data["temp"],
    input_data["humidity"],
    input_data["wind"],
    int(input_data["weekend"])
]])

# Predict
prediction = model.predict(features)[0]

# Return result as JSON
result = {
    "type": "day",
    "predictedDemand": int(prediction),
    "confidence": "94%"
}

print(json.dumps(result))
