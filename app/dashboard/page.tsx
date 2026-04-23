import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getAuthSession } from '@/lib/auth';
import { getDashboardData } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Parent dashboard to view booked classes, track progress, and access resources.'
};

export default async function DashboardPage() {
  const session = await getAuthSession();

  if (!session?.user?.email) {
    redirect('/auth');
  }

  const dashboard = await getDashboardData(session.user.email);

  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading
          title="Parent Dashboard"
          subtitle="Track booked classes, monitor progress, and download learning resources."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">Booked Classes</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{dashboard.bookings.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">Progress Records</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{dashboard.progress.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">Learning Resources</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {dashboard.worksheets.length + dashboard.recordings.length}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">Booked Classes</h3>
              {dashboard.bookings.length === 0 ? (
                <p className="text-sm text-slate-600">No bookings yet. Book a free class to get started.</p>
              ) : (
                <div className="space-y-3">
                  {dashboard.bookings.map((booking) => (
                    <div key={booking.id} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                      <p className="font-semibold text-slate-900">{booking.course.name}</p>
                      <p>Child: {booking.childName}</p>
                      <p>Status: {booking.status}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">Progress Overview</h3>
              {dashboard.progress.length === 0 ? (
                <p className="text-sm text-slate-600">No progress records yet.</p>
              ) : (
                <div className="space-y-4">
                  {dashboard.progress.map((record) => (
                    <div key={record.id} className="space-y-2 rounded-2xl bg-slate-50 p-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-slate-900">{record.course.name}</span>
                        <span className="text-brand-700">{record.completion}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                        <div className="h-full rounded-full bg-brand-600" style={{ width: `${record.completion}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">Worksheets</h3>
              {dashboard.worksheets.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:bg-brand-50"
                >
                  Download: {item.title}
                </a>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">Class Recordings</h3>
              {dashboard.recordings.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:bg-brand-50"
                >
                  View: {item.title}
                </a>
              ))}
            </CardContent>
          </Card>
        </div>

        {session.user.role === 'ADMIN' ? (
          <Link href="/admin">
            <Button variant="outline">Open Admin Panel</Button>
          </Link>
        ) : null}
      </div>
    </main>
  );
}
