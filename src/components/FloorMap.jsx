import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";

const FloorMap = () => {
  // Define floors and rooms
  const floors = {
    "Floor 1": ["Room 101", "Room 102", "Room 103", "Room 104"],
    "Floor 2": ["Room 201", "Room 202", "Room 203", "Room 204"],
    "Floor 3": ["Room 301", "Room 302", "Room 303", "Room 304"],
  };

  const [selectedRoomInfo, setSelectedRoomInfo] = useState("");

  // Click handler for rooms
  const handleRoomClick = (floor, room) => {
    const temp = Math.floor(Math.random() * 30) + 70; // random temp 70-100°C
    const severity =
      temp > 90 ? "High" : temp > 80 ? "Medium" : "Low";
    const time = new Date().toLocaleTimeString();
    setSelectedRoomInfo(
      `${room} on ${floor} - Temp: ${temp}°C, Severity: ${severity}, Time: ${time}`
    );
  };

  return (
    <Card className="dashboard-card card-floor">
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
          Floor Map
        </Typography>
        {Object.keys(floors).map((floor) => (
          <div key={floor} style={{ marginBottom: "15px" }}>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
              {floor}
            </Typography>
            <Grid container spacing={1}>
              {floors[floor].map((room) => (
                <Grid item xs={3} key={room}>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={() => handleRoomClick(floor, room)}
                  >
                    {room}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}

        {selectedRoomInfo && (
          <div
            style={{
              marginTop: "15px",
              padding: "10px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.1)",
              textAlign: "center",
              color: "#fff",
            }}
          >
            {selectedRoomInfo}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FloorMap;