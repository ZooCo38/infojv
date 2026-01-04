'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Icon from './Icon';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'icon';
  icon?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({
  children,
  className,
  variant = 'primary',
  icon,
  onClick,
  href,
}: ButtonProps) {
  const buttonClasses = variant === 'icon' ? 'btn-icon' : 'btn-primary';

  const content = (
    <>
      {variant === 'primary' && children}
      {icon && <Icon name={icon} />}
    </>
  );

  const MotionButton = motion.button;
  const MotionLink = motion.a;

  if (href) {
    return (
      <MotionLink
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(buttonClasses, className)}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(buttonClasses, className)}
    >
      {content}
    </MotionButton>
  );
}
