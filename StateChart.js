import React from "react";
import { Tooltip } from "react-bootstrap";
import {
  CartesianGrid,
  Legend,
  Line,
  Label,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { data } from "./data";

const StateChart = () => {
  return (
    <div className="chart-container">
      {/* <ResponsiveContainer width={"100%"} height={"1000px"}> */}
      <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis dataKey="name" /> */}
        <XAxis dataKey="name">
          <Label  value ="Dates" position="bottom" /> 
        </XAxis>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default StateChart;
