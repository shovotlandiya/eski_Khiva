import { responsiveImage, singleImage, videoSrc } from '../utils/images'

// Saytdagi yodgorliklar — Bosh sahifa va "Biz haqimizda" kartalari shu ro'yxatdan olinadi.
// image — bugungi (yoki qazishma) surati, render — 3D rekonstruksiyadan kadr.
export const monuments = [
  {
    href: '/qoy-qirilgan-qala',
    name: "Qo'y Qirilgan qal'a",
    period: 'Mil. avv. IV–III asrlar',
    text: "Dumaloq ibodatxona-qal'a: podsholar maqbarasi va qadimiy rasadxona.",
    image: responsiveImage('qoy-qirilgan-qala/aerofoto', [640, 1250]),
    alt: "Qo'y Qirilgan qal'a qazishmalari tepadan",
    photoLabel: 'Qazishmalar',
    render: singleImage('qoy-qirilgan-qala/video-muqova'),
    video: videoSrc('qoy-qirilgan-qala-3d'),
    videoText: "Tashqi devorlar va hovli, mash'alalar bilan yoritilgan ichki xonalar va olov yonib turgan zal.",
    poster: singleImage('qoy-qirilgan-qala/video-muqova'),
    duration: '1:21',
  },
  {
    href: '/tuproq-qala',
    name: "Tuproq qal'a",
    period: 'Milodiy I–VI asrlar',
    text: 'Xorazm podsholarining poytaxti, devoriy rasmlari bilan mashhur saroy.',
    image: responsiveImage('tuproq-qala/karta', [640, 1280]),
    alt: "Tuproq qal'adagi Baland saroy xarobalari",
    photoLabel: 'Bugun',
    render: singleImage('tuproq-qala/3d-saroy'),
    video: videoSrc('tuproq-qala-3d'),
    videoText: "Minorali devorlar bilan o'ralgan shahar, zich mahallalar va baland platformadagi saroy.",
    poster: singleImage('tuproq-qala/video-muqova'),
    duration: '1:37',
  },
  {
    href: '/kohna-urganch',
    name: "Ko'hna Urganch",
    period: 'X–XIV asrlar',
    text: 'Xorazmshohlar poytaxti va YuNESKO Butunjahon merosi.',
    image: responsiveImage('kohna-urganch/karta', [640, 1280]),
    alt: "Ko'hna Urganchdagi Qutlug' Temur minorasi",
    photoLabel: 'Bugun',
    render: singleImage('kohna-urganch/video-muqova'),
    video: videoSrc('kohna-urganch-3d'),
    videoText: "Devorlar bilan o'ralgan shahar, ko'k gumbazli binolar, minoralar va shahar atrofidagi bog'lar.",
    poster: singleImage('kohna-urganch/video-muqova'),
    duration: '2:33',
  },
]
