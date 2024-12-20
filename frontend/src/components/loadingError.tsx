import React from "react";
import { Typography } from "@mui/material";

interface LoadingErrorProps {
  message: string;
}

const LoadingError: React.FC<LoadingErrorProps> = ({ message }) => {
  return <Typography color="error">Error: {message}</Typography>;
};

export default LoadingError;
