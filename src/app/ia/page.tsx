import type { Metadata } from 'next';
import IAContent from './IAContent';

export const metadata: Metadata = {
  title: 'Solutions IA pour PME',
  description: 'L\'IA accessible aux PME : chatbots sur mesure, automatisation administrative, aide stratégique, agents IA. Audit gratuit, solutions à partir de 1 500€.',
  openGraph: {
    title: 'Solutions IA pour PME | Info JV',
    description: 'L\'IA accessible aux PME : chatbots, automatisation, aide stratégique. Audit gratuit.',
    url: 'https://infojv.net/ia',
    images: ['/assets/preview.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions IA pour PME | Info JV',
    description: 'L\'IA accessible aux PME. Chatbots, automatisation, agents IA.',
    images: ['/assets/preview.png'],
  },
};

export default function IAPage() {
  return <IAContent />;
}
