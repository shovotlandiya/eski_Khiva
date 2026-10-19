import { Link } from 'react-router-dom'

// Rasm katta ekranda yarim kenglikni (konteyner maks. 1600px), kichigida to'liq kenglikni egallaydi
const IMAGE_SIZES = '(min-width: 1600px) 800px, (min-width: 1024px) 50vw, 100vw'

export default function ContentSection({ image, imageSrcSet, imageAlt, title, description, href = '/about', reverse = false }) {
  return (
    <section className="w-full bg-white">
      <div className={`mx-auto flex w-full max-w-[1600px] flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        <div className="w-full lg:w-1/2">
          <img
            src={image}
            srcSet={imageSrcSet}
            sizes={imageSrcSet ? IMAGE_SIZES : undefined}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="block h-[280px] w-full object-cover sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]"
          />
        </div>
        <div className="flex w-full items-center lg:w-1/2">
          <div className="w-full px-6 py-10 sm:px-10 sm:py-12 md:px-12 lg:px-14 xl:px-16 2xl:px-20">
            <h2 className="mb-2 text-xl font-semibold leading-tight tracking-tight text-black sm:text-2xl">{title}</h2>
            <p className="max-w-[650px] text-base leading-7 text-gray-500 sm:text-lg sm:leading-8 md:text-xl xl:text-2xl">{description}</p>
            <Link to={href} className="group mt-4 inline-flex items-center gap-2 text-base font-semibold text-black sm:text-lg">
              <span>Batafsil</span>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
