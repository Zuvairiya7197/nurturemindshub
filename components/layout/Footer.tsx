import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-3">
          <p className="text-lg font-bold text-slate-900">NurtureMinds Hub</p>
          <p className="text-sm leading-6 text-slate-600">
            Premium live learning for children with measurable progress and parent-first support.
          </p>
        </div>
        <div className="space-y-3 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Quick Links</p>
          <Link href="/courses" className="block hover:text-slate-900">
            Courses
          </Link>
          <Link href="/book" className="block hover:text-slate-900">
            Book Trial
          </Link>
          <Link href="/teacher-onboarding" className="block hover:text-slate-900">
            Teacher Onboarding
          </Link>
        </div>
        <div className="space-y-3 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Support</p>
          <p>support@nurtureminds.com</p>
          <p>+91 99999 99999</p>
          <p>Mon-Sat, 9 AM - 7 PM</p>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} NurtureMinds Hub. All rights reserved.
      </div>
    </footer>
  );
}
