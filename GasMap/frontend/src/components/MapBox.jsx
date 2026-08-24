import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
import 'react-leaflet-markercluster/styles'
// import StationMarker from "./StationMarker";

function MapInteractionHandler() {
  const map = useMapEvents({
    zoomstart() {
      map.dragging.disable();
    },

    zoomend() {
      map.dragging.enable();
    },
  });

  return null;
}

export default function MapBox({ coords, stationsData }) {
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

      <MapInteractionHandler />

      <MarkerClusterGroup>
        {stationsData.map((station) => (
          <Marker position={station.coords}>
            <Popup>{station.name}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

      {/* <StationMarker coords={coords} /> */}
    </MapContainer>
  );
}
