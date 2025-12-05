import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { SubmissionRecord } from '../types';

interface ScoreChartProps {
  data: SubmissionRecord[];
}

export const ScoreChart: React.FC<ScoreChartProps> = ({ data }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">성능 변화 추이</h3>
        <p className="text-slate-400 text-sm">대회 기간 동안의 Public F1 점수 상승 곡선</p>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis 
              dataKey="date" 
              stroke="#94a3b8" 
              tickFormatter={(value) => value.split('-').slice(1).join('/')}
              tick={{ fontSize: 12 }}
              tickMargin={10}
            />
            <YAxis 
              domain={[0.5, 1.0]} 
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
              itemStyle={{ color: '#38bdf8' }}
              labelStyle={{ color: '#94a3b8' }}
              formatter={(value: number) => [value.toFixed(4), "F1 점수"]}
            />
            <ReferenceLine y={0.9} stroke="#10b981" strokeDasharray="3 3" label={{ value: "목표 0.9", fill: "#10b981", fontSize: 12 }} />
            <Line 
              type="monotone" 
              dataKey="publicScore" 
              stroke="#38bdf8" 
              strokeWidth={3}
              dot={{ r: 4, fill: '#38bdf8', strokeWidth: 2, stroke: '#0f172a' }}
              activeDot={{ r: 6, fill: '#fff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};