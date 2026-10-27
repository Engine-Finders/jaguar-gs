import Image from "next/image";
import RegLookupForm from "@/components/reusable/RegLookupForm";

// Light "Need your Jaguar back on the road?" banner - the photo fades to white on its left, so the
// copy sits directly on it in charcoal and the black XE owns the right-hand side.
export default function HomeSec12({ data }) {
  const [kicker, headline] = data.h2.split("|");
  const [headlineA, ...headlineRest] = headline.split(" ");
  const headlineB = headlineRest.join(" ");

  return (
    <section className="theme-light relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        {/* full-bleed photo behind everything - no column edge */}
        <Image src={data.mobileImage} alt="Black Jaguar XE driving through London in the rain" fill className="object-cover object-right" sizes="100vw" />
        {/* uneven light backing: strongest top-left behind the copy, thinning out toward the car */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(242,242,242,0.92) 0%, rgba(242,242,242,0.7) 38%, rgba(242,242,242,0.25) 70%, rgba(242,242,242,0) 100%), linear-gradient(100deg, rgba(242,242,242,0.9) 0%, rgba(242,242,242,0.55) 50%, rgba(242,242,242,0) 100%)",
          }}
        />

        <div className="relative z-10 px-4 py-6">
          <p className="label-text whitespace-nowrap uppercase tracking-widest text-[#111111]">{kicker}</p>

          <h2 className="h2 mt-1 uppercase">
            <span className="block text-[#111111]">{headlineA}</span>
            <span className="block text-chrome-ink">{headlineB}</span>
          </h2>

          <p className="mt-2 text-xs leading-snug text-[#1a1a1a]">
            {data.descriptionPre}
            <span className="font-bold">{data.descriptionEmphasis}</span>
            {data.descriptionPost}
          </p>

          <div className="mt-3">
            <RegLookupForm buttonLabel={data.ctaButton} stacked matchHeight plateLabel="GB" />
          </div>

          <p className="label-text mt-2.5 flex items-center gap-1.5 uppercase tracking-wide text-[#1a1a1a]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {data.note}
          </p>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden overflow-hidden md:block">
        <div className="absolute inset-y-0 right-0 w-[90%]">
          <Image src={data.bgImage} alt="Black Jaguar XE driving through London in the rain" fill className="object-cover object-right" sizes="90vw" />
          <div className="absolute inset-y-0 left-0 w-1/5 bg-linear-to-r from-(--color-light-surface) to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[76rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div role="heading" aria-level="2" className="h2 max-w-xl uppercase">
            <span className="block text-2xl leading-tight text-[#111111] sm:text-3xl">{kicker}</span>
            <span className="block whitespace-nowrap text-4xl leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-[#111111]">{headlineA}</span> <span className="text-chrome-ink">{headlineB}</span>
            </span>
          </div>

          <p className="mt-4 max-w-md text-sm text-[#1a1a1a] lg:text-base">
            {data.descriptionPre}
            <span className="font-bold">{data.descriptionEmphasis}</span>
            {data.descriptionPost}
          </p>

          <div className="mt-6 max-w-lg">
            <RegLookupForm buttonLabel={data.ctaButton} compact matchHeight darkButton plateLabel="GB" />
          </div>

          <p className="mt-4 flex items-center gap-2 text-xs uppercase tracking-wide text-[#1a1a1a]">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {data.note}
          </p>
        </div>
      </div>
    </section>
  );
}
