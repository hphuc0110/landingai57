import Badge from '../ui/Badge'
import Container from '../ui/Container'
import RegistrationFormPanel from '../registration/RegistrationFormPanel'

export default function RegistrationSection() {
  return (
    <section id="dang-ky" className="bg-[#f7f9fc] py-10 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="!rounded-full">Ưu đãi & tiếp nhận hồ sơ</Badge>
          <h2 className="mt-4 text-xl font-extrabold text-text-heading sm:text-3xl">
            Đăng ký giữ chỗ hoặc nhận tư vấn miễn phí
          </h2>
          <p className="mt-2 text-sm text-text-muted sm:text-base">
            Chọn mức độ sẵn sàng phù hợp với gia đình.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-[0.9fr_1.2fr]">
          <div className="order-1 rounded-2xl border border-slate-200 bg-white p-4 sm:p-7 lg:order-2">
            <RegistrationFormPanel />
          </div>

          <aside className="order-2 space-y-4 sm:space-y-5 lg:order-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="text-base font-bold text-brand sm:text-lg">
                Cam kết chất lượng AI Foundation
              </h3>
              <p className="mt-1 text-sm text-text-muted">
                Đồng hành cùng học sinh đến kết quả
              </p>
              <ul className="mt-5 space-y-4">
                {[
                  {
                    title: 'Mentor hỗ trợ thực hành',
                    desc: 'Không lo con bị tụt lại phía sau nếu chưa từng tiếp xúc công nghệ.',
                  },
                  {
                    title: 'Đầu ra 05 sản phẩm thật',
                    desc: 'Học sinh sở hữu portfolio gồm web app, video AI, workflow tự động và AI for Good.',
                  },
                  {
                    title: 'Bảo mật thông tin trẻ em',
                    desc: 'Thông tin học sinh được bảo vệ tuyệt đối và chỉ dùng cho mục đích xếp lớp.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                      ✓
                    </span>
                    <div>
                      <p className="text-sm font-bold text-text-heading">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-sm text-text-body">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-brand p-5 text-white sm:p-6">
              <p className="text-sm text-white/80">Cần trao đổi ngay?</p>
              <h3 className="mt-1 text-lg font-bold sm:text-xl">
                Đội ngũ cố vấn luôn sẵn sàng
              </h3>
              <p className="mt-2 text-sm text-white/90">
                Gọi điện hoặc nhắn tin trực tiếp để được tư vấn lộ trình phù hợp
                với lứa tuổi của con.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:0996963399"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-dark px-3 py-3 text-sm font-bold text-white sm:py-2.5"
                >
                  ☎ 099 696 3399
                </a>
                <a
                  href="https://zalo.me/0996963399"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-3 text-sm font-bold text-brand sm:py-2.5"
                >
                  Chat Zalo
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
