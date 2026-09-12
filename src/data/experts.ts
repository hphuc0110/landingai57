export type Expert = {
  id: string
  name: string
  degree: string
  highlights: string[]
  footer: string
  initials: string
  photoHue: number
}

export const experts: Expert[] = [
  {
    id: '1',
    name: 'Th.S Việt Nguyễn (Nguyễn Hùng Việt)',
    degree: 'Thạc sỹ Khoa học Máy tính',
    highlights: [
      'Giảng viên Khoa Công nghệ Thông tin, Đại học Kinh tế Quốc dân',
      'Senior AI Engineer tại Berlin',
    ],
    footer:
      'Đồng thiết kế khung chương trình AI57 và trực tiếp mentor học sinh trong các module nền tảng & ML.',
    initials: 'VN',
    photoHue: 210,
  },
  {
    id: '2',
    name: 'TS. Minh Trần',
    degree: 'Tiến sỹ Trí tuệ Nhân tạo',
    highlights: [
      'Nghiên cứu viên Deep Learning & Computer Vision',
      'Giảng viên thỉnh giảng tại các chương trình kỹ sư AI',
    ],
    footer:
      'Phụ trách khối Deep Learning, CV và tối ưu GPU — đồng hành học sinh đến sản phẩm mini-capstone.',
    initials: 'MT',
    photoHue: 195,
  },
  {
    id: '3',
    name: 'Th.S Lan Phạm',
    degree: 'Thạc sỹ Khoa học Dữ liệu',
    highlights: [
      'Chuyên gia LLM, RAG và hệ thống hội thoại',
      'Tư vấn sản phẩm AI cho doanh nghiệp giáo dục',
    ],
    footer:
      'Dẫn dắt module GenAI/LLM và studio sản phẩm, hỗ trợ học sinh hoàn thiện Demo Day tốt nghiệp.',
    initials: 'LP',
    photoHue: 230,
  },
]
