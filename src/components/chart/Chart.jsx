import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart } from 'recharts';
import { userData } from '../../data';
import './chart.css'

    
    


export default function Chart({title, data, dataKey, grid}) {
    

    return (
        <div className="chart">
           <h3 className="chartTitle"> {title}</h3>
           <ResponsiveContainer width="100%" aspect={4/1} >
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf"  strokeDasharray="5 5" />}
                    <Line type="monotone" stroke="#5550bd" dataKey={dataKey}/>

                </LineChart>
           </ResponsiveContainer>
        </div>
    )
}
