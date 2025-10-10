// src/components/Charts.jsx
import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [75, 80, 82, 85, 78, 80],
        borderColor: "#fff",
        backgroundColor: "rgba(255,255,255,0.3)",
        tension: 0.4,
      },
      {
        label: "Alerts",
        data: [1, 3, 2, 4, 2, 3],
        borderColor: "#ff4d4f",
        backgroundColor: "rgba(255,77,79,0.3)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#fff" } },
      title: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: { ticks: { color: "#fff" } },
      y: { ticks: { color: "#fff" } },
    },
  };

  useEffect(() => {
    return () => {
      // Cleanup chart to prevent "canvas already in use" error
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return <Line ref={chartRef} data={data} options={options} />;
};

export default Charts;