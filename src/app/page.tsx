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
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-black">INFO</span>
              <span className="text-accent">JV</span>
            </h1>
            <p className="text-2xl font-bold leading-tight">
              Expert digital<br />
              <span className="title-accent">pour votre</span><br />
              Business
            </p>
          </div>
          <nav className="space-y-3 mt-auto">
            <a href="#expertise" className="flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors">
              <Icon name="workspace_premium" className="text-lg" />
              <span className="title-highlight">Expertise</span>
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
          <div className="flex flex-col items-start">
            <p className="text-6xl font-bold mb-1">50+</p>
            <p className="text-xl font-bold">Projets</p>
            <p className="text-xl font-bold title-accent">livrés</p>
            <p className="text-xl font-bold title-accent">en 2025 !</p>
          </div>
          {/* Shape 3D flottante */}
          <FloatingShape
            src="/assets/shape_3D/SuperToroid-Black-Matte.png"
            className="absolute top-2 right-2 w-16 h-16 opacity-70"
            duration={4.5}
          />
        </BentoCard>

        {/* Card 3: 20+ ans */}
        <BentoCard gridArea="annees" variant="white" className="relative">
          <div className="flex flex-col items-start">
            <p className="text-6xl font-bold mb-1">20+</p>
            <p className="text-xl font-bold">ans</p>
            <p className="text-xl font-bold title-accent">d'expérience</p>
          </div>
          {/* Shape 3D flottante */}
          <FloatingShape
            src="/assets/shape_3D/Cone.png"
            className="absolute top-2 right-2 w-16 h-16 opacity-60"
            duration={5}
          />
        </BentoCard>

        {/* Card 4: Sites web professionnel */}
        <BentoCard gridArea="siteweb" className="flex flex-col justify-between">
          <div>
            <div className="inline-block bg-black rounded-xl px-3 py-1 mb-2">
              <h2 className="text-xl font-bold text-white">Site web</h2>
            </div>
            <p className="text-xl font-bold mb-6">professionnel</p>
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
          {/* Shapes 3D flottantes */}
          <FloatingShape
            src="/assets/shape_3D/RoundCube-Black-Matte.png"
            className="absolute -top-8 right-8 w-20 h-20 opacity-80 z-10"
            duration={5}
          />
          <FloatingShape
            src="/assets/shape_3D/Cylinder-Black-Matte.png"
            className="absolute top-20 left-8 w-12 h-24 opacity-70 z-10"
            duration={4.5}
          />
          <FloatingShape
            src="/assets/shape_3D/Pill-Black-Matte.png"
            className="absolute bottom-28 right-12 w-24 h-12 opacity-60 z-10"
            duration={4}
            rotationEnabled
          />

          {/* Photo de Julien - ferrée en bas, débordant en haut */}
          <div className="relative h-full flex items-end justify-center">
            <Image
              src="/assets/Julien-Villard.png"
              alt="Julien Villard"
              width={600}
              height={800}
              className="object-contain object-bottom w-auto"
              style={{ height: '115%', marginBottom: '-24px' }}
              priority
            />
          </div>
        </BentoCard>

        {/* Card 6: Développement Mobile */}
        <BentoCard gridArea="mobile" className="flex flex-col justify-between">
          <div>
            <div className="inline-block bg-black rounded-xl px-3 py-1 mb-4">
              <h2 className="text-base font-bold text-white">Développement Mobile</h2>
            </div>
            <div className="mb-4 rounded-lg overflow-hidden">
              <Image
                src="/assets/mobile.png"
                alt="Application mobile"
                width={300}
                height={200}
                className="w-full object-cover"
              />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Pour vous, je <span className="font-semibold">développe</span> l'application de vos rêves...
            </p>
          </div>
          <Button icon="chevron_right">découvrir</Button>
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
