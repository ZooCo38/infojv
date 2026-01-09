'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <BentoCard gridArea={gridArea} className={`flex flex-col ${className}`}>
      {/* Version Desktop - visible à partir de lg */}
      <div className="hidden lg:flex lg:flex-col h-full">
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
      </div>

      {/* Version Mobile - visible jusqu'à lg */}
      <div className="flex lg:hidden items-center justify-between">
        <AnimatedLogo />
        <button
          onClick={toggleMenu}
          className="w-10 h-10 bg-black rounded-xl flex items-center justify-center"
          aria-label="Menu"
        >
          <Icon
            name={isMenuOpen ? 'close' : 'menu'}
            className="text-xl text-white"
          />
        </button>
      </div>

      {/* Menu mobile déployé */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-4 space-y-2 overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center gap-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-black px-3 py-2 hover:bg-accent hover:text-black'
                      : 'hover:text-accent px-3 py-2'
                  }`}
                  style={{ borderRadius: '8px' }}
                >
                  <Icon name={item.icon} className="text-lg" />
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={() => {
                closeMenu();
                openModal();
              }}
              className="flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors w-full text-left px-3 py-2"
            >
              <Icon name="mail" className="text-lg" />
              Contact
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </BentoCard>
  );
}
