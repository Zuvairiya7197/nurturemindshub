import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { TeacherOnboardingForm } from '@/components/forms/teacher-onboarding-form';

export const metadata: Metadata = {
  title: 'Teacher Onboarding',
  description: 'Apply as a teacher and join our edtech platform for live classes.'
};

export default function TeacherOnboardingPage() {
  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading
            title="Teacher Onboarding"
            subtitle="Join our educator community and teach high-impact live classes for children."
          />
          <Card>
            <CardContent className="space-y-3 pt-6 text-sm text-slate-600">
              <p>• Flexible schedules and online teaching setup.</p>
              <p>• Structured curriculum and worksheets provided.</p>
              <p>• Dedicated academic support and mentorship.</p>
            </CardContent>
          </Card>
        </div>
        <TeacherOnboardingForm />
      </div>
    </main>
  );
}
