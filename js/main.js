/* ===== NAM HÀ SỨC KHỎE CHỦ ĐỘNG — main.js ===== */
/* Scroll reveal, navbar scroll, smooth scroll, share */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Scroll Reveal Animation (IntersectionObserver) ── */
  var revealElements = document.querySelectorAll('[data-aos]');

  if (revealElements.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            observer.unobserve(el);
            /* Đọc delay từ data-aos-delay, mặc định 0 */
            var delay = parseInt(el.getAttribute('data-aos-delay')) || 0;
            /* Dùng requestAnimationFrame (2 lần) để browser
               kịp paint trạng thái opacity:0 rồi mới animate */
            requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                /* Thiết lập transition-delay để stagger */
                if (delay > 0) {
                  el.style.transitionDelay = delay + 'ms';
                }
                el.classList.add('aos-animate');
              });
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── Navbar scroll behavior ── */
  var navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }, { passive: true });

  /* ── Hamburger menu toggle ── */
  var toggle = document.querySelector('.navbar__toggle');
  var menu = document.querySelector('.navbar__links');

  if (toggle && menu) {
    /* Tạo overlay mờ phía sau menu */
    var overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function () {
      closeMenu();
    });

    function closeMenu() {
      menu.classList.remove('is-open');
      overlay.classList.remove('is-visible');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Mở menu');
    }

    function openMenu() {
      menu.classList.add('is-open');
      overlay.classList.add('is-visible');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Đóng menu');
    }

    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeMenu(); else openMenu();
    });

    /* Đóng menu khi bấm vào link */
    document.querySelectorAll('[data-nav-close]').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ── Smooth scroll for anchor links (trừ skip-link) ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      if (anchor.classList.contains('skip-link')) return;
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── FAQ Accordion ── */
  var faqQuestions = document.querySelectorAll('.faq__question');
  faqQuestions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.faq__item');
      var isOpen = item.classList.contains('faq__item--open');
      faqQuestions.forEach(function (q) {
        q.closest('.faq__item').classList.remove('faq__item--open');
        q.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('faq__item--open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

});

/* ── Share Website (Web Share API) ── */
function shareWebsite() {
  if (navigator.share) {
    navigator.share({
      title: 'Nam Hà Sức Khỏe Chủ Động',
      text: 'Sống Khỏe Mạnh – Bình An – Hạnh Phúc — Hành trình chăm sóc sức khỏe chủ động dành cho mọi gia đình Việt.',
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert('Đã copy link trang web! Hãy chia sẻ cho người thân của bạn.');
  }
}
