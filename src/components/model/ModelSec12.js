import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/reusable/Icon";
import JaguarStripe from "@/components/reusable/JaguarStripe";

const mobileCardIndices = [0, 1, 2, 3, 4, 5, 6, 9];

function JobCard({ c, data, sizes }) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.4)]">
      <div className="relative aspect-[6/5]">
        <Image src={c.image || data.image} alt={`${c.model} — ${c.tag}`} fill className="object-cover" sizes={sizes} />
      </div>
      <div className="px-3 py-2.5">
        <p className="truncate text-sm font-extrabold text-[#111111]">{c.href ? <Link href={c.href}>{c.model}</Link> : c.model}</p>
        <p className="mt-1 flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-[#333333]">
          <Icon name={c.icon} className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{c.tag}</span>
        </p>
      </div>
    </div>
  );
}

export default function ModelSec12({ data }) {
  const mobileCards = mobileCardIndices.map((i) => data.cards[i]).filter(Boolean);

  return (
    <section className="theme-light relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        <div
          className="pointer-events-none absolute right-0 top-0 h-72 w-72"
          style={{ background: "radial-gradient(ellipse at top right, rgba(150,154,160,0.35) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative px-4 py-10">
          <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
            <span className="block text-[#111111]">{data.headlinePre}</span>
            <span className="block text-hero-blue">{data.headlineHighlight}</span>
          </h2>
          <JaguarStripe className="mt-3 h-3 w-6" />
          <p className="body-text mt-3 text-[#111111]">{data.description}</p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {mobileCards.map((c, i) => (
              <JobCard key={`${c.model}-${i}`} c={c} data={data} sizes="50vw" />
            ))}
          </div>

          <div className="mt-5 flex justify-center">
            <button className="btn-text flex items-center gap-2 rounded-lg border-2 border-hero-blue bg-white/70 px-5 py-2.5 uppercase text-hero-blue backdrop-blur-md transition hover:bg-hero-blue hover:text-white">
              {data.viewMoreLabel} <span aria-hidden>→</span>
            </button>
          </div>

          <div className="relative mt-5 flex items-center gap-3 overflow-hidden rounded-xl border border-black/5 bg-white/70 px-4 py-3.5">
            <Icon name="camera" className="h-6 w-6 shrink-0 text-[#111111]" />
            <p className="relative z-10 text-xs text-[#111111]">{data.footerNote}</p>

            <div
              className="pointer-events-none absolute bottom-0 right-0 z-0 flex gap-1"
              style={{ height: "40px", transform: "skewX(-25deg)", transformOrigin: "bottom right" }}
              aria-hidden="true"
            >
              <span className="chrome-bar-a h-full w-3" />
              <span className="chrome-bar-b h-full w-3" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
        <div
          className="pointer-events-none absolute right-0 top-0 h-96 w-xl"
          style={{ background: "radial-gradient(ellipse at top right, rgba(150,154,160,0.4) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl">
          {/* header */}
          <div>
            <div className="max-w-3xl">
              <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
                <span className="block whitespace-nowrap text-[#111111]">{data.headlinePre}</span>
                <span className="block whitespace-nowrap text-hero-blue">{data.headlineHighlight}</span>
              </h2>
              <p className="body-text mt-3 text-[#111111]">{data.description}</p>
            </div>

          </div>

          {/* 6x2 card grid */}
          <div className="mt-6 grid grid-cols-6 gap-4">
            {data.cards.map((c, i) => (
              <JobCard key={`${c.model}-${i}`} c={c} data={data} sizes="16vw" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
