import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getCourses, testimonials } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { BookingForm } from '@/components/forms/booking-form';
import { AbstractBg } from '@/components/ui/abstract-bg';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Raise confident and skillful children with live classes, certified teachers, and structured curriculum.'
};

const benefits = [
  { title: 'Live Classes', text: 'Interactive sessions in small batches with direct teacher attention.' },
  { title: 'Certified Teachers', text: 'Experienced mentors trained for child-focused digital learning.' },
  { title: 'Structured Curriculum', text: 'Step-by-step modules with measurable milestones and feedback.' },
  { title: 'Worksheets & Practice', text: 'Practice resources and homework for consistent skill building.' }
];

const appFeatures = ['Attend classes', 'Track progress', 'Submit homework'];

export default async function HomePage() {
  const courses = await getCourses();

  return (
    <main>
      <section className="section-kids px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <AbstractBg variant="hero" />
        <div className="dot-grid" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="space-y-6">
              <Badge className="bg-cyan-100 text-cyan-800">Parent Trusted Platform</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Raise Confident & Skillful Children
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-700">
                Help your child build confidence in English, Maths, Handwriting, and Communication through live expert-led classes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/book">
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">Book Free Class</Button>
                </Link>
                <Link href="/courses">
                  <Button variant="outline" size="lg" className="border-cyan-300 bg-white/80">
                    Explore Programs
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="overflow-hidden border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-indigo-50">
              <CardHeader>
                <CardTitle>Start with a free trial in 2 minutes</CardTitle>
                <CardDescription>Speak with an advisor, choose a program, and schedule your child’s first live class.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  {['English', 'Maths', 'Handwriting', 'Communication'].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-2xl border p-4 text-sm font-semibold ${
                        index % 2 === 0
                          ? 'border-cyan-200 bg-cyan-50 text-cyan-800'
                          : 'border-violet-200 bg-violet-50 text-violet-800'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/book" className="inline-flex">
                  <Button className="bg-indigo-600 hover:bg-indigo-700">Reserve Trial Slot</Button>
                </Link>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section-kids bg-white/75 px-4 py-16 sm:px-6 lg:px-8">
        <AbstractBg variant="soft" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              title="Programs for every growth stage"
              subtitle="Conversion-focused courses designed for young learners and busy parents."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {courses.map((course, index) => (
              <Reveal key={course.id} delay={index * 0.06}>
                <Card className="group overflow-hidden border-slate-100 transition hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    />
                  </div>
                  <CardContent className="space-y-3 pt-6">
                    <p className="text-sm font-semibold text-cyan-700">{course.categories[0]}</p>
                    <h3 className="text-xl font-semibold text-slate-900">{course.name}</h3>
                    <p className="text-sm leading-6 text-slate-600">{course.summary}</p>
                    <Link href={`/courses/${course.slug}`} className="text-sm font-semibold text-indigo-700 hover:text-indigo-800">
                      View Course Details
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-kids px-4 py-16 sm:px-6 lg:px-8">
        <AbstractBg variant="warm" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading title="Why Choose Us" subtitle="Trusted outcomes for kids and complete visibility for parents." />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.06}>
                <Card className="h-full border-slate-100 bg-white/85 p-6">
                  <p className="text-base font-semibold text-slate-900">{benefit.title}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{benefit.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-kids bg-white/80 px-4 py-16 sm:px-6 lg:px-8">
        <AbstractBg variant="soft" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              title="What parents say"
              subtitle="Real reviews from families who booked trial classes and saw progress quickly."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <Card className="h-full border-slate-100 bg-white/90 p-6">
                  <p className="text-slate-700">“{item.feedback}”</p>
                  <p className="mt-5 font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-kids px-4 py-16 sm:px-6 lg:px-8">
        <AbstractBg variant="hero" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              title="Learning app built for parent convenience"
              subtitle="Everything you need to stay involved in your child’s learning journey."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {appFeatures.map((feature, index) => (
                <Card
                  key={feature}
                  className={`p-4 text-center text-sm font-semibold ${
                    index === 0
                      ? 'border-cyan-200 bg-cyan-50 text-cyan-700'
                      : index === 1
                        ? 'border-violet-200 bg-violet-50 text-violet-700'
                        : 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  }`}
                >
                  {feature}
                </Card>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="overflow-hidden border-slate-100">
              <div className="relative h-80 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80"
                  alt="Child attending class on tablet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section-kids bg-brand-700 px-4 py-16 text-white sm:px-6 lg:px-8">
        <AbstractBg variant="cta" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white">Final CTA</Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Book Free Trial Now</h2>
              <p className="max-w-xl text-base leading-7 text-brand-100">
                Secure your child’s first session and discover the right learning track with an expert mentor.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <BookingForm
              courses={courses.map((course) => ({ id: course.id, name: course.name }))}
              defaultCourseId={courses[0]?.id}
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
