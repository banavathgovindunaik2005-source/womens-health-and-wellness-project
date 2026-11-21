import { useState } from 'react';
import { HeartHandshake, Stethoscope } from 'lucide-react';
import { MENTAL_HEALTH_STAGES, TOPIC_IMAGES } from '../data/wellnessData';
import { TopicImage } from './TopicImage';

export function MentalHealthModule() {
  const [selectedStageId, setSelectedStageId] = useState<string>(MENTAL_HEALTH_STAGES[0].id);

  const activeStage =
    MENTAL_HEALTH_STAGES.find((s) => s.id === selectedStageId) ?? MENTAL_HEALTH_STAGES[0];

  return (
    <section id="mental-health" className="border-b border-[#E3E7E5] bg-[#FAFBFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E3E7E5]">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#525C58]">
              03. Women’s Mental Health Across Life Stages
            </p>
            <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-semibold text-[#141A18] tracking-tight text-balance">
              Cyclical Mood, Daily Stress, Postpartum Care &amp; Menopause
            </h2>
          </div>

          <p className="text-sm text-[#47524E] max-w-md leading-relaxed">
            Hormonal transitions affect neurochemistry throughout life. Recognizing biological
            signals early helps normalize care and reduce stigma.
          </p>
        </div>

        {/* 4-Stage Interactive Selector */}
        <div
          role="tablist"
          aria-label="Women's mental health stages"
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {MENTAL_HEALTH_STAGES.map((stage, index) => {
            const isActive = stage.id === activeStage.id;
            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedStageId(stage.id)}
                className={`p-4 text-left border transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#0F766E] shadow-xs'
                    : 'bg-white/70 border-[#E0E6E3] hover:border-[#525C58]'
                }`}
              >
                <span className="text-[11px] font-mono text-[#0F766E] tabular-nums">
                  Stage 0{index + 1}
                </span>
                <p className="mt-1 text-sm font-semibold text-[#141A18]">{stage.stage}</p>
                <p className="mt-1 text-xs text-[#525C58]">{stage.contextLabel}</p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive + Topic Photography */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white border border-[#E3E7E5] p-6 lg:p-8 space-y-6">
            <div className="pb-5 border-b border-[#E3E7E5]">
              <p className="text-xs font-mono uppercase tracking-wider text-[#0F766E]">
                {activeStage.contextLabel}
              </p>
              <h3 className="mt-1.5 font-serif text-2xl lg:text-3xl font-semibold text-[#141A18]">
                {activeStage.stage}
              </h3>
              <p className="mt-3 text-sm text-[#313B37] leading-relaxed">
                {activeStage.biologicalContext}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#141A18] pb-2.5 border-b border-[#E3E7E5]">
                  Common Emotional &amp; Cognitive Signals
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-[#47524E] leading-relaxed">
                  {activeStage.commonSignals.map((signal) => (
                    <li key={signal} className="flex items-start gap-2.5">
                      <span className="text-[#9F1239] font-mono text-xs mt-1" aria-hidden="true">
                        •
                      </span>
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#141A18] pb-2.5 border-b border-[#E3E7E5] flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#0F766E]" aria-hidden="true" />
                  <span>Supportive &amp; Practical Habits</span>
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-[#313B37] leading-relaxed">
                  {activeStage.evidenceSupport.map((habit) => (
                    <li key={habit} className="flex items-start gap-2.5">
                      <span className="text-[#0F766E] font-mono text-xs mt-1" aria-hidden="true">
                        ✓
                      </span>
                      <span>{habit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-[#F4F7F6] border border-[#D8E2DE] flex items-start gap-3">
              <Stethoscope className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-xs text-[#313B37] leading-relaxed">
                <span className="font-semibold text-[#141A18] block mb-0.5">
                  When to Consult a Clinician
                </span>
                {activeStage.clinicalGuidance}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <TopicImage
              src={TOPIC_IMAGES.mentalHealth}
              alt="Woman journaling calmly beside a sunlit window surrounded by botanical houseplants"
              caption="Reflective tracking, uninterrupted sleep blocks, and open conversation reduce isolation across cyclical, postpartum, and menopausal transitions."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
