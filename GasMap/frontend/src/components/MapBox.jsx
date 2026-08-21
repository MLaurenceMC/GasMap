import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import StationMarker from "./StationMarker";

export default function MapBox({ coords }) {
  return (
    <MapContainer
      center={coords}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* <StationMarker coords={coords} /> */}
    </MapContainer>
  );
}
