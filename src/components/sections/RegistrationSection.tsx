import { useState, type FormEvent } from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Container from '../ui/Container'

type Intent = 'reserve' | 'consult'
type Status = 'idle' | 'loading' | 'success' | 'error'

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined

export default function RegistrationSection() {
  const [intent, setIntent] = useState<Intent>('reserve')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const fd = new FormData(form)

    const parentName = String(fd.get('parentName') || '').trim()
    const phone = String(fd.get('phone') || '').trim()
    const childInfo = String(fd.get('childInfo') || '').trim()
    const interest = String(fd.get('interest') || '').trim()
    const notes = String(fd.get('notes') || '').trim()

    if (!parentName || !phone || !childInfo) {
      setStatus('error')
      setErrorMsg('Vui lòng điền đầy đủ họ tên phụ huynh, số điện thoại và thông tin con.')
      return
    }

    if (!SCRIPT_URL) {
      setStatus('error')
      setErrorMsg('Chưa cấu hình Google Sheet. Vui lòng liên hệ quản trị viên.')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          intent,
          parentName,
          phone,
          childInfo,
          interest,
          notes,
        }),
      })

      const result = (await response.json()) as {
        success?: boolean
        message?: string
      }

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Gửi thất bại')
      }

      setStatus('success')
      form.reset()
    } catch (error) {
      setStatus('error')
      setErrorMsg(
        error instanceof Error
          ? error.message
          : 'Không gửi được. Vui lòng thử lại hoặc gọi hotline.',
      )
    }
  }

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
            <p className="text-xs font-bold tracking-wide text-text-muted uppercase">
              Chọn mong muốn của phụ huynh:
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <IntentOption
                selected={intent === 'reserve'}
                title="Tôi muốn đăng ký giữ chỗ"
                subtitle="Ưu tiên xếp lớp & nhận trọn bộ tài liệu"
                onClick={() => setIntent('reserve')}
              />
              <IntentOption
                selected={intent === 'consult'}
                title="Tôi muốn được tư vấn thêm"
                subtitle="Trao đổi thêm về năng lực & thời gian"
                onClick={() => setIntent('consult')}
              />
            </div>

            {status === 'success' ? (
              <div className="mt-8 rounded-xl bg-brand-soft p-6 text-center">
                <p className="text-lg font-bold text-brand">
                  Đã nhận đăng ký thành công!
                </p>
                <p className="mt-2 text-sm text-text-body">
                  Đội ngũ cố vấn sẽ liên hệ trong thời gian sớm nhất.
                </p>
                <button
                  type="button"
                  className="mt-4 text-sm font-semibold text-brand underline-offset-2 hover:underline"
                  onClick={() => setStatus('idle')}
                >
                  Gửi đăng ký khác
                </button>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Họ và tên phụ huynh *"
                    name="parentName"
                    required
                    disabled={status === 'loading'}
                  />
                  <Field
                    label="Số điện thoại liên hệ *"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <Field
                  label="Tên & lớp của con *"
                  name="childInfo"
                  required
                  disabled={status === 'loading'}
                />
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-text-heading">
                    Chọn phần quan tâm
                  </label>
                  <select
                    name="interest"
                    disabled={status === 'loading'}
                    className="w-full appearance-none rounded-lg border border-slate-200 bg-[#f8fafc] px-3 py-3 text-sm outline-none focus:border-brand disabled:opacity-60 sm:py-2.5"
                    defaultValue="full"
                  >
                    <option value="full">
                      Cả AI Foundation (Giai đoạn A + Combo 4 Workshop)
                    </option>
                    <option value="foundation">AI Foundation</option>
                    <option value="workshop">Combo Workshop</option>
                    <option value="consult">Chỉ cần tư vấn</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-text-heading">
                    Ghi chú mong muốn của gia đình
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    disabled={status === 'loading'}
                    placeholder="VD: Mong muốn con biết ứng dụng AI để làm bài tập và làm video clip..."
                    className="w-full resize-y rounded-lg border border-slate-200 bg-[#f8fafc] px-3 py-3 text-sm outline-none focus:border-brand disabled:opacity-60 sm:py-2.5"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="!w-full !rounded-xl !py-3.5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'loading'
                    ? 'Đang gửi...'
                    : intent === 'reserve'
                      ? 'Giữ chỗ ngay →'
                      : 'Nhận tư vấn →'}
                </Button>

                {status === 'error' && (
                  <p className="text-center text-sm text-red-500">{errorMsg}</p>
                )}

                <p className="text-center text-xs leading-relaxed text-text-muted">
                  Hotline hỗ trợ 24/7: 099 696 3399 · Lớp học sĩ số giới hạn để
                  đảm bảo chất lượng mentor
                </p>
              </form>
            )}
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

function IntentOption({
  selected,
  title,
  subtitle,
  onClick,
}: {
  selected: boolean
  title: string
  subtitle: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border p-3.5 text-left transition ${
        selected
          ? 'border-brand bg-brand-soft'
          : 'border-slate-200 bg-white hover:border-brand/40'
      }`}
    >
      <div className="flex items-start gap-2.5">
        <span
          className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
            selected ? 'border-brand' : 'border-slate-300'
          }`}
        >
          {selected && <span className="h-2 w-2 rounded-full bg-brand" />}
        </span>
        <div>
          <p className="text-sm font-bold text-text-heading">{title}</p>
          <p className="mt-0.5 text-xs text-text-muted">{subtitle}</p>
        </div>
      </div>
    </button>
  )
}

function Field({
  label,
  name,
  required,
  type = 'text',
  inputMode,
  autoComplete,
  disabled,
}: {
  label: string
  name: string
  required?: boolean
  type?: string
  inputMode?: 'text' | 'tel' | 'email' | 'numeric'
  autoComplete?: string
  disabled?: boolean
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-text-heading">
        {label}
      </label>
      <input
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        required={required}
        disabled={disabled}
        className="w-full rounded-lg border border-slate-200 bg-[#f8fafc] px-3 py-3 text-sm outline-none focus:border-brand disabled:opacity-60 sm:py-2.5"
      />
    </div>
  )
}
