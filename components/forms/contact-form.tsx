'use client';

import { useFormState } from 'react-dom';
import { contactAction, type ActionResult } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { SubmitButton, FormMessage } from '@/components/ui/form-state';

const initialState: ActionResult = { success: false, message: '' };

export function ContactForm() {
  const [state, formAction] = useFormState(contactAction, initialState);

  return (
    <form action={formAction} className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
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
      <SubmitButton className="w-full" pendingLabel="Sending...">
        Send Message
      </SubmitButton>
    </form>
  );
}
