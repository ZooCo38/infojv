import type { Metadata } from 'next';
import MobileContent from './MobileContent';

export const metadata: Metadata = {
  title: 'Applications Mobiles Flutter',
  description: 'Développement d\'applications mobiles iOS et Android avec Flutter. Un seul code, deux plateformes. À partir de 5 000€, livraison en 6-8 semaines.',
  openGraph: {
    title: 'Applications Mobiles Flutter | Info JV',
    description: 'Apps iOS & Android avec Flutter. Un code, deux plateformes. À partir de 5 000€.',
    url: 'https://infojv.net/mobile',
    images: ['/assets/preview.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Applications Mobiles Flutter | Info JV',
    description: 'Développement apps iOS & Android avec Flutter. Livraison 6-8 semaines.',
    images: ['/assets/preview.png'],
  },
};

export default function MobilePage() {
  return <MobileContent />;
}
