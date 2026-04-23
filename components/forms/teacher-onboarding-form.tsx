'use client';

import { useFormState } from 'react-dom';
import { teacherOnboardingAction, type ActionResult } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { SubmitButton, FormMessage } from '@/components/ui/form-state';

const initialState: ActionResult = { success: false, message: '' };

export function TeacherOnboardingForm() {
  const [state, formAction] = useFormState(teacherOnboardingAction, initialState);

  return (
    <form action={formAction} className="space-y-5 rounded-[2rem] bg-white p-8 shadow-soft">
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
      <SubmitButton className="w-full" pendingLabel="Submitting...">
        Submit Application
      </SubmitButton>
    </form>
  );
}
