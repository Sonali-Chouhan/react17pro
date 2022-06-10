import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

const Linechart = () => {
    const Data = [
        {
          name: "reactjs",
          student: 1,
          item: 3,
        },
        {
          name: "next js",
          student: 5,
          item: 6,
        },
        {
          name: "PHP",
          student: 8,
          item: 3,
        },
        {
          name: "javascript",
          student: 10,
          item: 5,
        },
        {
          name: "NodeJs",
          student: 6,
          item: 7,
        },
        {
          name: "ROR",
          student: 4,
          item: 10,
        },
        {
          name: "CSS",
          student: 3,
          item: 12,
        },
        {
          name: "Python",
          student: 8,
          item: 14,
        },
        {
          name: "Ruby",
          student: 12,
          item: 7,
        },
        {
          name: "Html",
          student: 8,
          item: 3,
        },
      ];
      return (
        <div>
          <h1 className="chart-heading">Line- Chart</h1>
          <ResponsiveContainer width="100%" aspect={3}>
         
              <LineChart data={Data} width={500} height={300 } margin={{top:5,right:300 ,left:5,bottom:5}}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                  <XAxis  dataKey="name" interval={'preserveStartEnd'}/>
                  <YAxis />
                  <Tooltip/>
                 <Legend/>
                  <Line type="monotone" dataKey='student' stroke="green" activeDot={{r:8}}/>
                  <Line  type="" dataKey="item" stroke="red" activeDot={{r:8}}  />
                  
              </LineChart>
          </ResponsiveContainer>
        </div>
      );
    };

export default Linechart;