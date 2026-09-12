export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: '01',
    question: 'Học online có hiệu quả như học trực tiếp không?',
    answer:
      'Lớp học trực tuyến đồng bộ, giảng viên tương tác trực tiếp — không phải video ghi sẵn. Mỗi buổi có hỏi đáp và bài kiểm tra ngay sau buổi học. Có mentor theo dõi sát sao.',
  },
  {
    id: '02',
    question: 'Ai sẽ theo sát con trong suốt khoá học?',
    answer:
      '1 mentor kèm trực tiếp 5 học sinh, đồng hành xuyên suốt và giải đáp thắc mắc bất cứ lúc nào trong quá trình học.',
  },
  {
    id: '03',
    question: 'Con em không giỏi công nghệ có theo được không?',
    answer:
      'Có sự hướng dẫn từ đội ngũ giảng viên và mentor chuyên môn cao để giúp con theo kịp. Lộ trình đi từ dễ đến khó qua 6 module, mỗi module có sản phẩm đầu ra cụ thể để phụ huynh theo dõi.',
  },
  {
    id: '04',
    question: 'Học online thì phụ huynh giám sát con thế nào?',
    answer:
      'Buổi học sẽ được giám sát trực tiếp bởi giảng viên và mentor đồng hành, mỗi mentor theo sát 5 học sinh. Mỗi buổi có bài nộp và điểm số cụ thể; phụ huynh nhận báo cáo tiến độ theo module.',
  },
  {
    id: '05',
    question: 'Cần thiết bị gì để học online?',
    answer:
      'Máy tính có trình duyệt hiện hành, đường truyền ổn định, tai nghe có micro. Không cần cấu hình máy mạnh hay cài đặt phức tạp.',
  },
  {
    id: '06',
    question: 'Vì sao chọn học online tại AI57 thay vì trung tâm gần nhà?',
    answer:
      'Con được học cùng giảng viên đại học và kỹ sư AI đang làm việc thực tế, cùng mentor kèm sát 1:5 — điều khó có ở một trung tâm địa phương.',
  },
]
