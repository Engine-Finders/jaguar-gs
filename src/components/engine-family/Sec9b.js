import Image from "next/image";
import Icon from "@/components/reusable/Icon";

// real glass: translucent white-tinted gradient, strong backdrop blur, bright rim, inner highlight and a soft top-left sheen
const GLASS_BASE = {
  backdropFilter: "blur(20px) saturate(140%)",
  WebkitBackdropFilter: "blur(20px) saturate(140%)",
  border: "1px solid rgba(255,255,255,0.28)",
  boxShadow: "0 22px 44px -20px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 0 24px rgba(255,255,255,0.06)",
};
const CARD = { ...GLASS_BASE, background: "linear-gradient(145deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.07) 38%, rgba(255,255,255,0.04) 100%)" };
const PANEL = { ...GLASS_BASE, background: "linear-gradient(145deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.03) 100%)" };

// uneven dark wash: overlapping radial patches, strongest behind the copy (top-left, mid-left, bottom), all fading to zero
const WASH =
  "radial-gradient(ellipse 55% 50% at 22% 22%, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%), radial-gradient(ellipse 48% 42% at 24% 62%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0) 100%), radial-gradient(ellipse 70% 32% at 40% 96%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%), radial-gradient(ellipse 30% 36% at 86% 70%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)";

function Dash() {
  return (
    <span className="flex gap-1" aria-hidden="true">
      <span className="chrome-bar-a h-0.5 w-8" />
      <span className="chrome-bar-a h-0.5 w-5" />
      <span className="chrome-bar-b h-0.5 w-3" />
    </span>
  );
}

// "AJ16 in the XJ (X300, 1994–1997)" -> heading + dimmed bracket
function ItemHeading({ it }) {
  return (
    <h3 className="h3 origin-left scale-y-110 scale-x-90 text-xl uppercase lg:text-3xl">
      <span className="text-white">
        {it.engine} in the {it.model}
      </span>{" "}
      {it.detail && <span className="text-hero-blue">({it.detail})</span>}
    </h3>
  );
}

function PriceRow({ it }) {
  return (
    <div className="mt-4 flex flex-wrap items-start gap-4">
      <div className="rounded-xl px-6 py-3 text-center" style={PANEL}>
        <p className="text-xs uppercase tracking-wide text-white">Starting from:</p>
        <p className="text-4xl font-extrabold leading-tight text-white">{it.price}</p>
      </div>
      {it.cta && (
        <div>
          <a
            href="#quote-form"
            className="flex items-center gap-2 whitespace-nowrap rounded-lg px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:brightness-125"
            style={PANEL}
          >
            {it.cta} <span aria-hidden>→</span>
          </a>
        </div>
      )}
    </div>
  );
}

function InfoCard({ card, compact = false }) {
  const rows = [
    { icon: "car", label: "MODEL", value: card.model },
    { icon: "engine", label: "ENGINE", value: card.engine },
    { icon: "calendar", label: "YEAR", value: card.year },
    { icon: "price", label: "STARTING FROM", value: card.price },
  ];
  return (
    <div className={`divide-y divide-white/15 rounded-2xl ${compact ? "px-4" : "px-7"}`} style={CARD}>
      {rows.map((r) => (
        <div key={r.label} className={`flex items-center gap-4 ${compact ? "py-3" : "py-6"}`}>
          <Icon name={r.icon} className={`shrink-0 text-white ${compact ? "h-7 w-7" : "h-11 w-11"}`} />
          <div className="min-w-0">
            <p className={`font-semibold uppercase tracking-wide text-white ${compact ? "text-xs" : "text-base"}`}>{r.label}</p>
            <p className={`text-white/90 ${compact ? "text-xs" : "text-lg"}`}>{r.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function NoteCard({ text, compact = false }) {
  if (!text) return null;
  const i = text.indexOf("?");
  const lead = i > -1 ? text.slice(0, i + 1) : "";
  const rest = i > -1 ? text.slice(i + 1).trim() : text;
  return (
    <div className={`flex items-start gap-3 rounded-xl ${compact ? "p-3" : "max-w-xl p-5"}`} style={PANEL}>
      <Icon name="info" className={`shrink-0 text-white ${compact ? "h-5 w-5" : "h-8 w-8"}`} />
      <p className={`text-white ${compact ? "text-xs" : "text-sm"}`}>
        {lead && <span className="font-bold">{lead} </span>}
        {rest}
      </p>
    </div>
  );
}

export default function Sec9b({ data }) {
  if (!data || !data.items?.length) return null;

  return (
    <section className="theme-dark relative overflow-hidden" style={{ backgroundColor: "#050507" }}>
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        <div className="relative px-4 pt-7">
          <p className="text-sm font-semibold italic uppercase text-white/80">{data.titlePre}</p>
          <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
            <span className="text-chrome">{data.titleHighlight}</span>
          </h2>
          <div className="mt-3">
            <Dash />
          </div>
        </div>

        <div className="relative mt-4 aspect-[600/310] w-full overflow-hidden">
          <Image src={data.imageMobile} alt="Classic Jaguar saloon in a dark garage" fill className="object-cover" sizes="100vw" />
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 15% 55%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)" }} aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-[#050507] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-[#050507] to-transparent" />
        </div>

        <div className="relative space-y-6 px-4 pb-8">
          {data.items.map((it) => (
            <div key={it.heading}>
              <ItemHeading it={it} />
              <p className="mt-3 text-xs leading-relaxed text-white">{it.body}</p>
              <PriceRow it={it} />
            </div>
          ))}
          <InfoCard card={data.card} compact />
          <NoteCard text={data.note} compact />
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden overflow-hidden md:block">
        <div className="absolute inset-0">
          <Image src={data.image} alt="Classic Jaguar saloon in a dark garage" fill className="object-cover" sizes="100vw" />
          <div className="pointer-events-none absolute inset-0" style={{ background: WASH }} aria-hidden="true" />
        </div>

        <div className="relative mx-auto w-[min(72rem,calc(100%-2rem))] py-14 sm:w-[min(72rem,calc(100%-3rem))] lg:w-[min(72rem,calc(100%-4rem))]">
          <div className="max-w-[56%]">
            <p className="text-lg font-semibold italic uppercase text-white/85">{data.titlePre}</p>
            <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
              <span className="text-chrome">{data.titleHighlight}</span>
            </h2>
            <div className="mt-3">
              <Dash />
            </div>

            <div className="mt-6 space-y-8">
              {data.items.map((it) => (
                <div key={it.heading}>
                  <ItemHeading it={it} />
                  <p className="mt-3 max-w-[78%] text-sm leading-relaxed text-white lg:text-base">{it.body}</p>
                  <PriceRow it={it} />
                </div>
              ))}
              <NoteCard text={data.note} />
            </div>
          </div>
        </div>

        {/* card sits at the far right, beside (not over) the car, like the reference */}
        <div className="absolute right-[3%] top-[16%] w-[21%] min-w-60">
          <InfoCard card={data.card} />
        </div>
      </div>
    </section>
  );
}
