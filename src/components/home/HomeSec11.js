import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import JaguarLogo from "@/components/reusable/JaguarLogo";

// "Meet the Workshop": the photo's left panel is already a pale chrome-edged wedge, so the copy
// sits straight on it in charcoal; the six service cards overlap the photo's bottom edge.
function ServiceCard({ s, sizes, compact = false }) {
  return (
    <div className="glow-card glow-card--sm relative h-full min-h-40 overflow-hidden border-2! border-white! shadow-[0_10px_24px_-6px_rgba(0,0,0,0.45),0_0_0_1px_rgba(0,0,0,0.06)]">
      <Image src={s.image} alt={s.label} fill className="object-cover" sizes={sizes} />
      <div className="absolute inset-0 bg-linear-to-t from-[#101114]/95 via-[#101114]/45 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 px-2 pb-2.5 pt-6 sm:px-3 sm:pb-3.5">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Icon name={s.icon} className={`shrink-0 text-white ${compact ? "h-4 w-4" : "h-4 w-4 sm:h-7 sm:w-7"}`} />
          <p className="label-text font-bold uppercase leading-tight tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] sm:text-sm">
            {s.label}
          </p>
        </div>
        <span className="block h-px w-1/2 bg-white/70" />
      </div>
    </div>
  );
}

export default function HomeSec11({ data }) {
  return (
    <section className="theme-light">
      {/* ===== mobile ===== */}
      <div className="md:hidden">
        <div className="px-4 pb-5 pt-6">
          <h2 className="h2 uppercase text-[#111111]">
            <span className="block">Meet The</span>
            <span className="block text-chrome-ink">Workshop</span>
          </h2>

          <div className="body-text mt-3 space-y-2 leading-relaxed text-[#1a1a1a]">
            {data.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="body-text mt-3 leading-relaxed text-[#1a1a1a]">{data.note}</p>
        </div>

        <div className="relative aspect-4/3 w-full">
          <Image src={data.mobileImage} alt="Inside the Jaguar Garage workshop" fill className="origin-top-right scale-[1.22] object-cover object-right" sizes="100vw" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-(--color-light-surface) to-transparent" />
        </div>

        <div className="grid grid-cols-3 gap-2 px-4 py-5">
          {data.strip.map((s) => (
            <ServiceCard key={s.label} s={s} sizes="140px" compact />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 px-4 pb-6">
          <span className="h-px w-12 bg-black/20" />
          <JaguarLogo className="h-9 w-9" />
          <span className="h-px w-12 bg-black/20" />
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="hidden md:block">
        <div className="relative w-full">
          {/* photo block keeps the source's own 1024:572 aspect ratio */}
          {/* the photo is pushed right so its pale wedge leaves clear room for the copy */}
          <div className="relative ml-auto w-[86%]" style={{ aspectRatio: "1024 / 572" }}>
            <Image src={data.bgImage} alt="Inside the Jaguar Garage workshop" fill className="object-cover" sizes="100vw" />
            {/* the source's blank bottom band melts into the section surface */}
            <div className="absolute inset-x-0 bottom-0 h-[26%] bg-linear-to-t from-(--color-light-surface) via-(--color-light-surface)/85 to-transparent" />
            {/* left edge melts into the section surface */}
            <div className="absolute inset-y-0 left-0 w-[14%] bg-linear-to-r from-(--color-light-surface) to-transparent" />
          </div>

          {/* copy, over the pale left area */}
          <div className="absolute inset-x-0 top-0">
            <div className="flex items-start px-4 pt-8 sm:px-6 sm:pt-10 lg:pl-[max(2rem,calc((100vw-72rem)/2))] lg:pt-14">
              <div className="max-w-[34%] text-[#1a1a1a] sm:max-w-[32%]">
                <h2 className="h2 -skew-x-6 origin-left scale-y-115 scale-x-92 uppercase">
                  <span className="block text-2xl leading-[1.05] text-[#111111] sm:text-3xl lg:text-5xl">Meet The</span>
                  <span className="block text-4xl leading-[1.05] text-chrome-ink sm:text-5xl lg:text-7xl">Workshop</span>
                </h2>

                <div className="mt-5 space-y-3 text-xs leading-relaxed sm:mt-6 sm:text-sm lg:text-[15px]">
                  {data.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-relaxed sm:text-sm lg:text-[15px]">{data.note}</p>
              </div>
            </div>
          </div>

          {/* service cards overlap the bottom edge of the photo */}
          <div className="relative z-10 mx-auto -mt-40 grid max-w-[76rem] grid-cols-6 gap-3 px-4 pb-4 sm:px-6 lg:-mt-56 lg:gap-4 lg:px-8">
            {data.strip.map((s) => (
              <div key={s.label} className="h-52 lg:h-64">
                <ServiceCard s={s} sizes="200px" />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 pb-6 pt-2">
            <span className="h-px w-40 bg-black/20" />
            <JaguarLogo className="h-9 w-9" />
            <span className="h-px w-40 bg-black/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
