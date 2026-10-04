import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import JaguarLogo from "@/components/reusable/JaguarLogo";

// Light "Get Back On The Road" banner: the photo's right-hand side is already a pale fade, so the
// copy sits straight on it in charcoal (no dark overlays). Mobile stacks the copy above the photo.
export default function HomeSec4_5({ data }) {
  const [line1, line2] = data.h2.split("|");

  const copy = (
    <>
      <p className="label-text uppercase tracking-wide text-[#1a1a1a] md:text-xs">{data.kicker}</p>
      <h2 className="h2 mt-2 uppercase">
        <span className="block text-[#111111]">{line1}</span>
        <span className="block text-chrome-ink">{line2}</span>
      </h2>
      <p className="-skew-x-6 origin-left mt-3 text-xl font-bold uppercase text-[#111111] sm:text-2xl">{data.subhead1}</p>
      <p className="-skew-x-6 origin-left text-xs font-semibold uppercase italic tracking-[0.22em] text-[#1a1a1a]">{data.subhead2}</p>

      <div className="mt-4 space-y-1 text-sm text-[#1a1a1a] md:text-[15px]">
        {data.body.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        <p className="font-bold text-[#111111]">{data.bodyBold}</p>
        <p>{data.bodyRest}</p>
      </div>

      <div className="mt-5 flex items-center gap-2 md:gap-3 lg:gap-4">
        {data.features.map((f, i) => (
          <div key={f.label} className={`flex shrink-0 items-center gap-1.5 md:gap-2 ${i > 0 ? "border-l border-black/20 pl-2 md:pl-3 lg:pl-4" : ""}`}>
            <Icon name={f.icon} className="h-7 w-7 shrink-0 text-[#111111] md:h-8 md:w-8 lg:h-10 lg:w-10" />
            <span className="w-[5.6rem] text-[11px] font-semibold uppercase leading-snug text-[#1a1a1a] md:text-xs">{f.label}</span>
          </div>
        ))}
      </div>

      <a
        href={data.cta.href}
        className="btn-text mt-6 inline-flex items-center gap-3 whitespace-nowrap rounded-md border border-[#111111] bg-linear-to-b from-[#2a2a2a] to-[#050505] px-8 py-3.5 uppercase text-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.7)] transition-transform hover:-translate-y-0.5"
      >
        {data.cta.label} <span aria-hidden>→</span>
      </a>
    </>
  );

  return (
    <section
      className="theme-light relative overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 52% 100%, 0 95%)" }}
    >
      {/* ===== mobile: copy on top, photo underneath ===== */}
      <div className="md:hidden">
        <div className="relative z-10 px-4 pb-6 pt-1 text-center">
          <div className="mb-4 flex items-center justify-center gap-2.5">
            <JaguarLogo className="h-7 w-7 shrink-0" />
            <span className="h-6 w-px shrink-0 bg-black/30" />
            <p className="label-text text-left uppercase leading-tight tracking-widest text-[#1a1a1a]">
              <span className="block">Performance</span>
              <span className="block">Belongs On The Road</span>
            </p>
          </div>
          <div className="flex flex-col items-center [&_p]:origin-center">{copy}</div>
        </div>

        <div className="relative -mt-40 aspect-square w-full">
          <Image src={data.mobileImage} alt="Jaguar XE driving through London in the rain" fill className="object-cover object-[12%_center]" sizes="100vw" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-(--color-light-surface) to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-12 flex items-center justify-center gap-3 px-4">
            <span className="h-px w-8 bg-white/40" />
            <p className="label-text uppercase tracking-widest text-white">{data.footer}</p>
            <span className="h-px w-8 bg-white/40" />
          </div>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden md:block">
        <Image src={data.bgImage} alt="Jaguar XE driving through London in the rain" fill className="object-cover" sizes="100vw" />

        {/* top-left eyebrow over the sky */}
        <div className="absolute inset-x-0 top-0 mx-auto max-w-[76rem] px-4 pt-8 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            <JaguarLogo className="h-10 w-10 shrink-0" />
            <span className="h-7 w-px shrink-0 bg-black/30" />
            <p className="label-text uppercase leading-tight tracking-widest text-[#1a1a1a]">
              <span className="block">Performance</span>
              <span className="block">Belongs On The Road</span>
            </p>
          </div>
        </div>

        {/* headline stack on the photo's pale right side (anchored to the viewport's right 41%) */}
        <div className="relative ml-auto w-[41%] pb-10 pl-4 pr-6 pt-10 lg:pr-[max(2rem,calc((100vw-72rem)/2+2rem))]">
          {copy}
        </div>

        {/* footer tagline — in normal flow below the copy, centred, so it can never overlap the button */}
        <div className="relative mx-auto max-w-[76rem] px-4 pb-7 pt-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-20 bg-white/45" />
            <p className="text-xs uppercase tracking-[0.3em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">{data.footer}</p>
            <span className="h-px w-20 bg-white/45" />
          </div>
          <div className="mt-3 flex justify-center">
            <JaguarLogo className="h-9 w-9" />
          </div>
        </div>
      </div>
    </section>
  );
}
