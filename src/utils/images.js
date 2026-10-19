// public/images ichidagi rasmlar `<nom>-<kenglik>.webp` ko'rinishida saqlangan.
// Yangi rasm qo'shsangiz, shu nom bilan bir nechta kenglikda saqlang.
const IMAGES_BASE = `${import.meta.env.BASE_URL}images`

export const imageSrc = (name, width) => `${IMAGES_BASE}/${name}-${width}.webp`

export const imageSrcSet = (name, widths) =>
  widths.map((width) => `${imageSrc(name, width)} ${width}w`).join(', ')

// <img> uchun tayyor juftlik: src — eng katta kenglik, srcSet — barcha kengliklar
export const responsiveImage = (name, widths) => ({
  src: imageSrc(name, widths[widths.length - 1]),
  srcSet: imageSrcSet(name, widths),
})
