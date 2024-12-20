import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import RegionList from "./components/regionsList.tsx";
import StationDetails from "./components/stationDetails.tsx";
import StationInfo from "./components/stationInfo.tsx";
import LoadingError from "./components/loadingError.tsx";
import axios from "axios";

function App() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<any>(null);
  const [selectedStation, setSelectedStation] = useState<any>(null);

  const dataUrl = "http://localhost:5000/stations";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(dataUrl);

        setData(data.data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <LoadingError message={error} />;
  if (!data)
    return (
      <Typography variant="h4" color="#FFF">
        Loading...
      </Typography>
    );

  return (
    <div className="App">
      <header className="App-header">
        {!selectedRegion && !selectedStation && <RegionList data={data} onSelectRegion={setSelectedRegion} />}
        {selectedRegion && !selectedStation && <StationDetails region={selectedRegion} onBack={() => setSelectedRegion(null)} onSelectStation={setSelectedStation} />}
        {selectedStation && <StationInfo station={selectedStation} onBack={() => setSelectedStation(null)} />}
      </header>
    </div>
  );
}

export default App;
