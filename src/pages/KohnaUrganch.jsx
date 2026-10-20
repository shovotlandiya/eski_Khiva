import { MonumentHero, Facts, Video3D, Section, Credit, Figure, Timeline, Coordinates, Sources } from '../components/Monument'
import { responsiveImage, singleImage, videoSrc } from '../utils/images'

const img = (name, widths) => responsiveImage(`kohna-urganch/${name}`, widths)

const facts = [
  { label: "Poytaxt bo'lgan", value: 'X–XIV asrlar' },
  { label: 'Joylashuvi', value: "Doshog'uz viloyati, Turkmaniston" },
  { label: 'YuNESKO', value: '2005-yildan Butunjahon merosi' },
  { label: "Eng baland obida", value: "Qutlug' Temur minorasi, 60 m" },
]

const timeline = [
  { period: 'Mil. avv. V asr', text: "Qirqmulla tepaligidan topilgan eng qadimgi sopol buyumlar shu davrga oid — bu yerda juda qadimdan odamlar yashagan." },
  { period: '995-yil', text: "Gurganj hukmdori Ma'mun ibn Muhammad janubiy Xorazmni egallab, Gurganj butun Xorazmning poytaxtiga aylandi. Keyinroq shaharda Ibn Sino va Abu Rayhon Beruniy ishlagan Ma'mun akademiyasi faoliyat ko'rsatdi." },
  { period: 'XII – XIII asr boshi', text: "Xorazmshohlar davlatining poytaxti sifatida shahar eng gullagan davrini boshidan kechirdi." },
  { period: '1221-yil', text: "Chingizxon o'g'illari boshchiligidagi mo'g'ul qo'shini shaharni qariyb yetti oy qamal qilib, vayron etdi. Amudaryo to'g'onlari ochilib, shahar suv ostida qoldi." },
  { period: '1320–1330-yillar', text: "Oltin O'rdaning Xorazmdagi hokimi Qutlug' Temur davrida shahar qayta qurildi: To'rabekxonim maqbarasi barpo etildi, minora ta'mirlandi." },
  { period: '1359–1388-yillar', text: "So'fiylar sulolasi davrida Urganch yana Xorazmning poytaxti bo'ldi." },
  { period: '1372–1388-yillar', text: "Amir Temur Xorazmga bir necha bor yurish qildi. 1388-yilda shahar butunlay vayron etildi, sug'orish tizimi buzildi." },
  { period: 'XVI–XVII asrlar', text: "Amudaryo suvining kamayishi bilan shahar tanazzulga yuz tutdi, Xorazmning siyosiy markazi Xivaga ko'chdi." },
  { period: '2005-yil', text: "Ko'hna Urganch obidalari YuNESKO Butunjahon merosi ro'yxatiga kiritildi." },
]

const monuments = [
  {
    name: 'Il-Arslon maqbarasi',
    period: 'XII asr',
    text: "Ko'hna Urganchdagi eng qadimgi saqlanib qolgan obida. Xorazmshoh Il-Arslon (1156–1172) xotirasiga qurilgan. O'n ikki qirrali, konus shaklidagi sirlangan g'isht gumbazi bilan mashhur.",
    image: img('il-arslon', [480, 960]),
    imgClassName: 'object-top',
    alt: "Il-Arslon maqbarasi: konus shaklidagi qirrali gumbaz",
    credit: { author: 'SabinaCioboata', license: 'CC BY-SA 3.0', href: 'https://commons.wikimedia.org/wiki/File:Il_Arslan_Mausoleum.JPG' },
  },
  {
    name: 'Sulton Takash maqbarasi',
    period: 'XII asr oxiri',
    text: "Xorazmshoh Alouddin Takash (1172–1200) qabri deb taxmin qilinadi. Devorlarining balandligi 11,45 metr, tepasini konus shaklidagi feruza gumbaz qoplagan.",
    image: img('takash', [480, 960]),
    alt: "Sulton Takash maqbarasi: feruza rangli konus gumbaz",
    credit: { author: 'Tim Williams', license: 'CC BY-SA 3.0', href: 'https://commons.wikimedia.org/wiki/File:Tekesh_Mausoleum.JPG' },
  },
  {
    name: 'Najmiddin Kubro maqbarasi',
    period: 'XIV asrning birinchi yarmi',
    text: "Kubraviya tariqati asoschisi, 1221-yilda shaharni mo'g'ullardan himoya qilib halok bo'lgan so'fiy shayx Najmiddin Kubro (1145–1221) xotirasiga bag'ishlangan.",
    image: img('kubro', [480, 960]),
    alt: 'Najmiddin Kubro maqbarasi va uning gumbazlari',
    credit: { author: 'Tim Williams', license: 'CC BY-SA 3.0', href: 'https://commons.wikimedia.org/wiki/File:Najm_ad-Din_al-Kubra_Mausoleum.JPG' },
  },
]

