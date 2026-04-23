'use client';

import { useFormState } from 'react-dom';
import { bookTrialAction, type ActionResult } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { SubmitButton, FormMessage } from '@/components/ui/form-state';

type BookingCourse = {
  id: string;
  name: string;
};

const initialState: ActionResult = { success: false, message: '' };

export function BookingForm({ courses, defaultCourseId }: { courses: BookingCourse[]; defaultCourseId?: string }) {
  const [state, formAction] = useFormState(bookTrialAction, initialState);

  return (
    <form action={formAction} className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Parent Name
          <Input name="parentName" placeholder="Parent full name" required />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Child Name
          <Input name="childName" placeholder="Child full name" required />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Age
          <Input name="age" type="number" min={4} max={16} placeholder="8" required />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700 sm:col-span-2">
          Phone
          <Input name="phone" type="tel" placeholder="+91 98xxxxxx" required />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-slate-700">
        Email
        <Input name="email" type="email" placeholder="parent@email.com" required />
      </label>

      <label className="space-y-2 text-sm font-medium text-slate-700">
        Program
        <select
          name="courseId"
          required
          defaultValue={defaultCourseId ?? courses[0]?.id}
          className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        >
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </label>

      <FormMessage message={state.message} success={state.success} />
      <SubmitButton className="w-full" pendingLabel="Submitting...">
        Book Free Trial
      </SubmitButton>
    </form>
  );
}
