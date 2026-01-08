'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedLogoProps {
  className?: string;
}

export default function AnimatedLogo({ className = '' }: AnimatedLogoProps) {
  const letters = [
    { char: 'I', color: 'text-black' },
    { char: 'N', color: 'text-black' },
    { char: 'F', color: 'text-black' },
    { char: 'O', color: 'text-black' },
    { char: 'J', color: 'text-accent' },
    { char: 'V', color: 'text-accent' },
  ];

  const containerVariants = {
    hover: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    initial: {
      y: 0,
      scale: 1,
    },
    hover: {
      y: [0, -8, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <Link href="/" className={`inline-block ${className}`}>
      <motion.h1
        className="text-4xl font-black italic flex"
        variants={containerVariants}
        initial="initial"
        whileHover="hover"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className={letter.color}
          >
            {letter.char}
          </motion.span>
        ))}
      </motion.h1>
    </Link>
  );
}
