const skills = [
  { label: 'Frontend', detail: 'React, Tailwind, animatsiyalar' },
  { label: 'Backend', detail: 'Node.js, PostgreSQL, REST/GraphQL' },
  { label: 'Dizayn', detail: 'Figma, tizimli komponentlar' },
]

const timeline = [
  { year: '2021', text: 'Birinchi kod qatorini yozdim va shu bilan qoldim.' },
  { year: '2023', text: 'Frilanser sifatida 12 dan ortiq loyihani ishga tushirdim.' },
  { year: '2026', text: "O'z mahsulotim ustida ishlayapman." },
]

// Chapda kichik yorliq, o'ngda kontent — sahifadagi har bir qator shu tuzilishda
function Row({ label, className = '', children }) {
  return (
    <div className={`grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr] ${className}`}>
      <span className="font-mono text-sm text-slate-500">{label}</span>
      {children}
    </div>
  )
}

export default function About() {
  return (
    <main className="w-full flex-1 bg-slate-950 px-6 pt-32 pb-20 text-slate-100">
      <div className="mx-auto w-full max-w-4xl">
        <Row label="01 / men haqimda" className="mb-12 items-baseline border-b border-slate-800 pb-8">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
            Interfeyslarni g'oyadan mahsulotgacha olib boradigan dasturchiman.
          </h1>
        </Row>

        <Row className="mb-16">
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
            Men foydalanuvchi tajribasi va texnik puxtalik kesishgan nuqtada ishlashni yaxshi ko'raman.
            Har bir loyihada oddiylikni saqlab, tafsilotlarga e'tibor beraman — chunki yaxshi mahsulot
            his qilinadi, ko'rinadi emas.
          </p>
        </Row>

        <Row label="02 / ko'nikmalar" className="mb-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="rounded-lg border border-slate-800 p-5 transition-colors hover:border-slate-600"
              >
                <h3 className="mb-2 font-medium text-slate-50">{skill.label}</h3>
                <p className="text-sm text-slate-400">{skill.detail}</p>
              </div>
            ))}
          </div>
        </Row>

        <Row label="03 / yo'l">
          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex items-baseline gap-4">
                <span className="w-12 shrink-0 font-mono text-sm text-slate-500">{item.year}</span>
                <p className="text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </Row>
      </div>
    </main>
  )
}
