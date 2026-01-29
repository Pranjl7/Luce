import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts';

function RingChart({ value, color, label }) {
  const donutData = (value) => [
    { name: 'Used', value },
    { name: 'Remaining', value: 100 - value },
  ];

  return (
    <div className='flex cursor-pointer items-center gap-x-2 text-center focus:outline-none'>
      <ResponsiveContainer width={50} height={50}>
        <PieChart>
          <Pie
            data={donutData(value)}
            innerRadius={15}
            outerRadius={25}
            dataKey='value'
            startAngle={90}
            endAngle={-270}
          >
            <Cell fill={color} />
            <Cell fill='#797374' />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className='text-sm font-medium text-black/70'>
        {value}% {label} Growth
      </p>
    </div>
  );
}

export default RingChart;
