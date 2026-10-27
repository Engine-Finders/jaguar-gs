import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import JaguarStripe from "@/components/reusable/JaguarStripe";
import QuoteLink from "@/components/shared/QuoteLink";

function SpecTable({ rows, compact = false }) {
  // two real columns (label | value) in every row, so the vertical separator is the value cell's left border
  // and always lines up with the label column instead of floating at a guessed percentage
  return (
    <div className="glass-card divide-y divide-black/10 rounded-2xl px-1">
      {rows.map((r) => (
        <div key={r.label} className={`grid ${compact ? "grid-cols-[minmax(0,44%)_minmax(0,1fr)]" : "grid-cols-[minmax(0,36%)_minmax(0,1fr)]"}`}>
          <div className={`flex min-w-0 items-center ${compact ? "gap-2 px-3 py-2.5" : "gap-4 px-5 py-3"}`}>
            <Icon name={r.icon} className={`shrink-0 text-[#111111] ${compact ? "h-4 w-4" : "h-5 w-5"}`} />
            <p className={`min-w-0 font-bold text-[#111111] ${compact ? "text-xs" : "text-sm"}`}>{r.label}</p>
          </div>
          <p className={`flex min-w-0 items-center border-l border-black/10 leading-snug text-[#111111] ${compact ? "px-3 py-2.5 text-xs" : "px-5 py-3 text-sm"}`}>{r.value}</p>
        </div>
      ))}
    </div>
  );
}

function PromptCard({ prompt, compact = false }) {
  return (
    <div className={`glass-card flex items-center gap-3 rounded-2xl ${compact ? "flex-wrap p-3" : "p-4"}`}>
      <span className={`flex shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm ${compact ? "h-9 w-9" : "h-12 w-12"}`}>
        <Icon name={prompt.icon} className={compact ? "h-4 w-4" : "h-6 w-6"} />
      </span>
      <div className="min-w-0 flex-1">
        <p className={`font-bold text-[#111111] ${compact ? "text-xs" : "text-base"}`}>{prompt.titlePre}</p>
        <p className={`text-[#111111] ${compact ? "text-[11px]" : "text-sm"}`}>{prompt.subtext}</p>
      </div>
      <QuoteLink
        href={prompt.href}
        className={`flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-linear-to-b from-[#2a2a2c] to-[#0d0d0d] font-bold text-white shadow-lg transition-transform hover:scale-[1.02] ${
          compact ? "w-full px-4 py-2.5 text-xs" : "px-6 py-3 text-sm"
        }`}
      >
        {prompt.buttonLabel}
      </QuoteLink>
    </div>
  );
}

