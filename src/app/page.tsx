import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Info JV — Développeur Web, Mobile & IA à Marseille',
  description: 'Julien Villard, expert digital depuis 20+ ans. Création de sites web, applications mobiles Flutter, solutions IA pour PME. Basé à Marseille, Peypin, Aix-en-Provence.',
  openGraph: {
    title: 'Info JV — Développeur Web, Mobile & IA à Marseille',
    description: 'Expert digital depuis 20+ ans. Sites web, apps mobiles, solutions IA pour PME.',
    url: 'https://infojv.net',
    images: ['/assets/preview.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Info JV — Expert Digital à Marseille',
    description: 'Sites web, apps mobiles, solutions IA pour PME. 20+ ans d\'expérience.',
    images: ['/assets/preview.png'],
  },
};

export default function Home() {
  return <HomeContent />;
}
