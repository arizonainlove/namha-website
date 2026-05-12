---
name: animation-rules
description: CSS Transition + IntersectionObserver configuration, section-specific animation mappings, and CSS transition rules
---

# Quy Tắc Animation

## Kỹ Thuật: CSS Transition + IntersectionObserver

Thay vì dùng thư viện AOS (CDN dễ bị chặn ở Việt Nam), animation được implement bằng CSS transitions kết hợp IntersectionObserver trong `js/main.js`.

- **CSS:** Class `[data-aos]` khởi tạo opacity:0 + transform, class `.aos-animate` kích hoạt opacity:1 + transform:none
- **JS:** IntersectionObserver phát hiện khi element vào viewport → thêm class `.aos-animate`
- **Transition:** 1.4s cubic-bezier(0.15, 0.85, 0.35, 1) cho cả opacity và transform

## Bộ Animation Theo Section

| Section | AOS attribute | Delay |
|---------|--------------|-------|
| Hero elements | `fade-up` | stagger 150ms |
| Stats cards | `fade-up` | 0 / 100 / 200ms |
| About image | `fade-right` | 0ms |
| About text | `fade-left` | 100ms |
| Value cards | `zoom-in` | 0 / 100 / 200ms |
| Feature items | `fade-up` | 50ms mỗi item |
| Video | `fade-up` | 0ms |
| Testimonials | `flip-left` | 0 / 150 / 300ms |
| Mission | `fade-up` | 0ms |
| FAQ items | `fade-up` | 50ms mỗi item |

## CountUp Animation (Stats Section)

Hiện tại các số liệu stats hiển thị tĩnh. Nếu muốn bật hiệu ứng đếm, implement lại hàm `animateCount()` trong `main.js`:

```javascript
function animateCount(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Math.floor(start).toLocaleString('vi-VN');
  }, 16);
}
```

## CSS Transitions

```css
a, button, .card { transition: all 0.25s ease; }

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(57, 175, 213, 0.15);
}
```
