import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import AnalyticsTooltip from './AnalyticsToolTip';

function MajorPieChart({views, likes, comments}) {
  const stats = {
    views: views,
    likes: likes,
    comments: comments,
  };

  const COLORS = ['#ff6b6b', '#4dabf7', '#82c91e'];
  const total = stats.views + stats.likes + stats.comments;

  const percentageData = [
    {
      name: 'views',
      data: stats.views,
      value: (stats.views / total) * 100,
    },
    {
      name: 'likes',
      data: stats.likes,
      value: (stats.likes / total) * 100,
    },
    {
      name: 'comments',
      data: stats.comments,
      value: (stats.comments / total) * 100,
    },
  ];

  return (
    <ResponsiveContainer width='50%' height={250} >
      <PieChart>
        <Tooltip content={<AnalyticsTooltip />} />
        <Pie
          data={percentageData}
          dataKey='value'
          cx='50%'
          cy='50%'
          outerRadius={90}
          innerRadius={30}
          paddingAngle={6}
          stroke='none'
        >
          {percentageData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default MajorPieChart;
