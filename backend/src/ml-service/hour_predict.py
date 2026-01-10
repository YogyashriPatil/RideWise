import pickle
import json
import sys
import pandas as pd
from feature_builder import build_features

FEATURE_ORDER = [
 'season','yr','holiday','workingday','weathersit',
 'temp','atemp','hum','windspeed','hr','dayofweek',
 'weekofyear','dayofyear','is_weekend','is_rush_hour',
 'is_night','temp_diff','temp_hum','temp_wind',
 'hr_sin','hr_cos','mnth_sin','mnth_cos',
 'cnt_lag_1','cnt_lag_24','cnt_lag_168',
 'cnt_roll_7','cnt_roll_24','cnt_roll_168',
 'cnt_trend','weather_severity','comfort_index',
 'temp_change','hum_change','pre_holiday',
 'post_holiday','work_rush','cnt_zscore','hour_bucket'
]

with open("hourly_model.pkl","rb") as f:
    model = pickle.load(f)

input_data = json.loads(sys.argv[1])

history_df = pd.read_csv("hour.csv")

results = []

for hr in range(24):
    feats = build_features(input_data, history_df, hr)
    X = pd.DataFrame([[feats[f] for f in FEATURE_ORDER]])
    pred = model.predict(X)[0]
    results.append({
        "hour": f"{hr:02d}:00",
        "value": round(float(pred),2)
    })

print(json.dumps(results))
