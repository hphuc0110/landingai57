export interface ModuleData {
  icon: string
  title: string
  description: string
  duration: string
  topics: string[]
  price: string
}

export interface LevelData {
  letter: string
  title: string
  subtitle: string
  modules: ModuleData[]
}

export const roadmapLevels: LevelData[] = [
  {
    letter: 'A',
    title: 'LEVEL A: FOUNDATION',
    subtitle: 'Dành cho học sinh THCS, THPT & người mới bắt đầu',
    modules: [
      {
        icon: '🧠',
        title: 'MODULE 1 — AI FOUNDATIONS & GENERATIVE LITERACY',
        description:
          'Giúp con hiểu AI là gì, dùng AI một cách thông minh và an toàn — từ việc chat với ChatGPT, tạo ảnh/video bằng AI, đến tự xây "trợ lý học tập AI" cho riêng mình. Con sẽ học cách hỏi AI đúng cách để ra kết quả tốt, đồng thời hiểu rõ rủi ro (deepfake, lừa đảo) để dùng AI có trách nhiệm. Cuối module, con tự làm 1 sản phẩm AI nhỏ giải quyết vấn đề thực tế.',
        duration: '60 GIỜ (30 BUỔI)',
        topics: [
          'Nhập môn & lịch sử AI, AI/ML/DL/Data Science, trực giác LLM (Buổi 1–7)',
          'Prompt Engineering: cấu trúc, few-shot, CoT, safety/injection (Buổi 8–11)',
          'GenAI ảnh & video: Diffusion, Canva AI, Runway, Luma (Buổi 12–15)',
          'NotebookLM, RAG trực giác, Study OS cá nhân (Buổi 16–19)',
          'Generative UI (Vercel v0), AI Agent, browser agent (Buổi 20–23)',
          'Ethics, deepfake, capstone "AI for Good" & Demo Day (Buổi 24–30)',
        ],
        price: '21.000.000',
      },
    ],
  },
  {
    letter: 'B',
    title: 'LEVEL B: PROFESSIONAL',
    subtitle: 'Dành cho sinh viên & người muốn xây dựng nền tảng chuyên sâu',
    modules: [
      {
        icon: '💻',
        title: 'MODULE 2 — MACHINE LEARNING ESSENTIALS & DATA-DRIVEN THINKING',
        description:
          'Dạy con những bước lập trình đầu tiên với Python và bước vào thế giới "máy học" — cách máy tính tự học từ dữ liệu để dự đoán, phân loại. Con sẽ tự tay thử nhiều mô hình AI thật, biết đánh giá mô hình nào tốt/xấu, và làm 1 dự án phân tích dữ liệu khách hàng như một chuyên gia dữ liệu thực thụ.',
        duration: '60 GIỜ (30 BUỔI)',
        topics: [
          'Python cơ bản: Colab, biến, list/dict, if/for, hàm (Buổi 1–6)',
          'Supervised/Unsupervised/Reinforcement Learning (Buổi 7–10)',
          'Mô hình ML: kNN, Naive Bayes, Regression, Tree, Random Forest, Boosting (Buổi 11–17)',
          'ML lifecycle, metric, cross-validation, ROC-AUC, overfit/underfit (Buổi 18–22)',
          'Anomaly detection, feature engineering, GPU & RAPIDS (Buổi 23–27)',
          'Mini-project Customer Segmentation: K-Means, PCA, báo cáo (Buổi 28–30)',
        ],
        price: '25.000.000',
      },
      {
        icon: '🧮',
        title: 'MODULE 3 — MATHEMATICAL FOUNDATIONS FOR MODERN AI',
        description:
          'Giúp con hiểu "vì sao AI hoạt động được" thông qua nền toán học đứng sau nó — không học công thức khô khan mà luôn gắn với dữ liệu và ví dụ thực tế, dễ hình dung. Đây là nền tảng bắt buộc nếu con muốn học sâu hơn về AI ở đại học hoặc thi chứng chỉ quốc tế sau này. Phần lớn thời lượng là thực hành code, không chỉ lý thuyết suông.',
        duration: '60 GIỜ (30 BUỔI)',
        topics: [
          'Vector, ma trận, dot product, cosine similarity, chuẩn hóa (Buổi 1–5)',
          'Covariance, eigenvalues/eigenvectors, PCA (Buổi 6–10)',
          'Đạo hàm, gradient, chain rule, loss function, regularization (Buổi 11–15)',
          'Gradient Descent, Momentum, Adam, convexity (Buổi 16–20)',
          'Biến ngẫu nhiên, CLT, kiểm định giả thuyết, Bayes rule (Buổi 21–25)',
          'Mini-capstone: xây Math Toolkit, áp dụng, báo cáo, demo (Buổi 26–30)',
        ],
        price: '40.000.000',
      },
    ],
  },
  {
    letter: 'C',
    title: 'LEVEL C: SPECIALIST',
    subtitle: 'Dành cho chuyên gia AI & người làm nghiên cứu/phát triển',
    modules: [
      {
        icon: '🌐',
        title: 'MODULE 4 — COMPUTER VISION, OPTIMIZATION & GPU FOR MODERN AI',
        description:
          'Dạy con cách AI "nhìn thấy" và hiểu hình ảnh — từ nhận diện khuôn mặt, phát hiện vật thể, đến phân loại ảnh y tế. Con sẽ tự xây mô hình AI thị giác máy tính của riêng mình và làm quen với công nghệ chip GPU theo chuẩn NVIDIA, nền tảng công nghệ mà các công ty AI lớn trên thế giới đang dùng.',
        duration: '60 GIỜ (30 BUỔI)',
        topics: [
          'NumPy & ảnh số, convolution, edge detection (Buổi 1–5)',
          'Backprop trực giác, loss landscape, optimizer SGD/Adam (Buổi 6–10)',
          'CV cổ điển, PCA/Eigenfaces cho ảnh (Buổi 11–15)',
          'CNN, transfer learning (ResNet, VGG), regularization (Buổi 16–20)',
          'Object detection (YOLO/SSD), segmentation (Buổi 21–25)',
          'GPU/CUDA, RAPIDS, mini-capstone CV & định hướng NVIDIA cert (Buổi 26–30)',
        ],
        price: '58.000.000',
      },
      {
        icon: '💾',
        title: 'MODULE 5 — APPLIED DEEP AI, LLMs & RAG',
        description:
          'Giúp con hiểu cách những AI như ChatGPT thực sự hoạt động bên trong, và quan trọng hơn — tự tay xây được một chatbot AI thông minh biết trả lời dựa trên tài liệu thật và không bịa đặt thông tin.',
        duration: '60 GIỜ (30 BUỔI)',
        topics: [
          'NLP cổ điển: Bag-of-Words, TF-IDF, embedding (Buổi 1–5)',
          'RNN/LSTM, seq2seq, đánh giá NLP (Buổi 6–10)',
          'Transformer, BERT/GPT, LLM API, prompt nâng cao (Buổi 11–15)',
          'Generative AI: text/image, temperature, prompt pattern (Buổi 16–20)',
          'Semantic search, kiến trúc RAG, lab RAG mini (Buổi 21–25)',
          'Conversational AI, chatbot + memory, capstone Domain Expert AI (Buổi 26–30)',
        ],
        price: '90.000.000',
      },
    ],
  },
  {
    letter: 'D',
    title: 'LEVEL D: EXPERT',
    subtitle: 'Dành cho các lãnh đạo công nghệ & người muốn khởi nghiệp AI',
    modules: [
      {
        icon: '🧊',
        title: 'MODULE 6 — AI CAPSTONE & PRODUCT STUDIO',
        description:
          'Cho con trải nghiệm trọn vẹn hành trình làm ra một sản phẩm AI thật — từ lên ý tưởng, thiết kế, đến xây dựng và demo. Con sẽ làm việc theo nhóm như một đội kỹ sư sản phẩm thực thụ, học cách biến ý tưởng thành sản phẩm có thể chạy được.',
        duration: '60 GIỜ (30 BUỔI)',
        topics: [
          'Onboarding sandbox, Design Thinking, Project Charter (Buổi 1–5)',
          'Làm quen LLM/Vision/Data Starter, chọn tech stack (Buổi 6–10)',
          'Sprint 1: xây lõi AI, prompt/logic, logging (Buổi 11–15)',
          'Sprint 2: UX, guardrails, user testing (Buổi 16–20)',
          'Sprint 3: đo lường, tối ưu, README, pitch deck (Buổi 21–25)',
          'Demo Day chính thức, tech review & retrospective (Buổi 26–30)',
        ],
        price: '125.000.000',
      },
    ],
  },
]
