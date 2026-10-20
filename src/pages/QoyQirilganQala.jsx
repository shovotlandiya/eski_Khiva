import { Link } from 'react-router-dom'
import { MonumentHero, Facts, Video3D, Section, Credit, Figure, Timeline, Coordinates, Sources } from '../components/Monument'
import { responsiveImage, singleImage, videoSrc } from '../utils/images'

const img = (name, widths) => responsiveImage(`qoy-qirilgan-qala/${name}`, widths)

const facts = [
  { label: 'Qurilgan', value: 'Mil. avv. IV–III asrlar' },
  { label: 'Joylashuvi', value: "Ellikqal'a tumani, Qoraqalpog'iston" },
  { label: 'Markaziy bino', value: 'Ikki qavatli, diametri ~42–44 m' },
  { label: 'Kashf etilgan', value: '1938-yil, S. P. Tolstov' },
]

const timeline = [
  { period: 'Mil. avv. IV–III asrlar', text: "Markaziy dumaloq bino, mudofaa devorlari va katta omborxonalar qurildi." },
  { period: 'Mil. avv. II asr atrofi', text: "Qal'a vayron bo'ldi. Buni ko'chmanchi sak qabilalarining hujumi bilan bog'lashadi." },
  { period: 'Milodiy IV asrgacha', text: "Xarobalar qayta o'zlashtirildi: devorlar atrofida turar-joylar, oshxonalar va diniy marosimlar uchun xonalar paydo bo'ldi." },
  { period: '1938-yil', text: "S. P. Tolstov boshchiligidagi Xorazm arxeologik-etnografik ekspeditsiyasi yodgorlikni kashf etdi." },
  { period: '1950-yillar', text: "Yodgorlik to'liq qazib o'rganildi." },
]

const finds = [
  'Mifologik sahnalar tasvirlangan sopol idishlar',
  "Tutatqidonlar va pog'onali qurbongohlar",
  'Xorazm xudolari tasvirlangan terrakota haykalchalar',
  'Haykal shaklidagi sopol ossuariylar (suyakdonlar)',
  'Devoriy rasmlar parchalari',
  'Tosh muhrlar va qadimiy yozuvlar',
]

const sources = [
  { label: 'Vikipediya (rus tilida): Кой-Крылган-кала', href: 'https://ru.wikipedia.org/wiki/Кой-Крылган-кала' },
  { label: 'Wikipedia (ingliz tilida): Koi Krylgan Kala', href: 'https://en.wikipedia.org/wiki/Koi_Krylgan_Kala' },
  { label: "Qoraqalpog'iston turizm portali: Koi-Krilgan-kala", href: 'https://karakalpakstan.travel/site-pages/koi-krilgan-kala' },
  { label: 'Orexca: Koi-Krylgan-Kala', href: 'https://orexca.com/uzbekistan/karakalpakstan/koi-krylgan-kala.htm' },
]

