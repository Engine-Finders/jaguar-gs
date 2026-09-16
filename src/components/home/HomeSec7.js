import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import JaguarLogo from "@/components/reusable/JaguarLogo";

export default function HomeSec7({ data }) {
  const mobileModels = data.models.slice(0, 10);

  return (
    <section className="theme-light relative overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-hero-blue/12 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-hero-blue/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        {/* ===== mobile ===== */}
        <div className="md:hidden">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-hero-blue/40" />
            <JaguarLogo className="h-12 w-12 text-[#1a1a1a]" />
            <span className="h-px w-12 bg-hero-blue/40" />
          </div>
          <h2 className="h2 -skew-x-6 scale-y-115 scale-x-92 mb-4 text-center uppercase text-[#1a1a1a]">
            Find Your <span className="text-hero-blue">Jaguar</span> Model
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {mobileModels.map((m) => (
              <a
                key={m.slug}
                href={m.href}
                className="glass-card rounded-2xl p-3 text-center"
              >
                <div className="relative mb-2 h-20 w-full overflow-hidden rounded-md">
                  <Image src={m.image} alt={m.name} fill className="object-contain" sizes="200px" />
                </div>
                <p className="text-xs font-bold text-hero-blue">{m.name}</p>
              </a>
            ))}
          </div>

          <div
            className="glass-card -mx-4 mt-5 flex items-stretch rounded-2xl px-1.5 py-4"
            style={{ boxShadow: "0 0 40px -8px rgba(173,135,92,0.35)" }}
          >
            {data.trustBadges.map((b, i) => (
              <div key={b.label} className="flex min-w-0 flex-1 items-stretch justify-center">
                {i > 0 && <span className="mr-0.5 w-0.5 shrink-0 self-center bg-hero-blue/45" style={{ height: "75%" }} />}
                <div className="flex min-w-0 flex-col items-center gap-1.5 text-center">
                  <Icon name={b.icon} className="h-9 w-9 shrink-0 text-hero-blue" />
                  <p className="label-text w-full font-semibold leading-tight text-[#1a1a1a]" style={{ hyphens: "auto" }}>{b.label}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={data.cta.href}
            className="btn-text mt-4 block rounded-sm border-2 border-hero-blue px-6 py-3 text-center uppercase text-hero-blue"
          >
            {data.cta.label} →
          </a>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden md:block">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-20 bg-hero-blue/40" />
            <JaguarLogo className="h-13 w-13 text-[#1a1a1a]" />
            <span className="h-px w-20 bg-hero-blue/40" />
          </div>
          <h2 className="h2 -skew-x-6 scale-y-115 scale-x-92 mb-6 text-center uppercase text-[#1a1a1a]">
            Find Your <span className="text-hero-blue">Jaguar</span> Model
          </h2>

          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {data.models.map((m) => (
              <a
                key={m.slug}
                href={m.href}
                className="glass-card group rounded-xl p-3 text-center transition-shadow hover:shadow-md"
              >
                <div className="relative mb-2 h-16 w-full overflow-hidden rounded-md">
                  <Image src={m.image} alt={m.name} fill className="object-contain" sizes="120px" />
                </div>
                <p className="text-xs font-bold text-hero-blue">{m.name}</p>
              </a>
            ))}
          </div>

          <div
            className="glass-card mt-6 flex items-stretch rounded-2xl px-6 py-6"
            style={{ boxShadow: "0 0 40px -8px rgba(173,135,92,0.35)" }}
          >
            {data.trustBadges.map((b, i) => (
              <div key={b.label} className="flex min-w-0 flex-1 items-stretch justify-center">
                {i > 0 && (
                  <span className="mr-6 w-0.5 shrink-0 self-center bg-hero-blue/45" style={{ height: "75%" }} />
                )}
                <div className="flex min-w-0 flex-1 items-stretch gap-2 px-1 text-left">
                  <Icon name={b.icon} className="h-full w-8 shrink-0 text-hero-blue" />
                  <p className="flex items-center text-sm font-semibold text-[#1a1a1a]">{b.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href={data.cta.href}
              className="btn-text inline-block rounded-sm border-2 border-hero-blue px-6 py-3 uppercase text-hero-blue transition-colors hover:bg-hero-blue hover:text-white"
            >
              {data.cta.label} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
