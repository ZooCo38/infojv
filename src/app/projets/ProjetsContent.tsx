'use client';

import Image from 'next/image';
import BentoGrid from '@/components/ui/BentoGrid';
import BentoCard from '@/components/ui/BentoCard';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import NavCard from '@/components/ui/NavCard';
import FloatingShape from '@/components/ui/FloatingShape';
import { useContactModal } from '@/contexts/ContactModalContext';

export default function ProjetsContent() {
  const { openModal } = useContactModal();

  return (
    <main className="min-h-screen lg:h-screen lg:overflow-hidden">
      <BentoGrid className="bento-projets">
        {/* NAV - col 1, rows 1-2 */}
        <NavCard gridArea="nav" />

        {/* HERO - cols 2-4, row 1 */}
        <BentoCard gridArea="hero" variant="mint" className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-black leading-tight">
              Vos projets digitaux,<br />
              <span className="text-accent">sur mesure</span>
            </h1>
            <p className="text-base text-gray-700 max-w-md">
              Des solutions adaptées à vos besoins spécifiques, pas des logiciels génériques.
            </p>
          </div>
          <FloatingShape
            src="/assets/shape_3D/RoundCube-Black-Matte.png"
            className="w-32 h-32 hidden md:block"
            duration={4.5}
          />
        </BentoCard>

        {/* AUTOMATISATION - cols 2-4, rows 2-3 : Cas pratiques (3x2) */}
        <BentoCard gridArea="besoins" className="flex flex-col">
          <h2 className="mb-6">
            <span className="text-3xl md:text-4xl font-black text-black leading-tight">
              Un besoin <span className="text-accent italic">spécifique</span> ?
            </span>
          </h2>
          {/* Layout 2 colonnes : Shape gauche, Texte droite */}
          <div className="flex gap-8 flex-1">
            {/* Colonne gauche - Shape 3D */}
            <div className="hidden md:flex items-center justify-center w-72">
              <FloatingShape
                src="/assets/shape_3D/SuperToroid-Black-Matte.png"
                className="w-64 h-64"
                duration={5}
              />
            </div>
            {/* Colonne droite - Texte + Liste */}
            <div className="flex-1">
              <p className="text-base text-gray-600 mb-4">
                Pas de logiciel sur le marché ? Vous êtes différent, j&apos;adapte et intègre toutes les solutions.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="check_circle" className="text-accent text-lg mt-0.5 flex-shrink-0" />
                  <span><strong>Emails intelligents</strong> — Tri, réponses et relances par IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check_circle" className="text-accent text-lg mt-0.5 flex-shrink-0" />
                  <span><strong>Synchronisation</strong> — Vos données à jour partout</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check_circle" className="text-accent text-lg mt-0.5 flex-shrink-0" />
                  <span><strong>Scraping web</strong> — Récupération de données en ligne</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check_circle" className="text-accent text-lg mt-0.5 flex-shrink-0" />
                  <span><strong>Conversion fichiers</strong> — Traitement en masse</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check_circle" className="text-accent text-lg mt-0.5 flex-shrink-0" />
                  <span><strong>Réseaux sociaux</strong> — Publication automatisée</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check_circle" className="text-accent text-lg mt-0.5 flex-shrink-0" />
                  <span><strong>ChatGPT sur mesure</strong> — Agents IA métier</span>
                </li>
              </ul>
            </div>
          </div>
          {/* CTA centré */}
          <button
            onClick={openModal}
            className="mt-6 mx-auto bg-accent text-black px-6 py-3 rounded-xl font-semibold text-sm hover:bg-accent/80 transition-colors"
          >
            Parlons de votre besoin
          </button>
        </BentoCard>

        {/* LOGOS - col 1, row 3 : Outils automatisation */}
        <BentoCard gridArea="logos" variant="dark" className="flex flex-col items-center justify-center tools-card">
          <p className="text-lg font-extrabold italic text-white mb-4">Outils maîtrisés</p>
          <div className="flex gap-3 items-center flex-wrap justify-center">
            {/* Zapier */}
            <div className="tool-logo group relative" data-tooltip="Zapier">
              <Image
                src="/assets/logos-outils/zapier.svg"
                alt="Zapier"
                width={28}
                height={28}
                className="w-7 h-7 object-contain grayscale brightness-50"
              />
            </div>
            {/* Make */}
            <div className="tool-logo group relative" data-tooltip="Make">
              <Image
                src="/assets/logos-outils/make.svg"
                alt="Make"
                width={28}
                height={28}
                className="w-7 h-7 object-contain grayscale brightness-50"
              />
            </div>
            {/* N8N */}
            <div className="tool-logo group relative" data-tooltip="N8N">
              <Image
                src="/assets/logos-outils/n8n.svg"
                alt="N8N"
                width={28}
                height={28}
                className="w-7 h-7 object-contain grayscale brightness-50"
              />
            </div>
            {/* BAS - Logo CSS */}
            <div className="tool-logo group relative" data-tooltip="Browser Automation">
              <span className="text-gray-700 font-black text-lg">B</span>
            </div>
          </div>
        </BentoCard>

        {/* TIMELINE - cols 1-2, row 4 */}
        <BentoCard gridArea="timeline" className="flex flex-col justify-center">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-extrabold mb-1">
                Mon approche
              </h2>
              <p className="text-sm text-gray-600">
                Simple, efficace, transparent
              </p>
            </div>
          </div>
          {/* Timeline */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <span className="text-sm font-extrabold">Besoin</span>
            <Icon name="arrow_forward" className="text-accent text-xl" />
            <span className="text-sm font-extrabold">Définition</span>
            <Icon name="arrow_forward" className="text-accent text-xl" />
            <span className="text-sm font-extrabold">Dev</span>
            <Icon name="arrow_forward" className="text-accent text-xl" />
            <span className="text-sm font-extrabold">Livraison</span>
          </div>
        </BentoCard>

        {/* CTA (Contact) - cols 3-4, row 4 */}
        <BentoCard gridArea="cta" className="flex items-center justify-between !bg-[#C9F9E3]">
          <div>
            <h2 className="text-3xl font-extrabold mb-2 text-black">
              Un projet<br />en tête ?
            </h2>
            <p className="text-sm text-black">Discutons de vos besoins.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="icon" icon="mail" onClick={openModal} />
            <Button variant="icon" icon="call" href="tel:+33625542475" />
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </BentoCard>
      </BentoGrid>

      <style jsx global>{`
        .bento-projets {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          grid-template-rows: auto 1fr 1fr auto !important;
          grid-template-areas:
            "nav      hero     hero     hero"
            "nav      besoins  besoins  besoins"
            "logos    besoins  besoins  besoins"
            "timeline timeline cta      cta" !important;
          height: 100vh;
          max-width: 1440px;
          margin: 0 auto;
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

        /* Carte outils - Shadow mint */
        .tools-card {
          box-shadow: 0 8px 32px rgba(83, 225, 161, 0.3);
        }

        /* Logo outils avec tooltip */
        .tool-logo {
          width: 48px;
          height: 48px;
          background-color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }

        .tool-logo:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(83, 225, 161, 0.4);
        }

        /* Tooltip mint */
        .tool-logo::after {
          content: attr(data-tooltip);
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
          background-color: #53E1A1;
          color: #000;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s, visibility 0.2s;
        }

        .tool-logo:hover::after {
          opacity: 1;
          visibility: visible;
        }

        @media (max-width: 1024px) {
          .bento-projets {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: auto !important;
            height: auto !important;
            min-height: 100vh;
            grid-template-areas:
              "nav       nav"
              "hero      hero"
              "besoins   besoins"
              "logos     logos"
              "timeline  timeline"
              "cta       cta" !important;
          }
        }

        @media (max-width: 640px) {
          .bento-projets {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
            height: auto !important;
            grid-template-areas:
              "nav"
              "hero"
              "besoins"
              "logos"
              "timeline"
              "cta" !important;
          }
        }
      `}</style>
    </main>
  );
}
