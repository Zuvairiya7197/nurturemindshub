'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form-state';

export function ContactForm() {
  const [state, setState] = useState({ success: false, message: '' });
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name || !email || !message) {
      setState({ success: false, message: 'Please fill out all contact fields.' });
      setSubmitting(false);
      return;
    }

    setState({
      success: true,
      message: 'Message received. Our support team will contact you shortly.'
    });
    event.currentTarget.reset();
    setSubmitting(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
      <label className="space-y-2 text-sm font-medium text-slate-700">
        Full Name
        <Input name="name" placeholder="Your name" required />
      </label>
      <label className="space-y-2 text-sm font-medium text-slate-700">
        Email
        <Input name="email" type="email" placeholder="you@email.com" required />
      </label>
      <label className="space-y-2 text-sm font-medium text-slate-700">
        Message
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          placeholder="How can we help you?"
        />
      </label>
      <FormMessage message={state.message} success={state.success} />
      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
