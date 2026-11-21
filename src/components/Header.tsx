import { useState } from 'react';
import { ClipboardCheck, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Hygiene', href: '#hygiene' },
  { label: 'Hormones', href: '#hormones' },
  { label: 'Mental Health', href: '#mental-health' },
  { label: 'Preventive Care', href: '#preventive-care' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAFBFA]/95 backdrop-blur-sm border-b border-[#E3E7E5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#141A18] whitespace-nowrap shrink-0"
        >
          Beyond Periods
        </a>

        {/* Zone 2: 4 clean single-line navigation links */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#525C58]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#141A18] underline-offset-4 hover:underline transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#self-check"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0F766E] hover:bg-[#0B5B55] transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <ClipboardCheck className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Self-Check Quiz</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#141A18] hover:bg-[#EDF1EF] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-[#E3E7E5] bg-[#FAFBFA] px-6 py-4 flex flex-col gap-3"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium text-[#141A18] hover:text-[#0F766E] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
