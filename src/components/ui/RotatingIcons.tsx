'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const icons = [
  {
    name: 'Android',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.523 15.341c-.5 0-.908.406-.908.909s.408.909.908.909c.502 0 .91-.406.91-.909s-.408-.909-.91-.909zm-11.046 0c-.502 0-.91.406-.91.909s.408.909.91.909c.5 0 .908-.406.908-.909s-.408-.909-.908-.909zm11.409-6.274l1.905-3.3c.106-.184.043-.421-.141-.526-.184-.106-.421-.043-.526.141l-1.929 3.342c-1.465-.667-3.106-1.039-4.895-1.039s-3.43.372-4.895 1.039l-1.929-3.342c-.105-.184-.342-.247-.526-.141-.184.105-.247.342-.141.526l1.905 3.3c-3.114 1.688-5.214 4.835-5.514 8.533h22.2c-.3-3.698-2.4-6.845-5.514-8.533z"/>
      </svg>
    ),
  },
  {
    name: 'Flutter',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
      </svg>
    ),
  },
  {
    name: 'iOS',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
  },
];

export default function RotatingIcons() {
  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Éviter les erreurs d'hydratation SSR
  if (!mounted) {
    return (
      <div className="relative w-48 h-32 flex items-center justify-center">
        <div className="w-14 h-14 text-black/30" />
      </div>
    );
  }

  // Calcul des positions 3D pour chaque icône
  const getIconStyle = (index: number) => {
    const angle = (rotation + index * 120) * (Math.PI / 180);
    const radiusX = 70; // Rayon horizontal
    const radiusY = 25; // Rayon vertical (plus petit = plus incliné)

    // Position sur l'ellipse inclinée
    const x = Math.sin(angle) * radiusX;
    const y = Math.cos(angle) * radiusY;
    // Position Z (profondeur) - basée sur la position Y dans l'espace 3D
    const z = Math.cos(angle);

    // L'icône au premier plan (z proche de 1) est plus grande
    const scale = 0.5 + (z + 1) * 0.35; // scale de 0.5 à 1.2
    const opacity = 0.3 + (z + 1) * 0.35; // opacity de 0.3 à 1
    const zIndex = Math.round((z + 1) * 10);

    // Ombre dynamique - plus prononcée au premier plan
    const shadowIntensity = Math.max(0, z); // 0 à 1
    const shadowBlur = 8 + shadowIntensity * 16; // 8px à 24px
    const shadowOpacity = shadowIntensity * 0.4; // 0 à 0.4
    const shadowY = 4 + shadowIntensity * 8; // 4px à 12px

    return {
      transform: `translate(${x}px, ${y}px) scale(${scale})`,
      opacity,
      zIndex,
      filter: `drop-shadow(0 ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowOpacity}))`,
    };
  };

  return (
    <div
      className="relative w-48 h-32 flex items-center justify-center"
      style={{ perspective: '500px' }}
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(15deg)' }}
      >
        {icons.map((icon, index) => (
          <motion.div
            key={icon.name}
            className="absolute w-14 h-14 text-black flex items-center justify-center"
            style={getIconStyle(index)}
            transition={{ duration: 0 }}
          >
            {icon.svg}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
