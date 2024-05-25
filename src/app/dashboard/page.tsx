import React from "react";
import BarChart from "./BarChart";

const LineChart = () => {
  return <h5>This is line chart</h5>;
};

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <LineChart />
      <BarChart />
    </div>
  );
};

export default Dashboard;
