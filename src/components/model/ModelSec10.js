import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/reusable/Icon";
import ExpandGrid from "@/components/reusable/ExpandGrid";
import JaguarLogo from "@/components/reusable/JaguarLogo";

// "Jaguar E-Pace Rebuilds" -> dark "Jaguar E-Pace" + chrome "Rebuilds"
function splitHighlight(text) {
  const words = text.split(" ");
  return [words.slice(0, -1).join(" "), words[words.length - 1]];
}

function VariantCard({ c, data, sizes, tab, title }) {
  const Wrapper = c.href ? Link : "div";
  const wrapperProps = c.href ? { href: c.href } : {};
  return (
    <Wrapper
      {...wrapperProps}
      className="flex h-full flex-col overflow-hidden rounded-xl border border-black/5 bg-(--color-light-surface) shadow-[0_10px_26px_-12px_rgba(0,0,0,0.35)] transition-shadow hover:shadow-[0_14px_30px_-10px_rgba(0,0,0,0.4)]"
    >
      <div className="relative aspect-[1536/840] bg-(--color-light-surface)">
        <Image src={c.image || data.image} alt={c.model} fill className={c.image?.startsWith("/cars/") ? "object-contain px-3 pb-2 pt-5" : "object-cover"} sizes={sizes} />
        <span
          className={`absolute left-0 top-0 flex items-center bg-hero-blue font-bold text-white ${tab}`}
          style={{ clipPath: "polygon(0 0, 100% 0, 78% 100%, 0% 100%)" }}
        >
          {c.number.replace(/^0/, "")}
        </span>
      </div>
      <div className="relative flex items-end justify-between gap-2 px-3 py-2.5">
        <div className="min-w-0">
          <p className={`font-extrabold uppercase text-[#111111] ${title}`}>{c.model}</p>
          {c.spec && <p className="mt-0.5 text-xs font-normal text-[#111111] sm:text-sm">{c.spec}</p>}
        </div>
        {c.phev && (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#111111]" aria-label="Plug-in hybrid">
            <Icon name="bolt" className="h-5 w-5 text-[#111111]" />
          </span>
        )}
      </div>
    </Wrapper>
  );
}

function FootNote({ data, compact = false }) {
  return (
    <div className={`relative flex items-center gap-3 overflow-hidden rounded-xl border border-black/5 bg-white/70 shadow-sm ${compact ? "px-4 py-3.5" : "px-5 py-4"}`}>
      <Icon name="shield-check" className="h-6 w-6 shrink-0 text-[#111111]" />
      <p className="relative z-10 text-xs text-[#111111]">{data.footerNote}</p>
      <div
        className="pointer-events-none absolute bottom-0 right-0 z-0 flex gap-1.5"
        style={{ height: compact ? "40px" : "56px", transform: "skewX(-25deg)", transformOrigin: "bottom right" }}
        aria-hidden="true"
      >
        <span className="chrome-bar-a h-full w-3.5" />
        <span className="chrome-bar-b h-full w-3.5" />
      </div>
    </div>
  );
}

export default function ModelSec10({ data }) {
  const [titleDark, titleAccent] = splitHighlight(data.headlineHighlight);
  const count = data.cards.length;
  const cols = count <= 6 || count % 3 === 0 ? 3 : 4;

  return (
    <section className="theme-light relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative px-4 py-10 md:hidden">
        <div className="flex items-start gap-3">
          <JaguarLogo className="mt-1 h-9" />
          <div>
            <p className="text-lg font-extrabold uppercase leading-tight text-[#111111]">{data.headlinePre}</p>
            <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
              <span className="block text-[#111111]">{titleDark}</span>
              <span className="block text-hero-blue">{titleAccent}</span>
            </h2>
          </div>
        </div>
        <p className="mt-2 text-sm text-[#111111]">{data.subhead}</p>

        <ExpandGrid
          className="mt-5 grid grid-cols-2 gap-3"
          limit={6}
          label={data.viewMoreLabel}
          wrapClass="mt-5 flex justify-center"
          buttonClass="btn-text flex items-center gap-2 rounded-lg border-2 border-hero-blue bg-white/70 px-5 py-2.5 uppercase text-hero-blue backdrop-blur-md transition hover:bg-hero-blue hover:text-white"
        >
          {data.cards.map((c) => (
            <VariantCard key={c.number} c={c} data={data} sizes="50vw" tab="h-6 px-2.5 text-xs" title="text-sm" />
          ))}
        </ExpandGrid>

        <div className="mt-5">
          <FootNote data={data} compact />
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
        {/* faint decorative engine watermark, top-right, faded edges so no hard box is visible */}
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-72 w-72 opacity-20"
          style={{
            maskImage: "radial-gradient(circle at center, black 35%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 35%, transparent 70%)",
          }}
          aria-hidden="true"
        >
          <Image src="/model/sec15_part.webp" alt="" fill className="object-cover" sizes="288px" />
        </div>
        {/* slanted chrome panel edges behind the heading, top-right */}
        <div className="pointer-events-none absolute -top-4 right-[26%] flex h-56 gap-3" style={{ transform: "skewX(-24deg)" }} aria-hidden="true">
          <span className="w-10 bg-linear-to-b from-white to-transparent opacity-80" />
          <span className="w-4 bg-linear-to-b from-white/90 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="flex items-start gap-4 pt-6">
            <JaguarLogo className="mt-2 h-14" />
            <div>
              <p className="text-2xl font-extrabold uppercase leading-tight text-[#111111]">{data.headlinePre}</p>
              <div role="heading" aria-level="2" className="h2 origin-left scale-y-110 scale-x-90 uppercase">
                <span className="text-[#111111]">{titleDark} </span>
                <span className="text-hero-blue">{titleAccent}</span>
              </div>
            </div>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-[#111111]">{data.subhead}</p>

          <ExpandGrid
          className="mt-6 grid gap-5" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
          limit={cols * 2}
          label={data.viewMoreLabel}
          wrapClass="mt-6 flex justify-center"
          buttonClass="btn-text flex items-center gap-2 rounded-md border-2 border-hero-blue bg-white/70 px-6 py-2.5 uppercase text-hero-blue backdrop-blur-md transition hover:bg-hero-blue hover:text-white"
        >
            {data.cards.map((c) => (
              <VariantCard key={c.number} c={c} data={data} sizes="33vw" tab="h-8 px-3 text-sm" title="text-base" />
            ))}
        </ExpandGrid>

          <div className="mt-4">
            <FootNote data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
