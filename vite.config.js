import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { routes, pageTitle } from './src/routes.js'

// GitHub Pages /eski_Khiva/tuproq-qala so'roviga tuproq-qala.html faylini beradi. Shuning uchun har bir
// sahifa uchun index.html nusxasini (o'z sarlavhasi bilan) yaratamiz — to'g'ridan-to'g'ri kirilganda
// 404 emas, 200 qaytadi va Google sahifani to'g'ri indekslaydi. 404.html noma'lum manzillar uchun.
function staticRoutePages() {
  return {
    name: 'static-route-pages',
    apply: 'build',
    writeBundle({ dir }, bundle) {
      const html = bundle['index.html'].source
      for (const route of routes.filter((r) => r.path !== '/')) {
        const page = html.replace(/<title>.*<\/title>/, `<title>${pageTitle(route)}</title>`)
        writeFileSync(join(dir, `${route.path.slice(1)}.html`), page)
      }
      writeFileSync(join(dir, '404.html'), html)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), staticRoutePages()],
  // GitHub Pages'da sayt /<repo-nomi>/ ichida ochiladi — yo'lni deploy workflow BASE_PATH orqali beradi
  base: process.env.BASE_PATH || '/',
})
