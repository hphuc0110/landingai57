export type WorkshopItem = {
  title: string
  description: string
}

export type WorkshopGroup = {
  label: string
  items: WorkshopItem[]
}

export type ModuleTheme = 'blue' | 'green' | 'purple'

export type ProgramModule = {
  id: number
  badge: string
  progress: string
  title: string
  theory: string
  workshopGroups: WorkshopGroup[]
  output: string
  theme: ModuleTheme
}

export const modules: ProgramModule[] = [
  {
    id: 1,
    badge: 'MODULE 1',
    progress: 'Module 01/06',
    title: 'AI FOUNDATIONS & GENERATIVE LITERACY',
    theory:
      'Lý thuyết (10 buổi): Từ bản đồ AI và lịch sử phát triển, nguyên lý LLMs, prompt engineering cơ bản đến nâng cao, GenAI ảnh & video, RAG/Study OS, Generative UI & AI Agent, kết thúc bằng đạo đức, pháp lý và an toàn AI.',
    workshopGroups: [
      {
        label: 'Workshop',
        items: [
          {
            title: 'Prompt Lab – Hệ điều hành học tập cá nhân bằng AI',
            description:
              'Thực hành chuẩn hóa prompt, so sánh đa mô hình (ChatGPT, Claude, Gemini...), kỹ thuật nâng cao, xây "gia sư AI" trên tài liệu riêng, lắp ráp hệ thống quản lý học tập.',
          },
          {
            title: 'AI Creative Studio – Sản xuất ảnh & video bằng GenAI',
            description:
              'Thử nghiệm text-to-image, thiết kế poster/bộ nhận diện, text-to-video, dựng storyboard & hậu kỳ, kiểm tra bản quyền.',
          },
          {
            title: 'AI Builder – Generative UI, Tác tử & Dự án AI for Good',
            description:
              'Đặt vấn đề xã hội, sinh UI bằng Vercel v0, dựng workflow tự động no-code, sprint sản phẩm, thuyết trình bảo vệ.',
          },
        ],
      },
    ],
    output:
      '10 bài nộp cá nhân qua các buổi lý thuyết, cùng 3 sản phẩm workshop: hệ thống Study OS vận hành được, Campaign Kit truyền thông (ảnh/poster/video), và nguyên mẫu dự án AI for Good hoàn chỉnh kèm slide, demo và thuyết trình bảo vệ.',
    theme: 'blue',
  },
  {
    id: 2,
    badge: 'MODULE 2',
    progress: 'Module 02/06',
    title: 'PYTHON FOR DATA SCIENCE & MACHINE LEARNING FOUNDATIONS',
    theory:
      'Lý thuyết (10 buổi): Python nền tảng (Colab, cấu trúc dữ liệu, hàm), EDA/feature engineering, 3 loại học máy, các mô hình supervised (kNN, Regression, Tree, Ensemble), ML lifecycle & metrics, cross-validation, unsupervised (K-Means, PCA, anomaly), pipeline end-to-end & GPU/RAPIDS.',
    workshopGroups: [
      {
        label: 'Workshop cơ bản',
        items: [
          {
            title: 'Python & Data Science Foundations',
            description:
              'Colab, biến/cấu trúc dữ liệu, hàm, NumPy/pandas, EDA.',
          },
          {
            title: 'Machine Learning Core Models & Evaluation',
            description:
              'Problem framing, kNN/Naive Bayes, Regression, Tree/Ensemble, lifecycle, CV/ROC-AUC.',
          },
          {
            title: 'Unsupervised, End-to-End ML & Scale',
            description:
              'K-Means/PCA, anomaly detection, pipeline hoàn chỉnh, tăng tốc GPU.',
          },
        ],
      },
      {
        label: 'Workshop nâng cao',
        items: [
          {
            title: 'Advanced Data Pipeline & Feature Engineering',
            description:
              'Data validation, feature engineering nâng cao, time-series, pipeline tái lập.',
          },
          {
            title: 'Advanced Supervised Learning & Model Optimization',
            description:
              'Dữ liệu mất cân bằng, hyperparameter tuning, ensemble nâng cao, calibration.',
          },
          {
            title: 'Advanced Unsupervised & Anomaly Analytics',
            description: 'Clustering & anomaly detection nâng cao.',
          },
          {
            title: 'Advanced AI Prediction Capstone',
            description:
              'Problem framing, optimization/explainability, deployment & pitch.',
          },
        ],
      },
    ],
    output:
      'Core Practical Portfolio (Core Data Science Notebook, ML Core Benchmark, End-to-End ML Core Project), Advanced Portfolio (Advanced Data Pipeline Pack, Supervised Optimization Benchmark, Advanced Unsupervised Notebook), và Advanced AI Prediction Capstone Project Pack tích hợp slide, pitch deck và tự đánh giá.',
    theme: 'blue',
  },
  {
    id: 3,
    badge: 'MODULE 3',
    progress: 'Module 03/06',
    title: 'ADVANCED MACHINE LEARNING & DEEP LEARNING',
    theory:
      'Lý thuyết (10 buổi): Đại số tuyến tính (vector, ma trận), covariance/PCA, đạo hàm & gradient, chain rule/loss/regularization, optimizer (GD, Adam), xác suất thống kê, sampling/CLT, Bayes, tích hợp thành Math Toolkit cho ML/DL.',
    workshopGroups: [
      {
        label: 'Workshop cơ bản',
        items: [
          {
            title: 'Data Representation & Linear Algebra',
            description:
              'Vector/similarity, ma trận, least squares/scaling, covariance, PCA.',
          },
          {
            title: 'Gradient, Loss & Optimization',
            description:
              'Đạo hàm/gradient, backprop, loss/regularization, optimizer, debugging.',
          },
          {
            title: 'Probability, Statistics, Bayes & End-to-End Reasoning',
            description:
              'Phân phối xác suất, sampling/CLT, Bayes, math toolkit tổng hợp.',
          },
        ],
      },
      {
        label: 'Workshop nâng cao',
        items: [
          {
            title: 'Advanced ML & Feature Engineering',
            description:
              'Feature engineering/ablation, model selection tin cậy.',
          },
          {
            title: 'Advanced Ensemble Learning & XGBoost',
            description: 'Bagging/RF, boosting, XGBoost, voting/stacking.',
          },
          {
            title: 'Advanced Deep Learning with PyTorch, CV & Transformers',
            description:
              'NN from scratch, PyTorch, CV/transfer learning, NLP/Transformer.',
          },
          {
            title: 'Capstone: Real-World AI Application',
            description: 'Design review, build/evaluate, report/demo/defense.',
          },
        ],
      },
    ],
    output:
      '10 bài nộp lý thuyết/mini-task, 6 bộ sản phẩm workshop (Data Representation & PCA Report, Optimization & Backpropagation Package, Statistical Model Evaluation & Math Checklist, Advanced ML Pipeline, Advanced Ensemble Benchmark, Advanced DL Package), và Capstone Package gồm Project Brief, repo/notebook, báo cáo 3–5 trang, slide, demo và tự phản biện.',
    theme: 'green',
  },
  {
    id: 4,
    badge: 'MODULE 4',
    progress: 'Module 04/06',
    title: 'COMPUTER VISION, OPTIMIZATION & GPU ACCELERATION',
    theory:
      'Lý thuyết (10 buổi): Ảnh số/pixel, convolution 2D, vector hóa/dense layer, backprop/regularization, optimizer, classical CV & PCA, kiến trúc CNN, metrics/transfer learning, object detection & segmentation, GPU/CUDA/RAPIDS.',
    workshopGroups: [
      {
        label: 'Workshop cơ bản',
        items: [
          {
            title: 'CV, Convolution & Neural Network Foundations',
            description:
              'Pixel/color, convolution, edge detection, dense layer, loss/gradient.',
          },
          {
            title: 'Optimization, Backprop & Classical CV',
            description:
              'Chain rule/backprop, gradient checking, optimizer battle, classical CV/PCA.',
          },
          {
            title: 'CNN, Detection, Segmentation & GPU Foundations',
            description:
              'MLP vs CNN, metrics/transfer learning, detection/segmentation, GPU foundations.',
          },
        ],
      },
      {
        label: 'Workshop nâng cao',
        items: [
          {
            title: 'Advanced CNN Training & Transfer Learning',
            description:
              'Kiến trúc nâng cao, optimizer/learning rate, augmentation, fine-tuning.',
          },
          {
            title: 'Advanced Object Detection & Segmentation',
            description:
              'Dataset/annotation, YOLO/SSD, U-Net/Mask R-CNN, production design.',
          },
          {
            title: 'Advanced GPU Acceleration & Deployment',
            description: 'Profiling, CuPy/Numba, RAPIDS+TensorRT.',
          },
          {
            title: 'Advanced CV Capstone',
            description: 'Experiment/integration, deployment/demo/defense.',
          },
        ],
      },
    ],
    output:
      '10 bài nộp lý thuyết, 6 bộ sản phẩm workshop (Core Vision Notebook, Optimization + Classical CV Core Notebook, Core End-to-End CV System Pack, Advanced CNN Experiment Pack, Advanced Detection/Segmentation System Pack, GPU Acceleration Benchmark), và Mini-Capstone CV gồm notebook/repo, báo cáo kỹ thuật, slide, demo 5–7 phút và tự đánh giá.',
    theme: 'green',
  },
  {
    id: 5,
    badge: 'MODULE 5',
    progress: 'Module 05/06',
    title: 'GENERATIVE AI, LLMs & INTELLIGENT RAG SYSTEMS',
    theory:
      'Lý thuyết (10 buổi): NLP pipeline, biểu diễn văn bản (BoW/TF-IDF/embedding), sequence models (RNN/LSTM/GRU), seq2seq & đánh giá, Transformer/self-attention, BERT/GPT/T5 & API, prompt engineering & structured output, GenAI & Responsible AI, RAG & semantic search, conversational AI & memory.',
    workshopGroups: [
      {
        label: 'Workshop cơ bản',
        items: [
          {
            title: 'NLP, Text Representation & Sequence Foundations',
            description:
              'Use case/pipeline, BoW/TF-IDF/embedding, RNN/LSTM/GRU, seq2seq, evaluation.',
          },
          {
            title: 'Transformers, LLMs & GenAI Foundations',
            description:
              'Self-attention, BERT/GPT/T5 & API, prompt engineering, GenAI/Responsible AI.',
          },
          {
            title: 'RAG, Conversational AI & Domain Assistant Foundations',
            description:
              'Semantic search, kiến trúc RAG, chẩn đoán lỗi RAG, conversational AI/memory.',
          },
        ],
      },
      {
        label: 'Workshop nâng cao',
        items: [
          {
            title: 'Advanced Generative AI & Prompt Systems',
            description:
              'Prompt chaining, structured generation, LLM evaluation, safety/adversarial testing.',
          },
          {
            title: 'Advanced RAG Systems & Retrieval Optimization',
            description:
              'Chunking/index, hybrid search, reranking, RAG evaluation.',
          },
          {
            title: 'Advanced Conversational Agents & Memory',
            description:
              'Memory architecture, tool-using agent, guardrails/telemetry.',
          },
          {
            title: 'Advanced Domain Expert AI Capstone',
            description: 'Tích hợp domain/agent, evaluation/demo/defense.',
          },
        ],
      },
    ],
    output:
      '10 bài nộp lý thuyết, 6 bộ sản phẩm workshop (Core NLP Portfolio, Transformer & GenAI Core Portfolio, Core Intelligent Assistant Portfolio, Advanced GenAI Experiment Pack, Advanced RAG Optimization Pack, Advanced Agent & Memory Prototype), và Advanced Domain Expert AI Capstone gồm bộ dữ liệu/index, hệ thống RAG nâng cao, chatbot có memory, báo cáo kỹ thuật, slide và demo 5–7 phút.',
    theme: 'purple',
  },
  {
    id: 6,
    badge: 'MODULE 6',
    progress: 'Module 06/06',
    title: 'APPLIED AI PRODUCT STUDIO & CAPSTONE',
    theory:
      'Lý thuyết (10 buổi): Tư duy sản phẩm AI & yêu cầu capstone, design thinking/problem framing, kiến trúc giải pháp AI & tech stack, AI sandbox/vibe coding, MVP prototyping, logging/observability, AI UX & multimodal, guardrails/safety/testing, đo lường-tối ưu-storytelling, launch readiness & portfolio.',
    workshopGroups: [
      {
        label: 'Workshop cơ bản',
        items: [
          {
            title:
              'AI Product Discovery, Architecture & Assisted Build Foundations',
            description:
              'Product mindset, problem framing, kiến trúc & tech stack, sandbox/vibe coding.',
          },
          {
            title: 'MVP, Observability, UX & Safety Foundations',
            description:
              'MVP/happy path, logging/observability, UX/UI, guardrails/testing.',
          },
          {
            title: 'Evaluation, Optimization, Launch & Portfolio Foundations',
            description:
              'Metrics/evaluation, optimization, pitch deck, launch readiness/README.',
          },
        ],
      },
      {
        label: 'Workshop nâng cao',
        items: [
          {
            title: 'Advanced AI Product Architecture & Orchestration',
            description:
              'Modular architecture, function routing, data lifecycle, scaling readiness.',
          },
          {
            title: 'Advanced AI Quality, Safety & Optimization',
            description:
              'Golden test set, telemetry, safety red-team, quality gate.',
          },
          {
            title: 'Advanced Launch, Product Operations & Portfolio',
            description:
              'Release/regression QA, product operations, technical handoff.',
          },
          {
            title: 'Advanced Capstone Technical Defense & Reflection',
            description: 'Demo/defense, post-mortem/reflection.',
          },
        ],
      },
    ],
    output:
      '10 bài nộp lý thuyết, 6 bộ sản phẩm workshop (Core Discovery & Architecture Pack, Core MVP & Product Experience Pack, Core Product Readiness Pack, Advanced Architecture & Orchestration Pack, Advanced Quality/Safety/Optimization Pack, Advanced Launch & Operations Pack), và Advanced Final Real-World AI Product — sản phẩm AI hoàn chỉnh chạy được, kèm Project Charter, sơ đồ kiến trúc, README, pitch deck, one-pager/poster, tài liệu Technical Defense và bài Post-Mortem & Reflection.',
    theme: 'purple',
  },
]
