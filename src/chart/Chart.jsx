import React from 'react'
import './chart.scss'
import {  Area,AreaChart, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    name: 'Yanvar',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Fevral',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mart',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Aprel',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Iyun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Iyul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];




const Chart = ({wid, hed, text}) => {
  return (
    <div className='chart'>
      <span>{text}</span>
            <AreaChart width={wid} height={hed} data={data}
          margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    </div>
  )
}

export default Chart