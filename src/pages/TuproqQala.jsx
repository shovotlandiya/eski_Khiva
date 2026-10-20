import { Link } from 'react-router-dom'
import { MonumentHero, Facts, Video3D, Section, Credit, Figure, Timeline, Coordinates, Sources } from '../components/Monument'
import { responsiveImage, singleImage, videoSrc } from '../utils/images'

const img = (name, widths) => responsiveImage(`tuproq-qala/${name}`, widths)

const linkClass = 'font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-600'

const facts = [
  { label: 'Poytaxt bo\'lgan', value: 'Milodiy II–III asrlar' },
  { label: 'Joylashuvi', value: "Ellikqal'a tumani, Qoraqalpog'iston" },
  { label: 'Shahar o\'lchami', value: '500 × 350 m' },
  { label: 'Tadqiq etilgan', value: '1938-yildan, S. P. Tolstov' },
]

const halls = [
  { name: 'Podsholar zali', text: "23 nafar Xorazm shohining katta haykallari turgan, ularning ortidagi ibodatxonada esa olov yonib turgan." },
  { name: "G'alabalar zali", text: "Taxtda o'tirgan shohlar va ularga hokimiyat belgilarini topshirayotgan uchar ma'budalar tasvirlangan." },
  { name: 'Qora jangchilar zali', text: "Tokchalarda shohlar, ularning yonida esa jasoratlarini karnay chalib madh etayotgan kichik qora jangchilar." },
  { name: "Bug'ular zali", text: "Bug'ular va grifonlar (afsonaviy qanotli maxluqlar) tasvirlangan friz bilan bezatilgan." },
  { name: 'Raqs qilayotgan niqoblar zali', text: "Raqsga tushayotgan erkak va ayollar, asosiy tokchada esa yirtqich hayvon bilan birga buyuk ma'buda tasvirlangan." },
]

const timeline = [
  { period: 'Milodiy I–II asrlar', text: "Shahar barpo etildi. Ayrim olimlar unga Xorazm hukmdori Artav (Artaban) asos solgan deb hisoblaydi." },
  { period: 'Milodiy II–III asrlar', text: "Tuproq qal'a Xorazm podsholarining poytaxti bo'ldi, Baland saroy gullab-yashnadi." },
  { period: 'Milodiy IV asr boshi', text: "Shahar devorlari qayta qurildi, saroy qal'aga aylantirildi. Keyinchalik poytaxt Kat (hozirgi Beruniy) shahriga ko'chirildi." },
  { period: 'Milodiy V–VI asrlar', text: "Shaharda bir muddat oddiy aholi yashadi, so'ng u butunlay tashlab ketildi." },
  { period: '1938-yil', text: "S. P. Tolstov boshchiligidagi Xorazm ekspeditsiyasi yodgorlikni o'rganishni boshladi." },
  { period: '1945–1950-yillar', text: 'Baland saroy qazib o\'rganildi.' },
  { period: '1965–1975-yillar', text: "Shahar hududida yangi qazishmalar o'tkazildi." },
]

const sources = [
  { label: 'Vikipediya (rus tilida): Топрак-кала', href: 'https://ru.wikipedia.org/wiki/Топрак-кала' },
  { label: 'Wikipedia (ingliz tilida): Toprak-Kala', href: 'https://en.wikipedia.org/wiki/Toprak-Kala' },
  { label: "Qoraqalpog'iston turizm portali: Toprak-kala", href: 'https://karakalpakstan.travel/site-pages/toprak-kala' },
]

