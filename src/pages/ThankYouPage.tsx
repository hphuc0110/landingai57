import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { trackFacebookLead } from '../lib/facebookPixel'
import '../styles/thank-you.css'

const NEURAL_NODES = [
  { cx: 120, cy: 160, r: 4, delay: '0s' },
  { cx: 300, cy: 280, r: 5, delay: '0.3s' },
  { cx: 180, cy: 460, r: 4, delay: '0.6s' },
  { cx: 520, cy: 220, r: 5, delay: '0.9s' },
  { cx: 700, cy: 340, r: 6, delay: '1.2s' },
  { cx: 900, cy: 240, r: 5, delay: '1.5s' },
  { cx: 1060, cy: 400, r: 4, delay: '1.8s' },
  { cx: 640, cy: 560, r: 5, delay: '2.1s' },
  { cx: 420, cy: 600, r: 4, delay: '2.4s' },
  { cx: 1080, cy: 150, r: 4, delay: '2.7s' },
  { cx: 560, cy: 80, r: 3, delay: '1.1s' },
  { cx: 840, cy: 640, r: 4, delay: '0.5s' },
]

const NEXT_STEPS = [
  <>
    Chuyên viên AI57 <b>gọi điện tư vấn</b> lộ trình riêng theo độ tuổi và năng lực của con.
  </>,
  <>
    Anh/chị nhận <b>lộ trình chi tiết</b> và thông tin lớp khai giảng sắp tới.
  </>,
  <>
    Giữ <b>suất học giới hạn</b> cho con nếu anh/chị quyết định đồng hành cùng AI57.
  </>,
]

export default function ThankYouPage() {
  useEffect(() => {
    document.title = 'Cảm ơn bạn — AI57'
    trackFacebookLead()
  }, [])

  return (
    <div className="thank-you-page">
      <div className="ai-bg" aria-hidden="true">
        <div className="grid" />
        <div className="glow g1" />
        <div className="glow g2" />
        <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <line x1="120" y1="160" x2="300" y2="280" />
          <line x1="300" y1="280" x2="180" y2="460" />
          <line x1="300" y1="280" x2="520" y2="220" />
          <line x1="520" y1="220" x2="700" y2="340" />
          <line x1="700" y1="340" x2="900" y2="240" />
          <line x1="900" y1="240" x2="1060" y2="400" />
          <line x1="700" y1="340" x2="640" y2="560" />
          <line x1="180" y1="460" x2="420" y2="600" />
          <line x1="420" y1="600" x2="640" y2="560" />
          <line x1="900" y1="240" x2="1080" y2="150" />
          <line x1="520" y1="220" x2="560" y2="80" />
          <line x1="640" y1="560" x2="840" y2="640" />
          {NEURAL_NODES.map((node) => (
            <circle
              key={`${node.cx}-${node.cy}`}
              className="node"
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              style={{ animationDelay: node.delay }}
            />
          ))}
        </svg>
      </div>

      <main className="card" role="main">

        <div className="check" aria-hidden="true">
          <svg viewBox="0 0 52 52">
            <path d="M14 27 l8 8 l16 -18" />
          </svg>
        </div>

        <h1>
          Cảm ơn anh/chị đã <span className="hl">đăng ký tư vấn</span> cho con!
        </h1>
        <p className="lead">
          Thông tin của anh/chị đã được ghi nhận thành công. Chuyên viên của <b>AI57</b> sẽ liên hệ
          trong thời gian sớm nhất để tư vấn lộ trình học phù hợp cho con.
        </p>

        <section className="next">
          <h2>Điều gì diễn ra tiếp theo</h2>
          {NEXT_STEPS.map((text, index) => (
            <div key={index} className="step">
              <span className="n">{index + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </section>

        <p className="hotline">
          Cần hỗ trợ ngay? Gọi hotline
          <br />
          <a href="tel:0996963399">099 696 3399</a>
        </p>

        <Link className="btn" to="/">
          Quay lại trang chủ
        </Link>

        <div className="partners">
          Chương trình hợp tác cùng <b>Đại học Bách Khoa Hà Nội</b> &nbsp;
          <span className="dot">•</span>&nbsp; Lộ trình chuẩn <b>NVIDIA</b>
          <br />
          © 2026 AI57 — Hồng Lĩnh Education
        </div>
      </main>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=3444396412407082&ev=Lead&noscript=1"
          alt=""
        />
      </noscript>
    </div>
  )
}
