import React from 'react';

const AnalyticsTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;

  const { name, data, value } = payload[0].payload;

  return (
    <div
      style={{
        background: '#111',
        padding: '8px 12px',
        borderRadius: '12px',
        color: '#fff',
        fontSize: '14px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
      }}
    >
      <p className='inline-block' style={{ opacity: 0.7 }}>
        {name}:&nbsp;&nbsp;
      </p>
      <strong className='inline-block'>{data}</strong>
      <div style={{ fontSize: '12px', opacity: 0.6, textAlign: 'center' }}>
        {value.toFixed(1)}%
      </div>
    </div>
  );
};

export default AnalyticsTooltip;
