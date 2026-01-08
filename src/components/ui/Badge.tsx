'use client';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'dark';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className = ''
}: BadgeProps) {
  const variantClasses = {
    default: 'bg-black/10 text-gray-700',
    accent: 'bg-accent text-black',
    dark: 'bg-black text-white'
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
