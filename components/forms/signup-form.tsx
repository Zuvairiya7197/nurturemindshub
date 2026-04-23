'use client';

import { useFormState } from 'react-dom';
import { signupAction, type ActionResult } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { SubmitButton, FormMessage } from '@/components/ui/form-state';

const initialState: ActionResult = { success: false, message: '' };

export function SignupForm() {
  const [state, formAction] = useFormState(signupAction, initialState);

  return (
    <form action={formAction} className="space-y-4">
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
      <SubmitButton className="w-full" pendingLabel="Creating account...">
        Create Parent Account
      </SubmitButton>
    </form>
  );
}
