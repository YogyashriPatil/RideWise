import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { stations } from "../data/stations";

const center = { lat: 20.5937, lng: 78.9629 }; // India

export default function StationMap({ onSelect }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div className="h-full flex items-center justify-center">Loading map...</div>;
  }

  return (
    <GoogleMap
      zoom={5}
      center={center}
      mapContainerClassName="w-full h-full rounded-2xl"
      options={{
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#0b1220" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#9ca3af" }] },
        ],
      }}
    >
      {stations.map((s) => (
        <Marker
          key={s.id}
          position={{ lat: s.lat, lng: s.lng }}
          icon={{
            url:
              s.demand === "high"
                ? "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                : s.demand === "medium"
                ? "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
                : "http://maps.google.com/mapfiles/ms/icons/cyan-dot.png",
          }}
          onClick={() => onSelect(s)}
        />
      ))}
    </GoogleMap>
  );
}
