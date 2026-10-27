import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import JaguarStripe from "@/components/reusable/JaguarStripe";
import RegLookupForm from "@/components/reusable/RegLookupForm";
import QuoteLink from "@/components/shared/QuoteLink";

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

// slanted chrome bars in the bottom-right corner of the phone card
function CornerBars({ className = "" }) {
  return (
    <span className={`pointer-events-none absolute bottom-0 right-0 flex gap-1.5 ${className}`} style={{ transform: "skewX(-35deg)", transformOrigin: "bottom right" }} aria-hidden="true">
      <span className="chrome-bar-a w-2.5" />
      <span className="chrome-bar-b w-1.5" />
      <span className="chrome-bar-a w-3.5" />
    </span>
  );
}

function Stars({ count, className }) {
  return (
    <div className="flex shrink-0 gap-0.5 text-white">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" className={`${className} fill-current`} />
      ))}
    </div>
  );
}

export default function ModelHeroSec1({ data }) {
  const [line1, line2, line3] = data.h1.split("|");

  return (
    <section className="theme-dark relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        {/* photo only fills the top of the hero (not the whole tall column) so it isn't zoomed in; it fades to the section colour below */}
        <div className="absolute inset-x-0 top-0 h-[34rem]">
          <Image src={data.imageMobile} alt="Jaguar technician rebuilding an engine block" fill priority className="translate-x-[14%] object-cover object-right-top" sizes="100vw" />
          {/* uneven dark wash: heaviest top-left behind the headline and the lower cards, thinning toward the technician on the right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(13,13,13,0.9) 0%, rgba(13,13,13,0.72) 38%, rgba(13,13,13,0.3) 72%, rgba(13,13,13,0.1) 100%), linear-gradient(180deg, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.05) 22%, rgba(13,13,13,0.2) 40%, rgba(13,13,13,0.78) 58%, rgba(13,13,13,0.94) 100%)",
            }}
          />
        </div>

        <div className="relative px-4 pb-4 pt-4">
          <div className="max-w-[85%]">
            <div className="flex items-center gap-2">
              <JaguarStripe className="h-4 w-8" />
              <p className="label-text uppercase tracking-widest text-white/85">{data.kicker}</p>
            </div>

            <h1 className="h1 origin-left scale-y-110 scale-x-90 mt-1.5 uppercase">
              <span className="block whitespace-nowrap text-chrome">{line1}</span>
              <span className="block text-chrome-dim">{line2}</span>
              <span className="block text-chrome">{line3}</span>
            </h1>

            <p className="mt-1.5 text-xs leading-snug text-white">
              <Subhead text={data.subhead} />
            </p>

            <div className="glass-card-dark mt-2 flex items-center gap-2 rounded-lg px-3 py-1.5">
              <Stars count={data.rating.stars} className="h-3 w-3" />
              <p className="label-text uppercase leading-tight text-white">{data.rating.label}</p>
            </div>
          </div>

          {/* five-column feature breakdown */}
          <div
            className="glass-luminous card-glare relative mt-2.5 grid grid-cols-5 divide-x divide-white/15 rounded-xl px-1 py-2.5"
            style={{ border: "1px solid rgba(214,218,224,0.35)" }}
          >
            {data.trustBar.map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-1 px-1 text-center">
                <Icon name={t.icon} className="h-5 w-5 shrink-0 text-white" />
                <p className="text-xs font-medium leading-tight [overflow-wrap:anywhere] text-white">{t.label.replace(/^✔\s*/, "")}</p>
              </div>
            ))}
          </div>

          {/* pricing callout banner */}
          <QuoteLink
            href={data.priceCta.href}
            className="glass-luminous card-glare relative mt-2.5 flex items-center divide-x divide-white/15 rounded-xl px-2 py-3 transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
            style={{ border: "1px solid rgba(214,218,224,0.35)" }}
          >
            <div className="flex shrink-0 items-center gap-2 pr-2">
              <Icon name={data.priceCta.icon} className="h-6 w-6 shrink-0 text-white" />
              <div>
                <p className="label-text whitespace-nowrap uppercase tracking-wide text-white">{data.priceCta.kicker}</p>
                <p className="whitespace-nowrap text-lg font-extrabold text-white">{data.priceCta.price}</p>
              </div>
            </div>
            <p className="min-w-0 flex-1 whitespace-nowrap pl-2 text-xs font-bold uppercase leading-tight text-white">{data.priceCta.label}</p>
          </QuoteLink>

          {/* registration lookup */}
          <div className="glass-card-dark mt-2.5 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <Icon name="car" className="h-5 w-5 shrink-0 text-white" />
              <p className="text-sm font-extrabold uppercase tracking-wide text-white">{data.quickQuote.title}</p>
            </div>
            <p className="mt-1 text-xs text-white">{data.quickQuote.subhead}</p>

            <div className="mt-2">
              <RegLookupForm buttonLabel="Check Match" row compactButton hideArrow short chromeButton />
            </div>

            <div className="mt-2 flex items-center gap-1.5">
              <Icon name="lock" className="h-3.5 w-3.5 shrink-0 text-white" />
              <p className="label-text text-white">{data.quickQuote.securityNote}</p>
            </div>
          </div>

          {/* direct contact CTA */}
          <QuoteLink
            href={data.phoneCta.href}
            className="glass-luminous card-glare relative mt-2.5 flex items-center gap-3 overflow-hidden rounded-xl p-3 transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
            style={{ border: "1px solid rgba(214,218,224,0.35)" }}
          >
            <CornerBars className="h-12" />
            <Icon name={data.phoneCta.icon} className="relative h-7 w-7 shrink-0 text-white" />
            <div className="relative">
              <p className="label-text uppercase tracking-wide text-white">{data.phoneCta.label}</p>
              <p className="text-lg font-extrabold text-white">{data.phoneCta.phone}</p>
            </div>
          </QuoteLink>

          {/* trust footer */}
          <div
            className="glass-luminous card-glare relative mt-2.5 flex items-center justify-center gap-2 rounded-lg px-3 py-2"
            style={{ border: "1px solid rgba(214,218,224,0.35)" }}
          >
            <Icon name="shield-check" className="h-4 w-4 shrink-0 text-white" />
            <p className="label-text font-medium text-white">{data.trustFooter}</p>
          </div>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden overflow-hidden px-4 py-8 sm:px-6 md:block lg:px-8">
        <div className="absolute inset-0">
          <Image src={data.image} alt="Jaguar technician rebuilding an engine block" fill priority className="object-cover object-right" sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-r from-hero-dark via-hero-dark/60 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-hero-dark via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <JaguarStripe className="h-4.5 w-9" />
              <p className="label-text uppercase tracking-widest text-white/85">{data.kicker}</p>
            </div>

            <div role="heading" aria-level="1" className="h1 origin-left scale-y-110 scale-x-90 mt-3 uppercase">
              <span className="block whitespace-nowrap text-chrome">{line1}</span>
              <span className="block whitespace-nowrap text-chrome-dim">{line2}</span>
              <span className="block text-chrome">{line3}</span>
            </div>

            <p className="mt-3 max-w-lg text-sm text-white">
              <Subhead text={data.subhead} />
            </p>

            <div className="glass-luminous card-glare relative mt-3 inline-flex items-center gap-2.5 rounded-lg px-4 py-2.5">
              <Stars count={data.rating.stars} className="h-4 w-4" />
              <p className="label-text uppercase leading-tight text-white">{data.rating.label}</p>
            </div>

            {/* reg lookup */}
            <div className="mt-3 max-w-md">
              <RegLookupForm buttonLabel="Look Up" row chromeButton />
            </div>
          </div>

          {/* trust bar spans the full width of the hero content column */}
          <div
            className="card-glare relative mt-3 flex items-stretch justify-between divide-x divide-white/15 rounded-xl px-6 py-5 backdrop-blur-md"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)" }}
          >
            {data.trustBar.map((t) => (
              <div key={t.label} className="flex flex-1 items-center gap-4 px-5">
                <Icon name={t.icon} className="h-10 w-10 shrink-0 text-white" />
                <p className="text-sm leading-tight font-medium text-white">{t.label.replace(/^✔\s*/, "")}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap items-stretch gap-4">
            <QuoteLink
              href={data.priceCta.href}
              className="glass-luminous card-glare relative flex w-80 shrink-0 flex-col justify-between rounded-xl px-8 py-5 transition-transform hover:scale-[1.02]"
              style={{ border: "1px solid rgba(214,218,224,0.45)" }}
            >
              <div className="flex items-center gap-4">
                <Icon name={data.priceCta.icon} className="h-14 w-14 shrink-0 text-white" />
                <div>
                  <p className="text-sm font-semibold uppercase leading-snug tracking-wide text-white">{data.priceCta.kicker}</p>
                  <p className="mt-1 text-4xl font-extrabold leading-none text-white">{data.priceCta.price}</p>
                </div>
              </div>
              <p className="mt-2 text-sm font-bold uppercase leading-tight tracking-wide text-white">{data.priceCta.label}</p>
            </QuoteLink>

            <QuoteLink
              href={data.phoneCta.href}
              className="glass-luminous card-glare relative flex w-104 shrink-0 flex-col justify-center overflow-hidden rounded-xl px-8 py-5 transition-colors hover:bg-white/5"
            >
              <CornerBars className="h-16" />
              <div className="relative flex items-center gap-4">
                <Icon name={data.phoneCta.icon} className="h-14 w-14 shrink-0 text-white" />
                <div>
                  <p className="text-sm font-semibold uppercase leading-snug tracking-wide text-white">{data.phoneCta.label}</p>
                  <p className="mt-1 whitespace-nowrap text-2xl font-extrabold leading-none text-white">{data.phoneCta.phone}</p>
                </div>
              </div>
            </QuoteLink>
          </div>
        </div>
      </div>
    </section>
  );
}
