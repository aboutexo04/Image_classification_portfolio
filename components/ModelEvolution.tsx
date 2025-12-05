import React from 'react';
import { ArrowRight, Layers, Cpu, Zap, Box } from 'lucide-react';

export const ModelEvolution: React.FC = () => {
  const steps = [
    {
      title: "1단계: 베이스라인",
      model: "EfficientNet B0/V2",
      score: "~0.60 - 0.78",
      desc: "초기 파이프라인 구축. 클래스 불균형 문제를 식별하고 데이터 증강(Augmentation) 전략 최적화.",
      icon: <Box size={20} />,
      color: "border-slate-600"
    },
    {
      title: "2단계: 백본 업그레이드",
      model: "ResNet50 & ConvNeXt",
      score: "~0.89 - 0.91",
      desc: "백본 모델 용량 확대. Focal Loss를 도입하여 학습이 어려운 하드 샘플(Hard Samples)에 대한 성능 개선.",
      icon: <Cpu size={20} />,
      color: "border-blue-500"
    },
    {
      title: "3단계: SOTA 아키텍처",
      model: "Vision Transformer (ViT)",
      score: "~0.93",
      desc: "ViT의 Global Attention 메커니즘을 활용하여 문서의 전체적인 레이아웃 구조 학습 강화.",
      icon: <Zap size={20} />,
      color: "border-purple-500"
    },
    {
      title: "4단계: 최적화 & 앙상블",
      model: "Ensemble + TTA",
      score: "0.9449",
      desc: "ViT와 ConvNeXt 예측값의 가중 평균(Weighted Averaging) 앙상블 및 TTA를 통해 최종 성능 극대화.",
      icon: <Layers size={20} />,
      color: "border-emerald-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {steps.map((step, index) => (
        <div key={index} className={`relative bg-slate-800 p-5 rounded-xl border-t-4 ${step.color} shadow-lg`}>
          <div className="mb-3 text-slate-400 flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-wider">{step.title}</span>
            {step.icon}
          </div>
          <h4 className="text-white font-bold text-lg mb-1">{step.model}</h4>
          <div className="text-emerald-400 font-mono font-semibold mb-3 text-sm">F1: {step.score}</div>
          <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
          
          {index < steps.length - 1 && (
             <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 bg-slate-900 rounded-full p-1 border border-slate-700">
               <ArrowRight size={14} className="text-slate-500" />
             </div>
          )}
        </div>
      ))}
    </div>
  );
};