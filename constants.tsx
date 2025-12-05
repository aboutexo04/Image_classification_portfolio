import { SubmissionRecord } from './types';

// Data extracted specifically for user "AI16_문서연" from the provided logs
// Showing the progression from early baselines to high-performing ensembles.
export const SUBMISSION_DATA: SubmissionRecord[] = [
  {
    id: '1',
    modelName: 'EfficientNet_B0',
    publicScore: 0.6011,
    privateScore: 0.6100,
    date: '2025-10-31',
    category: 'Baseline',
    description: 'EfficientNet B0를 사용한 초기 베이스라인 구축.',
  },
  {
    id: '2',
    modelName: 'EfficientNet_V2',
    publicScore: 0.7818,
    privateScore: 0.7721,
    date: '2025-10-31',
    category: 'CNN',
    description: '특징 추출 성능 향상을 위해 V2 아키텍처로 업그레이드.',
  },
  {
    id: '3',
    modelName: 'ResNet50',
    publicScore: 0.8954,
    privateScore: 0.8804,
    date: '2025-11-06',
    category: 'CNN',
    description: '안정적인 학습을 위해 표준 백본인 ResNet50 도입.',
  },
  {
    id: '4',
    modelName: 'ConvNeXt Base',
    publicScore: 0.9118,
    privateScore: 0.9103,
    date: '2025-11-10',
    category: 'CNN',
    description: '최신 CNN 성능 확보를 위해 ConvNeXt 아키텍처 적용.',
  },
  {
    id: '5',
    modelName: 'ViT Base',
    publicScore: 0.9379,
    privateScore: 0.9300,
    date: '2025-11-10',
    category: 'Transformer',
    description: '문서의 전역적 문맥(Global Context) 파악을 위해 Vision Transformer(ViT) 도입.',
  },
  {
    id: '6',
    modelName: 'Ensemble (ViT + ConvNeXt)',
    publicScore: 0.9449,
    privateScore: 0.9348,
    date: '2025-11-10',
    category: 'Ensemble',
    description: 'ViT와 ConvNeXt Large 모델의 가중치 앙상블 및 TTA 적용.',
  },
  {
    id: '7',
    modelName: '4 Model Ensemble',
    publicScore: 0.9421,
    privateScore: 0.9351,
    date: '2025-11-12',
    category: 'Ensemble',
    description: '상위 4개 모델(ViT, ConvNeXt 등)을 결합한 최종 로버스트 앙상블.',
  },
];

export const COMPETITION_INFO = {
  title: "문서 타입 분류 (Document Type Classification)",
  role: "AI Researcher / Computer Vision Engineer",
  candidate: "문서연",
  summary: "CNN 베이스라인(EfficientNet)에서 시작하여 Vision Transformer 도입 및 정교한 앙상블 전략을 통해 57%의 성능 향상(F1 0.60 → 0.94)을 달성한 연구 기록입니다.",
  totalSubmissions: 98,
};