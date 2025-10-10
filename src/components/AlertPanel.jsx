import React from "react";
import { Typography } from "@mui/material";

const AlertPanel = ({ alerts }) => {
  return (
    <div>
      <Typography variant="h5">Active Alerts</Typography>
      {alerts.slice(0,5).map((alert, index) => (
        <p key={index}>{alert.room}: {alert.severity}</p>
      ))}
    </div>
  );
};

export default AlertPanel;