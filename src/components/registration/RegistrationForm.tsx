import { useState, type FormEvent, type ReactNode } from 'react'

function FieldLabel({ children, required }: { children: ReactNode; required?: boolean }) {
  return (
    <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-gray-800">
      {children}
      {required && <span className="text-primary"> *</span>}
    </label>
  )
}

const inputClass =
  'w-full rounded-lg border-0 bg-[#f9f8f3] px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary/25'

type FormData = {
  studentName: string
  guardianName: string
  phone: string
  contactMethod: string
  contactOther: string
  notes: string
}

const initialForm: FormData = {
  studentName: '',
  guardianName: '',
  phone: '',
  contactMethod: 'Zalo',
  contactOther: '',
  notes: '',
}

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL

export default function RegistrationForm({ inModal = false }: { inModal?: boolean }) {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (status === 'error') {
      setStatus('idle')
      setErrorMsg('')
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const studentName = form.studentName.trim()
    const phone = form.phone.trim()

    if (!studentName || !phone) {
      setStatus('error')
      setErrorMsg('Vui lòng nhập họ tên học sinh và số điện thoại.')
      return
    }

    if (form.contactMethod === 'Khác' && !form.contactOther.trim()) {
      setStatus('error')
      setErrorMsg('Vui lòng ghi rõ hình thức liên hệ.')
      return
    }

    if (!SCRIPT_URL) {
      setStatus('error')
      setErrorMsg('Chưa cấu hình URL Google Script. Vui lòng liên hệ quản trị viên.')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          studentName,
          guardianName: form.guardianName.trim(),
          phone,
          contactMethod: form.contactMethod,
          contactOther: form.contactOther.trim(),
          notes: form.notes.trim(),
        }),
      })

      const result = (await response.json()) as { success?: boolean; message?: string }

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Gửi thất bại')
      }

      setStatus('success')
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
      setErrorMsg(
        error instanceof Error
          ? error.message
          : 'Không gửi được. Vui lòng thử lại sau hoặc liên hệ trực tiếp.',
      )
    }
  }

  return (
    <div className={`relative ${inModal ? '' : 'pt-4'}`}>
      {!inModal && (
        <span className="absolute -right-1 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xs font-extrabold italic text-white shadow-lg rotate-12 sm:-right-2 sm:h-16 sm:w-16 sm:text-sm">
          Hot!
        </span>
      )}

      <form
        className={
          inModal
            ? 'space-y-4'
            : 'rounded-2xl border-t-[5px] border-r-[5px] border-primary border-l border-b border-gray-100 bg-white p-4 shadow-xl sm:p-6 md:p-8'
        }
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <FieldLabel required>Họ tên học sinh</FieldLabel>
              <input
                type="text"
                className={inputClass}
                placeholder="Nguyễn Văn A"
                value={form.studentName}
                onChange={(e) => update('studentName', e.target.value)}
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <FieldLabel>Người giám hộ</FieldLabel>
              <input
                type="text"
                className={inputClass}
                placeholder="Nguyễn Văn B (phụ huynh)"
                value={form.guardianName}
                onChange={(e) => update('guardianName', e.target.value)}
                disabled={status === 'loading'}
              />
            </div>
          </div>

          <div>
            <FieldLabel required>Số điện thoại</FieldLabel>
            <input
              type="tel"
              className={inputClass}
              placeholder="09xx xxx xxx"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              disabled={status === 'loading'}
            />
          </div>

          <div>
            <FieldLabel>Hình thức liên hệ</FieldLabel>
            <div className="relative">
              <select
                className={`${inputClass} appearance-none pr-10`}
                value={form.contactMethod}
                onChange={(e) => update('contactMethod', e.target.value)}
                disabled={status === 'loading'}
              >
                <option value="Zalo">Zalo</option>
                <option value="Điện thoại">Điện thoại</option>
                <option value="Email">Email</option>
                <option value="Facebook">Facebook</option>
                <option value="Khác">Khác</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                ▾
              </span>
            </div>
            {form.contactMethod === 'Khác' && (
              <div className="mt-3">
                <FieldLabel required>Vui lòng ghi rõ hình thức liên hệ</FieldLabel>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="VD: Telegram, WhatsApp..."
                  value={form.contactOther}
                  onChange={(e) => update('contactOther', e.target.value)}
                  disabled={status === 'loading'}
                />
              </div>
            )}
          </div>

          <div>
            <FieldLabel>Thông tin thêm</FieldLabel>
            <textarea
              rows={3}
              className={inputClass}
              placeholder="VD: con đang học lớp mấy, mong muốn của gia đình..."
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              disabled={status === 'loading'}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="mt-6 min-h-[48px] w-full rounded-xl bg-primary py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? 'Đang gửi...' : 'Gửi đăng ký tư vấn'}
        </button>

        {status === 'success' && (
          <p className="mt-4 text-center text-sm font-medium text-green-600">
            Đăng ký thành công! Chúng tôi sẽ liên hệ trong vòng 24h.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-center text-sm text-red-500">{errorMsg}</p>
        )}

        <p className="mt-4 text-center text-xs italic text-gray-400">
          Thông tin của bạn được cam kết bảo mật theo tiêu chuẩn AI57.
        </p>
      </form>
    </div>
  )
}
