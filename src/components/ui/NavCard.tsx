'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BentoCard from './BentoCard';
import Icon from './Icon';
import AnimatedLogo from './AnimatedLogo';
import { useContactModal } from '@/contexts/ContactModalContext';

interface NavCardProps {
  gridArea?: string;
  className?: string;
}

const navItems = [
  { href: '/', icon: 'home', label: 'Accueil' },
  { href: '/expertise', icon: 'workspace_premium', label: 'Expertise' },
  { href: '/mobile', icon: 'smartphone', label: 'Mobile' },
  { href: '/projets', icon: 'rocket_launch', label: 'Projets' },
  { href: '/ia', icon: 'auto_awesome', label: 'IA' },
];

export default function NavCard({ gridArea, className = '' }: NavCardProps) {
  const pathname = usePathname();
  const { openModal } = useContactModal();

  return (
    <BentoCard gridArea={gridArea} className={`flex flex-col ${className}`}>
      <div className="mb-6">
        <AnimatedLogo className="mb-4" />
        <p className="text-2xl font-extrabold leading-tight">
          Expert digital<br />
          <span className="title-accent">pour votre</span><br />
          Business
        </p>
      </div>
      <nav className="space-y-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'text-white bg-black px-3 py-2 hover:bg-accent hover:text-black'
                  : 'hover:text-accent'
              }`}
              style={isActive ? { borderRadius: '8px' } : undefined}
            >
              <Icon name={item.icon} className="text-lg" />
              {item.label}
            </Link>
          );
        })}
        <button
          onClick={openModal}
          className="flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors w-full text-left"
        >
          <Icon name="mail" className="text-lg" />
          Contact
        </button>
      </nav>
    </BentoCard>
  );
}
