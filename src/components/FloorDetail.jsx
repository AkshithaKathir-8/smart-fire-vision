import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

// Dummy room data per floor
const rooms = {
  1: [{ name: "Room 101", temp: 95, time: "12:30 PM", severity: "High" }, { name: "Room 102", temp: 80, time: "12:32 PM", severity: "Medium" }],
  2: [{ name: "Room 201", temp: 85, time: "12:40 PM", severity: "Medium" }, { name: "Room 202", temp: 92, time: "12:45 PM", severity: "High" }],
  3: [{ name: "Room 301", temp: 70, time: "12:50 PM", severity: "Low" }, { name: "Room 302", temp: 88, time: "12:55 PM", severity: "Medium" }],
};

export default function FloorDetail() {
  const { floorId } = useParams();
  const navigate = useNavigate();
  const floorRooms = rooms[floorId] || [];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Floor {floorId} Rooms</Typography>
      {floorRooms.map((room, index) => (
        <Box key={index} sx={{ mb: 2, p: 2, backgroundColor: room.severity === "High" ? "#ff4d4f" : room.severity === "Medium" ? "#ffa940" : "#69c0ff", borderRadius: 2 }}>
          <Typography><b>{room.name}</b></Typography>
          <Typography>Temperature: {room.temp}°C</Typography>
          <Typography>Time: {room.time}</Typography>
          <Typography>Severity: {room.severity}</Typography>
        </Box>
      ))}
      <Button variant="contained" onClick={() => navigate(-1)}>Back</Button>
    </Box>
  );
}