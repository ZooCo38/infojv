'use client';

import Image from 'next/image';
import BentoGrid from '@/components/ui/BentoGrid';
import BentoCard from '@/components/ui/BentoCard';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import NavCard from '@/components/ui/NavCard';
import { useContactModal } from '@/contexts/ContactModalContext';

export default function IAContent() {
  const { openModal } = useContactModal();

  return (
    <main className="min-h-screen lg:h-screen lg:overflow-hidden">
      <BentoGrid className="bento-ia">
        {/* NAV - col 1, rows 1-2 */}
        <NavCard gridArea="nav" />

        {/* HERO - cols 2-3, row 1 */}
        <BentoCard gridArea="hero" variant="dark" className="flex items-center justify-between hero-ia">
          <div>
            <p className="text-accent font-semibold text-sm mb-2">Pour les PME aussi</p>
            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              L&apos;IA n&apos;est pas<br />
              <span className="text-accent italic">réservée aux géants</span>
            </h1>
            <p className="text-base text-gray-300 max-w-md">
              Des solutions concrètes, sans jargon technique, adaptées à votre budget et vos besoins.
            </p>
          </div>
        </BentoCard>

        {/* ROBOT - col 4, row 1 */}
        <BentoCard gridArea="robot" variant="dark" className="flex items-center justify-center p-4">
          <div className="relative">
            <Image
              src="/assets/ia_symbol.png"
              alt="Intelligence Artificielle"
              width={180}
              height={180}
              className="object-contain animate-float"
            />
          </div>
        </BentoCard>

        {/* USE CASE 1 - col 2, row 2 */}
        <BentoCard gridArea="case1" className="flex flex-col">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
            <Icon name="smart_toy" className="text-2xl text-accent" />
          </div>
          <h3 className="text-lg font-bold text-black mb-2">Compagnon de marque</h3>
          <p className="text-sm text-gray-600 flex-1">
            Un chatbot à votre image qui répond à vos clients 24h/24, formé sur votre métier.
          </p>
        </BentoCard>

        {/* USE CASE 2 - col 3, row 2 */}
        <BentoCard gridArea="case2" className="flex flex-col">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
            <Icon name="description" className="text-2xl text-accent" />
          </div>
          <h3 className="text-lg font-bold text-black mb-2">Aide administrative</h3>
          <p className="text-sm text-gray-600 flex-1">
            Génération de documents, résumés automatiques, traitement de vos emails.
          </p>
        </BentoCard>

        {/* USE CASE 3 - col 4, row 2 */}
        <BentoCard gridArea="case3" className="flex flex-col">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
            <Icon name="analytics" className="text-2xl text-accent" />
          </div>
          <h3 className="text-lg font-bold text-black mb-2">Aide stratégique</h3>
          <p className="text-sm text-gray-600 flex-1">
            Analyse de vos données, tendances marché, aide à la décision éclairée.
          </p>
        </BentoCard>

        {/* DEMYSTIFICATION - col 1, row 3 */}
        <BentoCard gridArea="demyst" variant="mint" className="flex flex-col justify-center">
          <Icon name="lightbulb" className="text-3xl text-black mb-3" />
          <p className="text-lg font-bold text-black leading-snug">
            Pas besoin d&apos;être expert pour en profiter.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Je traduis la tech en solutions simples.
          </p>
        </BentoCard>

        {/* USE CASE 4 - cols 2-3, row 3 */}
        <BentoCard gridArea="case4" className="flex flex-col">
          <div className="flex items-start gap-4 mb-2">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon name="precision_manufacturing" className="text-xl text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black">Agents automatisés</h3>
              <p className="text-sm text-gray-600">
                Des assistants IA qui travaillent pour vous
              </p>
            </div>
          </div>
          {/* Carousel logos IA - plus grand, centré */}
          <div className="carousel-container relative flex-1 flex items-center pt-8">
            <div className="flex gap-4 animate-scroll">
              {/* Première série */}
              <div className="ai-logo" data-tooltip="ChatGPT">
                <Image src="/assets/outils-ia/GPT.svg" alt="GPT" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="Claude">
                <Image src="/assets/outils-ia/claude.svg" alt="Claude" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="Gemini">
                <Image src="/assets/outils-ia/Gemini.svg" alt="Gemini" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="Mistral">
                <Image src="/assets/outils-ia/mistral.svg" alt="Mistral" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="Copilot">
                <Image src="/assets/outils-ia/copilot.svg" alt="Copilot" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="Perplexity">
                <Image src="/assets/outils-ia/perplexity.svg" alt="Perplexity" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="DeepSeek">
                <Image src="/assets/outils-ia/deepseek.svg" alt="DeepSeek" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="Grok">
                <Image src="/assets/outils-ia/Grock.svg" alt="Grok" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="Meta AI">
                <Image src="/assets/outils-ia/Meta.svg" alt="Meta" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="Midjourney">
                <Image src="/assets/outils-ia/midjourney.svg" alt="Midjourney" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="HuggingFace">
                <Image src="/assets/outils-ia/huggingface.svg" alt="HuggingFace" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="Make">
                <Image src="/assets/outils-ia/make.svg" alt="Make" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              {/* Duplication pour boucle infinie */}
              <div className="ai-logo" data-tooltip="ChatGPT">
                <Image src="/assets/outils-ia/GPT.svg" alt="GPT" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="Claude">
                <Image src="/assets/outils-ia/claude.svg" alt="Claude" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="Gemini">
                <Image src="/assets/outils-ia/Gemini.svg" alt="Gemini" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="Mistral">
                <Image src="/assets/outils-ia/mistral.svg" alt="Mistral" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="Copilot">
                <Image src="/assets/outils-ia/copilot.svg" alt="Copilot" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="ai-logo" data-tooltip="Perplexity">
                <Image src="/assets/outils-ia/perplexity.svg" alt="Perplexity" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
            </div>
          </div>
        </BentoCard>

        {/* STATS - col 4, row 3 */}
        <BentoCard gridArea="stats" variant="dark" className="flex flex-col items-center justify-center text-center stats-card">
          <p className="text-4xl font-extrabold text-accent mb-1">80%</p>
          <p className="text-sm text-white leading-tight">
            des tâches répétitives<br />
            automatisables
          </p>
        </BentoCard>

        {/* PRICE - cols 1-2, row 4 */}
        <BentoCard gridArea="price" className="flex flex-col justify-center">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-extrabold mb-1">
                Solutions IA
              </h2>
              <p className="text-sm text-gray-600">
                Audit gratuit de vos besoins
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">à partir de</p>
              <p className="text-3xl font-extrabold text-accent">1 500€</p>
            </div>
          </div>
          {/* Timeline */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <span className="text-sm font-extrabold">Audit</span>
            <Icon name="arrow_forward" className="text-accent text-xl" />
            <span className="text-sm font-extrabold">Prototype</span>
            <Icon name="arrow_forward" className="text-accent text-xl" />
            <span className="text-sm font-extrabold">Déploiement</span>
            <Icon name="arrow_forward" className="text-accent text-xl" />
            <span className="text-sm font-extrabold">Formation</span>
          </div>
        </BentoCard>

        {/* CTA (Contact) - cols 3-4, row 4 */}
        <BentoCard gridArea="cta" className="flex items-center justify-between !bg-[#C9F9E3]">
          <div>
            <h2 className="text-3xl font-extrabold mb-2 text-black">
              Explorons<br />ensemble
            </h2>
            <p className="text-sm text-black">L&apos;IA adaptée à votre métier.</p>
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
        .bento-ia {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          grid-template-rows: auto 1fr 1fr auto !important;
          grid-template-areas:
            "nav      hero     hero     robot"
            "nav      case1    case2    case3"
            "demyst   case4    case4    stats"
            "price    price    cta      cta" !important;
          height: 100vh;
          max-width: 1440px;
          margin: 0 auto;
        }

        /* Hero IA avec effet cyber */
        .hero-ia {
          box-shadow: 0 8px 32px rgba(83, 225, 161, 0.3);
        }

        /* Animation flottante pour le robot */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Stats shadow mint */
        .stats-card {
          box-shadow: 0 8px 32px rgba(83, 225, 161, 0.3);
        }

        /* Animation défilement logos */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Logo IA avec tooltip */
        .ai-logo {
          position: relative;
          width: 56px;
          height: 56px;
          background-color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }

        .ai-logo:hover {
          transform: scale(1.2);
          box-shadow: 0 8px 20px rgba(83, 225, 161, 0.4);
          z-index: 10;
        }

        /* Tooltip mint */
        .ai-logo::after {
          content: attr(data-tooltip);
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
          background-color: #53E1A1;
          color: #000;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s, visibility 0.2s;
        }

        .ai-logo:hover::after {
          opacity: 1;
          visibility: visible;
        }

        /* Container carousel - clip horizontal uniquement */
        .carousel-container {
          overflow-x: clip;
          overflow-y: visible;
        }

        @media (max-width: 1024px) {
          .bento-ia {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: auto !important;
            height: auto !important;
            min-height: 100vh;
            grid-template-areas:
              "nav       nav"
              "hero      robot"
              "case1     case2"
              "case3     demyst"
              "case4     case4"
              "stats     stats"
              "price     price"
              "cta       cta" !important;
          }
        }

        @media (max-width: 640px) {
          .bento-ia {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
            height: auto !important;
            grid-template-areas:
              "nav"
              "hero"
              "robot"
              "demyst"
              "case1"
              "case2"
              "case3"
              "case4"
              "stats"
              "price"
              "cta" !important;
          }
        }
      `}</style>
    </main>
  );
}
