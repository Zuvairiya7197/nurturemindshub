import Link from 'next/link';

export function FloatingActions() {
  return (
    <>
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
        className="fixed bottom-24 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald-600 sm:bottom-24 sm:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.95L0 24l6.34-1.66a11.84 11.84 0 0 0 5.72 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.17-1.23-6.15-3.44-8.43ZM12.07 21.8h-.01a9.84 9.84 0 0 1-5.01-1.37l-.36-.21-3.76.98 1-3.66-.24-.37a9.84 9.84 0 0 1-1.51-5.27C2.18 6.43 6.6 2 12.06 2c2.63 0 5.1 1.03 6.95 2.89a9.78 9.78 0 0 1 2.88 6.96c0 5.47-4.44 9.91-9.82 9.91Zm5.39-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.48-1.74-1.66-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.71.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>
      <Link
        href="/book"
        aria-label="Book a free class"
        title="Book Now"
        className="fixed bottom-6 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700 sm:bottom-6 sm:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" aria-hidden="true">
          <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v11A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5v-11Z" strokeWidth="1.8" />
          <path d="M8 3v4M16 3v4M4 10h16" strokeWidth="1.8" strokeLinecap="round" />
          <path d="m10 15 2 2 4-4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </>
  );
}
