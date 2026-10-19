import Hero from '../components/Hero'
import Container from '../components/Container'
import ContentSection from '../components/ContentSection'
import { responsiveImage } from '../utils/images'

const section = (name, widths) => {
  const { src, srcSet } = responsiveImage(name, widths)
  return { image: src, imageSrcSet: srcSet }
}

const sections = [
  {
    ...section('qoy-qirilgan-qala/aerofoto', [640, 1250]),
    imageAlt: "Qo'y Qirilgan qal'a qazishmalari tepadan: markazdagi dumaloq bino va halqa devor",
    title: "Qo'y Qirilgan qal'a",
    description:
      "Miloddan avvalgi IV–III asrlarda qurilgan dumaloq ibodatxona-qal'a. Olimlar uni Xorazm podsholarining maqbarasi va qadimiy rasadxona bo'lgan deb hisoblaydi.",
    href: '/qoy-qirilgan-qala',
  },
  {
    ...section('tuproq-qala/karta', [640, 1280]),
    imageAlt: "Tuproq qal'adagi Baland saroy xarobalari",
    title: "Tuproq qal'a",
    description:
      "Milodiy II–III asrlarda Xorazm podsholarining poytaxti bo'lgan shahar. Baland saroyidagi devoriy rasmlar va haykallar bilan mashhur.",
    href: '/tuproq-qala',
  },
  {
    ...section('kohna-urganch/karta', [640, 1280]),
    imageAlt: "Ko'hna Urganchdagi 60 metrli Qutlug' Temur minorasi",
    title: "Ko'hna Urganch",
    description:
      "Xorazmshohlar davlatining poytaxti, YuNESKO Butunjahon merosi. Qutlug' Temur minorasi va To'rabekxonim maqbarasi bilan mashhur.",
    href: '/kohna-urganch',
  },
]

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <section className="py-16 text-center">
        <Container>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Loyiha haqida qisqacha ma'lumotlar
          </h2>
          <div className="mx-auto mt-4 max-w-xl space-y-4 text-slate-600">
            <p>
              Xiva — O'zbekistonning eng qadimiy shaharlaridan biri. Uning ichki shahri Ichan qal'a
              1990-yilda UNESCO Butunjahon merosi ro'yxatiga kiritilgan: devorlar ichida masjid,
              madrasa, minora va saroylar bir-biriga tutashib, yaxlit muzey-shaharni tashkil etadi.
            </p>
            <p>
              Ushbu loyihaning maqsadi — Xiva xonligi davridan (1511–1920) saqlanib qolgan binolarni 3D
              formatda ko'rsatish. Har bir yodgorlikni turli tomondan aylantirib ko'rish, uning tarixi
              va me'moriy xususiyatlari bilan tanishish mumkin bo'ladi.
            </p>
          </div>
        </Container>
      </section>
      <div id="services" className="scroll-mt-24">
        {sections.map((item, index) => (
          <ContentSection key={item.image} {...item} reverse={index % 2 === 1} />
        ))}
      </div>
    </main>
  )
}
