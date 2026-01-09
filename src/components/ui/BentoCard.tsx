'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'white' | 'mint' | 'mint-reverse' | 'dark';
  gridArea?: string;
  colSpan?: number;
  rowSpan?: number;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function BentoCard({
  children,
  className,
  variant = 'default',
  gridArea,
  colSpan,
  rowSpan,
}: BentoCardProps) {
  const [isHoverEnabled, setIsHoverEnabled] = useState(false);

  // Délai pour activer le hover après le chargement initial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHoverEnabled(true);
    }, 800); // 800ms pour laisser les animations d'entrée se terminer
    return () => clearTimeout(timer);
  }, []);

  const variantClasses = {
    default: 'bento-card',
    white: 'bento-card bento-card--white',
    mint: 'bento-card bento-card--mint',
    'mint-reverse': 'bento-card bento-card--mint-reverse',
    dark: 'bento-card bento-card--dark',
  };

  const gridStyles: React.CSSProperties = {};
  if (gridArea) gridStyles.gridArea = gridArea;
  if (colSpan) gridStyles.gridColumn = `span ${colSpan}`;
  if (rowSpan) gridStyles.gridRow = `span ${rowSpan}`;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={isHoverEnabled ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(variantClasses[variant], className)}
      style={gridStyles}
    >
      {children}
    </motion.div>
  );
}
