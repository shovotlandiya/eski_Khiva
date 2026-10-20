// Oddiy sahifalar (Aloqa, Biz haqimizda) uchun markazlashgan to'q bosh qism: fon rasmi, yorliq, sarlavha.
// Pastki qismi bg-tun-950 ga eriydi — keyingi to'q bo'lim bilan chok ko'rinmaydi.
export default function PageHero({ image, alt, eyebrow, title, subtitle }) {
  return (
    <div className="relative h-[440px] w-full overflow-hidden bg-tun-950 text-white sm:h-[500px]">
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
      <div className="absolute inset-0 bg-linear-to-b from-tun-950/70 via-tun-950/60 to-tun-950" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-tun-950 to-transparent" />
      <div className="chizma absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 pt-10 pb-16 text-center">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-firuza-400/30 bg-firuza-400/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-firuza-200 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-firuza-400 shadow-[0_0_10px_2px] shadow-firuza-400/70" />
          {eyebrow}
        </p>
        <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">{subtitle}</p>
      </div>
    </div>
  )
}
