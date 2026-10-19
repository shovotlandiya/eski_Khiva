// Oddiy sahifalar (Aloqa, Biz haqimizda) uchun markazlashgan bosh qism: fon rasmi, yorliq, sarlavha
export default function PageHero({ image, alt, eyebrow, title, subtitle }) {
  return (
    <div className="relative h-[380px] w-full overflow-hidden bg-slate-900 sm:h-[440px]">
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes="100vw"
        alt={alt}
        decoding="async"
        // eslint-disable-next-line react/no-unknown-property -- React 18 `fetchPriority`ni tanimaydi, kichik harf kerak
        fetchpriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/60 via-slate-950/50 to-slate-950/80" />
      <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 pb-10 text-center">
        <p className="rounded-full border border-white/25 bg-white/10 px-4 py-1 text-sm font-medium text-white/90 backdrop-blur-sm">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-xl text-lg text-white/85">{subtitle}</p>
      </div>
    </div>
  )
}
