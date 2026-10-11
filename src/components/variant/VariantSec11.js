import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/reusable/Icon";
import JaguarStripe from "@/components/reusable/JaguarStripe";
import MobileSplitTitle from "@/components/variant/MobileSplitTitle";

export default function VariantSec11({ data }) {
  return (
    <section className="theme-dark relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        <div className="relative px-4 pb-6 pt-4">
          <MobileSplitTitle titlePre={data.titlePre} titleHighlight={data.titleHighlight} baseColorClass="text-white" />
          <p className="mt-2 text-xs leading-snug text-white">{data.description}</p>

          <div className="no-scrollbar -mx-4 mt-5 overflow-x-auto px-4">
            <div className="glass-card-dark min-w-130 overflow-hidden rounded-xl" style={{ background: "rgba(10,10,12,0.96)" }}>
              <div className="flex border-b border-white/10">
                {data.columns.map((c) => (
                  <div key={c.label} className="flex min-w-0 flex-1 items-center justify-center gap-1.5 px-3 py-2.5">
                    <Icon name={c.icon} className="h-4.5 w-4.5 shrink-0 text-hero-blue" />
                    <p className="label-text whitespace-nowrap font-extrabold uppercase tracking-wide text-hero-blue">{c.label}</p>
                  </div>
                ))}
              </div>

              <div className="relative divide-y divide-white/10">
                <div className="pointer-events-none absolute inset-0 z-10 flex" aria-hidden="true">
                  <span className="min-w-0 flex-1 border-r border-white/10" />
                  <span className="min-w-0 flex-1 border-r border-white/10" />
                  <span className="min-w-0 flex-1 border-r border-white/10" />
                  <span className="min-w-0 flex-1 border-r border-white/10" />
                  <span className="min-w-0 flex-1" />
                </div>
                {data.rows.map((r) => (
                  <div key={r.year} className="group relative flex transition-colors hover:bg-hero-blue/10">
                    <span
                      className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 origin-left scale-y-0 bg-hero-blue transition-transform group-hover:scale-y-100"
                      aria-hidden="true"
                    />
                    <p className="min-w-0 flex-1 px-3 py-2.5 text-center text-xs font-extrabold text-white">{r.year}</p>
                    <p className="min-w-0 flex-1 px-3 py-2.5 text-center text-xs leading-tight text-white">{r.generation}</p>
                    <p className="min-w-0 flex-1 px-3 py-2.5 text-center text-xs font-bold text-hero-blue">
                      {r.codeHref ? <Link href={r.codeHref} >{r.engineCode}</Link> : r.engineCode}
                    </p>
                    <p className="min-w-0 flex-1 px-3 py-2.5 text-center text-xs text-white">{r.fuel}</p>
                    <p className="min-w-0 flex-1 px-3 py-2.5 text-center text-xs text-white">{r.service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card-dark mt-4 rounded-xl px-4 py-3.5">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 text-xs shrink-0 items-center justify-center rounded-full border-2 border-white/70 font-bold text-white">i</span>
              <div className="min-w-0">
                <p className="text-sm font-extrabold text-white">{data.coverNote.title}</p>
                <ul className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1">
                  {data.coverNote.items.map((it) => (
                    <li key={it} className="flex items-center gap-1.5 text-xs text-white">
                      <Icon name="check" className="h-3.5 w-3.5 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-2.5 text-xs leading-snug text-white">{data.coverNote.footer}</p>
          </div>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden overflow-hidden md:block">
        <div className="absolute inset-0">
          <Image src={data.image} alt="Jaguar E-Pace and Ingenium engine" fill className="object-cover object-right" sizes="100vw" />
        </div>

        <div className="relative mx-auto w-[min(72rem,calc(100%-2rem))] sm:w-[min(72rem,calc(100%-3rem))] lg:w-[min(72rem,calc(100%-4rem))] py-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <JaguarStripe className="h-10 w-16 shrink-0" />
              <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase" style={{ whiteSpace: "nowrap" }}>
                <span className="text-white">{data.titlePre}</span>
                <span className="text-hero-blue">{data.titleHighlight}</span>
              </h2>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white">{data.description}</p>
          </div>

          <div
            className="glass-card-dark mt-6 max-w-3xl overflow-hidden rounded-2xl"
            style={{ background: "rgba(10,10,12,0.96)", boxShadow: "0 25px 60px -30px rgba(150,154,160,0.5)" }}
          >
            <div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,0.9fr)_minmax(0,1.6fr)] border-b border-white/10">
              {data.columns.map((c) => (
                <div key={c.label} className="flex items-center gap-2 px-5 py-3.5">
                  <Icon name={c.icon} className="h-5 w-5 shrink-0 text-hero-blue" />
                  <p className="text-xs font-extrabold uppercase tracking-wide text-hero-blue">{c.label}</p>
                </div>
              ))}
            </div>

            <div className="relative">
              <div
                className="pointer-events-none absolute inset-0 z-10 grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,0.9fr)_minmax(0,1.6fr)]"
                aria-hidden="true"
              >
                <span className="border-r border-white/10" />
                <span className="border-r border-white/10" />
                <span className="border-r border-white/10" />
                <span className="border-r border-white/10" />
                <span />
              </div>
              {data.rows.map((r, i) => (
                <div
                  key={r.year}
                  className={`group relative grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,0.9fr)_minmax(0,1.6fr)] items-center transition-colors hover:bg-hero-blue/10 ${i > 0 ? "border-t border-white/10" : ""}`}
                >
                  <span
                    className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 origin-left scale-y-0 bg-hero-blue transition-transform group-hover:scale-y-100"
                    aria-hidden="true"
                  />
                  <p className="px-5 py-3 text-sm font-extrabold text-white">{r.year}</p>
                  <p className="px-5 py-3 text-sm text-white">{r.generation}</p>
                  <p className="px-5 py-3 text-sm font-bold text-hero-blue">
                    {r.codeHref ? <Link href={r.codeHref} >{r.engineCode}</Link> : r.engineCode}
                  </p>
                  <p className="px-5 py-3 text-sm text-white">{r.fuel}</p>
                  <p className="px-5 py-3 text-sm text-white">{r.service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card-dark mt-5 max-w-3xl rounded-xl px-6 py-4">
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 text-sm shrink-0 items-center justify-center rounded-full border-2 border-white/70 font-bold text-white">i</span>
              <div className="min-w-0">
                <p className="text-lg font-extrabold text-white">{data.coverNote.title}</p>
                <ul className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1">
                  {data.coverNote.items.map((it) => (
                    <li key={it} className="flex items-center gap-1.5 text-sm text-white">
                      <Icon name="check" className="h-3.5 w-3.5 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-2.5 text-sm leading-snug text-white">{data.coverNote.footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
