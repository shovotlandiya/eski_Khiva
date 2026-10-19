// Saytdagi sahifalar ro'yxati. Undan App.jsx (marshrutlar, sarlavha, navbar) va vite.config.js
// (GitHub Pages uchun har bir sahifaga alohida .html nusxa) foydalanadi.
// Yangi sahifa qo'shsangiz: shu yerga yozing va App.jsx'dagi PAGES'ga komponentini qo'shing.
export const SITE_NAME = 'Eski Xiva'

export const routes = [
  { path: '/', hero: true },
  { path: '/about', title: 'Biz haqimizda', hero: true },
  { path: '/qoy-qirilgan-qala', title: "Qo'y Qirilgan qal'a", hero: true }, // hero: tepasida katta rasm bor
  { path: '/tuproq-qala', title: "Tuproq qal'a", hero: true },
  { path: '/kohna-urganch', title: "Ko'hna Urganch", hero: true },
  { path: '/aloqa', title: 'Aloqa', hero: true },
]

export const pageTitle = (route) => (route?.title ? `${route.title} — ${SITE_NAME}` : SITE_NAME)
