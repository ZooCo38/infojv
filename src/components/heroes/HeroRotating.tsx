'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroMessage {
  title: string;
  subtitle: string;
}

interface HeroRotatingProps {
  messages: HeroMessage[];
  interval?: number;
  className?: string;
}

export default function HeroRotating({
  messages,
  interval = 5000,
  className = ''
}: HeroRotatingProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (messages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [messages.length, interval]);

  const currentMessage = messages[currentIndex];

  return (
    <div className={`flex flex-col justify-center items-center w-full h-full ${className}`}>
      <div className="flex-1 flex items-center justify-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut' as const
            }}
            className="text-center px-4"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 text-black leading-tight">
              {currentMessage.title}
            </h1>
            <p className="text-sm md:text-base text-gray-700 max-w-xl mx-auto leading-snug">
              {currentMessage.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicateurs de progression */}
      {messages.length > 1 && (
        <div className="flex justify-center gap-2 pb-2">
          {messages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-accent w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller au message ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
