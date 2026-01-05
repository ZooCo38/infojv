'use client';

import Link from 'next/link';
import Image from 'next/image';
import BentoGrid from '@/components/ui/BentoGrid';
import BentoCard from '@/components/ui/BentoCard';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

export default function ExpertisePage() {
  return (
    <main className="min-h-screen">
      <BentoGrid className="bento-expertise">
        {/* Card 1: Navigation (1×2) */}
        <BentoCard gridArea="nav" className="flex flex-col">
          <div className="mb-4">
            <h1 className="text-4xl font-black italic mb-4">
              <span className="text-black">INFO</span>
              <span className="text-accent">JV</span>
            </h1>
            <p className="text-2xl font-extrabold leading-tight">
              Expert digital<br />
              <span className="title-accent">pour votre</span><br />
              Business
            </p>
          </div>
          <nav className="space-y-3 mt-auto">
            <Link href="/" className="flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors">
              <Icon name="home" className="text-lg" />
              Accueil
            </Link>
            <Link href="/expertise" className="flex items-center gap-3 text-sm font-medium text-white bg-black px-3 py-2 hover:bg-accent hover:text-black transition-colors" style={{ borderRadius: '8px' }}>
              <Icon name="workspace_premium" className="text-lg" />
              Expertise
            </Link>
            <Link href="/mobile" className="flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors">
              <Icon name="smartphone" className="text-lg" />
              Mobile
            </Link>
            <Link href="/projets" className="flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors">
              <Icon name="rocket_launch" className="text-lg" />
              Projets
            </Link>
            <Link href="/ia" className="flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors">
              <Icon name="auto_awesome" className="text-lg" />
              IA
            </Link>
            <Link href="/contact" className="flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors">
              <Icon name="mail" className="text-lg" />
              Contact
            </Link>
          </nav>
        </BentoCard>

        {/* Card 2: Titre Expertise (1×1) */}
        <BentoCard gridArea="titre" className="flex flex-col justify-center">
          <h1 className="mb-4">
            <span className="text-white inline font-bold" style={{
              fontSize: '2rem',
              lineHeight: '1.2',
              backgroundColor: '#000000',
              borderRadius: '8px',
              padding: '4px 12px',
              boxDecorationBreak: 'clone',
              WebkitBoxDecorationBreak: 'clone'
            }}>
              Expertise
            </span>
          </h1>
          <p className="text-lg leading-relaxed">
            Ce que je fais.<br />
            Ce que je maîtrise.<br />
            Ce qui <em className="text-accent not-italic font-semibold">vous</em> fera gagner.
          </p>
        </BentoCard>

        {/* Card 3: Sites Web 01 (1×1) */}
        <BentoCard gridArea="web" className="flex flex-col">
          <span className="font-mono text-xs text-gray-500 mb-2">01</span>
          <h2 className="mb-3">
            <span className="text-white inline font-bold" style={{
              fontSize: '1.25rem',
              lineHeight: '1.2',
              backgroundColor: '#000000',
              borderRadius: '8px',
              padding: '4px 10px',
              boxDecorationBreak: 'clone',
              WebkitBoxDecorationBreak: 'clone'
            }}>
              Sites Web
            </span>
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Votre vitrine.<br />
            Vos clients.<br />
            Vos résultats.
          </p>
          <div className="flex flex-wrap gap-2 mt-auto mb-3">
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">Sites vitrines</span>
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">E-commerce</span>
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">Landing pages</span>
          </div>
          <Link href="/sites-web" className="inline-flex items-center gap-1 text-sm font-semibold hover:text-accent transition-colors">
            <Icon name="chevron_right" className="text-base" />
            en savoir plus
          </Link>
        </BentoCard>

        {/* Card 4: Applications Mobile 02 (1×2) */}
        <BentoCard gridArea="mobile" className="flex flex-col">
          <span className="font-mono text-xs text-gray-500 mb-2">02</span>
          <h2 className="mb-3">
            <span className="text-white inline font-bold" style={{
              fontSize: '1.25rem',
              lineHeight: '1.3',
              backgroundColor: '#000000',
              borderRadius: '8px',
              padding: '4px 10px',
              boxDecorationBreak: 'clone',
              WebkitBoxDecorationBreak: 'clone'
            }}>
              Applications Mobile
            </span>
          </h2>
          <p className="text-sm leading-relaxed mb-3">
            Votre idée.<br />
            Mon code.<br />
            Leur smartphone.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            De la maquette au store,<br />
            je développe l&apos;application<br />
            qui vous ressemble.
          </p>
          <div className="flex flex-wrap gap-2 mt-auto mb-3">
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">Flutter</span>
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">iOS</span>
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">Android</span>
          </div>
          <Link href="/mobile" className="inline-flex items-center gap-1 text-sm font-semibold hover:text-accent transition-colors">
            <Icon name="chevron_right" className="text-base" />
            en savoir plus
          </Link>
        </BentoCard>

        {/* Card 5: Stats (1×1) - Dark */}
        <BentoCard gridArea="stats" variant="dark" className="flex flex-col justify-center">
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

        {/* Card 6: Agents IA 03 (1×1) */}
        <BentoCard gridArea="ia" className="flex flex-col">
          <span className="font-mono text-xs text-gray-500 mb-2">03</span>
          <h2 className="mb-3">
            <span className="text-white inline font-bold" style={{
              fontSize: '1.25rem',
              lineHeight: '1.2',
              backgroundColor: '#000000',
              borderRadius: '8px',
              padding: '4px 10px',
              boxDecorationBreak: 'clone',
              WebkitBoxDecorationBreak: 'clone'
            }}>
              Agents IA
            </span>
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Ils répondent.<br />
            Ils trient.<br />
            Ils bossent.<br />
            <em className="text-accent not-italic font-semibold">24h/24.</em>
          </p>
          <div className="flex flex-wrap gap-2 mt-auto mb-3">
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">Chatbots</span>
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">Assistants</span>
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">RAG</span>
          </div>
          <Link href="/ia" className="inline-flex items-center gap-1 text-sm font-semibold hover:text-accent transition-colors">
            <Icon name="chevron_right" className="text-base" />
            en savoir plus
          </Link>
        </BentoCard>

        {/* Card 7: Automatisation 04 (1×1) */}
        <BentoCard gridArea="auto" className="flex flex-col">
          <span className="font-mono text-xs text-gray-500 mb-2">04</span>
          <h2 className="mb-3">
            <span className="text-white inline font-bold" style={{
              fontSize: '1.25rem',
              lineHeight: '1.2',
              backgroundColor: '#000000',
              borderRadius: '8px',
              padding: '4px 10px',
              boxDecorationBreak: 'clone',
              WebkitBoxDecorationBreak: 'clone'
            }}>
              Automatisation
            </span>
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Stop les copier-coller.<br />
            Stop les tâches ingrates.<br />
            Place à l&apos;efficacité.
          </p>
          <div className="flex flex-wrap gap-2 mt-auto mb-3">
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">Workflows</span>
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">Intégrations</span>
            <span className="text-xs text-gray-600 bg-black/5 px-2 py-1 rounded-full">n8n</span>
          </div>
          <Link href="/ia" className="inline-flex items-center gap-1 text-sm font-semibold hover:text-accent transition-colors">
            <Icon name="chevron_right" className="text-base" />
            en savoir plus
          </Link>
        </BentoCard>

        {/* Card 8: CTA Contact (2×1) - Mint gradient */}
        <BentoCard gridArea="cta" variant="mint" className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold mb-2 text-black">
              Et vous, c&apos;est quoi<br />
              votre <span className="text-white inline" style={{
                backgroundColor: '#000000',
                borderRadius: '8px',
                padding: '2px 8px',
              }}>défi digital</span> ?
            </h2>
            <p className="text-sm text-black">Un site ? Une app ? De l&apos;IA ? On en parle.</p>
          </div>
          <div className="flex gap-3">
            <Button href="/contact" icon="mail">Me contacter</Button>
            <Button variant="icon" icon="call" href="tel:+33625542475" />
          </div>
        </BentoCard>

        {/* Card 9: Logos Clients (1×1) */}
        <BentoCard gridArea="clients" className="flex flex-col justify-center">
          <p className="text-sm mb-3">
            Ils m&apos;ont fait confiance.<br />
            <em className="text-accent not-italic font-semibold">Vous pouvez aussi.</em>
          </p>
          <div className="flex gap-2 items-center mb-3">
            <div className="w-12 h-12 bg-black flex items-center justify-center p-2 rounded-lg">
              <Image
                src="/assets/logos-banque/epargne.png"
                alt="Caisse d'Épargne"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-12 h-12 bg-black flex items-center justify-center p-2 rounded-lg">
              <Image
                src="/assets/logos-banque/bnp.svg"
                alt="BNP Paribas"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-12 h-12 bg-black flex items-center justify-center p-2 rounded-lg">
              <Image
                src="/assets/logos-banque/bp.svg"
                alt="Banque Populaire"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="text-xs text-gray-500">
            15 ans en systèmes bancaires.<br />
            La rigueur, ça ne s&apos;invente pas.
          </p>
        </BentoCard>
      </BentoGrid>

      <style jsx global>{`
        .bento-expertise {
          grid-template-areas:
            "nav       titre     web       mobile"
            "nav       stats     ia        mobile"
            "auto      cta       cta       clients";
          grid-template-rows: repeat(3, auto);
          height: auto;
          min-height: 100vh;
        }

        @media (max-width: 1024px) {
          .bento-expertise {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
              "nav       titre"
              "nav       stats"
              "web       mobile"
              "ia        mobile"
              "auto      clients"
              "cta       cta";
          }
        }

        @media (max-width: 640px) {
          .bento-expertise {
            grid-template-columns: 1fr;
            grid-template-areas:
              "nav"
              "titre"
              "web"
              "mobile"
              "ia"
              "auto"
              "stats"
              "clients"
              "cta";
          }
        }
      `}</style>
    </main>
  );
}
