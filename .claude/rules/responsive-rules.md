---
name: responsive-rules
description: Breakpoints, grid patterns, and mobile UX requirements
---

# Responsive Breakpoints

```css
/* Mobile-first approach */
/* xs:  < 480px  — default styles */
/* sm:  ≥ 480px  (giữ default) */
/* md:  ≥ 768px  — tablet */
/* lg:  ≥ 1024px — desktop */

/* Grid pattern example */
.grid-features {
  display: grid;
  grid-template-columns: 1fr;                        /* mobile */
  gap: 16px;
}
@media (min-width: 768px) {
  .grid-features { grid-template-columns: 1fr 1fr; } /* tablet */
}
@media (min-width: 1024px) {
  .grid-features { grid-template-columns: repeat(3, 1fr); } /* desktop */
}
```

## Quy tắc mobile

- Touch target tối thiểu: 44×44px
- Font-size body không nhỏ hơn 16px (tránh zoom iOS)
- Không dùng hover-only interaction
- Video embed: `aspect-ratio: 16/9; width: 100%`
- Hero text: tối đa 2.5rem trên mobile

## Breakpoints hiện tại trong sections.css

- `max-width: 1024px` — Tablet ngang
- `max-width: 768px` — Tablet dọc
- `max-width: 480px` — Mobile