export default function QoyQirilganQala() {
  return (
    <main className="flex-1">
      <MonumentHero
        image={img('aerofoto', [640, 1250])}
        alt="Qo'y Qirilgan qal'a qazishmalari tepadan: markazdagi dumaloq bino va uni o'rab turgan halqa devor"
        title="Qo'y Qirilgan qal'a"
        subtitle="Qadimgi Xorazmning dumaloq ibodatxona-qal'asi — podsholar maqbarasi va osmonni kuzatish joyi"
      />

      <div className="mx-auto max-w-4xl px-6 pb-20">
        <Facts items={facts} />

        <Video3D
          src={videoSrc('qoy-qirilgan-qala-3d')}
          poster={singleImage('qoy-qirilgan-qala/video-muqova')}
          title="Qo'y Qirilgan qal'aning 3D modeli"
        >
          Qal'aning qayta tiklangan 3D modeli: tashqi devorlar va hovli, mash'alalar bilan yoritilgan ichki
          xonalar va olov yonib turgan zal. Qadimda bu yerda hayot qanday kechganini ko'ring.
        </Video3D>

        <Section title="Umumiy ma'lumot">
          <p>
            Qo'y Qirilgan qal'a — Qadimgi Xorazmning eng mashhur yodgorliklaridan biri. U Qoraqalpog'iston
            Respublikasining Ellikqal'a tumanida, «Ellik qal'a» deb ataladigan qadimiy qal'alar hududida
            joylashgan. Yodgorlik miloddan avvalgi IV–III asrlarda qurilgan va dumaloq shakli bilan
            Markaziy Osiyodagi boshqa qal'alardan keskin ajralib turadi.
          </p>
          <p>
            Nomi «qo'ylar qirilgan qal'a» degan ma'noni anglatadi. Bugungi kunda u Qoraqalpog'istondagi to'liq
            qazib o'rganilgan eng yirik qadimiy yodgorliklardan biri hisoblanadi.
          </p>
        </Section>

        <Section title="Me'morchiligi">
          <p>
            Majmuaning markazida diametri taxminan 42–44 metr bo'lgan ikki qavatli, silindr shaklidagi bino
            turgan. Undan 14 metrcha narida markaziy binoni minoralar bilan mustahkamlangan halqa shaklidagi
            mudofaa devori o'rab olgan. Butun majmuaning diametri qariyb 90 metrga yetadi.
          </p>
          <p>
            Qal'a atrofida kengligi 15 metr, chuqurligi 3 metr bo'lgan xandaq qazilgan. Dastlabki davrda
            qal'ada uzoq qamalga chidash uchun katta omborxonalar — don chuqurlari va xumlar bo'lgan.
            Keyinchalik markaziy bino va tashqi devor orasidagi bo'shliq turar-joy xonalari bilan to'lgan.
            Markaziy bino devoriy rasmlar bilan bezatilgan.
          </p>
          <Figure
            image={img('rekonstruksiya', [640])}
            alt="Qo'y Qirilgan qal'aning rekonstruksiya chizmasi: markaziy dumaloq bino, halqa devor va kirish darvozasi"
            sizes="(min-width: 640px) 640px, 100vw"
            className="pt-4"
            imgClassName="mx-auto max-w-[640px] border border-slate-200 bg-white"
          >
            Qal'aning qayta tiklangan ko'rinishi (rekonstruksiya).{' '}
            <Credit author="User1712" license="CC BY-SA 4.0" href="https://commons.wikimedia.org/wiki/File:Koi_Krylgan_Kala_(reconstruction).jpg" />
          </Figure>
        </Section>

        <Section title="Vazifasi">
          <p>
            Qo'y Qirilgan qal'a oddiy harbiy istehkom bo'lmagan. Olimlarning fikricha, u muqaddas inshoot —
            Xorazm podsholarining maqbarasi va zardushtiylik ibodatxonasi bo'lgan.
          </p>
          <p>
            Bino shunday hisob-kitob bilan qurilganki, undan osmon jismlarini kuzatishda foydalanish mumkin
            bo'lgan. Shuning uchun ko'plab tadqiqotchilar uni qadimiy rasadxona deb hisoblaydi. Ayrim olimlar
            inshootni Fomalhaut yulduzi bilan, boshqalari esa dumaloq shaklini Quyoshga sig'inish bilan
            bog'laydi.
          </p>
        </Section>

        <Section title="Tarixi">
          <Timeline items={timeline} />
        </Section>

        <Section title="Topilmalar">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_260px]">
            <div className="space-y-4">
              <p>Qazishmalar paytida qal'adan ko'plab noyob ashyolar topilgan:</p>
              <ul className="list-disc space-y-1 pl-6 marker:text-slate-400">
                {finds.map((find) => (
                  <li key={find}>{find}</li>
                ))}
              </ul>
              <p>
                Zardushtiylik odatiga ko'ra marhumlarning suyaklari maxsus idishlar — ossuariylarda saqlangan.
                Keyingi davrda qal'ada ana shunday ossuariylar saqlana boshlagan.
              </p>
            </div>
            <Figure
              image={img('haykal-ossuariy', [480, 960])}
              alt="Erkak qiyofasidagi sopol haykal-ossuariy"
              sizes="260px"
              className="mx-auto w-full max-w-[260px]"
            >
              Erkak qiyofasidagi haykal-ossuariy, qal'a atrofidan topilgan, milodiy I–III asrlar. Ermitaj muzeyi.{' '}
              <Credit author="sailko" license="CC BY-SA 3.0" href="https://commons.wikimedia.org/wiki/File:Statua_virile-ossario,_dintorni_di_koy-krylgan-kala,_I-III_sec.JPG" />
            </Figure>
          </div>
        </Section>

        <Section title="Joylashuvi">
          <p>
            Qal'a Amudaryoning qadimiy deltasida, Qizilqum cho'li chekkasida joylashgan. Qadimda u sug'orish
            kanali bo'yida qurilgan. Undan 30 km shimoli-g'arbda Xorazm podsholarining poytaxti —{' '}
            <Link to="/tuproq-qala" className="font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-600">
              Tuproq qal'a
            </Link>{' '}
            joylashgan.
          </p>
          <Figure image={img('xarita', [640, 1280])} alt="Xorazm vohasining sun'iy yo'ldosh surati, qal'a o'rni qizil doira bilan belgilangan" className="pt-2">
            Xorazm vohasi kosmosdan. Qizil doira — Qo'y Qirilgan qal'a joylashgan hudud.{' '}
            <Credit author="NASA" license="jamoat mulki" href="https://commons.wikimedia.org/wiki/File:Chorasmian_oasis_Koi_Krylgan_Kala_fortress.jpg" />
          </Figure>
          <Coordinates label="41°45′19″ N, 61°07′01″ E" lat={41.75521} lng={61.11701} />
        </Section>

        <Sources
          items={sources}
          heroCredit={{
            author: "O'zbekiston Respublikasi Madaniy meros agentligi",
            license: 'CC BY 4.0',
            href: 'https://commons.wikimedia.org/wiki/File:Qo%E2%80%98yqirqilgan_qal%E2%80%99a.jpg',
          }}
        />
      </div>
    </main>
  )
}
