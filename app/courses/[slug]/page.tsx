import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCourseBySlug, getCourses } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookingForm } from '@/components/forms/booking-form';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = await getCourseBySlug(params.slug);

  if (!course) {
    return { title: 'Course Not Found' };
  }

  return {
    title: course.name,
    description: course.summary
  };
}

export default async function CourseDetailPage({ params }: { params: { slug: string } }) {
  const [course, courses] = await Promise.all([getCourseBySlug(params.slug), getCourses()]);

  if (!course) {
    notFound();
  }

  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="space-y-8">
          <SectionHeading title={course.name} subtitle={course.summary} />

          <Card className="overflow-hidden">
            <div className="relative h-72 w-full">
              <Image src={course.image} alt={course.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 65vw" />
            </div>
          </Card>

          <Card>
            <CardContent className="space-y-5 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">Program Overview</h3>
              <p className="text-slate-600">{course.description}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-brand-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">Audience</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{course.audience}</p>
                </div>
                <div className="rounded-2xl bg-brand-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">Duration</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{course.duration}</p>
                </div>
                <div className="rounded-2xl bg-brand-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">Lessons</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{course.lessons}</p>
                </div>
              </div>
              <div>
                <h4 className="text-base font-semibold text-slate-900">What your child will gain</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {course.outcomes.map((outcome) => (
                    <li key={outcome}>• {outcome}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-slate-900">Book Your Free Trial</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Submit this form and our advisor will confirm your child’s trial slot.
            </p>
          </Card>
          <BookingForm
            courses={courses.map((item) => ({ id: item.id, name: item.name }))}
            defaultCourseId={course.id}
          />
          <Link href="/courses" className="inline-flex">
            <Button variant="ghost">Back to All Courses</Button>
          </Link>
        </aside>
      </div>
    </main>
  );
}
