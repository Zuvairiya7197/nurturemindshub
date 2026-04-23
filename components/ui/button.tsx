import * as React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'default' | 'sm' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  default: 'bg-brand-600 text-white shadow-soft hover:bg-brand-700',
  secondary: 'bg-slate-900 text-white shadow-soft hover:bg-slate-800',
  outline: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100',
  ghost: 'bg-transparent text-brand-700 hover:bg-brand-50'
};

const sizeStyles: Record<ButtonSize, string> = {
  default: 'h-11 px-6',
  sm: 'h-9 px-4 text-sm',
  lg: 'h-12 px-8 text-base'
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
