'use client';

import Image from 'next/image';
import BentoGrid from '@/components/ui/BentoGrid';
import BentoCard from '@/components/ui/BentoCard';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import NavCard from '@/components/ui/NavCard';
import Badge from '@/components/ui/Badge';
import { useContactModal } from '@/contexts/ContactModalContext';

export default function ProjetsPage() {
  const { openModal } = useContactModal();

  return (
    <main className="h-screen overflow-hidden">
      <BentoGrid className="bento-projets">
        {/* NAV - col 1, rows 1-2 */}
        <NavCard gridArea="nav" />

        {/* HERO - cols 2-4, row 1 */}
        <BentoCard gridArea="hero" variant="mint" className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-black leading-tight">
            Mes réalisations,<br />
            <span className="text-accent">vos inspirations</span>
          </h1>
          <p className="text-base text-gray-700 max-w-md">
            Découvrez des projets concrets qui illustrent mon expertise en développement mobile, IA et automatisation.
          </p>
        </BentoCard>

        {/* ORONEO - cols 2-3, rows 2-3 */}
        <BentoCard gridArea="oroneo" className="flex flex-col p-0 overflow-hidden">
          {/* Image */}
          <div className="relative h-40 bg-gradient-to-br from-[#C9F9E3] to-[#53E1A1] flex items-center justify-center">
            <Image
              src="/assets/mobile.png"
              alt="Application Oroneo"
              width={120}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <Badge variant="dark" className="self-start mb-3">Mobile + IA</Badge>
            <h3 className="text-xl font-bold text-black mb-2">Oroneo</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Application mobile de simulation retraite intégrant une IA conversationnelle pour accompagner les utilisateurs dans leurs projections financières.
            </p>
            <div className="mt-auto">
              <div className="flex items-start gap-2 mb-3">
                <Icon name="check_circle" className="text-accent text-lg mt-0.5" />
                <p className="text-sm font-medium text-black">+500 simulations réalisées</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-black/5 text-gray-600">Flutter</span>
                <span className="text-xs px-2 py-1 rounded-full bg-black/5 text-gray-600">OpenAI</span>
                <span className="text-xs px-2 py-1 rounded-full bg-black/5 text-gray-600">Firebase</span>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* BAS - col 4, rows 2-3 */}
        <BentoCard gridArea="bas" variant="dark" className="flex flex-col stats-card">
          <Badge variant="accent" className="self-start mb-3">Automatisation</Badge>
          <h3 className="text-xl font-bold text-white mb-2">BAS</h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            Système d'automatisation des processus métier pour une grande banque. Traitement automatisé des documents et workflows internes.
          </p>
          <div className="mt-auto">
            <div className="flex items-start gap-2 mb-3">
              <Icon name="check_circle" className="text-accent text-lg mt-0.5" />
              <p className="text-sm font-medium text-white">-70% de temps de traitement</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">Python</span>
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">RPA</span>
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">API</span>
            </div>
          </div>
        </BentoCard>

        {/* STATS - col 1, row 3 */}
        <BentoCard gridArea="stats" variant="dark" className="flex flex-col items-center justify-center text-center stats-card">
          <p className="text-4xl font-extrabold text-accent mb-1">50+</p>
          <p className="text-sm text-white leading-tight">
            projets<br />
            livrés
          </p>
        </BentoCard>

        {/* CTA (Contact) - cols 1-4, row 4 */}
        <BentoCard gridArea="cta" className="flex items-center justify-between !bg-[#C9F9E3]">
          <div>
            <h2 className="text-3xl font-extrabold mb-2 text-black">
              Un projet<br />similaire ?
            </h2>
            <p className="text-sm text-black">Parlons de votre besoin.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="icon" icon="mail" onClick={openModal} />
            <Button variant="icon" icon="call" href="tel:+33625542475" />
            <a
              href="https://linkedin.com/in/julien-villard"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/infojv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </BentoCard>
      </BentoGrid>

      <style jsx global>{`
        .bento-projets {
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: auto 1fr 1fr auto;
          grid-template-areas:
            "nav      hero     hero     hero"
            "nav      oroneo   oroneo   bas"
            "stats    oroneo   oroneo   bas"
            "cta      cta      cta      cta";
          height: 100vh;
          max-width: 1440px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .bento-projets {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            height: auto;
            min-height: 100vh;
            grid-template-areas:
              "nav       nav"
              "hero      hero"
              "stats     stats"
              "oroneo    oroneo"
              "bas       bas"
              "cta       cta";
          }
        }

        @media (max-width: 640px) {
          .bento-projets {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            height: auto;
            grid-template-areas:
              "nav"
              "hero"
              "stats"
              "oroneo"
              "bas"
              "cta";
          }
        }
      `}</style>
    </main>
  );
}
