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
        title: 'MODULE 1 – AI FOUNDATIONS',
        description:
          'Khóa học này là bước khởi đầu hoàn hảo cho hành trình khám phá AI, cung cấp kiến thức nền tảng về toán học, lập trình Python và các công cụ AI phổ biến nhất hiện nay.',
        duration: '60 GIỜ (30 BUỔI)',
        topics: [
          'Kiến thức toán học cơ bản: Đại số tuyến tính, Giải tích, Xác suất thống kê (Buổi 1 - 5)',
          'Prompt Engineering: Cách sử dụng ChatGPT, Claude, Midjourney hiệu quả (Buổi 6 - 10)',
          'Lập trình Python cơ bản: Biến, Kiểu dữ liệu, Cấu trúc điều khiển (Buổi 11 - 20)',
          'Làm quen với thư viện AI: NumPy, Pandas, Matplotlib (Buổi 21 - 25)',
          'Dự án cuối khóa: Xây dựng ứng dụng AI đơn giản đầu tay (Buổi 26 - 30)',
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
        title: 'MODULE 2 – MACHINE LEARNING ESSENTIALS & DATA-DRIVEN THINKING',
        description:
          'Khóa học này giúp học viên nắm vững các thuật toán học máy cơ bản, tư duy phân tích dữ liệu và cách áp dụng chúng để giải quyết các bài toán thực tế.',
        duration: '60 GIỜ (30 BUỔI)',
        topics: [
          'Phân tích dữ liệu với Python: Pandas, Matplotlib, Seaborn (Buổi 1 - 5)',
          'Thuật toán học máy có giám sát: Hồi quy, Phân loại (Buổi 6 - 15)',
          'Thuật toán học máy không giám sát: Phân cụm, Giảm chiều dữ liệu (Buổi 16 - 20)',
          'Đánh giá và tối ưu hóa mô hình AI: Overfitting, Regularization (Buổi 21 - 25)',
          'Dự án cuối khóa: Xây dựng hệ thống dự báo thực tế (Buổi 26 - 30)',
        ],
        price: '25.000.000',
      },
      {
        icon: '🧮',
        title: 'MODULE 3 – MATHEMATICAL FOUNDATIONS FOR MODERN AI',
        description:
          'Khóa học này tập trung vào nền tảng toán học chuyên sâu cần thiết để hiểu và phát triển các mô hình AI hiện đại, từ đại số tuyến tính nâng cao đến tối ưu hóa.',
        duration: '60 GIỜ (30 BUỔI)',
        topics: [
          'Đại số tuyến tính nâng cao: Ma trận, Vector, Không gian vector (Buổi 1 - 5)',
          'Giải tích đa biến: Đạo hàm, Tích phân, Tối ưu hóa (Buổi 6 - 15)',
          'Xác suất thống kê nâng cao: Phân phối xác suất, Ước lượng (Buổi 16 - 20)',
          'Lý thuyết thông tin và ứng dụng trong AI (Buổi 21 - 25)',
          'Dự án cuối khóa: Áp dụng toán học để giải quyết bài toán AI thực tế (Buổi 26 - 30)',
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
        title: 'MODULE 4 – COMPUTER VISION, OPTIMIZATION & GPU FOR MODERN AI',
        description:
          'Khóa học đi sâu vào lĩnh vực thị giác máy tính, cách tối ưu hóa mô hình AI và tận dụng sức mạnh của GPU để huấn luyện các mô hình học sâu phức tạp.',
        duration: '60 GIỜ (30 BUỔI)',
        topics: [
          'Xử lý hình ảnh cơ bản và nâng cao với OpenCV (Buổi 1 - 5)',
          'Mạng nơ-ron tích chập (CNN) và ứng dụng trong thị giác máy tính (Buổi 6 - 15)',
          'Tối ưu hóa mô hình AI trên phần cứng GPU (Buổi 16 - 20)',
          'Phát hiện vật thể và phân đoạn hình ảnh (Buổi 21 - 25)',
          'Dự án cuối khóa: Xây dựng hệ thống nhận diện khuôn mặt/vật thể (Buổi 26 - 30)',
        ],
        price: '58.000.000',
      },
      {
        icon: '💾',
        title: 'MODULE 5 – APPLIED DEEP AI, LLMs & RAG',
        description:
          'Khóa học tập trung vào các công nghệ AI tiên tiến nhất hiện nay như Deep Learning, Mô hình ngôn ngữ lớn (LLMs) và kỹ thuật RAG để tạo ra các ứng dụng thông minh.',
        duration: '60 GIỜ (30 BUỔI)',
        topics: [
          'Mạng nơ-ron sâu (Deep Neural Networks) và ứng dụng (Buổi 1 - 5)',
          'Xử lý ngôn ngữ tự nhiên (NLP) với Transformer (Buổi 6 - 15)',
          'Mô hình ngôn ngữ lớn (LLMs): GPT, Llama, Claude (Buổi 16 - 20)',
          'Retrieval-Augmented Generation (RAG) và ứng dụng thực tế (Buổi 21 - 25)',
          'Dự án cuối khóa: Xây dựng Chatbot thông minh dựa trên LLM & RAG (Buổi 26 - 30)',
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
        title: 'MODULE 6 – AI CAPSTONE & PRODUCT STUDIO',
        description:
          'Khóa học cuối cùng tập trung vào việc hiện thực hóa các ý tưởng AI thành sản phẩm hoàn chỉnh, từ quy trình phát triển đến kỹ năng quản lý dự án và gọi vốn.',
        duration: '60 GIỜ (30 BUỔI)',
        topics: [
          'Quy trình phát triển sản phẩm AI: Từ ý tưởng đến triển khai (Buổi 1 - 5)',
          'Quản lý dự án AI theo phương pháp Agile/Scrum (Buổi 6 - 10)',
          'Kỹ năng thuyết trình và gọi vốn cho dự án AI (Buổi 11 - 15)',
          'Phát triển sản phẩm AI hoàn chỉnh (MVP) (Buổi 16 - 25)',
          'Bảo vệ đồ án cuối khóa trước hội đồng chuyên gia (Buổi 26 - 30)',
        ],
        price: '125.000.000',
      },
    ],
  },
]
