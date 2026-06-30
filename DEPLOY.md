# Aldemir Grup — Yayına Alma Kılavuzu (GitHub Pages · $0)

Bu site **statik**tir; sunucu/derleme gerektirmez. Hat: **GitHub repo → GitHub Pages → aldemirglobal.com**.
Toplam maliyet **$0**.

> ⚠️ **Şu an bekleyen tek şey:** Sitenin yayınlanacağı **GitHub hesabı/organizasyonu henüz belli değil**
> (görevde `[HESAP]` / `[Aldemir'e-ait-ayrı-hesap]` placeholder'ı). Aşağıdaki adımlarda `KULLANICI` yazan
> yeri, oluşturulacak gerçek hesap adıyla değiştirin. Hesap belli olunca tüm adımlar 15–20 dk’da tamamlanır.

---

## 0. İKİ-TRACK YAPI (önce bunu anla)

Repo iki branch içerir:

| Branch | İçerik | Durum |
|--------|--------|-------|
| **`main`** | **Coming-soon** "Yapım Aşamasında" tek sayfa | ✅ **CANLI YÜZ** — Pages bunu yayınlar |
| **`dashboard`** | Sprint 1 **full build** (hakkımızda/hizmetler/projeler/rakamlar/iletişim/KVKK) | 🔒 **WIP** — yereldedir, **push EDİLMEZ** |

**Neden dashboard push edilmiyor?** GitHub Pages free **public repo** ister; public repoda hangi branch
olursa olsun kaynağı herkese görünür. WIP tam sitenin erkenden görünmemesi için `dashboard` **yalnızca
yerelde** tutulur; canlıya yalnızca `main` (coming-soon) gider. Full build hazır olunca `main`'e merge edilir.

Bu klasörde branch'ler arası geçiş:
```bash
git checkout main        # coming-soon (canlı)
git checkout dashboard   # full build (yerel WIP)
```

> Şu an aktif branch **`main`** (coming-soon). Aşağıdaki adımlar bunu canlıya alır.

---

## 1. Public repo oluştur

GitHub Pages **ücretsiz planda public repo** ister.

1. Aldemir’e ait GitHub hesabıyla giriş yapın.
2. **New repository** → ad: `aldemirglobal` → **Public** → (README eklemeyin) → **Create**.

### Komutla (git zaten hazır)
Bu klasörde (`~/aldemirglobal`) git **zaten init edilmiş**; `main` (coming-soon) ve `dashboard` (WIP)
branch'leri commit'li. **Sadece `main`'i** push edin:

```bash
cd ~/aldemirglobal
git checkout main
git remote add origin https://github.com/KULLANICI/aldemirglobal.git
git push -u origin main
# dashboard'ı PUSH ETMEYİN — yerelde kalsın (WIP gizli kalsın).
```

> `.nojekyll` dosyası repoda mevcut — GitHub Pages’in Jekyll işlemesini atlar (klasör/dosya adları olduğu gibi sunulur).

---

## 2. GitHub Pages’i aç

1. Repo → **Settings → Pages**.
2. **Build and deployment → Source:** `Deploy from a branch`.
3. **Branch:** `main` · **Folder:** `/ (root)` → **Save**.
4. 1–2 dk sonra `https://KULLANICI.github.io/aldemirglobal/` adresinde yayına girer.
5. **Custom domain** kutusuna `aldemirglobal.com` yazın → **Save**.
   (Repo’daki `CNAME` dosyası zaten `aldemirglobal.com` içerir.)
6. DNS doğrulandıktan sonra **Enforce HTTPS** kutusunu işaretleyin. ✅

---

## 3. DNS — PATRON hPanel’de yapacak (CC dokunmaz)

Hostinger **hPanel → Alan Adları → DNS / Nameservers** altında:

| Tür   | Ad   | Değer                         |
|-------|------|-------------------------------|
| A     | `@`  | `185.199.108.153`             |
| A     | `@`  | `185.199.109.153`             |
| A     | `@`  | `185.199.110.153`             |
| A     | `@`  | `185.199.111.153`             |
| CNAME | `www`| `KULLANICI.github.io`         |

> **MX kayıtlarına DOKUNMAYIN** — `info@aldemirglobal.com` kurumsal e-postası Hostinger’da çalışıyor.
> Yalnızca yukarıdaki A + CNAME kayıtları eklenir/güncellenir.

DNS yayılması 5 dk – 24 saat sürebilir. `https://aldemirglobal.com` açıldığında ve adres çubuğunda
kilit göründüğünde yayın tamamlanmıştır.

---

## 4. İletişim formunu aktifleştir (Formspree) — ⚠️ yalnızca FULL BUILD (`dashboard`)

> **Coming-soon (`main`) sayfasında form YOKTUR** — iletişim doğrudan `tel:` ve `mailto:` bağlantılarıyla
> (Bizi Arayın / E-posta Gönder) yapılır, harici servis gerektirmez. Aşağıdaki Formspree adımları yalnızca
> `dashboard` branch'indeki tam site yayına alınınca geçerlidir.

Full build formu **mailto yedeğiyle** çalışır (gönder’e basınca kullanıcının e-posta uygulaması açılır).
Doğrudan e-posta almak için Formspree:

1. [formspree.io](https://formspree.io) → ücretsiz hesap → **New Form** → hedef: `info@aldemirglobal.com`.
2. Verilen form ID’si (örn. `xmyzabcd`) ile `index.html` içindeki şu satırı düzenleyin:
   ```html
   <form ... action="https://formspree.io/f/REPLACE_FORM_ID" method="POST" ...>
   ```
   `REPLACE_FORM_ID` yerine kendi ID’nizi yazın → kaydedin → push edin.
3. İlk gönderimde Formspree e-posta doğrulaması ister; onaylayın.

> **Sınır:** ücretsiz plan **ayda 50 gönderim**. Yoğun trafikte form yine `mailto` yedeğine düşmez —
> bunun yerine Cloudflare/Hostinger e-posta yönlendirmesi veya ücretli plan değerlendirilmelidir
> (bkz. görevdeki dürüstlük notu).

---

## 5. PATRON gelince doldurulacak placeholder’lar — ⚠️ FULL BUILD (`dashboard`)

> Coming-soon sayfasında gerçek bilgiler **zaten mevcut** (telefon +90 554 839 78 06, info@aldemirglobal.com).
> Aşağıdakiler `dashboard` full build içindir; `git checkout dashboard` ile düzenlenir.

Tümü `<!-- TODO(patron) -->` yorumu veya `[...]` / `.ph` ile işaretli:

- **Kurumsal künye:** ünvan, açık adres, MERSİS, VKN, KEP, telefon → `index.html` (footer + iletişim) ve `kvkk.html`.
- **Hakkımızda metni + referanslar** → `index.html` `#hakkimizda` bölümü.
- **Gerçek rakamlar** (proje sayısı, m², tecrübe) → `index.html` `#rakamlar`, her kutuda `data-count="0"` değerini güncelleyin (sayaç otomatik animasyonlu).
- **Projeler** (ad, konum, m², görsel) → `index.html` `#projeler`; örnek kartları gerçek görsellerle değiştirin.
- **KVKK tarih/ünvan** → `kvkk.html` (yayından önce hukuk/KVKK uzmanı kontrolü önerilir).

---

## 6. Güncelleme akışı

Her değişiklikten sonra:
```bash
git add -A && git commit -m "içerik güncellemesi" && git push
```
GitHub Pages 1–2 dk içinde otomatik yeniden yayınlar.
