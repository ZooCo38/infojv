import type { Metadata } from 'next';
import ExpertiseContent from './ExpertiseContent';

export const metadata: Metadata = {
  title: 'Expertise & Services',
  description: 'Développement web, applications mobiles Flutter, solutions IA et automatisation. Tarifs transparents à partir de 1 000€. Devis gratuit.',
  openGraph: {
    title: 'Expertise & Services | Info JV',
    description: 'Sites web, apps mobiles, IA, automatisation. Tarifs transparents, devis gratuit.',
    url: 'https://infojv.net/expertise',
    images: ['/assets/preview.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expertise & Services | Info JV',
    description: 'Sites web, apps mobiles, IA, automatisation. Tarifs transparents.',
    images: ['/assets/preview.png'],
  },
};

export default function ExpertisePage() {
  return <ExpertiseContent />;
}
