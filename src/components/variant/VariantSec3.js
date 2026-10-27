import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/reusable/Icon";
import JaguarLogo from "@/components/reusable/JaguarLogo";
import QuoteLink from "@/components/shared/QuoteLink";

const BADGE = "inline-block w-fit rounded-md bg-linear-to-b from-[#4a4a4c] to-[#141416] px-3 py-1 font-extrabold text-white shadow-sm";

function Tile({ t, data, compact = false }) {
  const Badge = t.href ? Link : "span";
  return (
    <div className={`glass-card flex flex-col rounded-xl ${compact ? "p-2" : "p-4"}`}>
      <div className="flex items-center justify-between gap-2">
        <Badge {...(t.href ? { href: t.href } : {})} className={`${BADGE} ${compact ? "text-[10px]" : "text-sm"}`}>
          {t.badge}
        </Badge>
        <p className={`truncate font-bold text-[#111111] ${compact ? "text-[9px]" : "text-sm"}`}>{t.label}</p>
      </div>
      <div className={`relative mx-auto w-full ${compact ? "my-1.5 h-14" : "my-3 h-28"}`}>
        <Image src={data.engineImage} alt={`${t.badge} engine`} fill className="object-contain" sizes={compact ? "33vw" : "200px"} />
      </div>
      <div className="mt-auto text-center">
        {t.small && <p className={`font-semibold text-[#111111] ${compact ? "text-[10px]" : "text-base"}`}>{t.small}</p>}
        <p className={`font-extrabold leading-tight text-[#111111] ${t.small ? (compact ? "text-base" : "text-3xl") : compact ? "text-[11px]" : "text-xl"}`}>{t.big}</p>
        {t.sub && <p className={`mt-0.5 text-[#333333] ${compact ? "text-[9px] leading-tight" : "text-sm"}`}>{t.sub}</p>}
      </div>
    </div>
  );
}

