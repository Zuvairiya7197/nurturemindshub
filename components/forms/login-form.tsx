'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('email') ?? '');
    const password = String(formData.get('password') ?? '');

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    });

    if (result?.error) {
      setError('Invalid credentials. Please try again.');
      setLoading(false);
      return;
    }

    router.push('/dashboard');
    router.refresh();
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <label className="space-y-2 text-sm font-medium text-slate-700">
        Email
        <Input name="email" type="email" placeholder="parent@email.com" required />
      </label>
      <label className="space-y-2 text-sm font-medium text-slate-700">
        Password
        <Input name="password" type="password" placeholder="Your password" required />
      </label>
      {error ? <p className="text-sm font-medium text-rose-600">{error}</p> : null}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
}
