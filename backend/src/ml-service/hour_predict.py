import sys
import json
import os
import math
import joblib
import pandas as pd
from datetime import datetime

# =====================================================
# ARGUMENT CHECK (Node.js → Python safe)
# =====================================================
if len(sys.argv) < 2:
    print(json.dumps({"error": "Missing arguments"}))
    sys.exit(1)

try:
    raw_input = json.loads(sys.argv[1])
except Exception as e:
    print(json.dumps({"error": "Invalid JSON input"}))
    sys.exit(1)

# =====================================================
# NORMALIZE FRONTEND INPUT
# =====================================================
date_obj = datetime.strptime(raw_input["date"], "%Y-%m-%d")

input_data = {
    "year": date_obj.year,
    "month": date_obj.month,
    "day": date_obj.day,
    "dayofweek": date_obj.weekday(),   # 0=Mon, 6=Sun
    "hour": int(raw_input.get("hour", 12)),

    "season": int(raw_input.get("season", 1)),
    "holiday": int(raw_input.get("holiday", 0)),
    "workingday": 0 if int(raw_input.get("holiday", 0)) == 1 else 1,

    "weather": int(raw_input.get("weathersit", 1)) - 1,

    "temp": float(raw_input.get("temperature")),
    "atemp": float(raw_input.get("atemp")),
    "humidity": float(raw_input.get("humidity")),
    "windspeed": float(raw_input.get("windspeed")),
}

# =====================================================
# LOAD MODEL
# =====================================================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "hour_bike_demand_model.pkl")

model = joblib.load(MODEL_PATH)

# =====================================================
# DATE FEATURES
# =====================================================
weekofyear = date_obj.isocalendar()[1]
dayofyear = date_obj.timetuple().tm_yday

# =====================================================
# TIME FEATURES
# =====================================================
hr = input_data["hour"]

hr_sin = math.sin(2 * math.pi * hr / 24)
hr_cos = math.cos(2 * math.pi * hr / 24)

mnth_sin = math.sin(2 * math.pi * input_data["month"] / 12)
mnth_cos = math.cos(2 * math.pi * input_data["month"] / 12)

# =====================================================
# FLAGS
# =====================================================
is_weekend = 1 if input_data["dayofweek"] >= 5 else 0
is_rush_hour = 1 if hr in [7, 8, 9, 16, 17, 18] else 0
is_night = 1 if hr <= 5 or hr >= 22 else 0
work_rush = 1 if input_data["workingday"] == 1 and is_rush_hour else 0

# =====================================================
# WEATHER & TEMP FEATURES
# =====================================================
temp = input_data["temp"]
atemp = input_data["atemp"]
hum = input_data["humidity"] / 100
windspeed = input_data["windspeed"] / 67

temp_diff = temp - atemp
temp_hum = temp * hum
temp_wind = temp * windspeed

weather_severity = input_data["weather"] + 1
comfort_index = (temp + atemp) / 2 * (1 - hum)

# =====================================================
# HOLIDAY FEATURES
# =====================================================
pre_holiday = 0
post_holiday = 0

# =====================================================
# CHANGE FEATURES (NO HISTORY)
# =====================================================
temp_change = 0
hum_change = 0

# =====================================================
# LAG & ROLLING FEATURES (SAFE DEFAULTS)
# =====================================================
cnt_lag_1 = 0
cnt_lag_24 = 0
cnt_lag_168 = 0

cnt_roll_7 = 0
cnt_roll_24 = 0
cnt_roll_168 = 0

cnt_trend = 0
cnt_zscore = 0

# =====================================================
# HOUR BUCKET
# =====================================================
if hr < 6:
    hour_bucket = 0
elif hr < 12:
    hour_bucket = 1
elif hr < 18:
    hour_bucket = 2
else:
    hour_bucket = 3

# =====================================================
# FEATURE ROW (MATCHES TRAINING)
# =====================================================
row = {
    "season": input_data["season"],
    "yr": 1 if input_data["year"] >= 2012 else 0,
    "holiday": input_data["holiday"],
    "workingday": input_data["workingday"],
    "weathersit": input_data["weather"] + 1,
    "temp": temp,
    "atemp": atemp,
    "hum": hum,
    "windspeed": windspeed,
    "hr": hr,
    "dayofweek": input_data["dayofweek"],
    "weekofyear": weekofyear,
    "dayofyear": dayofyear,
    "is_weekend": is_weekend,
    "is_rush_hour": is_rush_hour,
    "is_night": is_night,
    "temp_diff": temp_diff,
    "temp_hum": temp_hum,
    "temp_wind": temp_wind,
    "hr_sin": hr_sin,
    "hr_cos": hr_cos,
    "mnth_sin": mnth_sin,
    "mnth_cos": mnth_cos,
    "cnt_lag_1": cnt_lag_1,
    "cnt_lag_24": cnt_lag_24,
    "cnt_lag_168": cnt_lag_168,
    "cnt_roll_7": cnt_roll_7,
    "cnt_roll_24": cnt_roll_24,
    "cnt_roll_168": cnt_roll_168,
    "cnt_trend": cnt_trend,
    "weather_severity": weather_severity,
    "comfort_index": comfort_index,
    "temp_change": temp_change,
    "hum_change": hum_change,
    "pre_holiday": pre_holiday,
    "post_holiday": post_holiday,
    "work_rush": work_rush,
    "cnt_zscore": cnt_zscore,
    "hour_bucket": hour_bucket
}

# =====================================================
# DATAFRAME (EXACT FEATURE ORDER)
# =====================================================
feature_order = model.feature_names_in_
X = pd.DataFrame([[row[f] for f in feature_order]], columns=feature_order)

# =====================================================
# PREDICT
# =====================================================
prediction = model.predict(X)[0]

# =====================================================
# OUTPUT
# =====================================================
print(json.dumps({
    "model": "hour",
    "hour": hr,
    "prediction": int(round(prediction))
}))
