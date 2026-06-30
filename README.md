# Aldemir Grup İnşaat · Mühendislik A.Ş. — Kurumsal Web Sitesi

Marka kılavuzuna (Sürüm 1.0) sadık, **statik** kurumsal site.
Hat: **GitHub Pages → aldemirglobal.com**, maliyet **$0**, harici çağrı **yok** (KVKK dostu).

## Yapı
```
index.html        Ana sayfa (hero · hakkımızda · hizmetler · projeler · rakamlar · iletişim)
kvkk.html         KVKK aydınlatma metni (markalı şablon)
404.html          Hata sayfası
assets/
  style.css       Tüm stiller + self-host @font-face
  app.js          Vanilla JS (menü · reveal · sayaç · form) — bağımlılık yok
  logo.png        Tam logo (web için optimize)
  amblem.png      Amblem
  favicon-48.png · apple-touch-icon.png · og-image.png (1200×630)
  fonts/          Montserrat 300/400/600/800 + Cormorant 400/600 (woff2, latin + latin-ext)
favicon.ico       16/32/48 px (amblem)
CNAME             aldemirglobal.com
robots.txt · sitemap.xml · .nojekyll
DEPLOY.md         Yayına alma + DNS + Formspree kılavuzu
```

## Marka
- **Renkler:** Altın `#C9A876`/`#E4C78E` · Lacivert `#1B2A36` · Çelik `#23323D` · Antrasit `#171C20` · Krem `#F6F2E9`
- **Font:** Montserrat (başlık + gövde), Cormorant (serif aksan) — **self-host**, Google CDN yok.
- **Marka özü:** *“Zirveye inşa eden, demir gibi sağlam mühendislik.”*

## Yerelde önizleme
```bash
cd ~/aldemirglobal
python3 -m http.server 8765
# tarayıcı: http://127.0.0.1:8765
```
> Mutlak yollar (`/assets/...`) kullanıldığı için `file://` ile değil, **HTTP sunucu** ile açın.

## Erişilebilirlik & performans
- `prefers-reduced-motion` desteği · `:focus-visible` klavye odağı · skip-link · ARIA etiketleri.
- Kritik yük (HTML+CSS+JS+font) ~344 KB. Three.js/3B kütüphane yok (mobil performans + $0).

Yayın adımları için **[DEPLOY.md](DEPLOY.md)**.
