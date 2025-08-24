import React from 'react';
import { ResponsivePie } from '@nivo/pie';

interface StatsPieProps {
  completed: number;
  notCompleted: number;
}

const StatsPie: React.FC<StatsPieProps> = ({ completed, notCompleted }) => {
  const data = [
    { id: '완료', value: completed, color: '#4ade80' },
    { id: '미완료', value: notCompleted, color: '#f87171' },
  ];

  return (
    <div style={{ height: 200 }}>
      <ResponsivePie
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ datum: 'data.color' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        enableArcLinkLabels={false}
        enableArcLabels={true}
        arcLabel={d => `${d.id}: ${d.value}`}
      />
    </div>
  );
};

export default StatsPie;