export default function TuproqQala() {
  return (
    <main className="flex-1">
      <MonumentHero
        image={img('bosh-rasm', [960, 1280, 1920])}
        alt="Tuproq qal'a xarobalari: shahar xonalarining devorlari, orqada Baland saroy tepaligi"
        title="Tuproq qal'a"
        subtitle="Qadimgi Xorazm podsholarining poytaxti va devoriy rasmlari bilan mashhur Baland saroy"
      />

      <div className="mx-auto max-w-4xl px-6 pb-20">
        <Facts items={facts} />

        <Video3D
          src={videoSrc('tuproq-qala-3d')}
          poster={singleImage('tuproq-qala/video-muqova')}
          title="Tuproq qal'aning 3D modeli"
        >
          Shaharning qayta tiklangan 3D modeli: minorali devorlar bilan o'ralgan to'g'ri to'rtburchak shahar,
          zich turar-joy mahallalari, darvoza oldidagi kirish inshooti va baland platformadagi saroy.
        </Video3D>

        <Section title="Umumiy ma'lumot">
          <p>
            Tuproq qal'a — Qadimgi Xorazmning eng yirik va eng mashhur shahar-qal'alaridan biri. U
            Qoraqalpog'iston Respublikasining Ellikqal'a tumanida, Amudaryoning o'ng sohilida joylashgan.
            Milodiy II–III asrlarda shahar Xorazm podsholarining poytaxti bo'lgan.
          </p>
          <p>
            Nomi «tuproq» so'zidan olingan: asrlar davomida shahar xarobalari katta tuproq tepaga aylangan.
            Tuproq qal'a YuNESKO Butunjahon merosi ro'yxatiga nomzod sifatida taqdim etilgan «Qadimgi
            Xorazmning cho'l qal'alari» guruhiga kiradi.
          </p>
        </Section>

        <Section title="Shahar">
          <p>
            Shahar to'g'ri to'rtburchak shaklida bo'lib, o'lchami 500 × 350 metr, maydoni qariyb 17,5 gektar.
            Uni balandligi 8–9 metr bo'lgan, to'rtburchak minoralar bilan mustahkamlangan devorlar o'rab
            olgan. Darvoza oldida murakkab kirish inshooti qurilgan.
          </p>
          <p>
            Darvozadan shahar qal'asiga qarab kengligi 9 metrli bosh ko'cha o'tgan. Shahar ichi turar-joy
            uylari bilan zich qurilgan. Bu yerda olovxona (otashkada) ham bo'lgan: uning mehrobidan toza kul
            topilgan.
          </p>
          <Figure image={img('shahar', [640, 1280])} alt="Tuproq qal'a xarobalari orasida yurgan sayyohlar, orqada Baland saroy" className="pt-4">
            Shahar xarobalari: xonalar devorlari hozir ham aniq ko'rinadi. Sayyohlarga qarab xarobalar
            kattaligini tasavvur qilish mumkin.{' '}
            <Credit author="Bernard Gagnon" license="CC0" href="https://commons.wikimedia.org/wiki/File:Toprak-Kala_08.jpg" />
          </Figure>
        </Section>

        <Section title="Baland saroy">
          <p>
            Shahar ustida xom g'ishtdan qurilgan, kesik piramida shaklidagi Baland saroy qad ko'targan.
            Saroyning 100 dan ortiq xonasi qisman saqlanib qolgan: ular orasida tahorat xonalari, devonxona
            va qurolxona bor. Yuqori qavatlarda mehroblari bo'lgan ibodatxonalar joylashgan.
          </p>
          <p>Saroyning tantanali qismidagi zallar rang-barang loy barelyeflar va devoriy rasmlar bilan bezatilgan:</p>
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {halls.map((hall) => (
              <div key={hall.name} className="rounded-lg border border-slate-200 p-4 sm:last:odd:col-span-2">
                <dt className="font-semibold text-slate-900">{hall.name}</dt>
                <dd className="mt-1 text-base leading-7">{hall.text}</dd>
              </div>
            ))}
          </dl>
          <Figure image={img('saroy', [640, 1280])} alt="Baland saroyning xom g'ishtdan qurilgan devorlari va unga ko'tariladigan yo'l" className="pt-4">
            Baland saroy xarobalari.{' '}
            <Credit author="Bernard Gagnon" license="CC0" href="https://commons.wikimedia.org/wiki/File:Toprak-Kala_05.jpg" />
          </Figure>
        </Section>

        <Section title="Saroy arxivi">
          <p>
            Saroydan noyob yozma arxiv topilgan. Hujjatlar teriga va yog'och taxtachalarga qora siyoh bilan,
            qadimgi xorazm yozuvida bitilgan.
          </p>
          <p>
            Teri hujjatlarda mahsulot va oziq-ovqat kirimi qayd etilgan, yog'och taxtachalarda esa bir necha
            xorazmlik oilaga tegishli erkin odamlar va qullar ro'yxati yozilgan. Hujjatlar Xorazm yil hisobi
            bo'yicha 188–252-yillar, ya'ni milodiy III asr bilan sanalgan. Arxivning faqat kichik bir qismi
            saqlanib qolgan.
          </p>
        </Section>

        <Section title="Tarixi">
          <Timeline items={timeline} />
        </Section>

        <Section title="San'at va topilmalar">
          <p>
            Tuproq qal'aning devoriy rasmlari va haykallari Qadimgi Xorazm san'atining eng yorqin
            namunalaridan hisoblanadi. Devoriy rasmlarda zardushtiylik xudolari tasvirlangan. Ellinistik
            uslubdagi kiyim kiygan odamlar tushirilgan yuqori relyeflar Kushon va Gandxara san'ati ta'sirini
            ko'rsatadi. Haykallarning bir qismi Sankt-Peterburgdagi Ermitaj muzeyida saqlanadi.
          </p>
          <p>
            Saroy Kushon podsholari Vima Kadfiz va Kanishka hamda Xorazm hukmdori Artav tangalari asosida
            sanalgan. Shimoliy majmuadan esa Vima Kadfiz va Xuvishka tangalari, oltin sher boshi va barelyef
            yasash uchun alebastr qolip topilgan.
          </p>
          <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2">
            <Figure
              image={img('devoriy-rasm', [480, 960])}
              alt="Ayol tasviri tushirilgan devoriy rasm parchasi"
              sizes="(min-width: 640px) 408px, 100vw"
            >
              Ayol tasviri tushirilgan devoriy rasm parchasi, milodiy II–III asrlar. O'zbekiston tarixi davlat
              muzeyi, Toshkent.{' '}
              <Credit author="Bruce Allardice" license="CC BY-SA 2.0" href="https://commons.wikimedia.org/wiki/File:2nd_cent-6th_cent_CE_Wall_Painting_Woman_2nd-3rd_cent_CE_(3).jpg" />
            </Figure>
            <Figure
              image={img('alebastr-bosh', [480, 960])}
              alt="Dubulg'a kiygan erkak boshi, alebastrdan yasalgan haykal parchasi"
              sizes="(min-width: 640px) 408px, 100vw"
            >
              Dubulg'a kiygan erkak boshi, alebastr, bo'yoq izlari bilan. Baland saroy, milodiy II–III asrlar.{' '}
              <Credit
                author="Wikimedia Commons"
                license="CC BY-SA 4.0"
                href="https://commons.wikimedia.org/wiki/File:Топрак-кала,_выставочные_материалы_09._Part_of_a_sculpture._Alabaster_with_traces_of_paint.jpg"
              />
            </Figure>
          </div>
        </Section>

        <Section title="Joylashuvi">
          <p>
            Qal'a Amudaryoning o'ng sohilida, Sulton Uvays tog' tizmasidan bir necha kilometr janubda
            joylashgan. Undan atigi 1 km g'arbda Qizil qal'a, 30 km janubi-sharqda esa{' '}
            <Link to="/qoy-qirilgan-qala" className={linkClass}>Qo'y Qirilgan qal'a</Link> bor.
          </p>
          <Figure image={img('xarita', [640, 1280])} alt="Xorazm vohasining sun'iy yo'ldosh surati, Tuproq qal'a o'rni belgilangan" className="pt-2">
            Xorazm vohasi kosmosdan. Belgilangan joy — Tuproq qal'a joylashgan hudud.{' '}
            <Credit author="NASA" license="jamoat mulki" href="https://commons.wikimedia.org/wiki/File:Chorasmian_oasis_Toprak-Kala_fortress.jpg" />
          </Figure>
          <Coordinates label="41°55′38″ N, 60°49′20″ E" lat={41.92719} lng={60.82217} />
        </Section>

        <Sources
          items={sources}
          heroCredit={{ author: 'Bernard Gagnon', license: 'CC0', href: 'https://commons.wikimedia.org/wiki/File:Toprak-Kala_02.jpg' }}
        />
      </div>
    </main>
  )
}
