---
name: section-layout
description: Complete section-by-section layout specification for the landing page
---

# Cấu Trúc Trang (Sections)

## 1. `#hero` — Hero Section
- **Nội dung:** Tagline lớn + sub-headline sứ mệnh + CTA button "Xem Video Ngay"
- **Layout:** Full-width, gradient xanh lam, text trắng, hình ảnh Nam Hà bên phải (desktop) / bên dưới (mobile)
- **Animation:** Fade-in từ dưới lên (staggered: title → subtitle → CTA → image)
- **Tagline gợi ý:** *"Sống Khỏe Mạnh – Bình An – Hạnh Phúc"*

## 2. `#stats` — Số Liệu Uy Tín
- **Nội dung:** 3–4 con số nổi bật (6+ năm kinh nghiệm | hàng nghìn khách hàng | 100% miễn phí | triệu gia đình)
- **Layout:** Grid 4 cột (desktop) / 2 cột (mobile), card nền trắng có border xanh lam nhạt
- **Animation:** Fade-up khi scroll vào viewport (số liệu hiển thị tĩnh)

## 3. `#about` — Về Nam Hà
- **Nội dung:** Ảnh + tiểu sử ngắn + sứ mệnh "Việt Nam không còn ung thư"
- **Layout:** 2 cột (ảnh trái / text phải), đảo chiều trên mobile
- **Animation:** Slide-in từ 2 phía (AOS: fade-right / fade-left)

## 4. `#values` — Giá Trị Cốt Lõi
- **Nội dung:** 3 card — Chân / Thiện / Mỹ, mỗi card có icon + mô tả ngắn
- **Layout:** Grid 3 cột (desktop) / 1 cột (mobile), hover nổi lên shadow xanh lam
- **Animation:** AOS `zoom-in` với delay stagger 100ms mỗi card

## 5. `#features` — Tại Sao Chọn Nam Hà
- **Nội dung:** 4–6 feature item (Miễn phí | Kiến thức thực chứng | Cộng đồng | Dễ áp dụng...)
- **Layout:** 2-cột grid (desktop) / 1 cột (mobile), icon + title + mô tả
- **Animation:** AOS `fade-up` từng item

## 6. `#video` — Video Nổi Bật
- **Nội dung:** Embed YouTube thumbnail + tiêu đề + nút xem
- **Layout:** 1 video featured lớn + grid 3 video nhỏ bên dưới (desktop) / 1 cột (mobile)
- **Animation:** AOS `fade-up`, thumbnail có hover scale(1.01)

## 7. `#testimonials` — Cảm Nhận Cộng Đồng
- **Nội dung:** 3–4 testimonial card (ảnh avatar + tên + câu chuyện ngắn)
- **Layout:** Grid 2 cột (desktop) / 1 cột (tablet, mobile)
- **Animation:** AOS `flip-left`

## 8. `#mission` — Lời Kêu Gọi Lan Tỏa
- **Nội dung:** Đoạn text cảm xúc về sứ mệnh + nút "Chia Sẻ Ngay" / "Theo Dõi Kênh"
- **Layout:** Full-width, nền gradient xanh lam, text trắng
- **Animation:** AOS `fade-up`

## 9. `#faq` — Câu Hỏi Thường Gặp
- **Nội dung:** 5–6 câu hỏi dạng accordion
- **Layout:** Single column, expand/collapse smooth
- **Animation:** Accordion animation CSS transition `max-height`

## 10. `#footer` — Footer
- **Nội dung:** Logo + tagline + links mạng xã hội + copyright
- **Layout:** 3 cột (about / links / social), collapse 2 cột (tablet) / 1 cột (mobile)
