import type { Metadata } from 'next';
import ProjetsContent from './ProjetsContent';

export const metadata: Metadata = {
  title: 'Projets & Automatisation',
  description: 'Solutions digitales sur mesure : automatisation, synchronisation données, scraping web, agents IA métier. Développements adaptés à vos besoins spécifiques.',
  openGraph: {
    title: 'Projets & Automatisation | Info JV',
    description: 'Solutions digitales sur mesure : automatisation, IA, scraping. Adaptées à vos besoins.',
    url: 'https://infojv.net/projets',
    images: ['/assets/preview.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projets & Automatisation | Info JV',
    description: 'Solutions digitales sur mesure et automatisation.',
    images: ['/assets/preview.png'],
  },
};

export default function ProjetsPage() {
  return <ProjetsContent />;
}
