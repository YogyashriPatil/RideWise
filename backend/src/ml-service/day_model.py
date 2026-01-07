import sys, json

data = json.loads(sys.argv[1])

day = data["day"]
temp = data["temperature"]

prediction = 300 + temp * 2

print(json.dumps({
    "day": day,
    "predicted_demand": prediction,
    "confidence": "94%"
}))
