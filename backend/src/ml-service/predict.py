import sys
import pickle
import json
import numpy as np

model_type = sys.argv[1]   # "day" or "hour"
input_data = json.loads(sys.argv[2])

# Load model
if model_type == "day":
    model = pickle.load(open("ml/day_model.pkl", "rb"))
else:
    model = pickle.load(open("ml/hour_model.pkl", "rb"))

features = np.array([input_data["features"]])
prediction = model.predict(features)

print(json.dumps({
    "prediction": int(prediction[0])
}))