export default function VariantSec3({ data }) {
  const code = data.cards[0]?.code;
  const notes = data.cards.length === 1 ? [{ icon: "layers", text: `${code} sits on a single rebuild tier.` }, ...data.notes] : data.notes;

  return (
    <section className="theme-light relative overflow-hidden">
      {/* silver diagonal sweep, top-right of the section */}
      <div
        className="pointer-events-none absolute -right-6 -top-6 flex h-40 gap-4 opacity-90"
        style={{ transform: "skewX(-24deg)", transformOrigin: "top right" }}
        aria-hidden="true"
      >
        <span className="chrome-bar-a w-10 opacity-60" />
        <span className="chrome-bar-b w-4 opacity-70" />
      </div>

      {/* ===== mobile ===== */}
      <div className="relative px-4 pb-8 pt-7 md:hidden">
        <div className="flex items-start gap-3">
          <JaguarLogo className="mt-1 h-8" />
          <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
            <span className="block text-[#111111]">{data.headlinePre}</span>
            <span className="block text-hero-blue">{data.headlineHighlight}</span>
          </h2>
        </div>

        <p className="mt-2 text-sm text-[#111111]">
          {data.startingFromLabel} <span className="text-xl font-extrabold">{data.startingFromPrice}</span>
        </p>
        <span className="mt-2 block h-0.5 w-32 chrome-bar-c" />

        <div className="mt-4 grid grid-cols-3 gap-2">
          {data.tiles.map((t) => (
            <Tile key={t.label} t={t} data={data} compact />
          ))}
        </div>

        <div className="glass-card mt-3 divide-y divide-black/10 rounded-xl px-4">
          {notes.map((n) => (
            <div key={n.text} className="flex items-start gap-3 py-3.5">
              <Icon name={n.icon} className="h-7 w-7 shrink-0 text-[#111111]" />
              <p className="text-sm text-[#111111]">{n.text}</p>
            </div>
          ))}
        </div>

        <QuoteLink
          href={data.cta.href}
          className="mt-3 flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-linear-to-b from-[#2a2a2c] to-[#0d0d0d] px-3 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
        >
          <Icon name={data.cta.icon} className="h-5 w-5 shrink-0" />
          {data.cta.label} <span aria-hidden>→</span>
        </QuoteLink>

        {data.warning && (
        <div className="theme-dark relative mt-5 overflow-hidden rounded-xl" style={{ backgroundColor: "#060a0b" }}>
          <div className="relative p-4">
            <div className="flex items-start gap-2">
              <Icon name="warning" className="mt-0.5 h-6 w-6 shrink-0 text-white" />
              <div>
                <h3 className="h3 origin-left scale-y-110 scale-x-90 uppercase">
                  <span className="text-white">{data.warning.titlePre}</span>
                  <span className="text-hero-blue">{data.warning.titleHighlight}</span>
                </h3>
                <span className="mt-2 block h-0.5 w-20 chrome-bar-a" />
              </div>
            </div>

            <div className="mt-3 space-y-3">
              {data.warning.paragraphs.map((p, i) => (
                <p key={i} className="text-xs leading-snug text-white">
                  {p}
                </p>
              ))}
            </div>

            {data.warning.source && (
              <div className="mt-4 flex items-center gap-2 border-t border-white/15 pt-3">
                <Icon name="info" className="h-4 w-4 shrink-0 text-white" />
                <p className="label-text italic text-white/85">{data.warning.source}</p>
              </div>
            )}
          </div>
        </div>
        )}
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
        <div className="relative mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <JaguarLogo className="h-11" />
            <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
              <span className="text-[#111111]">{data.headlinePre} </span>
              <span className="text-hero-blue">{data.headlineHighlight}</span>
            </h2>
          </div>
          <p className="mt-2 text-lg text-[#111111]">
            {data.startingFromLabel} <span className="text-2xl font-extrabold">{data.startingFromPrice}</span>
          </p>
          <span className="mt-2 block h-0.5 w-44 chrome-bar-c" />

          <div className="mt-6 grid grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,1.25fr)] items-stretch gap-5">
            {data.tiles.map((t) => (
              <Tile key={t.label} t={t} data={data} />
            ))}

            <div className="flex flex-col gap-4">
              <div className="glass-card flex flex-1 flex-col justify-center divide-y divide-black/10 rounded-xl px-5">
                {notes.map((n) => (
                  <div key={n.text} className="flex items-start gap-3.5 py-5">
                    <Icon name={n.icon} className="h-7 w-7 shrink-0 text-[#111111]" />
                    <p className="text-sm leading-snug text-[#111111]">{n.text}</p>
                  </div>
                ))}
              </div>

              <QuoteLink
                href={data.cta.href}
                className="flex items-center justify-center gap-3 whitespace-nowrap rounded-xl border border-white/10 bg-linear-to-b from-[#2a2a2c] to-[#0d0d0d] px-4 py-5 text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
              >
                <Icon name={data.cta.icon} className="h-7 w-7 shrink-0" />
                {data.cta.label} <span aria-hidden>→</span>
              </QuoteLink>
            </div>
          </div>

          {data.warning && (
          <div className="theme-dark relative mt-6 overflow-hidden rounded-2xl" style={{ backgroundColor: "#060a0b" }}>
            {/* photo sits right of the diagonal chrome stripe; the copy stays on the black to its left */}
            <div className="absolute inset-y-0 right-0 w-[64%]">
              <div className="absolute inset-0 translate-x-[24%]">
                <Image src={data.warning.bgImage} alt="Jaguar Ingenium timing chain mechanism" fill className="object-cover object-right" sizes="740px" />
              </div>
            </div>

            <div className="relative px-8 py-7 lg:px-10">
              <div className="flex items-center gap-3">
                <Icon name="warning" className="h-10 w-10 shrink-0 text-white" />
                <div>
                  <h3 className="h3 origin-left scale-y-110 scale-x-90 uppercase">
                    <span className="text-white">{data.warning.titlePre}</span>
                    <span className="text-hero-blue">{data.warning.titleHighlight}</span>
                  </h3>
                  <span className="mt-2 block h-0.5 w-32 chrome-bar-a" />
                </div>
              </div>

              <div className="max-w-[60%]">
              <div className="mt-4 space-y-4">
                {data.warning.paragraphs.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-white">
                    {p}
                  </p>
                ))}
              </div>

              {data.warning.source && (
                <div className="mt-5 flex items-center gap-2.5 border-t border-white/15 pt-3">
                  <Icon name="info" className="h-5 w-5 shrink-0 text-white" />
                  <p className="text-xs italic text-white/85">{data.warning.source}</p>
                </div>
              )}
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
