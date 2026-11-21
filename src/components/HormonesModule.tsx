import { useEffect, useState } from 'react';
import { Activity, Pause, Play, RotateCcw } from 'lucide-react';
import { CYCLE_PHASES, HORMONE_FACTORS, TOPIC_IMAGES } from '../data/wellnessData';
import { TopicImage } from './TopicImage';

function getHormoneLevels(day: number): { estrogen: number; progesterone: number; lh: number } {
  const primaryPeak = 82 * Math.exp(-Math.pow((day - 13) / 3.2, 2));
  const secondaryPlateau = 48 * Math.exp(-Math.pow((day - 21.5) / 4.2, 2));
  const estrogen = Math.round(Math.min(95, 16 + primaryPeak + secondaryPlateau));

  const progPeak = 78 * Math.exp(-Math.pow((day - 21) / 3.8, 2));
  const progesterone = Math.round(Math.min(92, day < 13 ? 10 : 12 + progPeak));

  const lh = Math.round(12 + 78 * Math.exp(-Math.pow((day - 14) / 1.1, 2)));

  return { estrogen, progesterone, lh };
}

function buildCurvePath(
  extractor: (d: number) => number,
  width: number,
  height: number,
  paddingX: number,
  paddingY: number,
): string {
  const usableW = width - paddingX * 2;
  const usableH = height - paddingY * 2;
  const points: string[] = [];

  for (let day = 1; day <= 28; day++) {
    const x = paddingX + ((day - 1) / 27) * usableW;
    const val = extractor(day);
    const y = paddingY + usableH - (val / 100) * usableH;
    points.push(`${day === 1 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return points.join(' ');
}

export function HormonesModule() {
  const [cycleDay, setCycleDay] = useState<number>(14);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeFactorId, setActiveFactorId] = useState<string>(HORMONE_FACTORS[0].id);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setCycleDay((prev) => (prev >= 28 ? 1 : prev + 1));
    }, 650);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const currentPhase =
    CYCLE_PHASES.find((p) => cycleDay >= p.dayRange[0] && cycleDay <= p.dayRange[1]) ??
    CYCLE_PHASES[0];
  const levels = getHormoneLevels(cycleDay);
  const activeFactor =
    HORMONE_FACTORS.find((f) => f.id === activeFactorId) ?? HORMONE_FACTORS[0];

  const svgWidth = 640;
  const svgHeight = 230;
  const padX = 36;
  const padY = 24;
  const markerX = padX + ((cycleDay - 1) / 27) * (svgWidth - padX * 2);

  const estrogenPath = buildCurvePath(
    (d) => getHormoneLevels(d).estrogen,
    svgWidth,
    svgHeight,
    padX,
    padY,
  );
  const progesteronePath = buildCurvePath(
    (d) => getHormoneLevels(d).progesterone,
    svgWidth,
    svgHeight,
    padX,
    padY,
  );
  const lhPath = buildCurvePath((d) => getHormoneLevels(d).lh, svgWidth, svgHeight, padX, padY);

  return (
    <section id="hormones" className="border-b border-[#E3E7E5] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E3E7E5]">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#525C58]">
              02. Hormonal Health, PCOS/PCOD &amp; Thyroid Disorders
            </p>
            <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-semibold text-[#141A18] tracking-tight text-balance">
              Endocrine Rhythm &amp; Modifiable Lifestyle Factors
            </h2>
          </div>

          <p className="text-sm text-[#47524E] max-w-md leading-relaxed">
            Scrub across a representative 28-day endocrine cycle and examine how nutrition, stress,
            sleep, and environmental exposures influence PCOS/PCOD and thyroid regulation.
          </p>
        </div>

        {/* Two-Zone Cycle Simulator */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-[#F8FAF9] border border-[#E3E7E5] p-6 flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E3E7E5]">
              <div>
                <span className="text-xs font-mono text-[#0F766E] uppercase tracking-wider">
                  {currentPhase.name}
                </span>
                <p className="font-serif text-xl font-semibold text-[#141A18] tabular-nums">
                  Cycle Day {String(cycleDay).padStart(2, '0')} of 28
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPlaying((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white border border-[#D4DBD8] hover:border-[#141A18] text-[#141A18] cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Simulate Cycle</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsPlaying(false);
                    setCycleDay(1);
                  }}
                  className="p-1.5 bg-white border border-[#D4DBD8] hover:border-[#141A18] text-[#141A18] cursor-pointer"
                  aria-label="Reset to cycle day 1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="my-5 bg-white border border-[#E3E7E5] p-3">
              <svg
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                className="w-full h-auto"
                role="img"
                aria-label={`Hormone levels on cycle day ${cycleDay}: Estrogen ${levels.estrogen}%, Progesterone ${levels.progesterone}%, LH ${levels.lh}%`}
              >
                {[0.25, 0.5, 0.75].map((ratio) => {
                  const y = padY + ratio * (svgHeight - padY * 2);
                  return (
                    <line
                      key={ratio}
                      x1={padX}
                      y1={y}
                      x2={svgWidth - padX}
                      y2={y}
                      stroke="#E5EAE8"
                      strokeDasharray="3 3"
                    />
                  );
                })}
                <line
                  x1={padX}
                  y1={svgHeight - padY}
                  x2={svgWidth - padX}
                  y2={svgHeight - padY}
                  stroke="#CBD5D1"
                />
                <line x1={padX} y1={padY} x2={padX} y2={svgHeight - padY} stroke="#CBD5D1" />

                <path d={lhPath} fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="5 4" />
                <path d={estrogenPath} fill="none" stroke="#0F766E" strokeWidth="2.75" />
                <path d={progesteronePath} fill="none" stroke="#9F1239" strokeWidth="2.75" />

                <line
                  x1={markerX}
                  y1={padY}
                  x2={markerX}
                  y2={svgHeight - padY}
                  stroke="#141A18"
                  strokeWidth="1.5"
                />

                {[1, 5, 14, 21, 28].map((d) => {
                  const x = padX + ((d - 1) / 27) * (svgWidth - padX * 2);
                  return (
                    <text
                      key={d}
                      x={x}
                      y={svgHeight - 6}
                      textAnchor="middle"
                      fontSize="10"
                      fill="#525C58"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      D{d}
                    </text>
                  );
                })}
              </svg>

              <div className="mt-2 pt-2 border-t border-[#E6ECE9] flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 text-[#141A18]">
                    <span className="w-3 h-0.5 bg-[#0F766E]" />
                    <span>Estrogen:</span>
                    <strong className="font-mono tabular-nums">{levels.estrogen}%</strong>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#141A18]">
                    <span className="w-3 h-0.5 bg-[#9F1239]" />
                    <span>Progesterone:</span>
                    <strong className="font-mono tabular-nums">{levels.progesterone}%</strong>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#141A18]">
                    <span className="w-3 h-0.5 border-t-2 border-dashed border-[#D97706]" />
                    <span>LH Surge:</span>
                    <strong className="font-mono tabular-nums">{levels.lh}%</strong>
                  </span>
                </div>
                <span className="text-[11px] text-[#525C58]">Illustrative 28-day pattern</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label htmlFor="cycle-day-slider" className="font-semibold text-[#141A18]">
                  Cycle Day Scrubber
                </label>
                <span className="font-mono text-[#0F766E] tabular-nums">
                  Day {cycleDay} / 28
                </span>
              </div>
              <input
                id="cycle-day-slider"
                type="range"
                min={1}
                max={28}
                value={cycleDay}
                onChange={(e) => {
                  setIsPlaying(false);
                  setCycleDay(Number(e.target.value));
                }}
                className="w-full accent-[#0F766E] cursor-pointer"
              />
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAFBFA] border border-[#E3E7E5] p-6 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#525C58] uppercase">
                <Activity className="w-3.5 h-3.5 text-[#0F766E]" aria-hidden="true" />
                <span>
                  Days {currentPhase.dayRange[0]}–{currentPhase.dayRange[1]} Phase Profile
                </span>
              </div>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-[#141A18]">
                {currentPhase.name}
              </h3>

              <dl className="mt-4 grid grid-cols-2 gap-3 p-3.5 bg-white border border-[#E3E7E5] text-xs">
                <div>
                  <dt className="text-[#525C58]">Estrogen State</dt>
                  <dd className="font-semibold text-[#0F766E] mt-0.5">
                    {currentPhase.estrogenLevel}
                  </dd>
                </div>
                <div>
                  <dt className="text-[#525C58]">Progesterone State</dt>
                  <dd className="font-semibold text-[#9F1239] mt-0.5">
                    {currentPhase.progesteroneLevel}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 space-y-3 text-sm leading-relaxed text-[#47524E]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#141A18]">
                    Physiological &amp; Symptom Context
                  </p>
                  <p className="mt-1">{currentPhase.typicalExperience}</p>
                </div>
                <div className="pt-3 border-t border-[#E3E7E5]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#141A18]">
                    Supportive Habit Focus
                  </p>
                  <p className="mt-1">{currentPhase.supportiveFocus}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E3E7E5] grid grid-cols-2 gap-2">
              {CYCLE_PHASES.map((phase) => (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => {
                    setIsPlaying(false);
                    setCycleDay(phase.dayRange[0]);
                  }}
                  className={`px-3 py-2 text-xs font-medium border text-left transition-colors cursor-pointer ${
                    phase.id === currentPhase.id
                      ? 'bg-[#0F766E] text-white border-[#0F766E]'
                      : 'bg-white text-[#141A18] border-[#D4DBD8] hover:border-[#141A18]'
                  }`}
                >
                  {phase.name.replace(' Phase', '')} (D{phase.dayRange[0]}–{phase.dayRange[1]})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PCOS/PCOD & Thyroid Lifestyle Influence Explorer + Nutrition Photo */}
        <div className="mt-12 pt-10 border-t border-[#E3E7E5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <h3 className="font-serif text-2xl font-semibold text-[#141A18]">
              PCOS/PCOD &amp; Thyroid Disorders: Lifestyle &amp; Environmental Influences
            </h3>
            <p className="mt-1 text-sm text-[#47524E]">
              Select a factor to see how daily habits and hormonal balance interact with both
              conditions.
            </p>

            <div className="flex flex-wrap gap-2 my-6">
              {HORMONE_FACTORS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveFactorId(item.id)}
                  className={`px-4 py-2 text-xs font-semibold border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    activeFactorId === item.id
                      ? 'bg-[#141A18] text-white border-[#141A18]'
                      : 'bg-[#FAFBFA] text-[#47524E] border-[#D4DBD8] hover:border-[#141A18]'
                  }`}
                >
                  {item.factor}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 bg-[#FAFBFA] border border-[#E3E7E5]">
                <p className="text-xs font-mono uppercase tracking-wider text-[#0F766E]">
                  PCOS / PCOD Interaction
                </p>
                <p className="mt-2 text-sm text-[#313B37] leading-relaxed">
                  {activeFactor.impactOnPCOS}
                </p>
              </div>

              <div className="p-5 bg-[#FAFBFA] border border-[#E3E7E5]">
                <p className="text-xs font-mono uppercase tracking-wider text-[#9F1239]">
                  Thyroid Disorder Interaction
                </p>
                <p className="mt-2 text-sm text-[#313B37] leading-relaxed">
                  {activeFactor.impactOnThyroid}
                </p>
              </div>

              <div className="p-5 bg-[#F4F7F6] border border-[#D4E0DC]">
                <p className="text-xs font-mono uppercase tracking-wider text-[#141A18]">
                  Preventive Action
                </p>
                <p className="mt-2 text-sm font-medium text-[#141A18] leading-relaxed">
                  {activeFactor.actionableStep}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <TopicImage
              src={TOPIC_IMAGES.hormones}
              alt="Hormone-supportive whole food meal with spinach, avocado, chickpeas, pumpkin seeds, sesame, and citrus"
              caption="Balanced glycemic meals rich in fiber, selenium, zinc, and omega fats support insulin sensitivity and thyroid metabolism."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
