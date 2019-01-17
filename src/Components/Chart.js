import React, { Component } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';


class Chart extends Component {
    render() {
        const data = [
            {name: 'JAN', Points: 6000, pv: 2400, amt: 2400},
            {name: 'FEB', Points: 3000, pv: 1398, amt: 2210},
            {name: 'MAR', Points: 2000, pv: 9800, amt: 2290},
            {name: 'APRI', Points: 2780, pv: 3908, amt: 2000},
            {name: 'MAY', Points: 1890, pv: 4800, amt: 2181},
            {name: 'JUN', Points: 2390, pv: 3800, amt: 2500},
            {name: 'JULY', Points: 3490, pv: 4300, amt: 2100},
      ];
      return (
    
        <div>
            <ResponsiveContainer height={163} width="100%">
            <AreaChart width={600} height={400} data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Area type='monotone' dataKey='Points' stroke='#AD1457' fill='#FFB74D' />
      </AreaChart>
      </ResponsiveContainer>
        </div>
      );
    }
  }
  
  export default Chart;