import React, { useState } from 'react';
import { Trophy, TrendingUp, Activity, GitCommit, Calendar, Award, FileText, LayoutGrid, Zap, Layers } from 'lucide-react';
import { StatCard } from './components/StatCard';
import { ScoreChart } from './components/ScoreChart';
import { ModelEvolution } from './components/ModelEvolution';
import { SUBMISSION_DATA, COMPETITION_INFO } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'history'>('dashboard');

  const bestPublic = Math.max(...SUBMISSION_DATA.map(s => s.publicScore));
  const improvement = ((bestPublic - SUBMISSION_DATA[0].publicScore) / SUBMISSION_DATA[0].publicScore * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-blue-500 selection:text-white pb-20">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/20">
                <Award className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                  {COMPETITION_INFO.candidate}
                </h1>
                <p className="text-xs text-slate-400">{COMPETITION_INFO.role}</p>
              </div>
            </div>
            <div className="flex space-x-1 bg-slate-800 p-1 rounded-lg">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'dashboard' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
              >
                대시보드
              </button>
              <button 
                onClick={() => setActiveTab('history')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'history' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
              >
                제출 이력
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Header Hero */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 text-blue-400 mb-2">
            <LayoutGrid size={16} />
            <span className="text-sm font-semibold uppercase tracking-wide">Competition Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{COMPETITION_INFO.title}</h2>
          <p className="text-slate-400 max-w-3xl text-lg leading-relaxed break-keep">
            {COMPETITION_INFO.summary}
          </p>
        </div>

        {activeTab === 'dashboard' ? (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard 
                title="최고 Public F1 점수" 
                value={bestPublic.toString()} 
                change={`상위 5% 성과`}
                icon={<Trophy size={24} />}
                color="emerald"
              />
              <StatCard 
                title="총 성능 향상" 
                value={`+${improvement}%`} 
                change="베이스라인 대비"
                icon={<TrendingUp size={24} />}
                color="blue"
              />
              <StatCard 
                title="총 제출 횟수" 
                value={COMPETITION_INFO.totalSubmissions.toString()} 
                change="성능 개선 시도"
                icon={<Activity size={24} />}
                color="purple"
              />
            </div>

            {/* Main Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ScoreChart data={SUBMISSION_DATA} />
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-slate-900 p-6 rounded-xl border border-blue-800/50 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4">핵심 전략 (Winning Strategy)</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="mt-1 bg-blue-500/20 p-1 rounded text-blue-400"><Zap size={16}/></div>
                      <p className="text-sm text-slate-300 break-keep"><strong className="text-white">Vision Transformer (ViT):</strong> CNN의 지역적(Local) 한계를 넘어 문서 전체의 구조적 특징을 파악하기 위해 Transformer 아키텍처로 전환했습니다.</p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="mt-1 bg-blue-500/20 p-1 rounded text-blue-400"><Layers size={16}/></div>
                      <p className="text-sm text-slate-300 break-keep"><strong className="text-white">가중치 앙상블:</strong> ViT와 ConvNeXt Large 모델의 예측값을 가중 평균하여 편향(Bias)과 분산(Variance)의 균형을 맞췄습니다.</p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="mt-1 bg-blue-500/20 p-1 rounded text-blue-400"><Activity size={16}/></div>
                      <p className="text-sm text-slate-300 break-keep"><strong className="text-white">TTA (Test Time Augmentation):</strong> 추론 시 Multi-scale 및 Flip 증강을 적용하여 모델 예측의 견고성(Robustness)을 확보했습니다.</p>
                    </li>
                  </ul>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Evolution Timeline */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <GitCommit className="mr-2 text-blue-400" /> 모델 고도화 과정
              </h3>
              <ModelEvolution />
            </div>
          </div>
        ) : (
          <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-xl overflow-hidden">
            <div className="p-6 border-b border-slate-700">
              <h3 className="text-xl font-bold text-white">상세 제출 기록 (주요 마일스톤)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-400">
                <thead className="bg-slate-900/50 text-slate-200 uppercase font-semibold text-xs tracking-wider">
                  <tr>
                    <th className="px-6 py-4">모델명</th>
                    <th className="px-6 py-4">카테고리</th>
                    <th className="px-6 py-4 text-right">Public F1</th>
                    <th className="px-6 py-4 text-right">Private F1</th>
                    <th className="px-6 py-4">날짜</th>
                    <th className="px-6 py-4">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {[...SUBMISSION_DATA].reverse().map((sub) => (
                    <tr key={sub.id} className="hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-white flex items-center">
                        <FileText size={16} className="mr-2 text-slate-500" />
                        {sub.modelName}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                          sub.category === 'Transformer' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                          sub.category === 'Ensemble' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                          sub.category === 'Baseline' ? 'bg-slate-500/10 text-slate-400 border-slate-500/20' :
                          'bg-blue-500/10 text-blue-400 border-blue-500/20'
                        }`}>
                          {sub.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-white">{sub.publicScore.toFixed(4)}</td>
                      <td className="px-6 py-4 text-right font-mono">{sub.privateScore.toFixed(4)}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-2" />
                          {sub.date}
                        </div>
                      </td>
                      <td className="px-6 py-4 max-w-xs truncate" title={sub.description}>
                        {sub.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;