# WEB_TUYEN_FIXED - ghi chú chỉnh sửa

Đã sửa theo 4 yêu cầu trong ảnh feedback:

1. Section Tổng quan:
   - Thay 4 icon bằng icon vector rõ nét từ lucide-react.
   - Mỗi icon bám sát nội dung bên dưới: Đối tượng, Quy mô, Mục tiêu, Tọa độ.
   - Không còn icon bị mờ hoặc trùng lặp.

2. Section 03 Chặng đua:
   - Đổi sang asset ảnh Enhanced để ảnh trong box đậm và rõ hơn.
   - Tăng contrast/saturation/brightness và giảm lớp nền phủ ở panel ảnh.

3. Nền section 03 Chặng đua:
   - Đổi nền section sang gradient xám xanh/kem ấm.
   - Tăng border, shadow và nền card để không bị lẫn với background trắng xung quanh.

4. Section Điểm số chiến thuật:
   - Thiết kế lại thành 1 khối tổng gồm 2 box chữ nhật ngang xếp dọc.
   - Box trên: Điểm số chiến thuật + bảng điểm.
   - Box dưới: Lật ngược thế cờ + hệ thống điểm phụ.
   - Tối ưu lại layout responsive cho desktop và mobile.

## Chạy dự án

```bash
npm install
npm run dev
npm run build
npm run lint
```

Build và lint đã chạy thành công trong môi trường kiểm tra.
