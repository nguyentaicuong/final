# Asset manifest - WEB TUYEN

Gói source này đã gom đầy đủ toàn bộ asset đang được dự án sử dụng.

## Thư mục asset chính

- `public/figma/`: ảnh giao diện dạng `.webp` dùng trực tiếp khi chạy web.
- `public/figma/new-svg/`: SVG mới từ Figma dùng cho nhãn, giải thưởng, điểm phụ, medal, trang trí.
- `src/assets/headings/`: SVG heading được import trực tiếp trong React/Vite.
- `src/assets/decorations/`, `src/assets/images/`: thư mục dự phòng/giữ cấu trúc dự án.

## Khi upload/deploy

Không được chỉ upload riêng `src/` hoặc riêng `index.html`.
Cần upload/build nguyên project để đảm bảo đủ ảnh, SVG, CSS, JS và hiệu ứng.

Nếu dùng Vercel:
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

Nếu dùng hosting thường:
- Dùng file deploy ready.
- Sau khi giải nén, thư mục gốc phải có `index.html`, `assets/`, `figma/`.
