import Image from "next/image";
import QuoteLink from "@/components/shared/QuoteLink";
import PhotoStripes from "@/components/reusable/PhotoStripes";
import Link from "next/link";
import Icon from "@/components/reusable/Icon";
import JaguarLogo from "@/components/reusable/JaguarLogo";
import JaguarStripe from "@/components/reusable/JaguarStripe";

const FEATURED_BG = "linear-gradient(160deg, #f4f4f5 0%, #d9dadd 55%, #b9bbc0 100%)";

function CardTitle({ c, className = "" }) {
  const ink = c.featured ? "text-[#111111]" : "text-white";
  return (
    <>
      <p className={`font-extrabold uppercase leading-tight ${ink} ${className}`}>
        {c.titlePre}
        {c.titleHighlight && <span className={c.featured ? "text-[#444444]" : "text-white/55"}> {c.titleHighlight}</span>}
      </p>
      {c.code &&
        (c.codeHref ? (
          <Link href={c.codeHref} className={`block uppercase ${ink}`}>
            {c.code}
          </Link>
        ) : (
          <p className={`uppercase ${ink}`}>{c.code}</p>
        ))}
    </>
  );
}

function QuoteButton({ data, className = "" }) {
  return (
    <QuoteLink
      href={data.cta.href}
      className={`btn-chrome inline-flex items-center justify-center gap-2 rounded-md font-bold uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {data.cta.buttonLabel} <span aria-hidden>→</span>
    </QuoteLink>
  );
}

export default function ModelSec3({ data }) {
  // desktop: alternate light / dark cards across the row (matches the mobile checkerboard)
  const desktopCards = data.cards.map((c, i) => ({ ...c, featured: i % 2 === 0 }));
  const [line1, line2] = data.h2.split("|");
  const count = data.cards.length;

  return (
    <section className="theme-dark relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        <div className="relative h-72 w-full overflow-hidden">
          {/* solid dark header band reserved for the title - the car sits low in the photo, so
              the photo is pinned to the bottom of a taller box and the title stays clear of it */}
          <div className="absolute inset-x-0 bottom-0 top-16">
            <Image src={data.imageMobile} alt="Black Jaguar E-Pace in a dark Jaguar workshop" fill className="translate-y-4 object-cover object-[100%_top]" sizes="100vw" />
            <div className="absolute inset-0 bg-linear-to-b from-hero-dark/50 via-transparent to-hero-dark" />
          </div>

          <div className="relative px-4 pt-6">
            <div className="flex items-center gap-2">
              <JaguarStripe className="h-4 w-8" />
              <p className="label-text uppercase tracking-widest text-white/85">{data.kicker}</p>
            </div>

            <h2 className="h2 origin-left scale-y-110 scale-x-90 mt-2 uppercase">
              <span className="block text-white">{line1}</span>
              <span className="block text-hero-blue">{line2}</span>
            </h2>
          </div>
        </div>

        <div className="relative px-4 pb-8 pt-4">
          <p className="label-text inline-block uppercase tracking-widest text-white">
            {data.startingFromLabel}
            <span className="mt-2 block h-0.5 w-full rounded-full bg-linear-to-r from-white via-white/50 to-transparent" />
          </p>

          <div className="relative mt-4">
            <div className="pointer-events-none absolute -left-10 top-6 h-48 w-48 rounded-full bg-white/15 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-12 top-1/2 h-56 w-56 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="relative grid grid-cols-2 gap-3">
            {data.cards.map((c) => (
              <div
                key={`${c.titlePre}-${c.titleHighlight}`}
                className={`relative rounded-xl p-3 ${c.featured ? "border border-white/15 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)]" : "glass-card-dark card-glare"}`}
                style={c.featured ? { background: FEATURED_BG } : undefined}
              >
                {c.featured && <div className="mb-1 flex justify-center"><Image src="/brand/logo-icon.webp" alt="Jaguar Garage" width={512} height={173} className="h-8 w-auto" sizes="120px" /></div>}
                <div className="relative mx-auto h-16 w-full">
                  {c.icon ? (
                    <span className="flex h-full w-full items-center justify-center">
                      <Icon name={c.icon} className="h-12 w-12 text-white" />
                    </span>
                  ) : (
                    <Image src={c.image || data.cardImage} alt={`${c.titlePre} ${c.titleHighlight}`} fill className="object-contain" sizes="140px" />
                  )}
                </div>
                <div className="mt-2 text-center">
                  <CardTitle c={c} className="label-text" />
                  <p className={`label-text mt-2 uppercase tracking-widest ${c.featured ? "text-[#111111]" : "text-white"}`}>From</p>
                  <p className={`text-xl font-extrabold ${c.featured ? "text-[#111111]" : "text-white"}`}>{c.price}</p>
                </div>
              </div>
            ))}
          </div>
          </div>

          <p className="glass-card-dark mt-4 flex items-center gap-2 rounded-xl px-4 py-3 text-xs text-white">
            <Icon name="info" className="h-4 w-4 shrink-0 text-white" />
            {data.disclaimer}
          </p>

          <div className="glass-card-dark relative mt-4 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Icon name="clock" className="h-8 w-8 shrink-0 text-white" />
              <p className="text-sm font-extrabold uppercase leading-tight text-white">
                <span className="block">{data.cta.line1}</span>
                <span className="block">{data.cta.line2}</span>
              </p>
            </div>

            <QuoteButton data={data} className="mt-4 w-full px-6 py-3.5 text-sm" />
          </div>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden overflow-hidden px-4 py-10 sm:px-6 md:block lg:px-8">
        <div className="absolute inset-0">
          <Image src={data.image} alt="Black Jaguar E-Pace in a dark Jaguar workshop" fill className="object-cover object-[65%_50%]" sizes="100vw" />
          <PhotoStripes preset="sec3" className="object-cover object-[65%_50%]" />
          <div className="absolute inset-0 bg-linear-to-r from-hero-dark via-hero-dark/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-hero-dark to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="flex items-center gap-2">
            <JaguarStripe className="h-4.5 w-9" />
            <p className="label-text uppercase tracking-widest text-white/85">{data.kicker}</p>
          </div>

          <div role="heading" aria-level="2" className="h2 origin-left scale-y-110 scale-x-90 mt-3 uppercase">
            <span className="block text-white">{line1}</span>
            <span className="block text-hero-blue">{line2}</span>
          </div>

          <p className="mt-4 label-text inline-block uppercase tracking-widest text-white">
            {data.startingFromLabel}
            <span className="mt-2 block h-0.5 w-full rounded-full bg-linear-to-r from-white via-white/50 to-transparent" />
          </p>

          <div className="mt-5 grid gap-4" style={{ gridTemplateColumns: `repeat(${count}, ${count >= 4 ? "minmax(0, 1fr)" : "minmax(0, 16rem)"})` }}>
            {desktopCards.map((c) => (
              <div
                key={`${c.titlePre}-${c.titleHighlight}`}
                className={`relative rounded-xl pb-5 pt-4 ${c.featured ? "border border-white/15" : "glass-card-dark card-glare"}`}
                style={c.featured ? { background: FEATURED_BG, boxShadow: "0 0 28px -4px rgba(255,255,255,0.45), 0 18px 40px -18px rgba(0,0,0,0.9)" } : undefined}
              >
                {c.featured && <div className="mb-1 flex justify-center"><Image src="/brand/logo-icon.webp" alt="Jaguar Garage" width={512} height={173} className="h-10 w-auto" sizes="120px" /></div>}
                <div className="relative mx-auto h-28 w-full">
                  {c.icon ? (
                    <span className="flex h-full w-full items-center justify-center">
                      <Icon name={c.icon} className="h-20 w-20 text-white" />
                    </span>
                  ) : (
                    <Image src={c.image || data.cardImage} alt={`${c.titlePre} ${c.titleHighlight}`} fill className="object-contain" sizes="200px" />
                  )}
                </div>

                <div className="mt-3 px-3 text-center">
                  <CardTitle c={c} className="text-sm" />
                  <p className={`label-text mt-3 uppercase tracking-widest ${c.featured ? "text-[#111111]" : "text-white"}`}>From</p>
                  <p className={`text-3xl font-extrabold ${c.featured ? "text-[#111111]" : "text-white"}`}>{c.price}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 flex items-center gap-2 text-xs text-white">
            <Icon name="info" className="h-4 w-4 shrink-0 text-white" />
            {data.disclaimer}
          </p>

          <div className="glass-card-dark relative mt-4 flex items-center w-fit max-w-full gap-10 rounded-xl px-8 py-5">
            <div className="flex items-center gap-4">
              <Icon name="clock" className="h-12 w-12 shrink-0 text-white" />
              <p className="text-base font-extrabold uppercase leading-tight text-white">
                <span className="block">{data.cta.line1}</span>
                <span className="block">{data.cta.line2}</span>
              </p>
            </div>

            <QuoteButton data={data} className="w-96 shrink-0 px-8 py-4 text-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
