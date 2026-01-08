'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  price?: string;
  variant?: 'default' | 'mint';
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const
    }
  }
};

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  price,
  variant = 'default'
}: ServiceCardProps) {
  const bgClass = variant === 'mint'
    ? 'bg-gradient-to-br from-white to-[#C9F9E3]'
    : 'bg-card';

  return (
    <motion.div variants={cardVariants}>
      <Link
        href={href}
        className={`block ${bgClass} rounded-3xl p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group`}
      >
        <div className="flex flex-col h-full">
          {/* Icon */}
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
            <Icon name={icon} className="text-2xl text-white group-hover:text-black transition-colors" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>

          {/* Price if provided */}
          {price && (
            <p className="text-accent font-semibold text-sm mb-4">
              À partir de {price}
            </p>
          )}

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-semibold text-black group-hover:text-accent transition-colors">
            <span>Découvrir</span>
            <Icon name="arrow_forward" className="text-base group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
