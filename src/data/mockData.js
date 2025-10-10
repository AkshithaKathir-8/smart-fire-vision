export const fireAlerts = [
  { room: "101", severity: "Critical" },
  { room: "102", severity: "High" },
  { room: "103", severity: "Medium" },
  { room: "104", severity: "Low" },
  { room: "105", severity: "Medium" },
];

export const floorRooms = {
  1: [
    { room: "101", severity: "Critical" },
    { room: "102", severity: "High" },
    { room: "103", severity: "Medium" },
  ],
  2: [
    { room: "201", severity: "Low" },
    { room: "202", severity: "High" },
    { room: "203", severity: "Medium" },
  ]
};

export const chartData = {
  labels: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
  datasets: [
    {
      label: "Temperature",
      data: [70, 75, 80, 85, 82, 90],
      borderColor: "#ff4d4d",
      backgroundColor: "rgba(255, 77, 77, 0.2)",
      tension: 0.4,
    },
    {
      label: "Alerts",
      data: [1, 2, 1, 3, 2, 4],
      borderColor: "#33ff77",
      backgroundColor: "rgba(51, 255, 119, 0.2)",
      tension: 0.4,
    }
  ]
};