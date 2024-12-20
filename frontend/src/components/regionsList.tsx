import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from "@mui/material";

type RegionT = {
  region_name: string;
  stations: Array<any>;
};

interface RegionListProps {
  data: RegionT[];
  onSelectRegion: (region: any) => void;
}

const RegionList: React.FC<RegionListProps> = ({ data, onSelectRegion }) => {
  return (
    <div style={{ maxWidth: 700, margin: "auto", textAlign: "center" }}>
      <Typography variant="h4" color="#FFF" mt={2} mb={2}>
        Select a region to find your nearest station
      </Typography>
      <TableContainer component={Paper} style={{ maxWidth: "100%", maxHeight: 600, margin: "auto" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center">Region</TableCell>
              <TableCell align="center">Stations Available</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((region, index) => (
              <TableRow key={index} sx={{ cursor: "pointer" }} onClick={() => onSelectRegion(region)}>
                <TableCell align="center">{region.region_name}</TableCell>
                <TableCell align="center">{region.stations.length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RegionList;
