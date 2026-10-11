import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import JaguarLogo from "@/components/reusable/JaguarLogo";
import RegLookupForm from "@/components/reusable/RegLookupForm";

const BOLD_PHRASE = "12-month unlimited-mileage warranty";

function Subhead({ text }) {
  const i = text.indexOf(BOLD_PHRASE);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <span className="font-bold">{BOLD_PHRASE}</span>
      {text.slice(i + BOLD_PHRASE.length)}
    </>
  );
}

function Stars({ count, className }) {
  return (
    <div className="flex shrink-0 gap-0.5 text-white/80">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" className={`${className} fill-current`} />
      ))}
    </div>
  );
}

const GLASS_BORDER = { border: "1px solid rgba(214,218,224,0.35)" };

export default function VariantHeroSec1({ data }) {
  const [line1, line2, line3] = data.h1.split("|");
  const line2Mobile = line2.replace(/\s*—\s*$/, "");
  const line3Mobile = `— ${line3}`;
  const trustLabel = (t) => t.label.replace(/^✔\s*/, "");

  return (
    <section className="theme-dark relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        {/* photo only fills the top of the hero so it isn't zoomed in; it fades into the section colour below */}
        <div className="absolute inset-x-0 top-0 h-[30rem]">
          <Image src={data.imageMobile} alt="Jaguar technician rebuilding an engine block" fill priority className="translate-x-[22%] object-cover object-right-top" sizes="100vw" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.78) 40%, rgba(13,13,13,0.3) 74%, rgba(13,13,13,0.08) 100%), linear-gradient(180deg, rgba(13,13,13,0.45) 0%, rgba(13,13,13,0.05) 22%, rgba(13,13,13,0.25) 48%, rgba(13,13,13,0.85) 74%, rgba(13,13,13,1) 100%)",
            }}
          />
        </div>

        <div className="relative px-4 pb-4 pt-4">
          <JaguarLogo className="-ml-1.5 h-9" />

          <div className="max-w-[88%]">
            <h1 className="h1 origin-left scale-y-110 scale-x-90 mt-2 uppercase">
              <span className="block whitespace-nowrap text-chrome">{line1}</span>
              <span className="block text-chrome-dim">{line2Mobile}</span>
              <span className="block text-chrome">{line3Mobile}</span>
            </h1>

            <p className="mt-1.5 text-xs leading-snug text-white">
              <Subhead text={data.subhead} />
            </p>

            <div className="glass-card-dark mt-2 flex items-center gap-2 rounded-lg px-3 py-1.5">
              <Stars count={data.rating.stars} className="h-3 w-3" />
              <p className="label-text leading-tight text-white">{data.rating.label}</p>
            </div>
          </div>

          {/* pricing + direct contact, side by side */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href={data.priceCta.href}
              className="glass-luminous card-glare relative flex min-w-0 flex-col justify-center gap-0.5 rounded-xl px-3 py-3 transition-transform hover:scale-[1.02]"
              style={GLASS_BORDER}
            >
              <p className="text-[10px] leading-tight font-medium text-white">{data.priceCta.kicker}</p>
              <p className="text-[11px] leading-tight font-extrabold text-white">{data.priceCta.label}</p>
            </a>

            <a
              href={data.phoneCta.href}
              className="glass-luminous card-glare relative flex min-w-0 items-center gap-2.5 overflow-hidden rounded-xl px-3 py-3 transition-transform hover:scale-[1.02]"
              style={GLASS_BORDER}
            >
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/60">
                <Icon name={data.phoneCta.icon} className="h-4.5 w-4.5 text-white" />
              </span>
              <div className="relative min-w-0">
                <p className="text-[10px] leading-tight font-medium text-white">{data.phoneCta.label}</p>
                <p className="text-[13px] leading-tight font-extrabold text-white">{data.phoneCta.phone}</p>
              </div>
            </a>
          </div>

          {/* five-column feature breakdown */}
          <div className="glass-luminous card-glare relative mt-2.5 grid grid-cols-5 divide-x divide-white/15 rounded-xl px-1 py-3" style={GLASS_BORDER}>
            {data.trustBar.map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-1 px-1 text-center">
                <Icon name={t.icon} className="h-6 w-6 shrink-0 text-white" />
                <p className="text-[8px] font-medium leading-tight text-white">{trustLabel(t)}</p>
              </div>
            ))}
          </div>

          {/* registration lookup */}
          <div className="glass-card-dark mt-2.5 rounded-xl p-3">
            <RegLookupForm buttonLabel="Check Match" row compactButton hideArrow short chromeButton />
          </div>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden overflow-hidden md:block">
        <div className="absolute inset-0">
          <Image src={data.image} alt="Jaguar technician rebuilding an engine block" fill priority className="object-cover object-right" sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-r from-hero-dark via-hero-dark/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-hero-dark to-transparent" />
        </div>

        <div className="relative px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <JaguarLogo className="-ml-2 h-14" />

            <h1 className="h1 origin-left scale-y-110 scale-x-90 mt-3 uppercase">
              <span className="block whitespace-nowrap text-chrome">{line1}</span>
              <span className="block whitespace-nowrap text-chrome-dim">{line2}</span>
              <span className="block text-chrome">{line3}</span>
            </h1>

            <p className="mt-3 max-w-md text-sm text-white lg:text-base">
              <Subhead text={data.subhead} />
            </p>

            <div className="glass-luminous card-glare relative mt-3 inline-flex items-center gap-3 rounded-lg px-5 py-3" style={GLASS_BORDER}>
              <Stars count={data.rating.stars} className="h-4 w-4" />
              <p className="whitespace-nowrap text-sm font-medium text-white">{data.rating.label}</p>
            </div>

            {/* reg lookup */}
            <div className="mt-3 max-w-md">
              <RegLookupForm buttonLabel="Look Up" row chromeButton />
            </div>

            <div className="mt-4 flex flex-wrap items-stretch gap-4">
              <a
                href={data.priceCta.href}
                className="glass-luminous card-glare relative flex w-60 shrink-0 flex-col justify-center whitespace-nowrap rounded-lg px-5 py-4 transition-transform hover:scale-[1.02]"
                style={GLASS_BORDER}
              >
                <p className="label-text font-medium text-white">{data.priceCta.kicker}</p>
                <p className="text-sm font-extrabold text-white">{data.priceCta.label}</p>
              </a>

              <a
                href={data.phoneCta.href}
                className="glass-luminous card-glare relative flex w-60 shrink-0 items-center gap-3 rounded-lg px-5 py-4 transition-transform hover:scale-[1.02]"
                style={GLASS_BORDER}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/60">
                  <Icon name={data.phoneCta.icon} className="h-5 w-5 text-white" />
                </span>
                <div className="min-w-0">
                  <p className="label-text whitespace-nowrap font-medium text-white">{data.phoneCta.label}</p>
                  <p className="whitespace-nowrap text-base font-extrabold text-white">{data.phoneCta.phone}</p>
                </div>
              </a>
            </div>
          </div>

          {/* bottom feature bar */}
          <div className="glass-luminous card-glare relative z-10 mt-6 flex items-stretch justify-between divide-x divide-white/15 rounded-xl px-4 py-5" style={GLASS_BORDER}>
            {data.trustBar.map((t) => (
              <div key={t.label} className="flex min-w-0 flex-1 items-center gap-3 px-3">
                <Icon name={t.icon} className="h-11 w-11 shrink-0 text-white" />
                <p className="min-w-0 text-sm leading-tight font-medium text-white">{trustLabel(t)}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
