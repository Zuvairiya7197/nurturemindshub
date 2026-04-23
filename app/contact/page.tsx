import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/forms/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact NurtureMinds Hub support team for trial class scheduling and course guidance.'
};

export default function ContactPage() {
  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading
            title="Contact Us"
            subtitle="Need help choosing a course or scheduling a trial class? We are here to help."
          />
          <Card>
            <CardContent className="space-y-4 pt-6 text-sm text-slate-600">
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <p>support@nurtureminds.com</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Phone</p>
                <p>+91 99999 99999</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Hours</p>
                <p>Mon-Sat, 9 AM - 7 PM</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
