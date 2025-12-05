import React from 'react';
import { StatCardProps } from '../types';

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, color }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-lg hover:border-slate-600 transition-all">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">{title}</h3>
        <div className={`p-2 rounded-lg bg-opacity-10 ${color === 'emerald' ? 'bg-emerald-500 text-emerald-400' : color === 'blue' ? 'bg-blue-500 text-blue-400' : 'bg-purple-500 text-purple-400'}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-end space-x-2">
        <span className="text-3xl font-bold text-white">{value}</span>
        {change && <span className="text-emerald-400 text-sm font-medium mb-1">{change}</span>}
      </div>
    </div>
  );
};
