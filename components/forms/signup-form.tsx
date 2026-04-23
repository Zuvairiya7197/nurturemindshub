'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form-state';

export function SignupForm() {
  const [state, setState] = useState({ success: false, message: '' });
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim().toLowerCase();
    const password = String(formData.get('password') ?? '').trim();

    if (!name || !email || !password) {
      setState({ success: false, message: 'Please provide name, email, and password.' });
      setSubmitting(false);
      return;
    }

    if (password.length < 8) {
      setState({ success: false, message: 'Password must be at least 8 characters long.' });
      setSubmitting(false);
      return;
    }

    setState({ success: true, message: 'Signup successful. You can now use the demo dashboard.' });
    event.currentTarget.reset();
    setSubmitting(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="space-y-2 text-sm font-medium text-slate-700">
        Name
        <Input name="name" placeholder="Parent name" required />
      </label>
      <label className="space-y-2 text-sm font-medium text-slate-700">
        Email
        <Input name="email" type="email" placeholder="parent@email.com" required />
      </label>
      <label className="space-y-2 text-sm font-medium text-slate-700">
        Password
        <Input name="password" type="password" placeholder="Minimum 8 characters" required />
      </label>
      <FormMessage message={state.message} success={state.success} />
      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? 'Creating account...' : 'Create Parent Account'}
      </Button>
    </form>
  );
}
