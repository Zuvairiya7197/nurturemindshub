import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({ title, subtitle, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn('space-y-3', align === 'center' && 'text-center', className)}>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle ? <p className={cn('text-base leading-7 text-slate-600', align === 'center' && 'mx-auto max-w-2xl')}>{subtitle}</p> : null}
    </div>
  );
}
