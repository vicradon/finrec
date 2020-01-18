import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 200, pv: 2800, amt: 2700 },
  { name: 'Page C', uv: 600, pv: 2600, amt: 2100 },
  { name: 'Page D', uv: 300, pv: 2700, amt: 2600 },
  { name: 'Page E', uv: 320, pv: 2800, amt: 2900 },
];

const RenderLineChart = () => (
  <LineChart width={300} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);

export default RenderLineChart;