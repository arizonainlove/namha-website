---
name: design-system
description: Color palette, typography, and spacing scale for the Nam Ha website
---

# Design System

## Bảng Màu

```css
:root {
  /* Primary — Xanh lam thương hiệu */
  --color-primary:       #39afd5;   /* Xanh lam đặc trưng */
  --color-primary-light: #5FC7E6;   /* Hover state */
  --color-primary-dark:  #1A8DB3;   /* Active / Dark bg */

  /* Accent — Vàng ấm */
  --color-accent:        #F5A623;   /* Vàng ấm — CTA, highlight */
  --color-accent-soft:   #FFF8E7;   /* Background section nhẹ */

  /* Neutral */
  --color-bg:            #FAFAF9;   /* Nền trang */
  --color-surface:       #FFFFFF;   /* Card, modal */
  --color-text-primary:  #1A1A1A;   /* Tiêu đề */
  --color-text-secondary:#4B5563;   /* Body text */
  --color-text-muted:    #9CA3AF;   /* Caption, label */
  --color-border:        #E5E7EB;   /* Divider, border */

  /* Gradient */
  --gradient-hero: linear-gradient(135deg, #0F7DA3 0%, #39afd5 50%, #5FC7E6 100%);
  --gradient-card: linear-gradient(180deg, rgba(57,175,213,0.05) 0%, transparent 100%);
}
```

## Typography

```css
/* Heading — Tối giản, hiện đại, chuyên nghiệp */
font-family: 'Be Vietnam Pro', sans-serif;
font-weight: 700;
letter-spacing: -0.02em (H1) / -0.01em (H2);
/* H1: clamp(2rem, 5vw, 3.5rem) | H2: clamp(1.5rem, 3.5vw, 2.25rem) | H3: clamp(1.15rem, 2vw, 1.5rem) */

/* Body — Dễ đọc, thân thiện */
font-family: 'Be Vietnam Pro', sans-serif;
/* Body: 1rem (16px) | Small: 0.875rem | Caption: 0.75rem */
/* Line-height: 1.7 cho body text */
```

## Spacing Scale

```
4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px · 96px · 128px
Section padding: 80px (desktop) / 48px (mobile)
Container max-width: 1200px, padding: 0 24px
```
