'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FloatingShapeProps {
  src: string;
  alt?: string;
  className?: string;
  duration?: number;
  rotationEnabled?: boolean;
  style?: React.CSSProperties;
}

export default function FloatingShape({
  src,
  alt = '',
  className = '',
  duration = 4,
  rotationEnabled = false,
  style,
}: FloatingShapeProps) {
  const floatingVariants = rotationEnabled
    ? {
        animate: {
          y: [0, -10, 0],
          rotate: [0, 180, 360],
          transition: {
            y: { duration: duration, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: duration * 2, repeat: Infinity, ease: 'linear' },
          },
        },
      }
    : {
        animate: {
          y: [0, -15, 0],
          rotate: [0, 5, 0],
          transition: {
            duration: duration,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        },
      };

  return (
    <motion.div variants={floatingVariants} animate="animate" className={className} style={style}>
      <Image src={src} alt={alt} width={150} height={150} className="w-full h-full object-contain" />
    </motion.div>
  );
}
