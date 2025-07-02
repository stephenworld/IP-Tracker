import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function Map() {
  const position = [51.505, -0.09];
  return (
    <section className="h-7/10 w-full">
      <section
        className="w-full h-full"
        style={{ height: "70svh", width: "100%" }}
      >
        <MapContainer center={position} zoom={13} className="h-full w-full -z-10">
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Here</Popup>
          </Marker>
        </MapContainer>
      </section>
    </section>
  );
}
