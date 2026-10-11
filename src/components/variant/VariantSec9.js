import Image from "next/image";

export default function VariantSec9({ data }) {
  return (
    <section className="theme-dark relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        <div className="relative px-4 pb-4 pt-7">
          <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase" style={{ fontSize: "32px" }}>
            <span className="block whitespace-nowrap text-chrome">{data.headlinePre}</span>
            <span className="block text-hero-blue">{data.headlineHighlight}</span>
            <span className="block text-chrome">{data.headlinePost}</span>
          </h2>

          <p className="mt-2.5 text-xs leading-snug text-white">{data.body}</p>
          {!data.body.toLowerCase().includes("show you every option") && <p className="mt-1.5 text-xs font-semibold text-white">{data.prompt}</p>}
        </div>

        {/* engine photo band; fades into the section colour above and below */}
        <div className="relative h-44 w-full">
          <Image src={data.imageMobile} alt="Jaguar engines on workshop pallets" fill className="object-cover object-right" sizes="100vw" />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-hero-dark to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-hero-dark to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-hero-dark to-transparent" />
        </div>

        <div className="relative px-4 pb-7 pt-1">
          <a
            href={data.cta.href}
            className="btn-text glass-card-dark flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-lg px-5 py-3 uppercase text-white transition-colors hover:bg-white/10"
          >
            {data.cta.label} <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden overflow-hidden md:block" style={{ backgroundColor: "#0b0d0e" }}>
        {/* artwork at its natural proportions: dark empty left sits under the copy, engines on the right; top/bottom feather into the section colour */}
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 aspect-[1024/242] -translate-y-1/2"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
          }}
        >
          <Image src={data.image} alt="Jaguar engines on workshop pallets" fill className="object-cover" sizes="100vw" />
        </div>

        <div className="relative mx-auto flex w-[min(72rem,calc(100%-2rem))] py-12 sm:w-[min(72rem,calc(100%-3rem))] lg:w-[min(72rem,calc(100%-4rem))] lg:py-14">
          <div className="max-w-xl">
            <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
              <span className="block whitespace-nowrap text-chrome">{data.headlinePre}</span>
              <span className="block text-hero-blue">{data.headlineHighlight}</span>
              <span className="block text-chrome">{data.headlinePost}</span>
            </h2>

            <p className="mt-4 text-sm text-white lg:text-base">{data.body}</p>
            {!data.body.toLowerCase().includes("show you every option") && <p className="mt-2 text-sm font-semibold text-white">{data.prompt}</p>}

            <a
              href={data.cta.href}
              className="glass-card-dark mt-5 inline-flex items-center gap-3 rounded-lg px-7 py-3.5 text-sm font-bold uppercase text-white transition-colors hover:bg-white/10"
            >
              {data.cta.label} <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
