import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { LoginForm } from '@/components/forms/login-form';
import { SignupForm } from '@/components/forms/signup-form';

export const metadata: Metadata = {
  title: 'Login / Signup',
  description:
    'Login or create a parent account to track classes, progress, worksheets, and recordings.',
};

export default function AuthPage() {
  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading
            title="Parent Login / Signup"
            subtitle="Access bookings, progress reports, worksheets, and class recordings from one dashboard."
          />
          <p className="text-sm leading-7 text-slate-600">
            Demo mode is enabled. Login and signup are frontend-only and do not require a backend account.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-xl font-semibold text-slate-900">Login</h2>
              <LoginForm />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-xl font-semibold text-slate-900">Signup</h2>
              <SignupForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
