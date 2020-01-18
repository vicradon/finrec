import React from 'react'
import RenderLineChart from './LineChart'
import { getTotal } from '../TodaysFinance';


export default function Charts({ days }) {
  const dayKeys = Object.keys(days);

  function totalType(type, arr) {
    let temp = getTotal(type, arr);
    let temp1 = +temp.slice(2, temp.length)
    if (isNaN(temp1)) temp1 = 0;
    return temp1;
  }

  const last7Days = dayKeys.slice(dayKeys.length - 7, dayKeys.length).map(x => {

    return {
      name: x.slice(0, 3),
      income: totalType('Income', days[x]),
      expense: totalType('Expense', days[x])
    }
  });
  console.log(last7Days)
  return (
    <div>
      <h1>Hello</h1>
      <RenderLineChart data = {last7Days} />
    </div>
  )
}