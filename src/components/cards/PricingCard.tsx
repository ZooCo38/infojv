'use client';

import { motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';

interface PricingCardProps {
  icon: string;
  title: string;
  price: string;
  features?: string[];
  highlight?: boolean;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const
    }
  }
};

export default function PricingCard({
  icon,
  title,
  price,
  features = [],
  highlight = false
}: PricingCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className={`rounded-3xl p-6 ${
        highlight
          ? 'bg-gradient-to-br from-white to-[#C9F9E3] ring-2 ring-accent'
          : 'bg-card'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            highlight ? 'bg-accent' : 'bg-black'
          }`}>
            <Icon
              name={icon}
              className={`text-xl ${highlight ? 'text-black' : 'text-white'}`}
            />
          </div>
          <h3 className="text-lg font-bold text-black">{title}</h3>
        </div>

        {/* Price */}
        <div className="mb-4">
          <p className="text-sm text-gray-500">À partir de</p>
          <p className="text-3xl font-extrabold text-black">{price}</p>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <ul className="space-y-2 mt-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <Icon name="check" className="text-accent text-base flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
