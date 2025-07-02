import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

function RecenterMap({ position }) {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [position, map]);
  return null;
}

export default function Map({ position }) {
  return (
    <section className="w-full h-[70svh]">
      <MapContainer center={position} zoom={12} className="h-full w-full">
        <RecenterMap position={position} />
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Your Location</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
