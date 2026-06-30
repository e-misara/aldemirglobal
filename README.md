# Aldemir Grup İnşaat · Mühendislik A.Ş. — Web Sitesi

Marka kılavuzuna (Sürüm 1.0) sadık, **statik**, **$0**, harici çağrısız (KVKK dostu) site.
Hat: **GitHub Pages → aldemirglobal.com**.

## İki-track

| Branch | İçerik | Durum |
|--------|--------|-------|
| **`main`** | **Coming-soon** "Yapım Aşamasında" tek sayfa (lacivert) | ✅ Canlı yüz — Pages bunu yayınlar |
| **`dashboard`** | Sprint 1 **full build** (tüm bölümler + KVKK) | 🔒 WIP — yerelde, push edilmez |

> `git checkout dashboard` ile tam siteye geçilir. Detay ve yayın adımları: **[DEPLOY.md](DEPLOY.md)**.

## `main` (coming-soon) içeriği
```
index.html        "Yapım Aşamasında" tek sayfa — self-host font, logo dosya, harici çağrı yok
404.html          Markalı hata sayfası (kendi içinde yeterli)
assets/
  logo.png        Tam logo (base64'ten çıkarıldı, web için optimize)
  og-image.png    1200×630 paylaşım görseli · apple-touch-icon · favicon-48
  fonts/          Montserrat 300/400/600/700/800 + Cormorant 500 (normal+italic), woff2 self-host
favicon.ico       16/32/48 px (amblem)
CNAME · robots.txt · sitemap.xml · .nojekyll
DEPLOY.md         Yayın + DNS + iki-track kılavuzu
```

## Coming-soon özellikleri
- **Tasarım:** Chat Vezir'in lacivert "Yapım Aşamasında" sayfası (marka renkleri/fontu).
- **İletişim:** Bizi Arayın (`tel:+905548397806`) · E-posta (`mailto:info@aldemirglobal.com`) — backend/servis yok.
- **Self-host font:** Google Fonts CDN kaldırıldı; woff2 yerelden (KVKK: yurt dışı aktarım yok, hız).
- **Logo:** 520 KB gömülü base64 → `/assets/logo.png` dosyasına çıkarıldı (önbellek + sayfa ~13 KB HTML).
- **SEO:** `lang=tr`, title, description, og:image (mutlak), canonical, favicon, theme-color, twitter card.
- **Erişilebilirlik:** `prefers-reduced-motion` desteği, anlamlı alt metinler.

## Marka
Altın `#C9A876`/`#E4C78E` · Lacivert `#1B2A36` · Antrasit `#15212B` · Krem `#F6F2E9` ·
Montserrat + Cormorant · *"Zirveye inşa eden, demir gibi sağlam mühendislik."*

## Yerelde önizleme
```bash
cd ~/aldemirglobal && python3 -m http.server 8766
# http://127.0.0.1:8766  (mutlak yollar nedeniyle file:// değil, HTTP ile açın)
```
