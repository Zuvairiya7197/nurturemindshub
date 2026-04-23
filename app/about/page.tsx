import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about NurtureMinds Hub mission, values, and child-focused learning approach.'
};

export default function AboutPage() {
  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="space-y-6">
          <SectionHeading
            title="About NurtureMinds Hub"
            subtitle="A conversion-focused edtech platform that helps parents confidently start their child’s learning journey."
          />
          <p className="text-slate-600">
            We believe children learn best with encouragement, structure, and clear feedback. Our programs in English, Maths,
            Handwriting, and Communication are crafted to improve both skill and confidence.
          </p>
          <p className="text-slate-600">
            Parents get complete visibility through class updates, progress snapshots, worksheets, and recordings.
          </p>
          <p className="text-slate-600">
            Every experience begins with a free trial so families can choose the right learning path without pressure.
          </p>
        </div>

        <Card className="h-fit">
          <CardContent className="space-y-4 pt-6">
            <h3 className="text-xl font-semibold text-slate-900">Our Core Promise</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Certified teachers and child-friendly pedagogy</li>
              <li>• Structured curriculum with practice worksheets</li>
              <li>• Parent-first communication and support</li>
            </ul>
            <Link href="/book">
              <Button className="w-full">Book Free Trial</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
