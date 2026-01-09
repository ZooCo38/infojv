'use client';

import Link from 'next/link';
import Image from 'next/image';
import BentoGrid from '@/components/ui/BentoGrid';
import BentoCard from '@/components/ui/BentoCard';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import FloatingImage from '@/components/ui/FloatingImage';
import NavCard from '@/components/ui/NavCard';
import HeroRotating from '@/components/heroes/HeroRotating';
import { useContactModal } from '@/contexts/ContactModalContext';

const heroMessages = [
  {
    title: 'Expert digital pour votre business',
    subtitle: 'Je transforme vos idées en solutions numériques qui marchent.'
  },
  {
    title: 'Votre partenaire digital de confiance',
    subtitle: 'Sites web, apps mobiles, IA — des solutions concrètes pour les pros.'
  },
  {
    title: 'Du code, des résultats',
    subtitle: "20 ans d'expertise au service de votre croissance digitale."
  }
];

export default function ExpertiseContent() {
  const { openModal } = useContactModal();

  return (
    <main className="h-screen overflow-hidden">
      <BentoGrid className="bento-expertise">
        {/* NAV - col 1, rows 1-2 */}
        <NavCard gridArea="nav" />

        {/* HERO - cols 2-3, row 1 */}
        <BentoCard gridArea="hero" variant="mint" className="flex items-center justify-center">
          <HeroRotating messages={heroMessages} interval={5000} />
        </BentoCard>

        {/* STATS - col 4, row 1 */}
        <BentoCard gridArea="stats" variant="dark" className="flex flex-col items-center justify-center text-center stats-card">
          <div className="mb-4">
            <p className="text-4xl font-extrabold text-accent mb-1">20+</p>
            <p className="text-sm text-white leading-tight">
              ans d&apos;expérience<br />
              dans le digital
            </p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-accent mb-1">50+</p>
            <p className="text-sm text-white leading-tight">
              projets livrés<br />
              qui tournent encore
            </p>
          </div>
        </BentoCard>

        {/* APP (Mobile) - col 2, rows 2-3 */}
        <BentoCard gridArea="app" className="flex flex-col">
          <span className="font-mono text-xs text-gray-500 mb-2">02</span>
          <h2 className="mb-3">
            <span className="text-white inline font-bold title-badge">
              Apps sur<br />mesure
            </span>
          </h2>
          <p className="text-sm leading-relaxed mb-2">
            L&apos;application dont votre business a besoin.
          </p>
          <p className="text-accent font-semibold text-sm mb-3">
            À partir de 5 000€
          </p>
          {/* Visuel flottant */}
          <div className="flex-1 flex items-center justify-center">
            <FloatingImage src="/assets/mobile_symbol.png" alt="Application mobile" width={150} height={150} />
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">Flutter</span>
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">iOS</span>
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">Android</span>
          </div>
          <Link href="/mobile" className="inline-flex items-center gap-1 text-sm font-semibold hover:text-accent transition-colors">
            <Icon name="chevron_right" className="text-base" />
            en savoir plus
          </Link>
        </BentoCard>

        {/* WEB (Sites) - col 3, rows 2-3 */}
        <BentoCard gridArea="web" className="flex flex-col">
          <span className="font-mono text-xs text-gray-500 mb-2">01</span>
          <h2 className="mb-3">
            <span className="text-white inline font-bold title-badge">
              Sites qui<br />convertissent
            </span>
          </h2>
          <p className="text-sm leading-relaxed mb-2">
            Un site pro qui vous ressemble et attire vos clients.
          </p>
          <p className="text-accent font-semibold text-sm mb-3">
            À partir de 1 500€
          </p>
          {/* Visuel flottant */}
          <div className="flex-1 flex items-center justify-center">
            <FloatingImage src="/assets/browser_symbol.png" alt="Site web" width={150} height={150} />
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">Sites vitrines</span>
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">E-commerce</span>
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">Landing</span>
          </div>
          <Link href="/projets" className="inline-flex items-center gap-1 text-sm font-semibold hover:text-accent transition-colors">
            <Icon name="chevron_right" className="text-base" />
            voir les projets
          </Link>
        </BentoCard>

        {/* IA - col 4, rows 2-3 - Style spécial mint transparent */}
        <div
          style={{ gridArea: 'ia' }}
          className="ia-card flex flex-col p-6 rounded-3xl"
        >
          <span className="font-mono text-xs text-gray-400 mb-2">03</span>
          <h2 className="mb-3">
            <span className="text-white inline font-bold title-badge">
              L&apos;IA<br />accessible
            </span>
          </h2>
          <p className="text-sm leading-relaxed mb-2 text-gray-300">
            Automatisez, analysez, gagnez du temps.
          </p>
          <p className="text-accent font-semibold text-sm mb-3">
            À partir de 2 000€
          </p>
          {/* Visuel flottant */}
          <div className="flex-1 flex items-center justify-center">
            <FloatingImage src="/assets/ia_symbol.png" alt="Intelligence artificielle" width={150} height={150} />
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded-full">Chatbots</span>
            <span className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded-full">RAG</span>
          </div>
          <Link href="/ia" className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-accent transition-colors">
            <Icon name="chevron_right" className="text-base" />
            en savoir plus
          </Link>
        </div>

        {/* AUTO (Process) - col 1, row 3 */}
        <BentoCard gridArea="auto" className="flex flex-col">
          <span className="font-mono text-xs text-gray-500 mb-2">04</span>
          <h2 className="mb-3">
            <span className="text-white inline font-bold title-badge">
              Process<br />simplifiés
            </span>
          </h2>
          <p className="text-sm leading-relaxed mb-2">
            Fini les tâches répétitives.
          </p>
          <p className="text-accent font-semibold text-sm">
            À partir de 1 000€
          </p>
        </BentoCard>

        {/* TRUST (Clients) - cols 1-2, row 4 */}
        <BentoCard gridArea="trust" className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-extrabold mb-4">
            Ils m&apos;ont fait confiance.
          </h2>
          <div className="flex gap-4 items-center mb-3">
            <div className="w-14 h-14 bg-black flex items-center justify-center p-3 rounded-xl">
              <Image
                src="/assets/logos-banque/epargne.png"
                alt="Caisse d'Épargne"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-14 h-14 bg-black flex items-center justify-center p-3 rounded-xl">
              <Image
                src="/assets/logos-banque/bnp.svg"
                alt="BNP Paribas"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-14 h-14 bg-black flex items-center justify-center p-3 rounded-xl">
              <Image
                src="/assets/logos-banque/bp.svg"
                alt="Banque Populaire"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="text-sm text-gray-500">
            15 ans en systèmes bancaires. La rigueur, ça ne s&apos;invente pas.
          </p>
        </BentoCard>

        {/* CTA (Contact) - cols 3-4, row 4 */}
        <BentoCard gridArea="cta" className="flex items-center justify-between !bg-[#C9F9E3]">
          <div>
            <h2 className="text-3xl font-extrabold mb-2 text-black">
              Un projet en<br />tête ?
            </h2>
            <p className="text-sm text-black">discutons de vos besoins.</p>
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
        .bento-expertise {
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(4, 1fr);
          grid-template-areas:
            "nav    hero   hero   stats"
            "nav    app    web    ia"
            "auto   app    web    ia"
            "trust  trust  cta    cta";
          height: 100vh;
          max-width: 1440px;
          margin: 0 auto;
        }

        /* Stats shadow mint */
        .stats-card {
          box-shadow: 0 8px 32px rgba(83, 225, 161, 0.3);
        }

        /* Badge titre sur 2 lignes */
        .title-badge {
          font-size: 1.25rem;
          line-height: 1.3;
          background-color: #000000;
          border-radius: 8px;
          padding: 4px 10px;
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
        }

        /* Carte IA - Style spécial mint transparent */
        .ia-card {
          background-color: rgba(83, 225, 161, 0.15);
          border: 1px solid #53E1A1;
          box-shadow: 0 8px 32px rgba(83, 225, 161, 0.25);
        }

        @media (max-width: 1024px) {
          .bento-expertise {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            height: auto;
            min-height: 100vh;
            grid-template-areas:
              "nav       nav"
              "hero      hero"
              "stats     auto"
              "app       web"
              "ia        trust"
              "cta       cta";
          }
        }

        @media (max-width: 640px) {
          .bento-expertise {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            height: auto;
            grid-template-areas:
              "nav"
              "hero"
              "stats"
              "app"
              "web"
              "ia"
              "auto"
              "trust"
              "cta";
          }
        }
      `}</style>
    </main>
  );
}
