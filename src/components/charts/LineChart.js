import React, {useState} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const RenderLineChart = ({data}) => {
  let windowWidth = window.innerWidth - 100;
  if (window.innerWidth < 400){
    windowWidth = window.innerWidth - 50;
  }
  const [widthState, setWidthState] = useState(windowWidth)

  window.onresize = () => {
    setWidthState(window.innerWidth - 50)
  }

  return (
    <LineChart width={widthState} height={300} data={data} margin={{ left: - 15 }}>
      <Line type="monotone" dataKey="income" />
      <Line type="monotone" dataKey="expense" activeDot={{r: 8}} stroke = "#ff6384" />
      <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  )
};

export default RenderLineChart;