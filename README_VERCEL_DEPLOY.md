# Future Makers Landing Page - Vercel Source

Source này đã bao gồm đầy đủ `src/`, `public/figma/` ảnh WebP, SVG heading/asset, hiệu ứng và cấu hình Vite.

## Chạy local
```bash
npm install
npm run dev -- --host 0.0.0.0
```

## Build kiểm tra
```bash
npm run lint
npm run build
```

## Deploy Vercel
Import repo chứa source này trên Vercel với cấu hình:
- Framework Preset: Vite
- Install Command: npm install
- Build Command: npm run build
- Output Directory: dist

## Form đăng ký
Form cuối trang gửi dữ liệu tới `marketing@xuancau.com.vn` qua FormSubmit. Nếu email nhận chưa từng kích hoạt FormSubmit, lần đầu có thể cần xác nhận trong hộp thư để nhận dữ liệu.
