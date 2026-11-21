import { useState } from 'react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { HEALTH_PILLARS, TOPIC_IMAGES } from '../data/wellnessData';
import { TopicImage } from './TopicImage';

const SUMMARY_METRICS = [
  { value: '04', label: 'Core Health & Awareness Pillars' },
  { value: '03', label: 'Safer Sustainable Hygiene Alternatives' },
  { value: '28d', label: 'Interactive Endocrine Cycle Explorer' },
  { value: '05', label: 'Preventive Care Checkpoints & Quiz' },
];

export function HeroSection() {
  const [selectedPillarId, setSelectedPillarId] = useState(HEALTH_PILLARS[0].id);
  const activePillar =
    HEALTH_PILLARS.find((pillar) => pillar.id === selectedPillarId) ?? HEALTH_PILLARS[0];

  return (
    <section className="border-b border-[#E3E7E5] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-14 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Wellness Headline & Action */}
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-[#525C58] mb-4">
                Women’s Health &amp; Preventive Awareness
              </p>

              <h1
                className="font-serif font-semibold text-[#141A18] tracking-tight leading-[1.08] text-balance"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.6rem)' }}
              >
                Beyond Periods: Understanding Women’s Health and Wellness
              </h1>

              <p className="mt-6 text-[15px] lg:text-base leading-relaxed text-[#47524E] max-w-xl">
                Women’s health spans physical, hormonal, and mental wellbeing across every life
                stage. Explore practical guidance on fragrance-free menstrual care, PCOS/PCOD and
                thyroid balance, emotional transitions, and preventive screenings.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#hygiene"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#0B5B55] transition-colors duration-150 whitespace-nowrap shrink-0"
                >
                  <span>Explore Health Modules</span>
                  <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="#self-check"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#141A18] bg-[#FAFBFA] border border-[#D4DBD8] hover:border-[#141A18] transition-colors duration-150 whitespace-nowrap shrink-0"
                >
                  <span>Take Awareness Check</span>
                </a>
              </div>
            </div>

            {/* Interactive 4-Pillar Quick Switcher */}
            <div className="mt-10 pt-6 border-t border-[#E3E7E5]">
              <div className="flex flex-wrap gap-2 mb-3">
                {HEALTH_PILLARS.map((pillar) => {
                  const isActive = pillar.id === activePillar.id;
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={() => setSelectedPillarId(pillar.id)}
                      className={`px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#141A18] text-white border-[#141A18]'
                          : 'bg-[#FAFBFA] text-[#47524E] border-[#DCE2DF] hover:border-[#141A18]'
                      }`}
                    >
                      {pillar.index}. {pillar.title.split('&')[0].trim()}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between gap-4 text-xs text-[#47524E]">
                <p className="line-clamp-2">{activePillar.summary}</p>
                <a
                  href={activePillar.anchor}
                  className="inline-flex items-center gap-1 font-semibold text-[#0F766E] hover:underline whitespace-nowrap shrink-0"
                >
                  <span>Jump</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Topic-Related Hero Editorial Photo */}
          <div className="lg:col-span-6 flex flex-col">
            <TopicImage
              src={TOPIC_IMAGES.hero}
              alt="Calm morning wellness journal, herbal tea, and botanical greens symbolizing holistic women's wellbeing"
              caption="Holistic women’s wellness integrates daily menstrual comfort, endocrine nutrition, emotional balance, and preventive care."
              className="h-full flex flex-col justify-between bg-[#F4F7F6]"
            />
          </div>
        </div>

        {/* Full-Width 4-Column Summary Strip */}
        <div className="mt-12 pt-8 border-t border-[#E3E7E5] grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SUMMARY_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1">
              <span className="font-serif text-3xl lg:text-4xl font-semibold text-[#141A18] tabular-nums">
                {metric.value}
              </span>
              <span className="text-xs text-[#525C58]">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
