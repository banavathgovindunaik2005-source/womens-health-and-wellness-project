import { Download } from 'lucide-react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HormonesModule } from './components/HormonesModule';
import { HygieneModule } from './components/HygieneModule';
import { MentalHealthModule } from './components/MentalHealthModule';
import { PreventiveCareModule } from './components/PreventiveCareModule';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFA] text-[#141A18]">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <HygieneModule />
        <HormonesModule />
        <MentalHealthModule />
        <PreventiveCareModule />
      </main>

      <footer className="bg-white border-t border-[#E3E7E5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="max-w-md">
              <p className="font-serif text-xl font-semibold text-[#141A18]">
                Beyond Periods: Understanding Women’s Health and Wellness
              </p>
              <p className="mt-2 text-xs text-[#525C58] leading-relaxed">
                Educational awareness resource covering menstrual hygiene, hormonal health, mental
                wellbeing, and preventive care. Content is informational and does not replace
                personalized medical evaluation by a qualified healthcare professional.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="flex flex-wrap items-center gap-6 text-xs text-[#525C58]">
                <a href="#hygiene" className="hover:text-[#141A18] hover:underline">
                  Hygiene
                </a>
                <a href="#hormones" className="hover:text-[#141A18] hover:underline">
                  Hormones
                </a>
                <a href="#mental-health" className="hover:text-[#141A18] hover:underline">
                  Mental Health
                </a>
                <a href="#preventive-care" className="hover:text-[#141A18] hover:underline">
                  Preventive Care
                </a>
                <a href="#self-check" className="text-[#0F766E] font-semibold hover:underline">
                  Self-Check Quiz
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/beyond-periods-project.zip"
                  download="beyond-periods-project.zip"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#141A18] bg-[#FAFBFA] border border-[#D4DBD8] hover:border-[#141A18] transition-colors whitespace-nowrap shrink-0"
                >
                  <Download className="w-3.5 h-3.5 text-[#525C58]" aria-hidden="true" />
                  <span>Source Archive (.zip)</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#E3E7E5] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#525C58]">
            <span>Beyond Periods · Women’s Health &amp; Preventive Awareness</span>
            <span>Physical, Hormonal &amp; Mental Wellbeing Across Life Stages</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
