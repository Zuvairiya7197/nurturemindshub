'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

export function SubmitButton({ children, pendingLabel, className }: { children: React.ReactNode; pendingLabel: string; className?: string }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className={className} disabled={pending}>
      {pending ? pendingLabel : children}
    </Button>
  );
}

export function FormMessage({ message, success }: { message?: string; success?: boolean }) {
  if (!message) {
    return null;
  }

  return (
    <p className={success ? 'text-sm font-medium text-emerald-600' : 'text-sm font-medium text-rose-600'}>
      {message}
    </p>
  );
}
