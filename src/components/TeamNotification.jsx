import React from "react";
import { Box, Typography } from "@mui/material";

const notifications = [
  "Team A dispatched to Floor 1",
  "Sprinkler activated in Room 202",
  "Temperature rising in Room 303",
  "Team B en route to Floor 3",
];

export default function TeamNotification() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {notifications.map((note, idx) => (
        <Box key={idx} sx={{ backgroundColor: "#fff", color: "#333", borderRadius: 2, p: 1 }}>
          <Typography>{note}</Typography>
        </Box>
      ))}
    </Box>
  );
}