<div align="center">

# 📄 Document Type Classification Challenge

### AI Engineer Portfolio | 문서연

[![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**CNN 베이스라인에서 Vision Transformer 앙상블까지, 57%의 성능 향상을 달성한 연구 기록**

[🔗 Live Demo](https://ai.studio/apps/drive/1ZSQ6qJ8EUS9y_PpkmylzJMOSfnmbx1nG)

</div>

---

## 🎯 프로젝트 개요

이 프로젝트는 **문서 타입 분류(Document Type Classification)** 경진대회에서 수행한 모델 개발 및 성능 최적화 과정을 시각화한 포트폴리오입니다.

| 항목 | 내용 |
|:---:|:---|
| **대회 과제** | 문서 이미지의 타입을 자동 분류하는 AI 모델 개발 |
| **역할** | AI Researcher / Computer Vision Engineer |
| **총 제출 횟수** | 98회 |
| **최종 성과** | Public F1 Score **0.9449** (상위 5%) |

---

## 📈 성능 향상 과정

```
베이스라인 → 최종 성능
  F1 0.60 → F1 0.94 (+57% 향상)
```

### 모델 진화 타임라인

| 단계 | 모델 | Public F1 | 핵심 변경점 |
|:---:|:---|:---:|:---|
| 1️⃣ | EfficientNet B0 | 0.6011 | 초기 베이스라인 구축 |
| 2️⃣ | EfficientNet V2 | 0.7818 | 특징 추출 성능 향상 |
| 3️⃣ | ResNet50 | 0.8954 | 안정적인 학습 기반 확보 |
| 4️⃣ | ConvNeXt Base | 0.9118 | 최신 CNN 아키텍처 적용 |
| 5️⃣ | ViT Base | 0.9379 | Transformer 기반 전역적 문맥 파악 |
| 6️⃣ | **Ensemble (ViT + ConvNeXt)** | **0.9449** | 가중치 앙상블 + TTA |

---

## 🏆 핵심 전략 (Winning Strategy)

### 1. Vision Transformer (ViT) 도입
CNN의 지역적(Local) 특징 추출 한계를 극복하고, **문서 전체의 구조적 패턴**을 파악하기 위해 Transformer 아키텍처로 전환했습니다.

### 2. 가중치 앙상블 (Weighted Ensemble)
ViT와 ConvNeXt Large 모델의 예측값을 **가중 평균**하여 편향(Bias)과 분산(Variance)의 균형을 최적화했습니다.

### 3. TTA (Test Time Augmentation)
추론 시 **Multi-scale 및 Flip 증강**을 적용하여 모델 예측의 견고성(Robustness)을 확보했습니다.

---

## 🛠️ 기술 스택

### Machine Learning
- **Backbone Models**: EfficientNet, ResNet, ConvNeXt, Vision Transformer (ViT)
- **Training**: PyTorch, torchvision
- **Techniques**: Transfer Learning, Ensemble, TTA

### Portfolio Dashboard
- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite 6
- **Visualization**: Recharts
- **Icons**: Lucide React
- **Styling**: Tailwind CSS

---

## 🚀 로컬 실행 방법

### 사전 요구사항
- Node.js 18.x 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/your-username/image-classification-portfolio.git
cd image-classification-portfolio

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

서버가 실행되면 `http://localhost:5173`에서 포트폴리오를 확인할 수 있습니다.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

---

## 📁 프로젝트 구조

```
image-classification-portfolio/
├── 📄 index.html          # HTML 엔트리포인트
├── 📄 index.tsx           # React 엔트리포인트
├── 📄 App.tsx             # 메인 애플리케이션 컴포넌트
├── 📄 constants.tsx       # 대회 데이터 및 제출 기록
├── 📄 types.ts            # TypeScript 타입 정의
├── 📂 components/
│   ├── 📄 StatCard.tsx       # 통계 카드 컴포넌트
│   ├── 📄 ScoreChart.tsx     # 점수 변화 차트
│   └── 📄 ModelEvolution.tsx # 모델 진화 타임라인
├── 📄 package.json        # 프로젝트 의존성
├── 📄 tsconfig.json       # TypeScript 설정
└── 📄 vite.config.ts      # Vite 빌드 설정
```

---

## 📊 대시보드 기능

- **📈 성능 추이 차트**: Public/Private F1 Score 변화 시각화
- **🏅 핵심 지표 카드**: 최고 점수, 성능 향상률, 총 제출 횟수
- **📋 제출 이력 테이블**: 모델별 상세 성능 기록
- **🎯 모델 진화 타임라인**: 베이스라인부터 최종 앙상블까지의 발전 과정

---

## 👤 연락처

<div align="center">

**문서연 (Seoyeon Mun)**

AI Engineer / Computer Vision Engineer

[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:aboutexo04@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/seo-yeon-moon-743a132b6)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/aboutexo04)

</div>

---

<div align="center">

**© 2025 Seoyeon Mun. All Rights Reserved.**

</div>
