import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import JaguarStripe from "@/components/reusable/JaguarStripe";

const GLASS_BORDER = { border: "1px solid rgba(214,218,224,0.35)" };

function Title({ data }) {
  return (
    <>
      <span className="block whitespace-nowrap">
        <span className="text-chrome">JAGUAR {data.titlePre} </span>
        <span className="text-chrome-dim">{data.titleHighlight}</span>
      </span>
      <span className="block text-chrome">{data.titleLine2}</span>
    </>
  );
}

function Stars({ count, className }) {
  return (
    <div className="flex shrink-0 gap-0.5 text-white/85">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" className={`${className} fill-current`} />
      ))}
    </div>
  );
}

export default function HeroSec1({ data }) {
  const trustLabel = (t) => t.label.replace(/^✔\s*/, "");

  return (
    <section className="theme-dark relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        {/* photo fills only the top of the hero and fades into the section colour below */}
        <div className="absolute inset-x-0 top-0 h-[30rem]">
          <Image src={data.imageMobile} alt="Jaguar technician rebuilding an engine block" fill priority className="translate-x-[22%] object-cover object-right-top" sizes="100vw" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.78) 40%, rgba(8,8,8,0.3) 74%, rgba(8,8,8,0.08) 100%), linear-gradient(180deg, rgba(8,8,8,0.45) 0%, rgba(8,8,8,0.05) 22%, rgba(8,8,8,0.25) 48%, rgba(8,8,8,0.85) 74%, rgba(8,8,8,1) 100%)",
            }}
          />
        </div>

        <div className="relative px-4 pb-6 pt-4">
          <div className="flex items-center gap-2">
            <JaguarStripe className="h-4 w-8" />
            <p className="label-text uppercase tracking-widest text-white/85">Jaguar Engine Specialists</p>
          </div>

          <div className="max-w-[88%]">
            <h1 className="h1 origin-left scale-y-110 scale-x-90 mt-2 uppercase">
              <Title data={data} />
            </h1>

            {data.subhead && <p className="mt-2 text-xs leading-snug text-white">{data.subhead}</p>}

            <div className="mt-2 flex items-center gap-2">
              <Stars count={data.rating.stars} className="h-3 w-3" />
              <p className="label-text leading-tight text-white">{data.rating.label}</p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-5 divide-x divide-white/15">
            {data.trustBar.map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-1 px-1 text-center">
                <Icon name={t.icon} className="h-6 w-6 shrink-0 text-white" />
                <p className="text-[8px] font-medium leading-tight text-white">{trustLabel(t)}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-4">
            <div className="shrink-0">
              <p className="text-xs text-white">{data.priceCta.kicker}</p>
              <p className="text-4xl font-extrabold leading-none text-chrome">{data.priceCta.label}</p>
            </div>
            <span className="h-12 w-px shrink-0 bg-white/20" aria-hidden="true" />
            <a href={data.priceCta.href} className="btn-chrome flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-3.5 text-[11px] font-bold">
              {data.priceCta.buttonLabel}
            </a>
          </div>

          <a
            href={data.phoneCta.href}
            className="glass-luminous card-glare relative mt-2.5 flex items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-white"
            style={GLASS_BORDER}
          >
            <Icon name={data.phoneCta.icon} className="h-4 w-4 shrink-0 text-white" />
            {data.phoneCta.label}: {data.phoneCta.phone}
          </a>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden overflow-hidden px-4 py-8 sm:px-6 md:block lg:px-8 lg:py-10" style={{ backgroundColor: "#030303" }}>
        <div className="absolute inset-0">
          <Image src={data.image} alt="Jaguar technician rebuilding an engine block" fill priority className="object-cover object-right" sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <JaguarStripe className="h-4.5 w-9" />
              <p className="label-text uppercase tracking-widest text-white/85">Jaguar Engine Specialists</p>
            </div>

            <h1 className="h1 origin-left scale-y-110 scale-x-90 mt-3 uppercase">
              <Title data={data} />
            </h1>

            {data.subhead && <p className="mt-3 max-w-md text-sm leading-relaxed text-white lg:text-base">{data.subhead}</p>}

            <span className="mt-4 block h-px w-full max-w-lg bg-linear-to-r from-white/60 via-white/20 to-transparent" aria-hidden="true" />

            <div className="mt-4 flex items-center gap-3">
              <Stars count={data.rating.stars} className="h-4 w-4" />
              <p className="whitespace-nowrap text-sm font-medium text-white">{data.rating.label}</p>
            </div>

            <div className="mt-5 grid max-w-xl grid-cols-5 divide-x divide-white/15">
              {data.trustBar.map((t) => (
                <div key={t.label} className="flex min-w-0 flex-col items-center gap-2 px-3 text-center">
                  <Icon name={t.icon} className="h-9 w-9 shrink-0 text-white" />
                  <p className="min-w-0 text-[11px] leading-snug text-white">{trustLabel(t)}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-stretch gap-5">
              <div className="flex shrink-0 flex-col justify-center">
                <p className="text-lg text-white">{data.priceCta.kicker}</p>
                <p className="text-6xl font-extrabold leading-none text-chrome">{data.priceCta.label}</p>
              </div>
              <span className="w-px shrink-0 bg-white/20" aria-hidden="true" />
              <div className="flex flex-col justify-center gap-2.5">
                <a href={data.priceCta.href} className="btn-chrome flex items-center justify-center gap-2 whitespace-nowrap rounded-lg px-8 py-3.5 text-sm font-bold transition-transform hover:scale-[1.02]">
                  {data.priceCta.buttonLabel}
                </a>
                <a
                  href={data.phoneCta.href}
                  className="glass-luminous card-glare relative flex items-center gap-2.5 whitespace-nowrap rounded-lg px-8 py-3 text-sm font-semibold text-white"
                  style={GLASS_BORDER}
                >
                  <Icon name={data.phoneCta.icon} className="h-4 w-4 shrink-0 text-white" />
                  {data.phoneCta.label}: {data.phoneCta.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