export default function Sec2({ data }) {
  const { specs, price } = data;

  return (
    <section className="theme-light relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        {/* specifications */}
        <div className="relative" style={{ backgroundColor: "#e1e5e6" }}>
          <div className="relative h-44 w-full overflow-hidden">
            <Image src={specs.imageMobile} alt="Jaguar engine on a workshop bench" fill className="object-cover object-right" sizes="100vw" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#e1e5e6] to-transparent" />
          </div>

          <div className="relative px-4 pb-7">
            <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
              <JaguarStripe className="float-left mr-2 mt-0.5 h-6 w-12 shrink-0" />
              <span className="text-[#111111]">{specs.titlePre} </span>
              <span className="text-hero-blue">{specs.titleHighlight}</span>
            </h2>

            <div className="mt-4">
              <SpecTable rows={specs.rows} compact />
            </div>
            <div className="mt-3">
              <PromptCard prompt={specs.prompt} compact />
            </div>
          </div>
        </div>

        {/* rebuild price */}
        <div className="relative bg-white">
          <div className="relative px-4 pt-7">
            <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
              <JaguarStripe className="float-left mr-2 mt-0.5 h-6 w-12 shrink-0" />
              <span className="text-[#111111]">{price.titlePre} </span>
              <span className="text-hero-blue">{price.titleHighlight}</span>
            </h2>
          </div>

          <div className="relative mt-4 aspect-[642/380] w-full overflow-hidden">
            <Image src={price.imageMobile} alt="Jaguar engine components" fill className="object-cover" sizes="100vw" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-linear-to-b from-white to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-white to-transparent" />
          </div>

          <div className="relative px-4 pb-7">
            <p className="flex items-center gap-3 text-sm font-semibold text-[#111111]">
              {price.startingFromLabel} <span className="h-px w-10 bg-[#111111]/40" />
            </p>
            <p className="text-5xl font-extrabold leading-tight text-[#111111]">{price.startingFromPrice}</p>
            <p className="mt-2 text-xs leading-snug text-[#111111]">{price.body}</p>

            <QuoteLink
              href={price.cta.href}
              className="mt-3 flex w-fit items-center justify-center gap-2 rounded-lg bg-linear-to-b from-[#2a2a2c] to-[#0d0d0d] px-5 py-3 text-xs font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
            >
              {price.cta.label}
            </QuoteLink>
          </div>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden md:block">
        {/* specifications: engine photo full-bleed on the right, copy and table on its light left */}
        <div className="relative overflow-hidden" style={{ backgroundColor: "#e1e5e6" }}>
          <div className="absolute inset-0">
            <Image src={specs.image} alt="Jaguar engine on a workshop bench" fill className="object-cover object-right" sizes="100vw" />
            {/* soft, uneven white wash beneath the title and table: overlapping radial blobs that fade to nothing, so no edge shows */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 52% 46% at 34% 14%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 45%, rgba(255,255,255,0) 100%), radial-gradient(ellipse 40% 58% at 26% 62%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse 30% 40% at 52% 42%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%)",
              }}
              aria-hidden="true"
            />
          </div>

          <div className="relative mx-auto w-[min(72rem,calc(100%-2rem))] py-8 sm:w-[min(72rem,calc(100%-3rem))] lg:w-[min(72rem,calc(100%-4rem))]">
            <div className="max-w-[60%]">
              <div className="flex items-center gap-3">
                <JaguarStripe className="h-8 w-14 shrink-0" />
                <h2 className="h2 origin-left scale-y-110 scale-x-90 whitespace-nowrap uppercase">
                  <span className="text-[#111111]">{specs.titlePre} </span>
                  <span className="text-hero-blue">{specs.titleHighlight}</span>
                </h2>
              </div>

              <div className="mt-5">
                <SpecTable rows={specs.rows} />
              </div>
              <div className="mt-4">
                <PromptCard prompt={specs.prompt} />
              </div>
            </div>
          </div>
        </div>

        {/* rebuild price: plain white band, parts photo on its right */}
        <div className="relative overflow-hidden bg-white">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{ maskImage: "linear-gradient(to right, transparent 36%, black 52%)", WebkitMaskImage: "linear-gradient(to right, transparent 36%, black 52%)" }}
            >
              <Image src={price.image} alt="Jaguar engine block, crankshaft and connecting rods" fill className="object-contain object-right" sizes="100vw" />
            </div>
          </div>

          <div className="relative mx-auto w-[min(72rem,calc(100%-2rem))] py-10 sm:w-[min(72rem,calc(100%-3rem))] lg:w-[min(72rem,calc(100%-4rem))]">
            <div className="max-w-[40%]">
              <div className="flex items-start gap-3">
                <JaguarStripe className="h-8 w-14 shrink-0" />
                <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
                  <span className="block whitespace-nowrap text-[#111111]">{price.titlePre} Engine</span>
                  <span className="block whitespace-nowrap text-hero-blue">{price.titleHighlight.replace(/^Engine\s+/, "")}</span>
                </h2>
              </div>

              <p className="mt-5 flex items-center gap-3 text-base font-semibold text-[#111111]">
                {price.startingFromLabel} <span className="h-px w-14 bg-[#111111]/40" />
              </p>
              <p className="text-8xl font-extrabold leading-none text-[#111111]">{price.startingFromPrice}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#111111]">{price.body}</p>

              <QuoteLink
                href={price.cta.href}
                className="mt-5 flex w-fit items-center justify-center gap-2 rounded-lg bg-linear-to-b from-[#2a2a2c] to-[#0d0d0d] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
              >
                {price.cta.label}
              </QuoteLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
