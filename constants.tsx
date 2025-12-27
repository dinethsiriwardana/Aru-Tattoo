
import { NavItem, Service, GalleryImage } from './types';

export const COLORS = {
  GOLD: '#D4AF37',
  BLACK: '#0A0A0A',
  WHITE: '#FFFFFF',
  GOLD_MUTED: 'rgba(212, 175, 55, 0.2)',
};

export const IMAGES = {
  LOGO: '/images/logo.jpg',
  WORK_1: '/images/work1.jpg',
  WORK_2: '/images/work2.jpg',
  ARTIST: '/images/artist.jpg',
  STUDIO: '/images/studio.jpg',
  HERO_BG: '/images/work1.jpg',
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
