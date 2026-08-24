import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMapEvents,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/styles";
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

export default function MapBox({ coords, stationsData, filter }) {
  const filteredStations = stationsData.filter((station) => {
  const brandMatches =
    filter[1] === null || station.brand === filter[1];

  const paymentMatches =
    filter[2].length === 0 ||
    filter[2].every((method) =>
        station.paymentMethods.includes(method)
    );

  return brandMatches && paymentMatches;
})

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

      <MarkerClusterGroup key={filter[0]}>
        {filteredStations.map((station) => (
          <Marker key={station.id} position={station.coords}>
            {filter[0] !== null && (
              <Tooltip permanent={filter[0] !== null}>
                {filter[0] !== null && station.prices[filter[0] - 1]?.price}
              </Tooltip>
            )}
          </Marker>
        ))}
      </MarkerClusterGroup>

      {/* <StationMarker coords={coords} /> */}
    </MapContainer>
  );
}
