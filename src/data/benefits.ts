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
    body: 'Không phải một khoá học AI lồng ghép qua loa vài buổi. AI57 xây dựng lộ trình 6 module xuyên suốt — từ nền tảng AI & tư duy tạo sinh, Python & Machine Learning, toán học ứng dụng, thị giác máy tính, đến LLM/RAG và tự tay xây sản phẩm AI hoàn chỉnh. Mỗi module đều có sản phẩm đầu ra cụ thể, được đánh giá rõ ràng — học sinh biết chính xác mình đang tiến đến đâu, không học chung chung rồi để đó.',
    footer: '6 module chuẩn đầu ra',
  },
  {
    id: '2',
    number: '02',
    title: 'Đồng hành cùng NIC, HUST & NVIDIA',
    body: 'Chương trình không phải sản phẩm tự phát của một trung tâm đơn lẻ. AI57 được xây dựng với sự đồng hành của Trung tâm Đổi mới sáng tạo Quốc gia (NIC) và Đại học Bách khoa Hà Nội (HUST) — hai đơn vị đầu ngành về công nghệ tại Việt Nam, cùng nền tảng công nghệ từ NVIDIA. Đây là sự bảo chứng cho chất lượng chuyên môn, không chỉ là lời quảng cáo.',
    footer: 'Bảo chứng chuyên môn hàng đầu',
  },
  {
    id: '3',
    number: '03',
    title: 'Kèm sát 1 mentor / 5 học sinh',
    body: 'Học AI không thể học một mình giữa một lớp học đông đúc, dễ bị bỏ quên. Tại AI57, cứ 5 học sinh sẽ có 1 mentor đồng hành trực tiếp — theo sát tiến độ, kịp thời gỡ vướng khi học sinh gặp khó, đảm bảo không ai bị tụt lại phía sau trong suốt hành trình học.',
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
