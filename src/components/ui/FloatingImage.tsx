'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface FloatingImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function FloatingImage({
  src,
  alt,
  width = 80,
  height = 80,
  className = ''
}: FloatingImageProps) {
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
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
    </motion.div>
  );
}
