import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/reusable/Icon";
import JaguarStripe from "@/components/reusable/JaguarStripe";
import JaguarLogo from "@/components/reusable/JaguarLogo";
import MobileSplitTitle from "@/components/variant/MobileSplitTitle";

export default function VariantSec10({ data }) {
  const { about, codes, compatibility, applications } = data;

  return (
    <>
      {/* ============ div 1: about ============ */}
      <section className="theme-light relative overflow-hidden">
        {/* ===== mobile ===== */}
        <div className="relative md:hidden">
          <div className="px-4 pb-6 pt-6">
            <MobileSplitTitle titlePre={about.titlePre} titleHighlight={about.titleHighlight} stripeVariant="left" />

            <div className="relative -mx-4 mt-4 aspect-[744/310] w-screen overflow-hidden">
              <Image src={about.imageMobile} alt="Jaguar E-Pace and Ingenium engine" fill className="object-cover" sizes="100vw" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(to bottom, var(--theme-light-bg) 0%, transparent 12%, transparent 88%, var(--theme-light-bg) 100%)" }}
              />
            </div>

            <div className="mt-4 space-y-3 text-xs leading-snug text-[#111111]">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="font-bold text-[#111111]">{about.boldParagraph}</p>
            </div>
          </div>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden overflow-hidden md:block">
          {/* photo pushed right so the copy sits on the clean light area, clear of the engine */}
          <div className="absolute inset-y-0 right-0 w-[82%]">
            <Image src={about.image} alt="Jaguar E-Pace and Ingenium engine" fill className="object-cover object-right" sizes="100vw" />
            <div className="absolute inset-0 bg-linear-to-r from-(--theme-light-bg) via-transparent to-transparent" />
          </div>
          <div className="relative mx-auto w-[min(72rem,calc(100%-2rem))] sm:w-[min(72rem,calc(100%-3rem))] lg:w-[min(72rem,calc(100%-4rem))] py-10">
            <JaguarLogo className="absolute right-6 top-6 h-14" />
            <div className="max-w-lg">
              <JaguarStripe className="h-10 w-16 shrink-0" />
              <h2 className="h2 mt-3 uppercase">
                {about.titlePre} <span className="block text-balance text-hero-blue">{about.titleHighlight}</span>
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#111111]">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p className="font-bold text-[#111111]">{about.boldParagraph}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ div 2: engine codes ============ */}
      <section className="theme-dark relative overflow-hidden">
        {/* ===== mobile ===== */}
        <div className="relative px-4 pb-8 pt-6 md:hidden">
          <div className="space-y-6">
            {codes.cards.map((c, n) => (
              <div key={c.codeHighlight} className="relative">
                <div className="flex items-center gap-2">
                  {n === 0 && (
                    <h2 className="h2 min-w-0 flex-1 origin-left scale-y-110 scale-x-90 uppercase">
                      <JaguarStripe className="float-left mr-2 mt-0.5 h-5 w-10 shrink-0" />
                      <span className="text-white">{codes.titlePre}</span>
                      <span className="text-hero-blue">{codes.titleHighlight}</span>
                    </h2>
                  )}
                  <div
                    className={`relative h-24 shrink-0 aspect-[340/272] ${n === 0 ? "" : "mx-auto"}`}
                    style={{ maskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)" }}
                  >
                    <Image src="/variant/engine_dark.webp" alt={c.codeHighlight} fill className="object-contain" sizes="120px" />
                  </div>
                </div>
                <div className="relative mt-3 border-t border-white/10 pt-3">
                  <p className="text-2xl font-extrabold leading-tight">
                    {c.codeHref ? <Link href={c.codeHref}><span className="text-chrome">{c.codeHighlight}</span></Link> : <span className="text-chrome">{c.codeHighlight}</span>}{" "}
                    <span className="text-lg text-white">{c.codeRest}</span>
                  </p>
                  <p className="mt-2 text-xs leading-snug text-white">{c.body}</p>
                  <a
                    href="#quote-form"
                    className="btn-text mt-3 inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-4 py-2.5 uppercase text-white transition-colors hover:bg-white/20"
                  >
                    {c.cta} <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
          <div className="relative mx-auto max-w-6xl">
            <div className="flex flex-col gap-8">
              {codes.cards.map((c, n) => (
                <div key={c.codeHighlight} className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-stretch">
                  {/* left: title sits over the engine portion only */}
                  <div className="flex min-w-0 flex-col pr-8">
                    {n === 0 && (
                      <div className="flex items-start gap-3">
                        <JaguarStripe className="mt-2 h-7 w-11 shrink-0" />
                        <h2 className="h2 origin-left scale-y-110 scale-x-90 whitespace-nowrap uppercase">
                          <span className="text-white">{codes.titlePre}</span>
                          <span className="text-hero-blue">{codes.titleHighlight}</span>
                        </h2>
                      </div>
                    )}
                    <div className="relative mt-3 min-h-64 flex-1">
                      <Image src={codes.image} alt={c.codeHighlight} fill className="object-cover object-left" sizes="520px" />
                    </div>
                  </div>

                  {/* right: plain text, separated by a single line */}
                  <div className={`flex min-w-0 flex-col justify-center gap-3 border-l border-white/15 pb-6 pl-10 ${n === 0 ? "pt-24" : "pt-6"}`}>
                    <p className="text-5xl font-extrabold leading-none">
                      {c.codeHref ? <Link href={c.codeHref}><span className="text-chrome">{c.codeHighlight}</span></Link> : <span className="text-chrome">{c.codeHighlight}</span>}{" "}
                      <span className="text-xl text-white">{c.codeRest}</span>
                    </p>
                    <p className="text-sm leading-relaxed text-white">{c.body}</p>
                    <a
                      href="#quote-form"
                      className="mt-1 inline-flex w-fit items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-white/20"
                    >
                      {c.cta} <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ div 3: compatibility ============ */}
      <section className="theme-light relative overflow-hidden">
        {/* ===== mobile ===== */}
        <div className="relative md:hidden">
          <div className="px-4 pb-6 pt-6">
            <MobileSplitTitle titlePre={compatibility.titlePre} titleHighlight={compatibility.titleHighlight} stripeVariant="left" />

            <div className="relative -mx-4 mt-4 aspect-[724/341] w-screen overflow-hidden">
              <Image src={compatibility.imageMobile} alt="Black Jaguar E-Pace in a workshop" fill className="object-cover" sizes="100vw" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(to bottom, var(--theme-light-bg) 0%, transparent 12%, transparent 88%, var(--theme-light-bg) 100%)" }}
              />
            </div>

            <p className="mt-4 text-xs leading-snug text-[#111111]">{compatibility.intro}</p>

            {compatibility.lead && <p className="mt-4 text-xs font-semibold leading-snug text-[#111111]">{compatibility.lead}</p>}

            <div className="mt-3 grid grid-cols-2 gap-3">
              {compatibility.points.map((p) => (
                <div key={p.text} className="glass-card relative flex flex-col items-center rounded-xl p-3 text-center">
                  <Icon name={p.icon} className="h-9 w-9 shrink-0 text-hero-blue" />
                  <p className="label-text mt-2 leading-snug text-[#111111]">{p.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-snug text-[#111111]">{compatibility.footer}</p>
          </div>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden overflow-hidden md:block">
          <div className="absolute inset-0">
            <Image src={compatibility.image} alt="Black Jaguar E-Pace in a workshop" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-linear-to-r from-(--theme-light-bg) via-transparent to-transparent" />
          </div>
          <div className="relative mx-auto w-[min(72rem,calc(100%-2rem))] sm:w-[min(72rem,calc(100%-3rem))] lg:w-[min(72rem,calc(100%-4rem))] py-10">
            <div className="theme-dark glass-card-dark absolute bottom-8 right-48 flex items-center gap-3 rounded-xl px-5 py-4">
              <Icon name="shield-check" className="h-10 w-10 shrink-0 text-white" />
              <div>
                <p className="text-base font-extrabold text-white">{codes.cards[0]?.codeHighlight}</p>
                <p className="text-xs leading-tight text-white">Confirmed by VIN<br />Match Guaranteed</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <JaguarStripe className="mt-2 h-10 w-16 shrink-0" />
              <h2 className="h2 uppercase">
                <span className="block text-[#111111]">{compatibility.titlePre}</span>
                <span className="block text-hero-blue">{compatibility.titleHighlight}</span>
              </h2>
            </div>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#111111]">{compatibility.intro}</p>

            {compatibility.lead && <p className="mt-4 max-w-lg text-sm font-semibold text-[#111111]">{compatibility.lead}</p>}

            <div className="mt-3 grid max-w-2xl grid-cols-4 gap-4">
              {compatibility.points.map((p) => (
                <div key={p.text} className="glass-card relative flex flex-col items-center rounded-xl p-4 text-center transition-transform hover:-translate-y-0.5">
                  <Icon name={p.icon} className="h-10 w-10 shrink-0 text-hero-blue" />
                  <p className="mt-2 text-xs leading-snug text-[#111111]">{p.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#111111]">{compatibility.footer}</p>
          </div>
        </div>
      </section>

      {/* ============ div 4: applications table ============ */}
      <section className="theme-light relative overflow-hidden">
        {/* ===== mobile ===== */}
        <div className="relative px-4 pb-8 pt-6 md:hidden">
          <MobileSplitTitle titlePre={applications.titlePre} titleHighlight={applications.titleHighlight} stripeVariant="left" />

          <div className="no-scrollbar -mx-4 mt-4 overflow-x-auto px-4">
            <div className="glass-card relative min-w-200 overflow-hidden rounded-lg">
              <div className="pointer-events-none absolute bottom-0 top-0 w-px" style={{ left: "20%", background: "rgba(148,163,184,0.45)" }} aria-hidden="true" />
              <div className="pointer-events-none absolute bottom-0 top-0 w-px" style={{ left: "40%", background: "rgba(148,163,184,0.45)" }} aria-hidden="true" />
              <div className="pointer-events-none absolute bottom-0 top-0 w-px" style={{ left: "60%", background: "rgba(148,163,184,0.45)" }} aria-hidden="true" />
              <div className="pointer-events-none absolute bottom-0 top-0 w-px" style={{ left: "80%", background: "rgba(148,163,184,0.45)" }} aria-hidden="true" />

              <div className="grid grid-cols-5 bg-hero-dark">
                {applications.columns.map((c, i) => (
                  <p
                    key={c}
                    className={`min-w-0 whitespace-nowrap px-4 py-2 text-[10px] font-extrabold uppercase tracking-wide text-white ${i === 0 ? "text-right" : "text-center"}`}
                  >
                    {c}
                  </p>
                ))}
              </div>

              {applications.rows.map((r, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-5 items-center ${i > 0 ? "border-t border-black/10" : ""} ${i % 2 === 1 ? "bg-white/40" : ""}`}
                >
                  <div className="flex min-w-0 items-center justify-between gap-2 px-4 py-1.5">
                    <div className={`relative h-10 w-16 shrink-0 overflow-hidden rounded ${r.image ? "" : "bg-white"}`}>
                      <Image src={r.image ?? applications.image} alt={r.generation} fill className="object-contain" sizes="64px" />
                    </div>
                    <p className="min-w-0 whitespace-nowrap text-xs font-bold text-[#111111]">{r.generation}</p>
                  </div>
                  <p className="min-w-0 px-4 py-1.5 text-center text-xs text-[#111111]">{r.chassis}</p>
                  <p className="min-w-0 px-4 py-1.5 text-center text-xs text-[#111111]">{r.years}</p>
                  <p className="min-w-0 px-4 py-1.5 text-center text-xs font-extrabold text-hero-blue">
                    {r.codeHref ? <Link href={r.codeHref}>{r.engineCode}</Link> : r.engineCode}
                  </p>
                  <div className="flex min-w-0 items-center justify-center gap-1 px-4 py-1.5">
                    <Icon name="fuel" className="h-3.5 w-3.5 shrink-0 text-hero-blue" />
                    <p className="min-w-0 text-xs text-[#111111]">{r.fuel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden px-4 py-6 sm:px-6 md:block lg:px-8">
          <div className="relative mx-auto max-w-6xl">
            <h2 className="h2 uppercase">
              <span className="text-[#111111]">{applications.titlePre}</span>
              <span className="text-hero-blue">{applications.titleHighlight}</span>
            </h2>

            <div className="glass-card relative mt-5 overflow-hidden rounded-lg">
              <div className="pointer-events-none absolute bottom-0 top-0 w-px" style={{ left: "20%", background: "rgba(148,163,184,0.45)" }} aria-hidden="true" />
              <div className="pointer-events-none absolute bottom-0 top-0 w-px" style={{ left: "40%", background: "rgba(148,163,184,0.45)" }} aria-hidden="true" />
              <div className="pointer-events-none absolute bottom-0 top-0 w-px" style={{ left: "60%", background: "rgba(148,163,184,0.45)" }} aria-hidden="true" />
              <div className="pointer-events-none absolute bottom-0 top-0 w-px" style={{ left: "80%", background: "rgba(148,163,184,0.45)" }} aria-hidden="true" />

              <div className="grid grid-cols-5 bg-hero-dark">
                {applications.columns.map((c, i) => (
                  <p
                    key={c}
                    className={`min-w-0 px-6 py-2 text-xs font-extrabold uppercase tracking-wide text-white ${i === 0 ? "text-right" : "text-center"}`}
                  >
                    {c}
                  </p>
                ))}
              </div>

              {applications.rows.map((r, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-5 items-center ${i > 0 ? "border-t border-black/10" : ""} ${i % 2 === 1 ? "bg-white/40" : ""}`}
                >
                  <div className="flex min-w-0 items-center justify-between gap-3 px-6 py-1.5">
                    <div className={`relative h-12 w-28 shrink-0 overflow-hidden rounded ${r.image ? "" : "bg-white"}`}>
                      <Image src={r.image ?? applications.image} alt={r.generation} fill className="object-contain" sizes="112px" />
                    </div>
                    <p className="min-w-0 truncate text-sm font-bold text-[#111111]">{r.generation}</p>
                  </div>
                  <p className="min-w-0 px-6 py-1.5 text-center text-sm text-[#111111]">{r.chassis}</p>
                  <p className="min-w-0 px-6 py-1.5 text-center text-sm text-[#111111]">{r.years}</p>
                  <p className="min-w-0 px-6 py-1.5 text-center text-sm font-extrabold text-hero-blue">
                    {r.codeHref ? <Link href={r.codeHref}>{r.engineCode}</Link> : r.engineCode}
                  </p>
                  <div className="flex min-w-0 items-center justify-center gap-1.5 px-6 py-1.5">
                    <Icon name="fuel" className="h-4 w-4 shrink-0 text-hero-blue" />
                    <p className="min-w-0 text-sm text-[#111111]">{r.fuel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
