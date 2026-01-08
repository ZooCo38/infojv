'use client';

import { motion } from 'framer-motion';
import Icon from './Icon';

interface FloatingIconProps {
  name: string;
  className?: string;
  size?: string;
  color?: string;
}

export default function FloatingIcon({
  name,
  className = '',
  size = 'text-6xl',
  color = 'text-black'
}: FloatingIconProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      }}
      className={className}
    >
      <Icon name={name} className={`${size} ${color}`} />
    </motion.div>
  );
}
