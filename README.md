# Eski Xiva

Xiva xonligi va Qadimgi Xorazm yodgorliklari — Ichan qal'a, Qo'y Qirilgan qal'a, Tuproq qal'a,
Ko'hna Urganch — haqidagi sayt. Vite + React + Tailwind CSS asosida.

**Sayt:** https://shovotlandiya.github.io/eski_Khiva/

## Ishga tushirish

```bash
npm install
npm run dev
```

Terminalda chiqqan havolani (odatda `http://localhost:5173`) brauzerda oching.

## Loyiha tuzilishi

```
public/
  images/       -> sayt rasmlari (WebP, bir nechta kenglikda)
src/
  components/   -> alohida qismlar (Navbar, Hero, Footer va h.k.)
  pages/        -> sahifalar (Home, About)
  utils/        -> yordamchi funksiyalar (rasm yo'llari)
  App.jsx       -> marshrutlar (routes) va umumiy tuzilish
  main.jsx      -> React ilovasining kirish nuqtasi
  index.css     -> Tailwind ulangan global stil fayli
```

## Rasm qo'shish

Rasmlar `public/images/` ichida `<nom>-<kenglik>.webp` ko'rinishida saqlanadi,
masalan `sections/qala-chizma-640.webp` va `sections/qala-chizma-1080.webp`.
Kodda ular `src/utils/images.js` dagi `imageSrc` / `imageSrcSet` orqali ulanadi —
brauzer ekran o'lchamiga mos faylni o'zi tanlaydi.

## Qanday to'ldirish kerak

1. Yangi bo'lim yoki blok kerak bo'lsa, `src/components/` ichiga yangi `.jsx` fayl yarating (masalan `Hero.jsx`).
2. Uni `src/App.jsx` ichida import qilib, kerakli joyga qo'ying.
3. Stil berish uchun to'g'ridan-to'g'ri Tailwind klasslaridan foydalaning, masalan:
   `className="text-2xl font-bold text-slate-900"`.

## Production uchun yig'ish

```bash
npm run build
```

Natija `dist/` papkasida hosil bo'ladi.

## GitHub Pages'ga joylash

`main` branch'ga har `git push` qilinganda `.github/workflows/deploy.yml` saytni avtomatik
yig'ib, GitHub Pages'ga chiqaradi (jarayonni repo'dagi **Actions** bo'limida kuzatish mumkin).

Bir martalik sozlash: repo'da **Settings → Pages → Build and deployment → Source** ni
**GitHub Actions** ga o'zgartiring.

## Rasmlar

Rasmlar Wikimedia Commons'dan erkin litsenziyalar (CC0, CC BY, CC BY-SA, jamoat mulki) asosida
olingan. Har bir rasmning muallifi va litsenziyasi saytda rasm ostida yoki footer'da ko'rsatilgan.
