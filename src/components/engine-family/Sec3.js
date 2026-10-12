import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/reusable/Icon";
import JaguarStripe from "@/components/reusable/JaguarStripe";
import MobileSplitTitle from "@/components/variant/MobileSplitTitle";

const GRID_COLS = "grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.9fr)_minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1.1fr)]";

export default function Sec3({ data }) {
  return (
    <section className="theme-dark relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        <div className="relative px-4 py-7">
          <MobileSplitTitle titlePre={data.titlePre} titleHighlight={data.titleHighlight} className="text-xl" baseColorClass="text-white" stripeVariant="left" />

          <div className="no-scrollbar -mx-4 mt-5 overflow-x-auto px-4">
            <div
              className="relative min-w-[780px] overflow-hidden rounded-xl"
              style={{ background: "rgba(13,13,13,0.96)", border: "1px solid rgba(150,154,160,0.35)" }}
            >
              <div className={`grid ${GRID_COLS} divide-x divide-white/10 border-b border-white/10`}>
                {data.columns.map((c) => (
                  <div key={c.label} className="flex min-w-0 items-center justify-center px-3 py-2.5">
                    <p className="whitespace-nowrap text-[10px] font-extrabold uppercase tracking-wide text-white">{c.label}</p>
                  </div>
                ))}
              </div>

              <div className="thin-scrollbar max-h-72 overflow-y-auto">
                {data.rows.map((r, i) => (
                  <div
                    key={`${r.model}-${r.variant}-${i}`}
                    className={`group relative grid ${GRID_COLS} items-center transition-colors hover:bg-hero-blue/10 ${i > 0 ? "border-t border-white/10" : ""}`}
                  >
                    <span
                      className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 origin-left scale-y-0 bg-hero-blue transition-transform group-hover:scale-y-100"
                      aria-hidden="true"
                    />
                    <p className="flex min-w-0 items-center gap-1.5 px-3 py-2.5 text-xs font-extrabold text-white">
                      <span className="min-w-0 whitespace-nowrap">
                        {r.modelHref ? <Link href={r.modelHref}>{r.model}</Link> : r.model}
                      </span>
                    </p>
                    <p className="min-w-0 px-3 py-2.5 text-center text-xs text-white">
                      {r.variantHref ? <Link href={r.variantHref}>{r.variant}</Link> : r.variant}
                    </p>
                    <p className="min-w-0 px-3 py-2.5 text-center text-xs text-white">{r.generation}</p>
                    <p className="min-w-0 px-3 py-2.5 text-center text-xs text-white">{r.chassis}</p>
                    <p className="min-w-0 px-3 py-2.5 text-center text-xs text-white">{r.years}</p>
                    <p className="min-w-0 px-3 py-2.5 text-center text-xs text-white">{r.powertrain}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card-dark mt-4 rounded-xl bg-[#0d0d0d]/90! px-4 py-3.5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/5">
                <Icon name={data.prompt.icon} className="h-5 w-5 text-white" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-white">{data.prompt.titlePre}</p>
                <p className="text-xs text-white">{data.prompt.subtext}</p>
              </div>
            </div>
            <a
              href={data.prompt.href}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/5 px-4 py-3 text-xs font-bold uppercase text-white transition-colors hover:bg-white/15"
            >
              {data.prompt.buttonLabel}
            </a>
          </div>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden overflow-hidden md:block">
        <div className="absolute inset-0">
          <Image src={data.image} alt="Jaguar workshop with an engine and a classic Jaguar saloon" fill className="object-cover object-right" sizes="100vw" />
        </div>

        <div className="relative mx-auto w-[min(72rem,calc(100%-2rem))] sm:w-[min(72rem,calc(100%-3rem))] lg:w-[min(72rem,calc(100%-4rem))] py-10">
          <div>
            <JaguarStripe className="h-7 w-14 shrink-0" />
            <h2 className="h2 origin-left scale-y-110 scale-x-90 mt-3 uppercase">
              <span className="block text-white">{data.titlePre}</span>
              <span className="block text-hero-blue">{data.titleHighlight}</span>
            </h2>
          </div>

          <div
            className="mt-6 max-w-[58%] overflow-hidden rounded-2xl"
            style={{
              background: "rgba(13,13,13,0.82)",
              border: "1px solid rgba(214,218,224,0.25)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 25px 60px -30px rgba(0,0,0,0.8)",
            }}
          >
            <div className="relative">
              <div className={`grid ${GRID_COLS} border-b border-white/10`}>
                {data.columns.map((c) => (
                  <div key={c.label} className="flex items-center justify-center px-2 py-5 text-center">
                    <p className="text-sm font-medium leading-tight text-white">{c.label}</p>
                  </div>
                ))}
              </div>

              {/* body: tall panel, full-height column dividers like the reference */}
              <div className="relative min-h-80">
                <div className={`pointer-events-none absolute inset-0 grid ${GRID_COLS}`} aria-hidden="true">
                  {data.columns.map((c, i) => (
                    <span key={c.label} className={i > 0 ? "border-l border-white/10" : ""} />
                  ))}
                </div>
                {data.rows.map((r, i) => (
                  <div
                    key={`${r.model}-${r.variant}-${i}`}
                    className={`group relative grid ${GRID_COLS} items-center text-center transition-colors hover:bg-white/5 ${i > 0 ? "border-t border-white/10" : ""}`}
                  >
                    <p className="min-w-0 px-2 py-4 text-sm text-white">{r.modelHref ? <Link href={r.modelHref}>{r.model}</Link> : r.model}</p>
                    <p className="min-w-0 px-2 py-4 text-sm text-white">{r.variantHref ? <Link href={r.variantHref}>{r.variant}</Link> : r.variant}</p>
                    <p className="min-w-0 px-2 py-4 text-sm text-white">{r.generation}</p>
                    <p className="min-w-0 px-2 py-4 text-sm text-white">{r.chassis}</p>
                    <p className="min-w-0 px-2 py-4 text-sm text-white">{r.years}</p>
                    <p className="min-w-0 px-2 py-4 text-sm text-white">{r.powertrain}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card-dark mt-5 flex items-center bg-[#0d0d0d]/90! justify-between gap-4 rounded-2xl px-6 py-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/5">
                <Icon name={data.prompt.icon} className="h-6 w-6 text-white" />
              </span>
              <div className="min-w-0">
                <p className="text-base font-bold text-white">{data.prompt.titlePre}</p>
                <p className="text-sm text-white">{data.prompt.subtext}</p>
              </div>
            </div>
            <a
              href={data.prompt.href}
              className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border border-white/40 bg-white/5 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15"
            >
              {data.prompt.buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
