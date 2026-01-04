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
        <BentoCard gridArea="projets" className="relative overflow-visible">
          <div className="flex flex-col items-start relative z-10">
            <p className="text-6xl font-bold mb-1">50+</p>
            <p className="text-xl font-bold">Projets</p>
            <p className="text-xl font-bold title-accent">livrés</p>
            <p className="text-xl font-bold title-accent">en 2025 !</p>
          </div>
          {/* Shape 3D flottante */}
          <FloatingShape
            src="/assets/shape_3D/SuperToroid-Black-Matte.png"
            className="absolute top-2 right-2 w-16 h-16"
            duration={4.5}
          />
        </BentoCard>

        {/* Card 3: 20+ ans */}
        <BentoCard gridArea="annees" variant="white" className="relative overflow-visible">
          <div className="flex flex-col items-start relative z-10">
            <p className="text-6xl font-bold mb-1">20+</p>
            <p className="text-xl font-bold">ans</p>
            <p className="text-xl font-bold title-accent">d'expérience</p>
          </div>
          {/* Shape 3D flottante */}
          <FloatingShape
            src="/assets/shape_3D/Cone.png"
            className="absolute top-2 right-2 w-16 h-16"
            duration={5}
          />
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
          <Button icon="chevron_right">découvrir</Button>
        </BentoCard>

        {/* Card 5: Photo Julien */}
        <BentoCard gridArea="julien" variant="mint" className="relative overflow-visible p-0">
          {/* Photo de Julien - débordant en haut jusqu'au milieu des cards projets/années */}
          <div className="absolute inset-0 flex items-end z-10" style={{ top: '-50%', left: '-50px' }}>
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

          {/* Shapes 3D flottantes */}
          <FloatingShape
            src="/assets/shape_3D/RoundCube-Black-Matte.png"
            className="absolute -top-16 right-8 w-20 h-20 z-20"
            duration={5}
          />
          <FloatingShape
            src="/assets/shape_3D/Cylinder-Black-Matte.png"
            className="absolute top-20 left-8 w-12 h-24 z-20"
            duration={4.5}
          />
          <FloatingShape
            src="/assets/shape_3D/Pill-Black-Matte.png"
            className="absolute bottom-28 right-12 w-24 h-12 z-20"
            duration={4}
            rotationEnabled
          />
        </BentoCard>

        {/* Card 6: Développement Mobile */}
        <BentoCard gridArea="mobile" className="flex flex-col">
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
          <div className="flex gap-4 items-start flex-1">
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
          <h3 className="text-sm font-semibold mb-2">Spécialiste digital</h3>
          <p className="text-lg font-bold mb-2">
            <span className="text-accent">Banque</span> et <span className="text-accent">Assurance</span>
          </p>
          <p className="text-xs text-text-secondary mb-4">ils me font confiance...</p>
          <div className="flex gap-4 items-center">
            {/* Logos bancaires - À remplacer par les vrais logos */}
            <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center text-xs font-bold">CE</div>
            <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center text-xs font-bold">BNP</div>
            <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center text-xs font-bold">LBP</div>
          </div>
        </BentoCard>

        {/* Card 8: Localisation Marseille */}
        <BentoCard gridArea="marseille" variant="mint-reverse">
          <div className="flex items-start gap-2 mb-4">
            <Icon name="location_on" className="text-xl text-accent" />
            <p className="text-xs">
              Préférez un développement local proche de vous ou chez vous !
            </p>
          </div>
          <h3 className="text-3xl font-bold mb-1">MARSEILLE (13)</h3>
          <p className="text-sm">Peypin, Aix-en-Provence</p>
          <p className="text-sm">Remote France</p>
        </BentoCard>

        {/* Card 9: Projet/Contact */}
        <BentoCard gridArea="contact" variant="mint-reverse" className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Un projet en <span className="title-highlight">tête ?</span>
            </h2>
            <p className="text-sm">discutons de vos besoins.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="icon" icon="mail" />
            <Button variant="icon" icon="call" />
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
