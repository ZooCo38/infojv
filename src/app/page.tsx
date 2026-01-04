'use client';

import Image from 'next/image';
import BentoGrid from '@/components/ui/BentoGrid';
import BentoCard from '@/components/ui/BentoCard';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import FloatingShape from '@/components/ui/FloatingShape';

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <BentoGrid className="bento-home">
        {/* Card 1: Info JV - Logo + Navigation */}
        <BentoCard gridArea="infojv" className="flex flex-col">
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
            <a href="#accueil" className="flex items-center gap-3 text-sm font-medium text-white bg-black px-3 py-2 hover:bg-accent hover:text-black transition-colors" style={{ borderRadius: '8px' }}>
              <Icon name="home" className="text-lg" />
              Accueil
            </a>
            <a href="#expertise" className="flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors">
              <Icon name="workspace_premium" className="text-lg" />
              Expertise
            </a>
            <a href="#mobile" className="flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors">
              <Icon name="smartphone" className="text-lg" />
              Mobile
            </a>
            <a href="#projets" className="flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors">
              <Icon name="rocket_launch" className="text-lg" />
              Projets
            </a>
            <a href="#ia" className="flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors">
              <Icon name="auto_awesome" className="text-lg" />
              IA
            </a>
            <a href="#contact" className="flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors">
              <Icon name="mail" className="text-lg" />
              Contact
            </a>
          </nav>
        </BentoCard>

        {/* Card 2: 50+ Projets */}
        <BentoCard gridArea="projets" className="relative">
          <div className="flex items-start justify-between h-full">
            <div className="flex flex-col items-start">
              <p className="text-6xl font-extrabold mb-1">50+</p>
              <p className="text-xl font-bold">Projets</p>
              <p className="text-xl font-extrabold title-accent">livrés</p>
              <p className="text-xl font-extrabold title-accent">en 2025 !</p>
            </div>
            <FloatingShape
              src="/assets/shape_3D/RoundCube-Black-Matte-1.png"
              className="w-32 h-32"
              duration={4.5}
            />
          </div>
        </BentoCard>

        {/* Card 3: 20+ ans */}
        <BentoCard gridArea="annees" variant="white" className="relative">
          <div className="flex flex-col h-full">
            <div className="flex items-start justify-between">
              <div className="flex flex-col items-start pr-8">
                <p className="text-6xl font-extrabold mb-1">20+</p>
                <p className="text-xl font-extrabold">ans</p>
                <p className="text-xl font-extrabold title-accent">d'expérience</p>
              </div>
            </div>
            <div className="mt-auto flex justify-end">
              <FloatingShape
                src="/assets/shape_3D/Pill-Black-Matte.png"
                className="w-48 h-24"
                duration={5}
              />
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Sites web professionnel */}
        <BentoCard gridArea="siteweb" className="flex flex-col justify-between">
          <div>
            <div className="mb-6" style={{ maxWidth: '200px' }}>
              <h2 className="font-bold">
                <span className="text-white inline" style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.2',
                  backgroundColor: '#000000',
                  borderRadius: '8px',
                  padding: '4px 10px',
                  boxDecorationBreak: 'clone',
                  WebkitBoxDecorationBreak: 'clone'
                }}>
                  Site web professionnel
                </span>
              </h2>
            </div>
          </div>
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <Icon name="storefront" className="text-base" />
              Sites vitrine
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="shopping_cart" className="text-base" />
              Sites e-commerce
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="favorite" className="text-base" />
              Sites de mariage
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="groups" className="text-base" />
              Sites association
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="photo_camera" className="text-base" />
              Sites photos
            </div>
          </div>
          <div className="flex items-center justify-center w-fit mx-auto">
            <Button icon="chevron_right">découvrir</Button>
          </div>
        </BentoCard>

        {/* Card 5: Photo Julien */}
        <BentoCard gridArea="julien" variant="mint" className="relative overflow-visible p-0">
          {/* Photo de Julien - débordant en haut jusqu'au milieu des cards projets/années */}
          <div className="absolute inset-0 flex items-end z-10 hidden md:flex" style={{ top: '-50%', left: '-20px' }}>
            <Image
              src="/assets/Julien-Villard.png"
              alt="Julien Villard"
              width={600}
              height={900}
              className="object-contain object-bottom w-auto h-full"
              priority
              quality={100}
            />
          </div>
          {/* Version mobile - portrait normal */}
          <div className="flex md:hidden items-end justify-center h-full">
            <Image
              src="/assets/Julien-Villard.png"
              alt="Julien Villard"
              width={400}
              height={600}
              className="object-contain object-bottom w-auto h-full"
              priority
              quality={100}
            />
          </div>
          <FloatingShape
            src="/assets/shape_3D/Cone.png"
            className="absolute left-8 w-28 h-28 z-20 hidden md:block"
            style={{ top: '96px' }}
            duration={5}
          />
        </BentoCard>

        {/* Card 6: Développement Mobile */}
        <BentoCard gridArea="mobile" className="flex flex-col justify-center">
          {/* Titre avec fond noir sur 2 lignes */}
          <div className="mb-4" style={{ maxWidth: '200px' }}>
            <h2 className="font-bold">
              <span className="text-white inline" style={{
                fontSize: '1.25rem',
                lineHeight: '1.2',
                backgroundColor: '#000000',
                borderRadius: '8px',
                padding: '4px 10px',
                boxDecorationBreak: 'clone',
                WebkitBoxDecorationBreak: 'clone'
              }}>
                Développement Mobile
              </span>
            </h2>
          </div>

          {/* Layout 2 colonnes */}
          <div className="flex gap-4 items-center">
            {/* Colonne gauche: Visuel */}
            <div className="flex-shrink-0 w-32">
              <Image
                src="/assets/mobile.png"
                alt="Application mobile"
                width={200}
                height={300}
                className="w-full h-auto rounded-full object-cover"
                quality={100}
              />
            </div>

            {/* Colonne droite: Texte + CTA */}
            <div className="flex-1 flex flex-col justify-between">
              <p className="leading-relaxed mb-4" style={{ fontSize: '1.3rem' }}>
                Pour vous, je <span className="font-semibold">développe</span> l'application de vos rêves...
              </p>
              <button className="flex items-center gap-2 bg-black text-white px-4 py-2 font-semibold text-sm hover:bg-accent hover:text-black transition-colors self-start" style={{ borderRadius: '8px' }}>
                <Icon name="chevron_right" className="text-base" />
                découvrir
              </button>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: Spécialiste Banque */}
        <BentoCard gridArea="banques">
          <h3 className="text-lg font-extrabold mb-1 text-black">Spécialiste digital</h3>
          <p className="text-lg font-extrabold mb-3 text-accent">
            Banque et Assurance
          </p>
          <p className="text-xs mb-4">ils me font confiance...</p>
          <div className="flex gap-3 items-center">
            <div className="w-16 h-16 bg-white flex items-center justify-center p-3 rounded-lg">
              <Image
                src="/assets/logos-banque/epargne.png"
                alt="Caisse d'Épargne"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-16 h-16 bg-white flex items-center justify-center p-3 rounded-lg">
              <Image
                src="/assets/logos-banque/bnp.svg"
                alt="BNP Paribas"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-16 h-16 bg-white flex items-center justify-center p-3 rounded-lg">
              <Image
                src="/assets/logos-banque/bp.svg"
                alt="Banque Populaire"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </BentoCard>

        {/* Card 8: Localisation Marseille */}
        <BentoCard gridArea="marseille" className="flex flex-col items-center justify-center !bg-[#C9F9E3]">
          <div className="flex items-start gap-2 mb-4">
            <Icon name="location_on" className="text-xl text-black" />
            <p className="text-xs text-black">
              Préférez un développement local proche de vous ou chez vous !
            </p>
          </div>
          <h3 className="text-3xl font-black italic mb-1 text-black">MARSEILLE (13)</h3>
          <p className="text-sm text-black">Peypin, Aix-en-Provence</p>
          <p className="text-sm text-black">Remote France</p>
        </BentoCard>

        {/* Card 9: Projet/Contact */}
        <BentoCard gridArea="contact" className="flex items-center justify-between !bg-[#C9F9E3]">
          <div>
            <h2 className="text-3xl font-extrabold mb-2 text-black">
              Un projet en<br />tête ?
            </h2>
            <p className="text-sm text-black">discutons de vos besoins.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="icon" icon="mail" />
            <Button variant="icon" icon="call" />
            <button className="btn-icon">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </button>
            <button className="btn-icon">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
          </div>
        </BentoCard>
      </BentoGrid>

      <style jsx global>{`
        .bento-home {
          grid-template-areas:
            "infojv   projets   annees    siteweb"
            "infojv   julien    julien    siteweb"
            "mobile   julien    julien    banques"
            "mobile   marseille contact   contact";
        }

        @media (max-width: 1024px) {
          .bento-home {
            grid-template-areas:
              "infojv infojv"
              "projets annees"
              "siteweb siteweb"
              "julien julien"
              "mobile mobile"
              "banques marseille"
              "contact contact";
          }
        }

        @media (max-width: 640px) {
          .bento-home {
            grid-template-areas:
              "infojv"
              "projets"
              "annees"
              "siteweb"
              "julien"
              "mobile"
              "banques"
              "marseille"
              "contact";
          }
        }
      `}</style>
    </main>
  );
}
