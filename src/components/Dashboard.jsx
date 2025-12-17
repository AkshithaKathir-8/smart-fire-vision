import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import Charts from "./Charts";

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

  const gradients = [
    "linear-gradient(135deg, #00f0ff 0%, #3b82f6 50%, #9254de 100%)",
    "linear-gradient(135deg, #00f0ff 0%, #3b82f6 50%, #9254de 100%)",
    "linear-gradient(135deg, #00f0ff 0%, #3b82f6 50%, #9254de 100%)",
    "linear-gradient(135deg, #00f0ff 0%, #3b82f6 50%, #9254de 100%)",
  ];

  return (
<Box
  sx={{
    padding: "40px",
    background: "radial-gradient(circle at center, #f4c2d7 0%, #cbb7ff 45%,  #7b5cff 15%,)",
    minHeight: "100vh",
  }}
>
     {/* Dashboard Title */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 4,
          color: "#111827",
        }}
      >
        🔥 Smart Fire Alarm Dashboard 🔥
      </Typography>

      {/* Grid Container */}
      <Box
        className="dashboard-container"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Active Alerts */}
        <Card
          className="dashboard-card"
          sx={{
            background: gradients[0],
            height: "365px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.4rem", mb: 2, color: "#fff" }}
          >
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
                marginBottom: "6px",
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: getSeverityColor(alert.severity),
              }}
            >
              <span>{alert.room}</span>
              <span>{alert.temperature}°C</span>
            </Box>
          ))}
        </Card>

        {/* Floor Map */}
        <Card
          className="dashboard-card"
          sx={{
            background: gradients[1],
            height: "365px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.4rem", mb: 2, color: "#fff" }}
          >
            Floor Map
          </Typography>
          {floorRooms.map((floor, fIndex) => (
            <Box key={fIndex} sx={{ mb: 1 }}>
              <Typography sx={{ fontWeight: "bold", color: "#fff" }}>{floor.name}</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                {floor.rooms.map((room, rIndex) => (
                  <Button
                    key={rIndex}
                    sx={{
                      fontSize: "12px",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      color: "#fff",
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
                    }}
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
        </Card>

        {/* Team Notifications */}
        <Card
          className="dashboard-card"
          sx={{
            background: gradients[2],
            height: "365px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.4rem", mb: 2, color: "#fff" }}
          >
            Team Notifications
          </Typography>
          {teamNotifications.map((note, index) => (
            <Box
              key={index}
              sx={{
                padding: "6px",
                borderRadius: "6px",
                backgroundColor: "rgba(255,255,255,0.2)",
                fontWeight: "bold",
                color: "#fff",
                marginBottom: "6px",
              }}
            >
              {note}
            </Box>
          ))}
        </Card>

        {/* Temperature / Alert Trends */}
        <Card
          className="dashboard-card"
          sx={{
            background: gradients[3],
            height: "365px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.4rem", mb: 2, color: "#fff" }}
          >
            Temperature / Alert Trends
          </Typography>
          <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Charts />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;