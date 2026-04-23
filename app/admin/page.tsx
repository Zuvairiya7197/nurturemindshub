import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getAuthSession } from '@/lib/auth';
import { getAdminMetrics, getAdminTables } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Admin Panel',
  description: 'Admin dashboard to manage users, courses, and bookings.'
};

export default async function AdminPage() {
  const session = await getAuthSession();

  if (!session?.user || session.user.role !== 'ADMIN') {
    redirect('/auth');
  }

  const [metrics, tables] = await Promise.all([getAdminMetrics(), getAdminTables()]);

  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading title="Admin Panel" subtitle="Manage users, courses, and incoming trial bookings from one place." />

        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">Users</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{metrics.users}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">Courses</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{metrics.courses}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">Bookings</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{metrics.bookings}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <CardContent className="space-y-4 pt-6">
              <h3 className="text-lg font-semibold text-slate-900">Recent Users</h3>
              {tables.users.map((user) => (
                <div key={user.id} className="rounded-2xl bg-slate-50 p-3 text-sm">
                  <p className="font-medium text-slate-900">{user.name ?? 'Unnamed User'}</p>
                  <p className="text-slate-600">{user.email}</p>
                  <p className="text-brand-700">{user.role}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardContent className="space-y-4 pt-6">
              <h3 className="text-lg font-semibold text-slate-900">Courses</h3>
              {tables.courses.map((course) => (
                <div key={course.id} className="rounded-2xl bg-slate-50 p-3 text-sm">
                  <p className="font-medium text-slate-900">{course.name}</p>
                  <p className="text-slate-600">{course.duration}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardContent className="space-y-4 pt-6">
              <h3 className="text-lg font-semibold text-slate-900">Recent Bookings</h3>
              {tables.bookings.length === 0 ? (
                <p className="text-sm text-slate-600">No bookings available.</p>
              ) : (
                tables.bookings.map((booking) => (
                  <div key={booking.id} className="rounded-2xl bg-slate-50 p-3 text-sm">
                    <p className="font-medium text-slate-900">{booking.parentName}</p>
                    <p className="text-slate-600">{booking.childName}</p>
                    <p className="text-slate-600">{booking.course.name}</p>
                    <p className="text-brand-700">{booking.status}</p>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
