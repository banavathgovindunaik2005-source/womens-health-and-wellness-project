import { useEffect, useState } from 'react';
import { Check, CheckSquare, RotateCcw, ShieldPlus, Square } from 'lucide-react';
import { PREVENTIVE_TOPICS, QUIZ_QUESTIONS, TOPIC_IMAGES } from '../data/wellnessData';
import { TopicImage } from './TopicImage';

type StageFilter = 'All' | 'Adolescence (13–24)' | 'Reproductive (25–44)' | '45+ & Lifespan';

const CHECKLIST_STORAGE_KEY = 'bp_preventive_checklist_v1';

const AWARENESS_CHECKLIST = [
  {
    id: 'c1',
    text: 'Check menstrual product labels for fragrance-free, unbleached cotton or medical-grade silicone',
  },
  {
    id: 'c2',
    text: 'Verify HPV vaccination status or consult a clinician about age-appropriate immunization',
  },
  {
    id: 'c3',
    text: 'Schedule routine cervical screening (Pap / HPV test) at recommended intervals',
  },
  {
    id: 'c4',
    text: 'Pair iron-rich meals with Vitamin C and test hemoglobin/ferritin if fatigue persists',
  },
  {
    id: 'c5',
    text: 'Include weight-bearing exercise plus calcium and Vitamin D for lifelong bone density',
  },
];