const sources = [
  { label: 'Wikipedia (ingliz tilida): Konye-Urgench', href: 'https://en.wikipedia.org/wiki/Konye-Urgench' },
  { label: 'Vikipediya (rus tilida): Кёнеургенч', href: 'https://ru.wikipedia.org/wiki/Кёнеургенч' },
]

// Ikki ustunli rasmlar uchun (sm va undan katta ekranda maqola kengligining yarmi)
const HALF_SIZES = '(min-width: 896px) 408px, (min-width: 640px) 50vw, 100vw'

export default function KohnaUrganch() {
  return (
    <main className="flex-1">
      <MonumentHero
        image={img('bosh-rasm', [960, 1280, 1920])}
        alt="Ko'hna Urganch: baland Qutlug' Temur minorasi va uning yonidagi gumbazli maqbara"
        title="Ko'hna Urganch"
        subtitle="Xorazmshohlar poytaxti — Xivadan oldin Xorazmning bosh shahri bo'lgan qadimiy Gurganj"
      />

      <div className="mx-auto max-w-4xl px-6 pb-20">
        <Facts items={facts} />

        <Video3D
          src={videoSrc('kohna-urganch-3d')}
          poster={singleImage('kohna-urganch/video-muqova')}
          title="Ko'hna Urganchning 3D modeli"
        >
          Shaharning qayta tiklangan 3D modeli: devorlar bilan o'ralgan Urganch, uning zich mahallalari, ko'k
          gumbazli binolari va minoralari, shahar atrofidagi bog'lar.
        </Video3D>

        <Section title="Umumiy ma'lumot">
          <p>
            Ko'hna Urganch (qadimgi nomi — Gurganj) — Xorazmning qadimiy poytaxti. Uning xarobalari bugun
            Turkmanistonning Doshog'uz viloyatida, O'zbekiston chegarasidan biroz janubda joylashgan. X–XIV
            asrlarda shahar Xorazmning bosh shahri bo'lgan, XII asr va XIII asr boshida esa Xorazmshohlar
            davlatining poytaxti sifatida eng gullagan davrini boshidan kechirgan.
          </p>
          <p>
            XIV asrda bu yerga kelgan sayyoh Ibn Battuta Urganchni «turklarning eng katta, eng ulug', eng
            go'zal va eng muhim shahri» deb ta'riflagan. 2005-yilda Ko'hna Urganch obidalari YuNESKO
            Butunjahon merosi ro'yxatiga kiritilgan.
          </p>
          <p>
            Xiva tarixi bilan bog'liqligi: XVI–XVII asrlarda Amudaryo suvi kamayib, Urganch tanazzulga yuz
            tutgach, Xorazmning siyosiy markazi Xivaga ko'chgan.
          </p>
        </Section>

        <Section title="Tarixi">
          <Timeline items={timeline} />
          <Figure
            image={img('temur-hujumi', [640, 1280])}
            alt="Miniatyura: Amir Temur qo'shini Urganch qal'asiga hujum qilmoqda"
            className="pt-6"
          >
            Amir Temur qo'shini (qo'mondon — Umarshayx) 1379-yilda Urganchga hujum qilmoqda. «Zafarnoma»
            qo'lyozmasidagi miniatyura, Hirot, 1480-yil.{' '}
            <Credit author="Hirotlik rassom" license="jamoat mulki" href="https://commons.wikimedia.org/wiki/File:Timur's_army,_commanded_by_Umar_Shaykh,_attacks_Urgench_in_1379._Garrett_Zafarnama,_painted_in_1480.jpg" />
          </Figure>
        </Section>

        <Section title="Qutlug' Temur minorasi">
          <p>
            Ko'hna Urganchning ramzi — balandligi 60 metr bo'lgan Qutlug' Temur minorasi. U Markaziy
            Osiyodagi eng baland g'isht minoralardan biri hisoblanadi. Minora asosining diametri 12 metr,
            tepasida esa 2 metrgacha torayadi.
          </p>
          <p>
            Uning qurilgan vaqti haqida olimlar turlicha fikrda: XI–XII asrlar yoki XIV asrning birinchi
            yarmi. Minora taxminan 1330-yillarda Qutlug' Temur davrida ta'mirlangan va shu nom bilan ataladi.
          </p>
          <Figure image={img('minora-asosi', [640, 1280])} alt="Qutlug' Temur minorasining g'ishtdan terilgan keng asosi, yonida odamlar" className="pt-4">
            Minora asosi. Yonidagi odamlarga qarab uning kattaligini tasavvur qilish mumkin.{' '}
            <Credit author="Hans Birger Nilsen" license="CC BY-SA 2.0" href="https://commons.wikimedia.org/wiki/File:Kutlug_Timur_Minaret_(6)_(43569205000).jpg" />
          </Figure>
        </Section>

        <Section title="To'rabekxonim maqbarasi">
          <p>
            Ko'hna Urganchdagi eng yirik va eng ko'rkam saqlanib qolgan obida. U Qutlug' Temurning rafiqasi
            To'rabekxonim nomi bilan ataladi va taxminan 1330-yillarda qurilgan.
          </p>
          <p>
            Maqbaraning eng mashhur qismi — ichki gumbaz. Uni qoplagan XIV asr mozaikasi deyarli to'liq
            saqlanib qolgan. Maqbara 1990-yillarda qariyb to'liq ta'mirlangan.
          </p>
          <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2">
            <Figure image={img('turabek', [480, 960])} alt="To'rabekxonim maqbarasining baland peshtoqi va gumbazi" sizes={HALF_SIZES}>
              Maqbara tashqaridan.{' '}
              <Credit author="John Pavelka" license="CC BY 2.0" href="https://commons.wikimedia.org/wiki/File:Turabeg_Khanym_Mausoleum_(41542197725).jpg" />
            </Figure>
            <Figure image={img('gumbaz-ichi', [480, 960])} alt="To'rabekxonim maqbarasi gumbazining ichki tomonidagi ko'k-oq mozaika" sizes={HALF_SIZES}>
              Gumbazning ichki tomonidagi XIV asr mozaikasi.{' '}
              <Credit author="John Pavelka" license="CC BY 2.0" href="https://commons.wikimedia.org/wiki/File:Inner_Dome_of_Turabeg_Khanym_Mausoluem_(27574334687).jpg" />
            </Figure>
          </div>
        </Section>

        <Section title="Boshqa obidalar">
          <p>Ko'hna Urganchda X–XIX asrlarga oid o'nlab obidalar saqlanib qolgan. Ulardan eng mashhurlari:</p>
          <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-3">
            {monuments.map((monument) => (
              <article key={monument.name} className="overflow-hidden rounded-xl border border-slate-200">
                <img
                  src={monument.image.src}
                  srcSet={monument.image.srcSet}
                  sizes="(min-width: 896px) 262px, (min-width: 640px) 31vw, 100vw"
                  alt={monument.alt}
                  loading="lazy"
                  decoding="async"
                  className={`aspect-[4/3] w-full bg-slate-100 object-cover ${monument.imgClassName ?? ''}`}
                />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{monument.name}</h3>
                  <p className="font-mono text-xs text-slate-500">{monument.period}</p>
                  <p className="mt-2 text-base leading-7">{monument.text}</p>
                  <p className="mt-3 text-xs text-slate-500">
                    <Credit {...monument.credit} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Joylashuvi">
          <p>
            Ko'hna Urganch xarobalari Turkmanistonning Doshog'uz viloyatidagi shu nomli shahar (turkmancha —
            Köneürgenç) yonida, O'zbekiston chegarasidan biroz janubda joylashgan.
          </p>
          <Coordinates label="42°19′32″ N, 59°09′07″ E" lat={42.32556} lng={59.15194} />
        </Section>

        <Sources
          items={sources}
          heroCredit={{ author: 'Hergit', license: 'CC BY-SA 3.0', href: 'https://commons.wikimedia.org/wiki/File:KonyeUrgenchTimurMinaret.jpg' }}
        />
      </div>
    </main>
  )
}
