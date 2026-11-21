import { useState } from 'react';
import { AlertTriangle, CheckCircle2, Droplets, ShieldCheck } from 'lucide-react';
import { HYGIENE_PRODUCTS, TOPIC_IMAGES } from '../data/wellnessData';
import { TopicImage } from './TopicImage';

type SensitivityLevel = 'high' | 'moderate';
type PriorityNeed = 'breathability' | 'long-wear' | 'everyday-reuse';

export function HygieneModule() {
  const [selectedProductId, setSelectedProductId] = useState<string>(HYGIENE_PRODUCTS[0].id);
  const [sensitivity, setSensitivity] = useState<SensitivityLevel>('high');
  const [priority, setPriority] = useState<PriorityNeed>('breathability');

  const activeProduct =
    HYGIENE_PRODUCTS.find((p) => p.id === selectedProductId) ?? HYGIENE_PRODUCTS[0];

  const recommendedId =
    priority === 'long-wear'
      ? 'menstrual-cup'
      : priority === 'everyday-reuse'
        ? 'period-underwear'
        : 'cotton-pads';
  const recommendedProduct =
    HYGIENE_PRODUCTS.find((p) => p.id === recommendedId) ?? HYGIENE_PRODUCTS[1];

  return (
    <section id="hygiene" className="border-b border-[#E3E7E5] bg-[#FAFBFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E3E7E5]">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#525C58]">
              01. Menstrual Hygiene &amp; Product Safety
            </p>
            <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-semibold text-[#141A18] tracking-tight text-balance">
              Evaluating Conventional Plastics vs. Safer Sustainable Care
            </h2>
          </div>

          <p className="text-sm text-[#47524E] max-w-md leading-relaxed">
            Heavily fragranced and plastic-based products can irritate sensitive skin. Compare
            material safety, breathability, and hygiene protocols across safer alternatives.
          </p>
        </div>

        {/* Two-Zone Interactive Comparison */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Product Selector & Material Inspector */}
          <div className="lg:col-span-7 space-y-6">
            <div
              role="tablist"
              aria-label="Select menstrual hygiene product to inspect"
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
            >
              {HYGIENE_PRODUCTS.map((product) => {
                const isActive = product.id === activeProduct.id;
                const isConcern = product.category === 'Conventional Concern';

                return (
                  <button
                    key={product.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedProductId(product.id)}
                    className={`p-4 text-left border transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-white border-[#0F766E] shadow-xs'
                        : 'bg-white/70 border-[#E0E6E3] hover:border-[#525C58]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-medium ${
                          isConcern ? 'text-[#B45309]' : 'text-[#0F766E]'
                        }`}
                      >
                        {isConcern ? (
                          <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" />
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                        )}
                        <span>{product.category}</span>
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm font-semibold text-[#141A18]">{product.name}</p>
                  </button>
                );
              })}
            </div>

            {/* Active Product Detail Matrix */}
            <div className="bg-white border border-[#E3E7E5] p-6 lg:p-8 space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-[#E3E7E5]">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#141A18]">
                    {activeProduct.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#47524E] leading-relaxed max-w-2xl">
                    {activeProduct.notes}
                  </p>
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border whitespace-nowrap shrink-0 ${
                    activeProduct.irritationRisk === 'Elevated Risk'
                      ? 'bg-[#FEF3C7] text-[#92400E] border-[#F59E0B]/40'
                      : 'bg-[#ECFDF5] text-[#065F46] border-[#10B981]/40'
                  }`}
                >
                  {activeProduct.irritationRisk === 'Elevated Risk' ? (
                    <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" />
                  ) : (
                    <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  )}
                  <span>{activeProduct.irritationRisk}</span>
                </span>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                <div>
                  <dt className="text-[#525C58] uppercase tracking-wider font-medium">
                    Fragrance &amp; Chemical Profile
                  </dt>
                  <dd className="mt-1.5 text-sm text-[#141A18] font-medium">
                    {activeProduct.fragranceStatus}
                  </dd>
                </div>

                <div>
                  <dt className="text-[#525C58] uppercase tracking-wider font-medium">
                    Material Composition
                  </dt>
                  <dd className="mt-1.5 text-sm text-[#141A18]">
                    {activeProduct.materialComposition}
                  </dd>
                </div>

                <div>
                  <dt className="text-[#525C58] uppercase tracking-wider font-medium">
                    Recommended Wear Window
                  </dt>
                  <dd className="mt-1.5 text-sm font-mono text-[#141A18] tabular-nums">
                    {activeProduct.wearWindow}
                  </dd>
                </div>

                <div>
                  <dt className="text-[#525C58] uppercase tracking-wider font-medium">
                    Environmental Footprint
                  </dt>
                  <dd className="mt-1.5 text-sm text-[#141A18]">
                    {activeProduct.environmentalImpact}
                  </dd>
                </div>

                <div className="sm:col-span-2 pt-4 border-t border-[#E3E7E5]">
                  <dt className="text-[#525C58] uppercase tracking-wider font-medium">
                    Safe Hygiene &amp; Care Protocol
                  </dt>
                  <dd className="mt-1.5 text-sm text-[#141A18]">
                    {activeProduct.hygieneProtocol}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right: Topic Photo + Interactive Safer Alternative Finder */}
          <aside className="lg:col-span-5 space-y-6">
            <TopicImage
              src={TOPIC_IMAGES.hygiene}
              alt="Unbleached fragrance-free cotton pads, medical-grade silicone menstrual cup, and reusable cotton period underwear"
              caption="Safer, fragrance-free alternatives: breathable cotton pads, silicone menstrual cups, and reusable period underwear."
            />

            <div className="bg-white border border-[#E3E7E5] p-6 space-y-5">
              <div className="flex items-start gap-3">
                <Droplets className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#141A18]">
                    Safer Alternative Selector
                  </h3>
                  <p className="mt-1 text-xs text-[#525C58] leading-relaxed">
                    Match skin sensitivity and routine needs to a fragrance-free option.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-[#141A18] mb-2">
                    1. Skin &amp; Fragrance Sensitivity
                  </p>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-[#F2F5F4] border border-[#E3E7E5]">
                    {[
                      { id: 'high', label: 'Sensitive / Reactive' },
                      { id: 'moderate', label: 'Standard Comfort' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSensitivity(opt.id as SensitivityLevel)}
                        className={`py-2 px-3 text-xs font-medium transition-colors cursor-pointer ${
                          sensitivity === opt.id
                            ? 'bg-white text-[#141A18] shadow-xs'
                            : 'text-[#525C58] hover:text-[#141A18]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#141A18] mb-2">
                    2. Primary Practical Priority
                  </p>
                  <div className="space-y-2">
                    {[
                      {
                        id: 'breathability',
                        label: 'Familiar pad format with breathable cotton',
                      },
                      {
                        id: 'long-wear',
                        label: 'Long 8–12h wear & lowest multi-year waste',
                      },
                      {
                        id: 'everyday-reuse',
                        label: 'Zero-insertion wearable comfort & overnight safety',
                      },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPriority(opt.id as PriorityNeed)}
                        className={`w-full p-3 text-left text-xs border transition-colors cursor-pointer ${
                          priority === opt.id
                            ? 'border-[#0F766E] bg-[#0F766E]/[0.05] text-[#141A18] font-medium'
                            : 'border-[#E0E6E3] text-[#47524E] hover:border-[#525C58]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F4F7F6] border border-[#D8E2DE] space-y-2">
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#0F766E]">
                  Matched Safer Choice
                </p>
                <h4 className="font-serif text-lg font-semibold text-[#141A18]">
                  {recommendedProduct.name}
                </h4>
                <p className="text-xs text-[#47524E] leading-relaxed">
                  {sensitivity === 'high'
                    ? `Recommended for sensitive skin: ${recommendedProduct.fragranceStatus}. ${recommendedProduct.notes}`
                    : recommendedProduct.notes}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedProductId(recommendedProduct.id)}
                  className="mt-1 inline-flex items-center text-xs font-semibold text-[#0F766E] hover:underline cursor-pointer"
                >
                  Inspect full material specification →
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