export function PreventiveCareModule() {
  const [stageFilter, setStageFilter] = useState<StageFilter>('All');
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(CHECKLIST_STORAGE_KEY);
      return saved ? (JSON.parse(saved) as string[]) : [];
    } catch {
      return [];
    }
  });

  const [answers, setAnswers] = useState<Record<string, number>>({});

  useEffect(() => {
    try {
      localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(checkedIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [checkedIds]);

  const filteredTopics =
    stageFilter === 'All'
      ? PREVENTIVE_TOPICS
      : PREVENTIVE_TOPICS.filter((topic) => topic.stageTag === stageFilter);

  const toggleChecklist = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const answeredCount = Object.keys(answers).length;
  const correctCount = QUIZ_QUESTIONS.filter((q) => answers[q.id] === q.correctIndex).length;

  return (
    <section id="preventive-care" className="border-b border-[#E3E7E5] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E3E7E5]">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#525C58]">
              04. Preventive Healthcare &amp; Early Awareness
            </p>
            <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-semibold text-[#141A18] tracking-tight text-balance">
              Cervical Screening, HPV Vaccination, Bone Health &amp; Anemia
            </h2>
          </div>

          <p className="text-sm text-[#47524E] max-w-md leading-relaxed">
            Early preventive action protects long-term vitality. Filter key screenings and
            nutritional strategies across adolescence, reproductive years, and beyond.
          </p>
        </div>

        {/* Life Stage Filter */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F2F5F4] border border-[#E3E7E5]">
            {(['All', 'Adolescence (13–24)', 'Reproductive (25–44)', '45+ & Lifespan'] as StageFilter[]).map(
              (stage) => (
                <button
                  key={stage}
                  type="button"
                  onClick={() => setStageFilter(stage)}
                  className={`px-3.5 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    stageFilter === stage
                      ? 'bg-white text-[#141A18] shadow-xs'
                      : 'text-[#525C58] hover:text-[#141A18]'
                  }`}
                >
                  {stage}
                </button>
              ),
            )}
          </div>
          <span className="text-xs font-mono text-[#525C58] tabular-nums">
            {filteredTopics.length} preventive priorities shown
          </span>
        </div>

        {/* 2x2 Preventive Care Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTopics.map((topic) => (
            <article
              key={topic.id}
              className="p-6 bg-[#FAFBFA] border border-[#E3E7E5] flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-center justify-between gap-3 text-xs font-mono text-[#0F766E]">
                  <span>{topic.stageTag}</span>
                </div>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-[#141A18]">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm text-[#47524E] leading-relaxed">{topic.summary}</p>
              </div>

              <div className="pt-4 border-t border-[#E3E7E5] space-y-2 text-xs">
                <p className="text-[#141A18]">
                  <strong className="font-semibold">Clinical Action:</strong> {topic.keyAction}
                </p>
                <p className="text-[#525C58]">
                  <strong className="font-semibold text-[#141A18]">Daily Habit:</strong>{' '}
                  {topic.nutritionOrCareNote}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Split: Preventive Photo & Checklist + Interactive Awareness Self-Check */}
        <div
          id="self-check"
          className="mt-12 pt-10 border-t border-[#E3E7E5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Preventive Photo + Personal Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <TopicImage
              src={TOPIC_IMAGES.preventiveCare}
              alt="Preventive healthcare desk with stethoscope, health checkup planner, leafy greens, and vitamin C citrus"
              caption="Scheduled screenings paired with iron-plus-vitamin-C nutrition and bone-building movement support lifelong wellbeing."
            />

            <div className="bg-[#F4F7F6] border border-[#D8E2DE] p-6 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <ShieldPlus className="w-4 h-4 text-[#0F766E]" aria-hidden="true" />
                  <h3 className="font-serif text-xl font-semibold text-[#141A18]">
                    Personal Preventive Checklist
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#0F766E] tabular-nums">
                  {checkedIds.length}/{AWARENESS_CHECKLIST.length}
                </span>
              </div>

              <p className="text-xs text-[#525C58]">
                Track practical habits and clinical questions to bring to your next routine checkup.
              </p>

              <div className="space-y-2.5">
                {AWARENESS_CHECKLIST.map((item) => {
                  const isChecked = checkedIds.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleChecklist(item.id)}
                      className={`w-full p-3 text-left text-xs border transition-colors flex items-start gap-2.5 cursor-pointer ${
                        isChecked
                          ? 'bg-white border-[#0F766E] text-[#141A18]'
                          : 'bg-white/80 border-[#DDE4E1] text-[#313B37] hover:border-[#525C58]'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare
                          className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                      ) : (
                        <Square
                          className="w-4 h-4 text-[#7C8782] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                      )}
                      <span className={isChecked ? 'line-through text-[#525C58]' : ''}>
                        {item.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: 5-Question Awareness Self-Check */}
          <div className="lg:col-span-7 bg-[#FAFBFA] border border-[#E3E7E5] p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E3E7E5]">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#141A18]">
                  Awareness Self-Check
                </h3>
                <p className="text-xs text-[#525C58]">
                  Check key insights across menstrual hygiene, hormonal balance, mental health, and
                  preventive care.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#141A18] tabular-nums">
                  Score: {correctCount} / {QUIZ_QUESTIONS.length}
                </span>
                {answeredCount > 0 && (
                  <button
                    type="button"
                    onClick={() => setAnswers({})}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#0F766E] hover:underline cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-5">
              {QUIZ_QUESTIONS.map((q, qIdx) => {
                const selectedIdx = answers[q.id];
                const hasAnswered = selectedIdx !== undefined;
                const isCorrect = selectedIdx === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className="pb-5 border-b border-[#E3E7E5] last:border-b-0 last:pb-0"
                  >
                    <p className="text-[11px] font-mono text-[#525C58] uppercase">
                      Question 0{qIdx + 1} · {q.topic}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#141A18]">{q.question}</p>

                    <div className="mt-3 grid grid-cols-1 gap-2">
                      {q.options.map((opt, optIdx) => {
                        const isPicked = selectedIdx === optIdx;
                        const isRightOption = optIdx === q.correctIndex;

                        let styleClass =
                          'bg-white border-[#E0E6E3] text-[#313B37] hover:border-[#141A18]';
                        if (hasAnswered) {
                          if (isRightOption) {
                            styleClass =
                              'bg-[#ECFDF5] border-[#0F766E] text-[#065F46] font-medium';
                          } else if (isPicked) {
                            styleClass = 'bg-[#FEF2F2] border-[#B91C1C] text-[#991B1B]';
                          }
                        }

                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                            className={`px-3.5 py-2.5 text-left text-xs border transition-colors flex items-center justify-between gap-2 cursor-pointer ${styleClass}`}
                          >
                            <span>{opt}</span>
                            {hasAnswered && isRightOption && (
                              <Check className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {hasAnswered && (
                      <p className="mt-2.5 text-xs text-[#47524E] leading-relaxed">
                        <strong className="text-[#141A18]">
                          {isCorrect ? 'Correct:' : 'Clarification:'}
                        </strong>{' '}
                        {q.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
