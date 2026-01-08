'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/ui/Icon';

interface ProjectCardProps {
  title: string;
  type: string;
  description: string;
  result: string;
  image?: string;
  tags?: string[];
  variant?: 'default' | 'mint' | 'dark';
  className?: string;
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

export default function ProjectCard({
  title,
  type,
  description,
  result,
  image,
  tags = [],
  variant = 'default',
  className = ''
}: ProjectCardProps) {
  const bgClass = {
    default: 'bg-card',
    mint: 'bg-gradient-to-br from-white to-[#C9F9E3]',
    dark: 'bg-[#0C0C0C] text-white'
  }[variant];

  const textClass = variant === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const titleClass = variant === 'dark' ? 'text-white' : 'text-black';

  return (
    <motion.div
      variants={cardVariants}
      className={`${bgClass} rounded-3xl overflow-hidden h-full ${className}`}
    >
      {/* Image */}
      {image && (
        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        {/* Type badge */}
        <Badge variant={variant === 'dark' ? 'accent' : 'dark'} className="self-start mb-3">
          {type}
        </Badge>

        {/* Title */}
        <h3 className={`text-xl font-bold ${titleClass} mb-2`}>{title}</h3>

        {/* Description */}
        <p className={`${textClass} text-sm mb-4 leading-relaxed`}>{description}</p>

        {/* Result */}
        <div className="mt-auto">
          <div className="flex items-start gap-2 mb-4">
            <Icon name="check_circle" className="text-accent text-lg mt-0.5" />
            <p className={`text-sm font-medium ${titleClass}`}>{result}</p>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-2 py-1 rounded-full ${
                    variant === 'dark' ? 'bg-white/10 text-gray-300' : 'bg-black/5 text-gray-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
