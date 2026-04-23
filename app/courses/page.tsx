import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getCourses } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Courses',
  description: 'Explore English, Maths, Handwriting, and Communication programs designed for children.'
};

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            title="Courses built for confident kids"
            subtitle="Choose the right program and book a free trial class in one click."
          />
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {courses.map((course, index) => (
            <Reveal key={course.id} delay={index * 0.08}>
              <Card className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardContent className="space-y-4 pt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600">{course.audience}</p>
                  <h2 className="text-2xl font-semibold text-slate-900">{course.name}</h2>
                  <p className="text-sm leading-7 text-slate-600">{course.summary}</p>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    <span>{course.duration}</span>
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href={`/courses/${course.slug}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                    <Link href={`/book?course=${course.slug}`}>
                      <Button size="sm">Book Free Trial</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
