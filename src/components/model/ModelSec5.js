import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import JaguarStripe from "@/components/reusable/JaguarStripe";

const compBoldPhrases = ["original", "inspected & rebuilt", "updated OEM parts", "12-month unlimited mileage"];

// silver glass panel for the comparison matrix (light panel on the dark section, as in the reference)
const PANEL_BG = "linear-gradient(180deg, #e9e9eb 0%, #cfd0d3 55%, #b6b7bb 100%)";
const PANEL_GLOW = "0 0 0 1px rgba(255,255,255,0.55), 0 0 34px -4px rgba(255,255,255,0.35), 0 30px 60px -24px rgba(0,0,0,0.9)";

function withCompEmphasis(text) {
  const regex = new RegExp(`(${compBoldPhrases.join("|")})`, "g");
  return text.split(regex).map((part, i) =>
    compBoldPhrases.includes(part) ? (
      <span key={i} className="font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
}

function VsBadge({ className = "" }) {
  return (
    <span
      className={`flex items-center justify-center rounded-full border-2 border-white/70 bg-[#0b0b0c] font-black text-white shadow-[0_0_0_3px_rgba(255,255,255,0.15),0_0_22px_4px_rgba(255,255,255,0.45)] ${className}`}
    >
      VS
    </span>
  );
}

export default function ModelSec5({ data }) {
  const [line1, line2] = data.h2.split("|");
  const [warrantyPre, warrantyPost] = data.paragraphs[1].split("{{warranty}}");
  const pointIcons = ["tech", "wrench", "shield-check"];

  return (
    <section className="theme-dark relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        {/* engine photo band; fades into the section background */}
        <div className="absolute inset-x-0 top-0 h-80">
          <Image src={data.imageMobile} alt="Precision-machined Jaguar engine block" fill className="origin-bottom-left scale-[1.3] object-cover object-right-top" sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-r from-hero-dark via-hero-dark/55 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-hero-dark via-transparent to-transparent" />
        </div>

        <div className="relative px-4 pb-8 pt-8">
          <div className="max-w-[72%]">
            <div className="flex items-center gap-2">
              <JaguarStripe className="h-4 w-8" />
              <p className="label-text uppercase tracking-widest text-white/85">{data.kicker}</p>
            </div>

            <h2 className="h2 origin-left scale-y-110 scale-x-90 mt-3 uppercase">
              <span className="block text-chrome">{line1}</span>
              <span className="block text-chrome-dim">{line2}</span>
            </h2>
            <span className="mt-3 block h-px w-24 bg-linear-to-r from-white/80 to-transparent" />
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Icon name={pointIcons[0]} className="mt-0.5 h-5 w-5 shrink-0 text-white" />
              <p className="text-sm leading-relaxed text-white">{data.paragraphs[0]}</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name={pointIcons[1]} className="mt-0.5 h-5 w-5 shrink-0 text-white" />
              <p className="text-sm leading-relaxed text-white">
                {warrantyPre}
                <span className="font-bold">{data.warrantyHighlight}</span>
                {warrantyPost}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name={pointIcons[2]} className="mt-0.5 h-5 w-5 shrink-0 text-white" />
              <p className="text-sm leading-relaxed text-white">{data.paragraphs[2]}</p>
            </div>
          </div>

          {/* rebuild vs. used engine swap header */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <p className="text-base font-extrabold uppercase text-white">Rebuild</p>
            <VsBadge className="h-12 w-12 shrink-0 text-lg" />
            <p className="text-sm font-extrabold uppercase leading-tight text-white">Used Engine Swap</p>
          </div>

          {/* comparison matrix */}
          <div className="relative mt-5 overflow-hidden rounded-2xl" style={{ background: PANEL_BG, boxShadow: PANEL_GLOW }}>
            <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1fr)] divide-x divide-black/15 border-b border-black/15">
              <div />
              <div className="flex items-center gap-1.5 px-2 py-3">
                <Icon name="shield-check" className="h-5 w-5 shrink-0 text-[#111111]" />
                <p className="label-text font-extrabold uppercase leading-tight tracking-wide text-[#111111]">{data.comparison.ourLabel}</p>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-3">
                <Icon name="warning" className="h-5 w-5 shrink-0 text-[#111111]" />
                <p className="label-text font-extrabold uppercase leading-tight tracking-wide text-[#111111]">{data.comparison.usedLabel}</p>
              </div>
            </div>

            {data.comparison.rows.map((r, i) => (
              <div
                key={r.feature}
                className={`grid grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1fr)] divide-x divide-black/15 ${i > 0 ? "border-t border-black/15" : ""}`}
              >
                <div className="flex min-w-0 items-start gap-1.5 px-2 py-3">
                  <Icon name={r.icon} className="h-4 w-4 shrink-0 text-[#111111]" />
                  <p className="label-text min-w-0 break-words font-bold uppercase leading-tight text-[#111111]">{r.feature}</p>
                </div>
                <p className="label-text min-w-0 break-words px-2 py-3 leading-snug text-[#111111]">{withCompEmphasis(r.ours)}</p>
                <p className="label-text min-w-0 break-words px-2 py-3 leading-snug text-[#111111]">{r.used}</p>
              </div>
            ))}
          </div>

          {/* bottom action bar */}
          <div className="glass-card-dark relative mt-5 flex items-center justify-between gap-3 rounded-xl px-4 py-3.5">
            <div className="flex min-w-0 items-center gap-2.5">
              <Icon name="clock" className="h-7 w-7 shrink-0 text-white" />
              <p className="label-text font-extrabold uppercase leading-tight text-white">{data.cta.text}</p>
            </div>

            <a href={data.cta.href} className="btn-text btn-chrome shrink-0 rounded-lg px-4 py-2.5 uppercase">
              {data.cta.buttonLabel} →
            </a>
          </div>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden overflow-hidden px-4 pb-10 pt-10 sm:px-6 md:block lg:px-8">
        <div className="absolute inset-0">
          <Image src={data.image} alt="Precision-machined Jaguar engine block" fill className="object-cover object-right-top" sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-r from-hero-dark via-hero-dark/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-hero-dark to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-lg">
            <div className="flex items-center gap-2">
              <JaguarStripe className="h-4.5 w-9" />
              <p className="label-text uppercase tracking-widest text-white/85">{data.kicker}</p>
            </div>

            <h2 className="h2 origin-left scale-y-110 scale-x-90 mt-3 uppercase">
              <span className="block text-chrome">{line1}</span>
              <span className="block text-chrome-dim">{line2}</span>
            </h2>
            <span className="mt-3 block h-px w-48 bg-linear-to-r from-white/80 to-transparent" />

            <div className="body-text mt-5 space-y-4 text-white">
              <p>{data.paragraphs[0]}</p>
              <p>
                {warrantyPre}
                <span className="font-bold">{data.warrantyHighlight}</span>
                {warrantyPost}
              </p>
              <p>{data.paragraphs[2]}</p>
            </div>
          </div>

          {/* comparison matrix */}
          <div className="relative mt-10 rounded-2xl" style={{ background: PANEL_BG, boxShadow: PANEL_GLOW }}>
            <div className="overflow-hidden rounded-2xl">
              <div className="grid grid-cols-[64px_1fr_1.4fr_1.4fr]">
                <div />
                <div className="col-span-2 col-start-2 flex items-center gap-2 py-4 pl-3 pr-6">
                  <Icon name="shield-check" className="h-7 w-7 shrink-0 text-[#111111]" />
                  <p className="text-sm font-extrabold uppercase tracking-wide text-[#111111]">{data.comparison.ourLabel}</p>
                </div>
                <div className="flex items-center gap-2 border-l border-black/15 px-6 py-4">
                  <Icon name="warning" className="h-7 w-7 shrink-0 text-[#111111]" />
                  <p className="text-sm font-extrabold uppercase tracking-wide text-[#111111]">{data.comparison.usedLabel}</p>
                </div>
              </div>

              {data.comparison.rows.map((r, i) => (
                <div
                  key={r.feature}
                  className={`grid grid-cols-[64px_1fr_1.4fr_1.4fr] items-center divide-x divide-black/15 border-t border-black/15 ${i % 2 === 1 ? "bg-white/10" : ""}`}
                >
                  <span className="flex h-full items-center justify-center py-4">
                    <Icon name={r.icon} className="h-6 w-6 shrink-0 text-[#111111]" />
                  </span>
                  <p className="py-4 pl-3 pr-6 text-sm font-bold text-[#111111]">{r.feature}</p>
                  <p className="px-6 py-4 text-sm text-[#111111]">{r.ours}</p>
                  <p className="px-6 py-4 text-sm text-[#111111]">{r.used}</p>
                </div>
              ))}
            </div>

            {/* VS badge, centred over the middle ("Our Rebuild") column */}
            <VsBadge className="absolute left-[45%] top-0 z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
