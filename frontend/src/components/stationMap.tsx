import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const DefaultIcon = L.icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface StationMapProps {
  lat: number;
  lon: number;
  name: string;
}

const StationMap: React.FC<StationMapProps> = ({ lat, lon, name }) => {
  return (
    <MapContainer center={[lat, lon]} zoom={16} style={{ height: "400px", width: "100%", margin: "auto" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
      <Marker position={[lat, lon]}>
        <Popup>
          <b>{name}</b>
          <br />
          Coordinates: {lat}, {lon}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default StationMap;
