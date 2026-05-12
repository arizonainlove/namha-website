---
name: deploy-checklist
description: Pre-deploy quality checks including Lighthouse, responsive testing, meta tags, and performance
---

# Checklist Trước Khi Deploy

- [ ] Lighthouse score ≥ 90 (Performance, Accessibility, SEO)
- [ ] Test trên iPhone SE (375px) và Samsung Galaxy A series (360px)
- [ ] Tất cả animation chạy mượt (không giật lag trên mid-range Android)
- [ ] `prefers-reduced-motion` media query — tắt animation cho user cần
- [ ] Alt text cho tất cả `<img>`
- [ ] Meta tags: title, description, og:image, og:title
- [ ] Favicon đặt đúng
- [ ] YouTube embed dùng `loading="lazy"` và `privacy-enhanced mode`
- [ ] Không có console error
- [ ] CTA button có ít nhất 1 anchor link đến YouTube / Facebook
