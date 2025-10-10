// src/components/Dashboard.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import Charts from "./Charts";

// Mock data
const initialAlerts = [
  { room: "Room 101", severity: "High", temperature: 90 },
  { room: "Room 102", severity: "Medium", temperature: 80 },
  { room: "Room 103", severity: "Low", temperature: 75 },
  { room: "Room 104", severity: "Medium", temperature: 82 },
  { room: "Room 105", severity: "High", temperature: 95 },
];

const floors = [
  { name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103"] },
  { name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203"] },
  { name: "Floor 3", rooms: ["Room 301", "Room 302", "Room 303"] },
];

const teamNotifications = [
  "Alice in Room 101",
  "Bob in Room 201",
  "Charlie in Room 302",
  "David in Room 103",
];

const Dashboard = () => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [floorRooms, setFloorRooms] = useState(floors);

  // Rotate top 5 high alert rooms every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts((prev) => {
        const rotated = [...prev];
        rotated.unshift(rotated.pop());
        return rotated;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "High":
        return "#ff4d4f";
      case "Medium":
        return "#faad14";
      case "Low":
        return "#52c41a";
      default:
        return "#fff";
    }
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 3, color: "#fff" }}
      >
        🔥 Smart Fire Alarm Dashboard 🔥 
      </Typography>

      <Box
        className="dashboard-container"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(2, auto)",
          gap: "20px",
        }}
      >
        {/* Active Alerts */}
        <Card
          className="dashboard-card"
          sx={{ background: "linear-gradient(135deg, #ff4d4f, #ff7875)" }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Active Alerts
            </Typography>
            {alerts.slice(0, 5).map((alert, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "6px",
                  borderRadius: "6px",
                  backgroundColor: getSeverityColor(alert.severity),
                  marginBottom: "6px",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                <span>{alert.room}</span>
                <span>{alert.temperature}°C</span>
              </Box>
            ))}
          </CardContent>
        </Card>

        {/* Floor Map */}
        <Card
          className="dashboard-card"
          sx={{ background: "linear-gradient(135deg, #40a9ff, #69c0ff)" }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Floor Map
            </Typography>
            {floorRooms.map((floor, fIndex) => (
              <Box key={fIndex} sx={{ marginBottom: "10px" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {floor.name}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px", mt: 1 }}>
                  {floor.rooms.map((room, rIndex) => (
                    <Button
                      key={rIndex}
                      variant="contained"
                      sx={{ fontSize: "12px" }}
                      onClick={() =>
                        alert(`${room}: Temp ${70 + rIndex * 5}°C, High Alert`)
                      }
                    >
                      {room}
                    </Button>
                  ))}
                </Box>
              </Box>
            ))}
          </CardContent>
        </Card>

        {/* Team Notifications */}
        <Card
          className="dashboard-card"
          sx={{ background: "linear-gradient(135deg, #73d13d, #95de64)" }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Team Notifications
            </Typography>
            {teamNotifications.map((note, index) => (
              <Box
                key={index}
                sx={{
                  padding: "6px",
                  marginBottom: "6px",
                  borderRadius: "6px",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                {note}
              </Box>
            ))}
          </CardContent>
        </Card>

        {/* Temperature / Alert Trends */}
        <Card
          className="dashboard-card"
          sx={{ background: "linear-gradient(135deg, #9254de, #b37feb)" }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Temperature / Alert Trends
            </Typography>
            <Charts />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;