import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Bar,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Barchart = () => {
  const Data = [
    {
      name: "Page-A",
      pv: 10,
      uv: 5,
    },
    {
      name: "Page-B",
      pv: 20,
      uv: 8,
    },
    {
      name: "Page-C",
      pv: 25,
      uv: 19,
    },
    {
      name: "Page-D",
      pv: 17,
      uv: 22,
    },
    {
      name: "Page-E",
      pv: 13,
      uv: 27,
    },
    {
      name: "Page-F",
      pv: 7,
      uv: 30,
    },
    {
      name: "Page-G",
      pv: 11,
      uv: 26,
    },
    {
      name: "Page-H",
      pv: 15,
      uv: 20,
    },
  ];

  return (
    <div>
      <h1 className="bar-chart">Bar-Chart</h1>
        <ResponsiveContainer width="100%" aspect={3}>
      <BarChart width={730} height={250} data={Data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
