export const navLinks = [
  { href: '#about', label: 'Giới thiệu chung' },
  { href: '#program', label: 'Chương trình học' },
  { href: '#roadmap', label: 'Lộ trình phát triển' },
  { href: '#team', label: 'Đội ngũ' },
  { href: '#news', label: 'Tin tức' },
  { href: '#contact', label: 'Liên hệ' },
] as const

export const partners = [
  {
    key: 'hle' as const,
    name: 'Hồng Lĩnh Education',
    description:
      'Đơn vị triển khai chương trình, kết nối học sinh với hệ sinh thái đào tạo AI thực chiến.',
  },
  {
    key: 'hust' as const,
    name: 'Đại học Bách khoa Hà Nội',
    description:
      'Đồng hành chuyên môn: giảng viên và chuẩn đào tạo kỹ thuật từ trường đại học kỹ thuật hàng đầu.',
  },
  {
    key: 'nic' as const,
    name: 'Trung tâm Đổi mới sáng tạo Quốc gia',
    description:
      'Hỗ trợ hệ sinh thái đổi mới sáng tạo, mở rộng cơ hội kết nối và phát triển cho học viên.',
  },
] as const

export const staircaseSteps = [
  {
    title: 'Bước đầu làm quen với AI',
    description:
      'Khám phá tư duy AI, công cụ generative và cách học cùng máy tính một cách an toàn, sáng tạo.',
  },
  {
    title: 'Xây nền tảng chuyên sâu',
    description:
      'Củng cố kiến thức dữ liệu, lập trình và tư duy giải quyết vấn đề để sẵn sàng cho lộ trình kỹ thuật.',
  },
  {
    title: 'Đón đầu kỹ thuật',
    description:
      'Tiếp cận mô hình, edge AI và quy trình kỹ sư — học cách tư duy như một kỹ sư AI thực thụ.',
  },
  {
    title: 'Xây dựng sản phẩm AI thật',
    description:
      'Hoàn thiện sản phẩm end-to-end, trình bày demo và chuẩn bị hồ sơ năng lực cho nghề nghiệp tương lai.',
  },
] as const

export const careerLevels = [
  {
    level: 'LEVEL 1',
    title: 'AI Content Creator',
    line1: 'Sáng tạo nội dung đa phương tiện bằng AI',
    line2: 'Prompt, hình ảnh, video và storytelling số',
    salary: '15.000.000 - 30.000.000 VNĐ/tháng*',
  },
  {
    level: 'LEVEL 2',
    title: 'Data Analyst',
    line1: 'Phân tích dữ liệu và kể chuyện bằng số liệu',
    line2: 'Dashboard, insight và hỗ trợ quyết định',
    salary: '20.000.000 - 40.000.000 VNĐ/tháng*',
  },
  {
    level: 'LEVEL 3',
    title: 'Edge AI Engineer',
    line1: 'Triển khai AI trên thiết bị và hệ thống nhúng',
    line2: 'Tối ưu mô hình, hiệu năng và độ tin cậy',
    salary: '30.000.000 - 55.000.000 VNĐ/tháng*',
  },
  {
    level: 'LEVEL 4',
    title: 'AI Product Engineer',
    line1: 'Xây dựng sản phẩm AI từ ý tưởng đến vận hành',
    line2: 'Kết nối kỹ thuật, người dùng và giá trị kinh doanh',
    salary: '40.000.000 - 80.000.000 VNĐ/tháng*',
  },
] as const

export const newsItems = [
  {
    category: 'Tin tức',
    readTime: '10 phút đọc',
    title: 'Logistic Regression và cuộc cách mạng của AI trong y tế',
    image: '/why/coding.png',
  },
  {
    category: 'Câu chuyện',
    readTime: '8 phút đọc',
    title: 'Học sinh THPT xây sản phẩm AI đầu tiên cùng AI57',
    image: '/baochung/mou.jpg',
  },
  {
    category: 'Sự kiện',
    readTime: '6 phút đọc',
    title: 'Hành trình hợp tác Hồng Lĩnh Education – HUST – NIC',
    image: '/why/kiket.png',
  },
] as const

export const footerLinks = [
  { label: 'Về AI57', href: '#about' },
  { label: 'Lộ trình học', href: '#roadmap' },
  { label: 'Khóa học nổi bật', href: '#program' },
] as const

export const deployPartners = [
  'Đại học Bách Khoa Hà Nội',
  'Trung tâm Đổi mới sáng tạo (NIC)',
  'Hồng Lĩnh Education',
] as const
