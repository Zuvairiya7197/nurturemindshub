import type { Metadata } from 'next';
import { getCourses } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { BookingForm } from '@/components/forms/booking-form';

export const metadata: Metadata = {
  title: 'Book Free Trial',
  description: 'Book a free trial class for your child in under two minutes.'
};

export default async function BookPage({ searchParams }: { searchParams?: { course?: string } }) {
  const courses = await getCourses();
  const selectedCourse = searchParams?.course
    ? courses.find((course) => course.slug === searchParams.course)
    : courses[0];

  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading
            title="Book Your Free Trial"
            subtitle="Tell us a few details and our team will schedule the ideal class for your child."
          />
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">Why parents book a trial first</h3>
              <ul className="space-y-3 text-sm leading-7 text-slate-600">
                <li>• Understand your child’s current level with expert assessment.</li>
                <li>• Experience the teacher’s style and classroom interaction live.</li>
                <li>• Receive a personalized course recommendation and plan.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <BookingForm
          courses={courses.map((course) => ({ id: course.id, name: course.name }))}
          defaultCourseId={selectedCourse?.id}
        />
      </div>
    </main>
  );
}
