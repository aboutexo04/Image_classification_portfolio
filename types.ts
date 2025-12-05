import React from 'react';

export interface SubmissionRecord {
  id: string;
  modelName: string;
  publicScore: number;
  privateScore: number;
  date: string;
  category: 'CNN' | 'Transformer' | 'Ensemble' | 'TTA' | 'Baseline';
  description: string;
}

export interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  icon: React.ReactNode;
  color: string;
}