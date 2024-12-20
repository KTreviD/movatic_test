import React from "react";
import { Typography, Button, Paper, IconButton } from "@mui/material";
import StationMap from "./stationMap.tsx";
import { Apple, Android } from "@mui/icons-material";

interface StationInfoProps {
  station: any;
  onBack: () => void;
}

const StationInfo: React.FC<StationInfoProps> = ({ station, onBack }) => (
  <div style={{ maxWidth: 600, margin: "auto", textAlign: "center" }}>
    <Typography color="#FFF" variant="h4" mt={2} mb={2}>
      Station: {station.name}
    </Typography>
    <Paper style={{ padding: 20, maxWidth: 600, margin: "auto", textAlign: "center" }}>
      <Typography>Address: {station.address}</Typography>
      <Typography>Available Bikes: {station.num_bikes_available}</Typography>
      <Typography>Available Docks: {station.num_docks_available}</Typography>
      <Typography>Status: {station.is_renting ? "Renting" : "Not Renting"}</Typography>

      <StationMap lat={station.lat} lon={station.lon} name={station.name} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
        {/* Center the button */}
        <Button variant="contained" color="primary" onClick={onBack}>
          Back to Station List
        </Button>

        {/* Icons container aligned to the right */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {station.rental_uris?.ios && (
            <IconButton href={station.rental_uris.ios} target="_blank" color="primary">
              <Apple />
            </IconButton>
          )}
          {station.rental_uris?.android && (
            <IconButton href={station.rental_uris.android} target="_blank" color="primary">
              <Android />
            </IconButton>
          )}
        </div>
      </div>
    </Paper>
  </div>
);

export default StationInfo;
