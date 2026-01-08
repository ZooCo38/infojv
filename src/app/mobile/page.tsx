'use client';

import Image from 'next/image';
import Link from 'next/link';
import BentoGrid from '@/components/ui/BentoGrid';
import BentoCard from '@/components/ui/BentoCard';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import NavCard from '@/components/ui/NavCard';
import FloatingImage from '@/components/ui/FloatingImage';
import RotatingIcons from '@/components/ui/RotatingIcons';
import { useContactModal } from '@/contexts/ContactModalContext';

export default function MobilePage() {
  const { openModal } = useContactModal();

  return (
    <main className="h-screen overflow-hidden">
      <BentoGrid className="bento-mobile">
        {/* NAV - col 1, rows 1-2 */}
        <NavCard gridArea="nav" />

        {/* HERO - cols 2-3, row 1 */}
        <BentoCard gridArea="hero" variant="mint" className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-black leading-tight">
            Votre app mobile,<br />
            <span className="text-accent">votre avantage</span>
          </h1>
          <p className="text-base text-gray-700 max-w-md">
            Une application sur mesure pour toucher vos clients partout, tout le temps.
          </p>
        </BentoCard>

        {/* STATS - col 4, row 1 */}
        <BentoCard gridArea="stats" variant="dark" className="flex flex-col items-center justify-center text-center stats-card">
          <div className="mb-4">
            <p className="text-4xl font-extrabold text-accent mb-1">2</p>
            <p className="text-sm text-white leading-tight">
              plateformes<br />
              iOS + Android
            </p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-accent mb-1">1</p>
            <p className="text-sm text-white leading-tight">
              seul code<br />
              avec Flutter
            </p>
          </div>
        </BentoCard>

        {/* BENEFITS - col 2, rows 2-3 */}
        <BentoCard gridArea="benefits" className="flex flex-col">
          <span className="font-mono text-xs text-gray-500 mb-2">01</span>
          <h2 className="mb-4">
            <span className="text-white inline font-bold title-badge">
              Pourquoi une<br />app mobile ?
            </span>
          </h2>
          <ul className="space-y-3 text-sm mb-4">
            <li className="flex items-start gap-2">
              <Icon name="check_circle" className="text-accent text-lg mt-0.5" />
              <span><strong>Engagement</strong> — Notifications push, fidélisation client</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check_circle" className="text-accent text-lg mt-0.5" />
              <span><strong>Accessibilité</strong> — Vos services dans la poche</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check_circle" className="text-accent text-lg mt-0.5" />
              <span><strong>Image pro</strong> — Modernité et crédibilité</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check_circle" className="text-accent text-lg mt-0.5" />
              <span><strong>Performance</strong> — Expérience fluide et rapide</span>
            </li>
          </ul>
          <button
            onClick={openModal}
            className="mt-auto bg-accent text-black px-4 py-3 rounded-xl font-semibold text-sm hover:bg-accent/80 transition-colors"
          >
            Je veux mon app maintenant
          </button>
        </BentoCard>

        {/* FLUTTER - col 3, rows 2-3 */}
        <BentoCard gridArea="flutter" className="flex flex-col">
          <span className="font-mono text-xs text-gray-500 mb-2">02</span>
          <h2 className="mb-4">
            <span className="text-white inline font-bold title-badge">
              Flutter, le<br />choix malin
            </span>
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Un seul développement pour iOS et Android. Moins de coûts, plus de rapidité.
          </p>
          {/* Carrousel 3D Android / Flutter / iOS */}
          <div className="flex-1 flex items-center justify-center">
            <RotatingIcons />
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">Flutter</span>
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">Dart</span>
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">Cross-platform</span>
          </div>
        </BentoCard>

        {/* ORONEO - col 4, rows 2-3 */}
        <BentoCard gridArea="oroneo" className="flex flex-col">
          <span className="font-mono text-xs text-gray-500 mb-2">03</span>
          <h2 className="mb-4">
            <span className="text-white inline font-bold title-badge">
              Projet<br />Oroneo
            </span>
          </h2>
          {/* Layout 2 colonnes */}
          <div className="flex-1 flex gap-4">
            {/* Colonne gauche - Visuel */}
            <div className="flex-shrink-0 w-28">
              <Image
                src="/assets/mobile.png"
                alt="Application Oroneo"
                width={140}
                height={280}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
            {/* Colonne droite - Texte */}
            <div className="flex flex-col justify-between py-2">
              <div>
                <p className="text-sm leading-relaxed mb-2 text-gray-700">
                  App mobile + IA pour la simulation retraite.
                </p>
                <p className="text-accent font-semibold text-sm">
                  Mobile + Intelligence Artificielle
                </p>
              </div>
              <Link href="/projets" className="inline-flex items-center gap-1 text-sm font-semibold text-black hover:text-accent transition-colors">
                <Icon name="chevron_right" className="text-base" />
                voir le projet
              </Link>
            </div>
          </div>
        </BentoCard>

        {/* REASSURANCE - col 1, row 3 */}
        <BentoCard gridArea="mockup" variant="dark" className="flex flex-col justify-center gap-4 stats-card">
          <div>
            <p className="text-3xl font-extrabold text-white leading-none">
              6-8 <span className="text-lg font-medium">sem.</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">de développement</p>
          </div>
          <div className="h-px bg-gray-700" />
          <div>
            <p className="text-3xl font-extrabold text-accent leading-none">
              -50<span className="text-lg font-medium">%</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">vs une agence classique</p>
          </div>
        </BentoCard>

        {/* PRICE - cols 1-2, row 4 */}
        <BentoCard gridArea="price" className="flex flex-col justify-center">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-extrabold mb-1">
                Apps sur mesure
              </h2>
              <p className="text-sm text-gray-600">
                Devis gratuit et sans engagement
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">à partir de</p>
              <p className="text-3xl font-extrabold text-accent">5 000€</p>
            </div>
          </div>
          {/* Timeline */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <span className="text-base font-extrabold">Conception</span>
            <Icon name="arrow_forward" className="text-accent text-xl" />
            <span className="text-base font-extrabold">Design</span>
            <Icon name="arrow_forward" className="text-accent text-xl" />
            <span className="text-base font-extrabold">Dev</span>
            <Icon name="arrow_forward" className="text-accent text-xl" />
            <span className="text-base font-extrabold">Livraison</span>
          </div>
        </BentoCard>

        {/* CTA (Contact) - cols 3-4, row 4 */}
        <BentoCard gridArea="cta" className="flex items-center justify-between !bg-[#C9F9E3]">
          <div>
            <h2 className="text-3xl font-extrabold mb-2 text-black">
              Votre projet<br />mobile ?
            </h2>
            <p className="text-sm text-black">Discutons de votre application.</p>
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
        .bento-mobile {
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(4, 1fr);
          grid-template-areas:
            "nav      hero     hero     stats"
            "nav      benefits flutter  oroneo"
            "mockup   benefits flutter  oroneo"
            "price    price    cta      cta";
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

        @media (max-width: 1024px) {
          .bento-mobile {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            height: auto;
            min-height: 100vh;
            grid-template-areas:
              "nav       nav"
              "hero      hero"
              "stats     mockup"
              "benefits  flutter"
              "oroneo    oroneo"
              "price     price"
              "cta       cta";
          }
        }

        @media (max-width: 640px) {
          .bento-mobile {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            height: auto;
            grid-template-areas:
              "nav"
              "hero"
              "stats"
              "mockup"
              "benefits"
              "flutter"
              "oroneo"
              "price"
              "cta";
          }
        }
      `}</style>
    </main>
  );
}
