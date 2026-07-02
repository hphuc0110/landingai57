export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Con tôi thực sự yêu thích các buổi thực hành tại AI57. Giảng viên từ Bách Khoa rất tận tâm và phương pháp học thực chiến giúp con tự tin hơn.',
    name: 'Chị Nguyễn Thị Lan',
    role: 'Phụ huynh học sinh lớp 10',
  },
  {
    quote:
      'Sau Module 1, mình đã tự làm được dự án AI nhỏ đầu tiên. Lộ trình rõ ràng và phòng lab trang bị GPU NVIDIA thật sự chuyên nghiệp.',
    name: 'Trần Minh Đức',
    role: 'Học sinh lớp 12',
  },
  {
    quote:
      'Chương trình chuẩn NVIDIA giúp con có nền tảng vững để theo đuổi ngành CNTT. Đội ngũ tư vấn hỗ trợ rất nhiệt tình từ đầu đến cuối.',
    name: 'Anh Phạm Văn Hùng',
    role: 'Phụ huynh học sinh lớp 11',
  },
]
