/**
 * AI57 Landing — nhận đăng ký từ website → ghi vào Google Sheet
 *
 * CÁCH SETUP (làm 1 lần):
 * 1. Tạo Google Sheet mới (sheet cũ có thể xóa/archive).
 * 2. Đổi tên tab đầu tiên thành: DangKy
 * 3. Extensions → Apps Script → dán toàn bộ file này → Save.
 * 4. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy Web app URL → dán vào file .env:
 *    VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/...../exec
 * 6. Restart `npm run dev`
 *
 * Lưu ý: Frontend gửi bằng fetch mode "no-cors" vì Web App của Google
 * redirect trả HTML — browser không đọc được JSON response (dù sheet vẫn ghi đúng).
 *
 * Khi chạy lần đầu, script tự tạo hàng tiêu đề nếu sheet trống.
 */

var SHEET_NAME = 'DangKy'

var HEADERS = [
  'Thời gian',
  'Mong muốn',
  'Họ tên phụ huynh',
  'Số điện thoại',
  'Tên & lớp của con',
  'Phần quan tâm',
  'Ghi chú',
]

var INTEREST_LABELS = {
  full: 'Cả AI Foundation (Giai đoạn A + Combo 4 Workshop)',
  foundation: 'AI Foundation',
  workshop: 'Combo Workshop',
  consult: 'Chỉ cần tư vấn',
}

var INTENT_LABELS = {
  reserve: 'Đăng ký giữ chỗ',
  consult: 'Nhận tư vấn',
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents)
    var sheet = getOrCreateSheet_()

    sheet.appendRow([
      new Date(),
      INTENT_LABELS[data.intent] || data.intent || '',
      String(data.parentName || '').trim(),
      String(data.phone || '').trim(),
      String(data.childInfo || '').trim(),
      INTEREST_LABELS[data.interest] || data.interest || '',
      String(data.notes || '').trim(),
    ])

    return json_({ success: true })
  } catch (err) {
    return json_({ success: false, message: String(err) })
  }
}

function doGet() {
  return json_({ ok: true, service: 'AI57 Registration' })
}

function getOrCreateSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS)
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold')
    sheet.setFrozenRows(1)
  }

  return sheet
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  )
}
