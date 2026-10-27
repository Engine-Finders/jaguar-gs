"use client";

import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import { useQuoteModal } from "@/components/shared/QuoteModal";

// Light "Get Back On The Road" banner: the photo's right-hand side is already a pale fade, so the
// copy sits straight on it in charcoal (no dark overlays). Mobile stacks the copy above the photo.
export default function HomeSec4_5({ data }) {
  const [line1, line2] = data.h2.split("|");
  const { open: openQuote } = useQuoteModal();

  // `desktop` copy renders its heading as a role=heading div so the page has one real h2 for this section
  const copy = (desktop) => (
    <>
      <p className="label-text font-normal italic uppercase tracking-wide text-[#1a1a1a] md:text-xs">{data.kicker}</p>
      {desktop ? (
        <div role="heading" aria-level="2" className="h2 mt-2 uppercase">
          <span className="block text-[#111111]">{line1}</span>{" "}
          <span className="block text-chrome-ink">{line2}</span>
        </div>
      ) : (
        <h2 className="h2 mt-2 uppercase">
          <span className="block text-[#111111]">{line1}</span>{" "}
          <span className="block text-chrome-ink">{line2}</span>
        </h2>
      )}
      <p className="-skew-x-6 origin-left mt-3 text-xl font-bold uppercase text-[#111111] sm:text-2xl">{data.subhead1}</p>
      <p className="-skew-x-6 origin-left text-xs font-normal uppercase italic tracking-[0.22em] text-[#1a1a1a]">{data.subhead2}</p>

      <div className="mt-4 w-full space-y-1 text-left text-xs leading-snug text-[#1a1a1a] md:text-[15px] md:leading-normal">
        {data.body.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        <p>{data.bodyBold}</p>
      </div>
      <p className="mt-3 w-full text-left text-sm leading-snug text-[#1a1a1a] md:mt-4 md:text-base">{data.bodyRest}</p>

      <div className="mt-5 grid w-full grid-cols-3 items-center md:flex md:w-auto md:gap-3 lg:gap-4">
        {data.features.map((f, i) => (
          <div key={f.label} className={`flex min-w-0 items-center justify-center gap-1.5 px-1 md:shrink-0 md:justify-start md:gap-2 md:px-0 ${i > 0 ? "border-l border-black/20 md:pl-3 lg:pl-4" : ""}`}>
            <Icon name={f.icon} className="h-7 w-7 shrink-0 text-[#111111] md:h-8 md:w-8 lg:h-10 lg:w-10" />
            <span className="text-[10px] font-semibold uppercase leading-[1.15] text-[#1a1a1a] md:w-[5.6rem] md:text-xs md:leading-snug">{f.label}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={openQuote}
        className="btn-text mt-6 inline-flex items-center gap-3 whitespace-nowrap rounded-md border border-[#111111] bg-linear-to-b from-[#2a2a2a] to-[#050505] px-6 py-2.5 uppercase text-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.7)] md:px-8 md:py-3.5 transition-transform hover:-translate-y-0.5"
      >
        {data.cta.label} <span aria-hidden>→</span>
      </button>
    </>
  );

  return (
    <section className="theme-light relative overflow-hidden [clip-path:polygon(0_0,100%_0,100%_92%,50%_100%,0_92%)] md:[clip-path:polygon(0_0,100%_0,100%_95%,50%_100%,0_95%)]">
      {/* ===== mobile: copy on top, photo underneath ===== */}
      <div className="md:hidden">
        <div className="relative z-10 px-4 pb-6 pt-5 text-center">
          <div className="flex flex-col items-center [&_p]:origin-center">{copy(false)}</div>
        </div>

        <div className="relative -mt-40 aspect-square w-full">
          <Image src={data.mobileImage} alt="Jaguar XE driving through London in the rain" fill className="object-cover object-[12%_center]" sizes="100vw" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-(--color-light-surface) to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-5 flex flex-col items-center gap-2 px-4">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-white/40" />
              <p className="label-text uppercase tracking-widest text-white">{data.footer}</p>
              <span className="h-px w-8 bg-white/40" />
            </div>
            <Image src="/brand/logo-icon.webp" alt="Jaguar Garage" width={512} height={173} className="h-8 w-auto" sizes="100px" />
          </div>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden md:block">
        <Image src={data.bgImage} alt="Jaguar XE driving through London in the rain" fill className="object-cover" sizes="100vw" />

        {/* headline stack on the photo's pale right side (anchored to the viewport's right 41%) */}
        <div className="relative ml-auto w-[41%] pb-10 pl-4 pr-6 pt-10 lg:pr-[max(2rem,calc((100vw-72rem)/2+2rem))]">
          {copy(true)}
        </div>

        {/* footer tagline - in normal flow below the copy, centred, so it can never overlap the button */}
        <div className="relative mx-auto max-w-[76rem] px-4 pb-7 pt-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-20 bg-white/45" />
            <p className="text-xs uppercase tracking-[0.3em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">{data.footer}</p>
            <span className="h-px w-20 bg-white/45" />
          </div>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/45" />
            <Image src="/brand/logo-icon.webp" alt="Jaguar Garage" width={512} height={173} className="h-8 w-auto" sizes="100px" />
            <span className="h-px w-8 bg-white/45" />
          </div>
        </div>
      </div>
    </section>
  );
}
