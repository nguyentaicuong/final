# Kết nối form đăng ký với Google Sheet

Sheet đích đã được ghi trong source để đối chiếu:

https://docs.google.com/spreadsheets/d/10RDWOQmqecXrCx1MyFTaB4dS0FaYj4kp4AbzfU89QGk/edit?gid=0#gid=0

Website tĩnh trên Vercel không thể ghi trực tiếp vào link `docs.google.com/spreadsheets/...`. Cần tạo một Google Apps Script Web App làm cổng nhận dữ liệu.

## 1. Tạo tiêu đề cột trong Google Sheet

Tạo dòng đầu tiên:

```txt
Thời gian | Họ và tên | Số điện thoại | Phòng ban - Công ty | Nguồn
```

## 2. Apps Script

Trong Google Sheet: `Extensions / Tiện ích mở rộng` -> `Apps Script`, dán code sau:

```javascript
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const body = e.postData && e.postData.contents ? e.postData.contents : '';
    let data = {};

    if (body && body.trim().startsWith('{')) {
      data = JSON.parse(body);
    } else {
      data = e.parameter || {};
    }

    sheet.appendRow([
      new Date(),
      data.fullName || '',
      data.phone || '',
      data.department || '',
      data.source || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('Xuân Cầu registration webhook is running.');
}
```

Nếu tab trong sheet không tên `Sheet1`, đổi dòng `const SHEET_NAME = 'Sheet1';` đúng với tên tab.

## 3. Deploy Apps Script

`Deploy / Triển khai` -> `New deployment / Lần triển khai mới` -> chọn `Web app / Ứng dụng web`.

- Execute as / Thực thi với tư cách: `Me / Tôi`
- Who has access / Ai có quyền truy cập: `Anyone / Bất kỳ ai`

Copy URL dạng:

```txt
https://script.google.com/macros/s/.../exec
```

## 4. Gắn vào Vercel

Vào Vercel project -> `Settings` -> `Environment Variables`:

```txt
Name: VITE_GOOGLE_SHEET_WEBHOOK_URL
Value: https://script.google.com/macros/s/.../exec
```

Sau đó redeploy project.
