import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import EngineExplorerForm from "./EngineExplorerForm";
import explorer from "@/data/shared/engineExplorer.json";

export default function HomeSec13({ data }) {
  const [line1, line2] = data.h2.split("|");

  return (
    <section className="theme-light relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative px-4 py-7 md:hidden">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h2 className="h2 uppercase">
              <span className="block text-[#1a1a1a]">{line1}</span>
              <span className="block text-chrome-ink">{line2}</span>
            </h2>

            <p className="mt-2 text-xs text-[#1a1a1a]">{data.description}</p>
          </div>

          <div className="relative h-40 w-40 shrink-0 overflow-hidden">
            <Image
              src={data.image}
              alt="Jaguar engine"
              fill
              className="scale-[1.35] object-cover"
              sizes="200px"
            />
          </div>
        </div>

        <EngineExplorerForm fields={data.fields} explorer={explorer} ctaButton={data.ctaButton} mobile />

        <div className="glass-card mt-5 grid grid-cols-2 gap-x-4 gap-y-4 rounded-2xl p-4">
          {data.trustBadges.map((b, i) => (
            <div key={b.label} className="relative flex items-center gap-2.5">
              {i % 2 === 1 && <span className="absolute -left-2 top-0 h-full w-0.5 bg-black/20" />}
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black/5">
                <Icon name={b.icon} className="h-6 w-6 text-hero-blue" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-extrabold uppercase leading-tight text-[#111111]">{b.value}</p>
                <p className="label-text uppercase leading-tight text-[#1a1a1a]">{b.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden overflow-hidden px-4 py-6 sm:px-6 md:block lg:px-8">
        <div className="pointer-events-none absolute -right-16 top-0 flex h-full w-48 skew-x-[-24deg] justify-end gap-3 overflow-hidden" aria-hidden="true">
          <span className="h-full w-6 bg-linear-to-b from-[#f4f4f4] to-[#c9c9c9]" />
          <span className="h-full w-9 bg-linear-to-b from-[#9a9a9a] to-[#3a3a3a]" />
          <span className="h-full w-5 bg-linear-to-b from-[#d6d6d6] to-[#8a8a8a]" />
          <span className="h-full w-12 bg-linear-to-b from-[#2a2a2a] to-[#0a0a0a]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="h2 uppercase">
                <span className="block text-[#1a1a1a]">{line1}</span>
                <span className="block text-chrome-ink">{line2}</span>
              </h2>
              <p className="mt-2 max-w-lg text-sm text-[#1a1a1a]">{data.description}</p>

              <EngineExplorerForm fields={data.fields} explorer={explorer} ctaButton={data.ctaButton} />
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden">
              <Image src={data.image} alt="Jaguar engine block" fill className="scale-[1.35] object-cover" sizes="480px" />
            </div>
          </div>

          <div className="glass-card mt-5 flex items-center justify-between gap-6 rounded-xl px-6 py-4" style={{ background: "rgba(255,255,255,0.94)" }}>
            {data.trustBadges.map((b, i) => (
              <div key={b.label} className="flex flex-1 items-center gap-3">
                {i > 0 && <span className="mr-2 h-14 w-0.5 shrink-0 bg-black/25" />}
                <Icon name={b.icon} className="h-9 w-9 shrink-0 text-hero-blue" />
                <div className="min-w-0">
                  <p className="whitespace-nowrap text-sm font-bold uppercase text-[#1a1a1a]">{b.value}</p>
                  <p className="whitespace-nowrap text-xs uppercase text-[#1a1a1a]">{b.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
