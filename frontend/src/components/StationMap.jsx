import { useEffect, useRef } from "react";

export default function StationMap({ onSelect }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 20.5937, lng: 78.9629 }, // India
      zoom: 5,
      styles: darkMapStyle, // optional
    });

    const stations = [
      { name: "Delhi", lat: 28.6139, lng: 77.209 },
      { name: "Mumbai", lat: 19.076, lng: 72.8777 },
      { name: "Bengaluru", lat: 12.9716, lng: 77.5946 },
    ];

    stations.forEach((s) => {
      const marker = new window.google.maps.Marker({
        position: { lat: s.lat, lng: s.lng },
        map,
      });

      marker.addListener("click", () => {
        onSelect?.(s);
      });
    });
  }, []);

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
