export type Benefit = {
  id: string
  number: string
  title: string
  body: string
  footer: string
}

export const benefits: Benefit[] = [
  {
    id: '1',
    number: '01',
    title: 'Lộ trình bài bản, chuẩn đầu ra thực chất',
    body: 'AI57 thiết kế lộ trình đào tạo từ nền tảng tư duy tạo sinh, lập trình dữ liệu đến các công nghệ chuyên sâu như Thị giác máy tính và Mô hình ngôn ngữ lớn (LLMs/RAG). Tách biệt rõ giữa lý thuyết cốt lõi và hệ thống workshop thực hành chuyên sâu (coding/lab), mỗi module giúp học sinh trực tiếp tạo ra sản phẩm thực tế, xây dựng trọn bộ Portfolio công nghệ chuẩn mực thay vì chỉ học công cụ bề nổi.',
    footer: '6 module chuẩn đầu ra',
  },
  {
    id: '2',
    number: '02',
    title: 'Chương trình được xây dựng trên nền tảng vững chắc',
    body: 'AI57 không phải là sản phẩm tự phát của một trung tâm riêng lẻ. Chương trình được thiết kế với sự hỗ trợ chiến lược từ các hệ sinh thái đổi mới sáng tạo, cơ sở giáo dục công nghệ hàng đầu và hạ tầng công nghệ chuẩn quốc tế. Đây chính là lời cam kết vững chắc nhất cho chất lượng chuyên môn và giá trị thực tế mang lại.',
    footer: 'Bảo chứng chuyên môn hàng đầu',
  },
  {
    id: '3',
    number: '03',
    title: 'Kèm sát 1 mentor / 5 học sinh',
    body: 'Mô hình lớp học tiêu chuẩn với tỉ lệ 1 mentor trực tiếp đồng hành cùng tối đa 5 học sinh. Mentor theo sát trong quá trình học, hướng dẫn sửa lỗi (debug) 1:1 trong các buổi workshop thực hành và hỗ trợ hoàn thiện dự án, đảm bảo học sinh làm chủ kiến thức và không một ai bị bỏ lại phía sau.',
    footer: '1 mentor | 5 học sinh',
  },
  {
    id: '4',
    number: '04',
    title: 'Hình thức học linh hoạt',
    body: 'Học online trực tiếp cùng giảng viên và mentor, không ràng buộc bởi khoảng cách địa lý — dù ở tỉnh thành nào cũng học được, không cần chuyển nhà hay tìm trung tâm gần nơi ở. Lịch học được sắp xếp phù hợp với thời gian biểu của học sinh, chỉ cần một thiết bị có kết nối internet là có thể tham gia đầy đủ mọi buổi học, workshop và thực hành.',
    footer: 'Học online trực tiếp linh hoạt',
  },
]
