import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Typography } from "@mui/material";

interface StationDetailsProps {
  region: any;
  onBack: () => void;
  onSelectStation: (station: any) => void;
}

const StationDetails: React.FC<StationDetailsProps> = ({ region, onBack, onSelectStation }) => (
  <div style={{ maxWidth: 600, margin: "auto", textAlign: "center" }}>
    <Typography color="#FFF" variant="h4" mt={2} mb={2}>
      {region.region_name} - Stations
    </Typography>
    <TableContainer component={Paper} sx={{ maxWidth: "100%", maxHeight: 560 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">Station</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {region.stations.map((station: any, index: number) => (
            <TableRow sx={{ height: 20, cursor: "pointer" }} key={index} onClick={() => onSelectStation(station)}>
              <TableCell align="center">{station.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={onBack}>
      Back to Regions
    </Button>
  </div>
);

export default StationDetails;
