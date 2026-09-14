import { useState, type FormEvent } from 'react'
import Button from '../ui/Button'

type Intent = 'reserve' | 'consult'
type Status = 'idle' | 'loading' | 'success' | 'error'

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined

export default function RegistrationFormPanel({
  className = '',
  onSuccess,
}: {
  className?: string
  onSuccess?: () => void
}) {
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
      setErrorMsg(
        'Vui lòng điền đầy đủ họ tên phụ huynh, số điện thoại và thông tin con.',
      )
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
      // Apps Script redirects with HTML; no-cors still delivers the POST to the sheet.
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
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

      setStatus('success')
      form.reset()
      onSuccess?.()
    } catch {
      setStatus('error')
      setErrorMsg('Không gửi được. Vui lòng thử lại hoặc gọi hotline.')
    }
  }

  return (
    <div className={className}>
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
          <p className="text-lg font-bold text-brand">Đã nhận đăng ký thành công!</p>
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
              Module 1 (Lý thuyết + Thực hành + Workshop tự chọn)
              </option>
              <option value="foundation">Toàn khoá              </option>
              <option value="workshop">Tư vấn thêm              </option>
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
            Hotline hỗ trợ 24/7: 099 696 3399 · Lớp học sĩ số giới hạn để đảm bảo
            chất lượng mentor
          </p>
        </form>
      )}
    </div>
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
