/* ============================================================
   ALDEMİR GRUP — app.js
   Vanilla JS. Harici bağımlılık YOK. (nav · reveal · sayaç · form)
   ============================================================ */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Yıl ---- */
  var yil = document.getElementById('yil');
  if (yil) yil.textContent = new Date().getFullYear();

  /* ---- Header scroll durumu ---- */
  var header = document.getElementById('header');
  var onScroll = function () {
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobil menü ---- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  function closeMenu() {
    if (!toggle || !links) return;
    toggle.setAttribute('aria-expanded', 'false');
    links.classList.remove('open');
    document.body.classList.remove('nav-open');
  }
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      links.classList.toggle('open', !open);
      document.body.classList.toggle('nav-open', !open);
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---- Reveal (IntersectionObserver) ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---- Sayaç animasyonu ----
     data-count = hedef sayı, data-suffix = sonek. 0 ise atlanır
     (gerçek rakamlar patron tarafından eklenecek).            */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (target === 0 || reduce) {
      el.textContent = target.toLocaleString('tr-TR');
      if (suffix) el.innerHTML = target.toLocaleString('tr-TR') + '<span class="suf">' + suffix + '</span>';
      return;
    }
    var start = null, dur = 1600;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(target * eased);
      el.innerHTML = val.toLocaleString('tr-TR') + '<span class="suf">' + suffix + '</span>';
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var nums = document.querySelectorAll('.stat .num[data-count]');
  if (nums.length) {
    if (!('IntersectionObserver' in window)) {
      nums.forEach(animateCount);
    } else {
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { animateCount(en.target); io2.unobserve(en.target); }
        });
      }, { threshold: 0.5 });
      nums.forEach(function (el) { io2.observe(el); });
    }
  }

  /* ---- İletişim formu ----
     Formspree yapılandırılmışsa AJAX gönderir; aksi halde
     mailto fallback ile kullanıcının e-posta istemcisini açar. */
  var form = document.getElementById('contactForm');
  var statusEl = document.getElementById('formStatus');
  function setStatus(msg, ok) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.className = 'form-status ' + (ok ? 'ok' : 'err');
  }
  function mailtoFallback(data) {
    var body =
      'Ad Soyad: ' + (data.ad || '') + '\n' +
      'Telefon: ' + (data.telefon || '') + '\n' +
      'E-posta: ' + (data.eposta || '') + '\n\n' +
      'Mesaj:\n' + (data.mesaj || '') + '\n\n' +
      '(KVKK Aydınlatma Metni onaylandı.)';
    var href = 'mailto:info@aldemirglobal.com'
      + '?subject=' + encodeURIComponent('Aldemir Grup — Web İletişim Formu')
      + '&body=' + encodeURIComponent(body);
    window.location.href = href;
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var fd = new FormData(form);
      var data = Object.fromEntries(fd.entries());
      var action = form.getAttribute('action') || '';
      var configured = action.indexOf('REPLACE_FORM_ID') === -1 && action.indexOf('formspree.io') !== -1;

      if (!configured) {
        // Formspree henüz ayarlanmadı → mailto ile gönder
        setStatus('E-posta uygulamanız açılıyor…', true);
        mailtoFallback(data);
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.style.opacity = '.7'; }
      setStatus('Gönderiliyor…', true);

      fetch(action, {
        method: 'POST',
        body: fd,
        headers: { 'Accept': 'application/json' }
      }).then(function (r) {
        if (r.ok) {
          form.reset();
          setStatus('Teşekkürler! Mesajınız alındı, en kısa sürede dönüş yapacağız.', true);
        } else {
          return r.json().then(function (j) {
            throw new Error((j && j.error) || 'Gönderim başarısız.');
          });
        }
      }).catch(function () {
        setStatus('Bir sorun oluştu. Lütfen tekrar deneyin veya info@aldemirglobal.com adresine yazın.', false);
        mailtoFallback(data);
      }).finally(function () {
        if (btn) { btn.disabled = false; btn.style.opacity = '1'; }
      });
    });
  }
})();
