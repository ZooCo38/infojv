'use client';

import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function Textarea({ label, error, className, rows = 4, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-poppins text-sm font-medium text-text-primary">
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        rows={rows}
        className={cn(
          "bg-bg-card rounded-lg px-4 py-3 font-poppins text-text-primary",
          "border border-border-light",
          "focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent",
          "transition-all duration-200 resize-none",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}
