import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { stations } from "../data/stations";
import "leaflet/dist/leaflet.css";
import { CircleMarker } from "react-leaflet";
// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function StationMap({ onSelectStation }) {
  
return (
    <div className="w-full h-full rounded-2xl overflow-hidden">
      <MapContainer
        center={[22.9734, 78.6569]}
        zoom={5}
        className="w-full h-full"
      >
        {/* Dark realistic map */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png"
        />

        {stations.map((s) => (
          <CircleMarker
            key={s.id}
            center={[s.lat, s.lng]}
            radius={9}
            pathOptions={{
              color:
                s.demand === "High"
                  ? "#f43f5e"
                  : s.demand === "Medium"
                  ? "#a855f7"
                  : "#22c55e",
              fillColor:
                s.demand === "High"
                  ? "#f43f5e"
                  : s.demand === "Medium"
                  ? "#a855f7"
                  : "#22c55e",
              fillOpacity: 0.9,
            }}
            eventHandlers={{
              click: () => onSelectStation(s),
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
}
