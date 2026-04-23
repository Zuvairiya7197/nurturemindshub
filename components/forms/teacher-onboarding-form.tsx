'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form-state';

export function TeacherOnboardingForm() {
  const [state, setState] = useState({ success: false, message: '' });
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim().toLowerCase();
    const experience = String(formData.get('experience') ?? '').trim();
    const subjects = String(formData.get('subjects') ?? '').trim();
    const availability = String(formData.get('availability') ?? '').trim();

    if (!name || !email || !experience || !subjects || !availability) {
      setState({ success: false, message: 'Please complete every onboarding field.' });
      setSubmitting(false);
      return;
    }

    setState({ success: true, message: 'Application submitted. Our academic team will reach out soon.' });
    event.currentTarget.reset();
    setSubmitting(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-[2rem] bg-white p-8 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Name
          <Input name="name" placeholder="Your full name" required />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Email
          <Input name="email" type="email" placeholder="teacher@email.com" required />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-slate-700">
        Experience
        <textarea
          name="experience"
          rows={4}
          required
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          placeholder="Share your teaching experience and certifications"
        />
      </label>

      <label className="space-y-2 text-sm font-medium text-slate-700">
        Subjects (comma-separated)
        <Input name="subjects" placeholder="English, Maths, Communication" required />
      </label>

      <label className="space-y-2 text-sm font-medium text-slate-700">
        Availability
        <Input name="availability" placeholder="Weekdays 4 PM - 8 PM" required />
      </label>

      <FormMessage message={state.message} success={state.success} />
      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  );
}
