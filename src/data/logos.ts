export const logos = {
  hle: '/logos/hle.png',
  nic: '/logos/nic.png',
  ai57: '/logos/ai57.png',
  hust: '/logos/hust.png',
} as const

export type LogoKey = keyof typeof logos

export const partnerBrands = [
  {
    key: 'hle' as const,
    name: 'HỒNG LĨNH EDUCATION',
    image: '/baochung/mou.jpg',
    imageAlt: 'Lễ ký kết hợp tác Hồng Lĩnh Education',
  },
  {
    key: 'hust' as const,
    name: 'ĐẠI HỌC BÁCH KHOA HÀ NỘI',
    image: '/why/kiket.png',
    imageAlt: 'Đại học Bách Khoa Hà Nội phát biểu tại sự kiện',
  },
  {
    key: 'nic' as const,
    name: 'TRUNG TÂM SÁNG TẠO ĐỔI MỚI QUỐC GIA',
    image: '/baochung/motminh.jpg',
    imageAlt: 'Trung tâm Đổi mới sáng tạo Quốc gia tại hội nghị',
  },
]
