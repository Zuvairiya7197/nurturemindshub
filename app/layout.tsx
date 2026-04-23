import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './styles.css';
import { Providers } from './providers';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: {
    default: 'NurtureMinds Hub | Raise Confident & Skillful Children',
    template: '%s | NurtureMinds Hub'
  },
  description:
    'Book free trial classes for your child in English, Maths, Handwriting, and Communication. Live classes with certified teachers and measurable progress.',
  metadataBase: new URL('http://localhost:3000'),
  keywords: ['kids online classes', 'book free trial class', 'english classes for kids', 'math classes for kids'],
  openGraph: {
    title: 'NurtureMinds Hub',
    description: 'Conversion-focused edtech platform for parents to book trial classes for children.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NurtureMinds Hub',
    description: 'Raise Confident & Skillful Children with expert-led live classes.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} min-h-screen bg-slate-50 text-slate-900 antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
