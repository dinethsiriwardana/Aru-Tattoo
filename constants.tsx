
import { NavItem, Service, GalleryImage } from './types';

export const COLORS = {
  GOLD: '#D4AF37',
  BLACK: '#0A0A0A',
  WHITE: '#FFFFFF',
  GOLD_MUTED: 'rgba(212, 175, 55, 0.2)',
};

export const IMAGES = {
  LOGO: 'https://scontent.fcmb3-2.fna.fbcdn.net/v/t39.30808-1/598678849_849375094504514_5069545526401102180_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeFR01yiLxRmhQkS8m1qUh_9cSIATrLCeAlxIgBOssJ4CYWIsk4tHGBphp_tlMM5TLayRVbDaHdmbQ4l-jE_O462&_nc_ohc=EH_5vGdiFXEQ7kNvwEyAlPU&_nc_oc=Adno9R780dywwM0a288SnSRKKJlEspLEM9xLCXfDGSDaE2z5rxbcK0YJMFZw0ULiLoA&_nc_zt=24&_nc_ht=scontent.fcmb3-2.fna&_nc_gid=fzAw0P4sGWFBgqhNm-q5SQ&oh=00_Aflv4F4GFuTW6yd0GQS3JsHn3PjwFlIHO9PPPTxyvSOVnA&oe=69559F58',
  WORK_1: 'https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/480706090_621026827339343_4324377254867360495_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEP6oVbQyqGPiW6qd7ZmnMHSJ7NYWgPithIns1haA-K2NFqd51qwaUV8BcgYy8lROt7fWLMOVnURxFWkz9b3SEA&_nc_ohc=stlRK9pe4AMQ7kNvwGVcnRh&_nc_oc=Adlj54M3byPJvogHpKNfP12A_odSBdEIMLNcpR3rH73jr1v2TSsruJK_PLraHbmdVZg&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&_nc_gid=XzOCijLhuomMiv94Ts7rmw&oh=00_AfmJtXob8r72flnvpK89oRhADe_bvBDtdkuINbtsj8PsZQ&oe=6955A31A',
  WORK_2: 'https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-6/475998743_607220985386594_5911409425553585759_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHh7lp6cZc6vCqzTex70w9BOlsYyciiG4w6WxjJyKIbjJJO2_tsKPlHGZKFLTAzHS8AgBrLpkPWneXYumFsgMTy&_nc_ohc=_RZMbqPYNuEQ7kNvwGmixbg&_nc_oc=AdnGSuUcHaXcN0LGvaF0zycfIyQcEOagS09uh-NEPz31Tm5q4U-xmd5cQEIT5sqwZyo&_nc_zt=23&_nc_ht=scontent.fcmb4-2.fna&_nc_gid=0waG5wXiylU_ikqqKgD-GQ&oh=00_Afl4ZRS3ks0arZbPV45NLdblbaPFZCqqmRI5tIBh4uBHeg&oe=6955B6EB',
  ARTIST: 'https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/598541322_3708873102577955_8999447281185374859_n.jpg?stp=dst-jpg_p843x403_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH1d518gpK24QftbT4RkW-hRgHcqO9WPglGAdyo71Y-CQ3cgqwTpoLRsR3dm4dzE4EAUCl2bcpgdKNGvRDzX8pI&_nc_ohc=53Zn1IdzceoQ7kNvwGATXZy&_nc_oc=Adl_IqBYbSZq0_shvilZOqFJ_9dSLmZWkpfqw_Qibu211oqEQws2xFnxue7zP-okAC8&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&_nc_gid=cgJoChhOoKZOcT6XUBpgFg&oh=00_Afkk7kAkbm96QR7QXx2_65_qF13VLGa8ZZ_wEatRwrpB_g&oe=6955BD89',
  STUDIO: 'https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/598552903_3708875165911082_3221078127522861264_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHQeg22H6cZtOJbrb88_hpig2NVv24lZ76DY1W_biVnviZ9vTBbhyi8GgQBw2mvgP7imKInkijcFgNg7l40EuTu&_nc_ohc=b07vOpsJ4sYQ7kNvwF6meyU&_nc_oc=AdkZVwMSYRpf91nCSsCxKS4XZHhG_sFtldI9yKmeaWQHnkNhRStcPGnPsJwesUPSzS8&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&_nc_gid=uZ8jwc9BVTL1tgJD4wso9A&oh=00_AfkvADEovQw7_2A1Iv3UcpdpF4UiGJUDhpRw3bu_cNq8wQ&oe=6955A2DB',
    HERO_BG: 'https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/480706090_621026827339343_4324377254867360495_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEP6oVbQyqGPiW6qd7ZmnMHSJ7NYWgPithIns1haA-K2NFqd51qwaUV8BcgYy8lROt7fWLMOVnURxFWkz9b3SEA&_nc_ohc=stlRK9pe4AMQ7kNvwGVcnRh&_nc_oc=Adlj54M3byPJvogHpKNfP12A_odSBdEIMLNcpR3rH73jr1v2TSsruJK_PLraHbmdVZg&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&_nc_gid=XzOCijLhuomMiv94Ts7rmw&oh=00_AfmJtXob8r72flnvpK89oRhADe_bvBDtdkuINbtsj8PsZQ&oe=6955A31A',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  { title: 'Custom Tattoo Designs', description: 'One-of-a-kind art tailored to your unique vision and personality.' },
  { title: 'Black & Grey Tattoos', description: 'Sophisticated shading and timeless depth for classic artistic expressions.' },
  { title: 'Color Tattoos', description: 'Vibrant, long-lasting hues applied with expert precision and artistic flair.' },
  { title: 'Small & Minimal Tattoos', description: 'Elegant, subtle designs focusing on clean lines and micro-detail.' },
  { title: 'Professional Body Piercing', description: 'Safe, sterile environment with expert placement for all piercings.' },
  { title: 'Touch-ups & Reworks', description: 'Breathe new life into your existing ink with modern techniques.' },
];

export const GALLERY: GalleryImage[] = [
  { url: IMAGES.WORK_1, caption: 'Custom Ink Precision' },
  { url: IMAGES.WORK_2, caption: 'Artistic Detail' },
  { url: IMAGES.STUDIO, caption: 'The ARU Studio' },
  { url: IMAGES.ARTIST, caption: 'Artist in Focus' },
];
