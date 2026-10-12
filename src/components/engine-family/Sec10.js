import { useId } from "react";
import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import JaguarLogo from "@/components/reusable/JaguarLogo";

const HEX_POINTS = "50,3 95,26 95,74 50,97 5,74 5,26";

function HexIcon({ icon, boxClass, iconClass }) {
  // each hexagon needs its own gradient id: a shared id resolves to the first one in the DOM, which sits in the hidden mobile layout
  const gid = `hex-${useId().replace(/:/g, "")}`;
  return (
    <div className={`relative shrink-0 ${boxClass}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a1a1c" />
            <stop offset="30%" stopColor="#8e8e93" />
            <stop offset="55%" stopColor="#f0f0f2" />
            <stop offset="100%" stopColor="#2a2a2d" />
          </linearGradient>
        </defs>
        <polygon points={HEX_POINTS} fill="#ffffff" stroke={`url(#${gid})`} strokeWidth="3" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon name={icon} className={`${iconClass} text-[#111111]`} />
      </div>
    </div>
  );
}

function Dash({ className = "" }) {
  return (
    <span className={`flex gap-1 ${className}`} aria-hidden="true">
      <span className="chrome-bar-c h-0.5 w-8" />
      <span className="chrome-bar-c h-0.5 w-5" />
      <span className="chrome-bar-b h-0.5 w-3" />
      <span className="chrome-bar-a h-0.5 w-2" />
    </span>
  );
}

function ViewCard({ c, compact = false }) {
  return (
    <div
      className={`rounded-2xl bg-white ${compact ? "p-4" : "p-8"}`}
      style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 10px 28px -14px rgba(0,0,0,0.22)", border: "1px solid rgba(0,0,0,0.06)" }}
    >
      {/* badge + title on one row; the body then runs the full card width, using the space under the badge */}
      <div className={`flex items-center ${compact ? "gap-3" : "gap-6"}`}>
        <HexIcon icon={c.icon} boxClass={compact ? "h-16 w-16" : "h-28 w-28"} iconClass={compact ? "h-8 w-8" : "h-14 w-14"} />
        <div className="min-w-0">
          <p className="origin-left scale-y-110 scale-x-90 font-title font-extrabold italic uppercase leading-tight text-[#111111]" style={{ fontSize: compact ? "16px" : "22px" }}>
            {c.title}
          </p>
          <Dash className="mt-2" />
        </div>
      </div>
      <p className={`text-[#111111] ${compact ? "mt-3 text-xs leading-relaxed" : "mt-5 text-sm leading-relaxed"}`}>{c.body}</p>
    </div>
  );
}

function InfoBar({ data, compact = false }) {
  const checks = data.scopeChecks || [];
  return (
    <div
      className={`rounded-2xl bg-white ${compact ? "p-4" : "flex items-stretch gap-0 px-6 py-5"}`}
      style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 10px 28px -14px rgba(0,0,0,0.22)" }}
    >
      <div className="flex shrink-0 items-center gap-4">
        <span className={`flex shrink-0 items-center justify-center rounded-full border-2 border-[#111111] font-serif font-bold text-[#111111] ${compact ? "h-9 w-9 text-base" : "h-14 w-14 text-2xl"}`}>i</span>
        <div className={compact ? "" : "border-l border-black/10 pl-5 pr-8"}>
          <p className="origin-left scale-y-110 scale-x-90 font-title font-extrabold italic uppercase leading-tight text-[#111111]" style={{ fontSize: compact ? "15px" : "24px" }}>
            {data.titleBigPost.trim()} REBUILD INFORMATION
          </p>
          <p className={`text-[#111111] ${compact ? "text-xs" : "text-sm"}`}>Typical rebuild scope:</p>
        </div>
      </div>
      <div className={compact ? "mt-3 flex flex-wrap gap-x-4 gap-y-2" : "grid flex-1 items-center divide-x divide-black/10"} style={compact ? undefined : { gridTemplateColumns: `repeat(${Math.max(checks.length, 1)}, minmax(0, 1fr))` }}>
        {checks.map((s) => (
          <span key={s} className={`flex items-center gap-2.5 text-[#111111] ${compact ? "text-xs" : "px-6 text-sm"}`}>
            <Icon name="check" className={`shrink-0 rounded-full border border-[#111111] ${compact ? "h-4 w-4" : "h-6 w-6"}`} />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function TypicalCard({ c, compact = false }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl" style={{ background: "linear-gradient(180deg, rgba(30,30,33,0.9) 0%, rgba(14,14,16,0.95) 100%)", border: "1px solid rgba(255,255,255,0.16)" }}>
      <div className={`relative w-full ${compact ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image src={c.image} alt={c.title} fill className="object-cover" sizes={compact ? "100vw" : "260px"} />
        <span className="absolute left-2 top-2 rounded border border-white/30 bg-black/50 px-2 py-0.5 text-xs font-bold text-white backdrop-blur-sm">{c.number}</span>
      </div>
      <div className={compact ? "p-3" : "px-5 pb-6 pt-5"}>
        <p className="origin-left scale-y-110 scale-x-90 font-title font-extrabold italic uppercase leading-tight text-white" style={{ fontSize: compact ? "14px" : "17px" }}>{c.title}</p>
        <p className={`mt-3 text-white/90 ${compact ? "text-xs leading-relaxed" : "text-[13px] leading-6"}`}>{c.body}</p>
      </div>
    </div>
  );
}

function ScopeBar({ ty, compact = false }) {
  const scope = (
    <div className="flex min-w-0 flex-1 items-start gap-4">
      <span className={`flex shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/5 ${compact ? "h-10 w-10" : "h-14 w-14"}`}>
        <Icon name="gear" className={compact ? "h-5 w-5 text-white" : "h-8 w-8 text-white"} />
      </span>
      <div className="min-w-0">
        <p className="origin-left scale-y-110 scale-x-90 font-title font-extrabold italic uppercase leading-tight text-white" style={{ fontSize: compact ? "14px" : "18px" }}>{ty.scope?.label}</p>
        <p className={`mt-1 text-white ${compact ? "text-xs leading-snug" : "text-sm leading-snug"}`}>{ty.scope?.text}</p>
      </div>
    </div>
  );
  const price = (
    <>
      <p className="text-xs uppercase tracking-wide text-white">{ty.startingFromLabel}</p>
      <p className={`font-extrabold leading-tight text-chrome ${compact ? "text-3xl" : "text-5xl"}`}>{ty.startingFromPrice}</p>
    </>
  );

  if (compact) {
    return (
      <div className="glass-card-dark rounded-2xl p-4">
        {scope}
        <div className="mt-4 border-t border-white/10 pt-3 text-center">{price}</div>
      </div>
    );
  }

  // same column template as the grid above (0.9fr | 1.4fr, gap-10) with a 3-col, gap-4 inner grid like the cards,
  // so the price lands directly under the middle card
  return (
    <div className="glass-card-dark grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-10 rounded-2xl">
      <div className="flex items-center py-6 pl-8">{scope}</div>
      <div className="grid grid-cols-3 gap-4 py-4">
        <span aria-hidden="true" />
        <div className="flex flex-col items-center justify-center border-l border-white/10 text-center">{price}</div>
        <span aria-hidden="true" />
      </div>
    </div>
  );
}

export default function Sec10({ data }) {
  const ty = data.typical;

  return (
    <>
      {/* ============ our workshop view ============ */}
      <section className="theme-light relative overflow-hidden" style={{ backgroundColor: "#eef0f1" }}>
        {/* ===== mobile ===== */}
        <div className="relative md:hidden">
          <div className="relative px-4 pt-7">
            <JaguarLogo className="h-9" />
            <p className="mt-3 text-lg font-extrabold italic uppercase text-[#555555]">{data.titlePre}</p>
            <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
              <span className="text-chrome-ink">
                {data.titleBigPre}
                {data.titleBigHighlight}
                {data.titleBigPost}
              </span>
            </h2>
            <Dash className="mt-3" />
            <div className="mt-3 space-y-1">
              {data.subtext.map((l) => (
                <p key={l} className="text-xs leading-snug text-[#111111]">
                  {l}
                </p>
              ))}
            </div>
          </div>

          <div className="relative mt-3 aspect-[520/330] w-full overflow-hidden">
            <Image src={data.imageMobile || "/engine/sec9b_m3.webp"} alt="Jaguar engine on a steel workshop table" fill className="object-cover object-right" sizes="100vw" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-linear-to-b from-[#eef0f1] to-transparent" />
          </div>

          <div className="relative space-y-3 px-4 pb-6 pt-3">
            {data.columns.map((c) => (
              <ViewCard key={c.title} c={c} compact />
            ))}
            <InfoBar data={data} compact />
          </div>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden overflow-hidden md:block">
          <div className="absolute inset-0">
            <Image src={data.image || "/engine/sec9b.webp"} alt="Jaguar engine on a steel workshop table" fill className="object-cover object-right-top" sizes="100vw" />
          </div>

          <div className="relative mx-auto w-[min(72rem,calc(100%-2rem))] pb-8 pt-10 sm:w-[min(72rem,calc(100%-3rem))] lg:w-[min(72rem,calc(100%-4rem))]">
            <JaguarLogo className="h-14" />
            <div className="max-w-[56%] pl-4">
              <p className="mt-4 text-2xl font-extrabold italic uppercase text-[#555555]">{data.titlePre}</p>
              <h2 className="h2 origin-left scale-y-110 scale-x-90 whitespace-nowrap uppercase">
                <span className="text-chrome-ink">
                  {data.titleBigPre}
                  {data.titleBigHighlight}
                  {data.titleBigPost}
                </span>
              </h2>
              <Dash className="mt-4" />
              <div className="mt-5 space-y-1">
                {data.subtext.map((l) => (
                  <p key={l} className="text-sm text-[#111111]">
                    {l}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-5">
              {data.columns.map((c) => (
                <ViewCard key={c.title} c={c} />
              ))}
            </div>
            <div className="mt-5">
              <InfoBar data={data} />
            </div>
          </div>
        </div>
      </section>

      {/* ============ a typical rebuild ============ */}
      <section className="theme-dark relative overflow-hidden" style={{ backgroundColor: "#07080a" }}>
        {/* ===== mobile ===== */}
        <div className="relative px-4 py-7 md:hidden">
          <p className="text-lg font-extrabold italic uppercase text-white/85">{ty.kicker}</p>
          <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
            <span className="text-chrome">{ty.title}</span>
          </h2>
          <Dash className="mt-3" />
          <p className="mt-4 text-xs leading-relaxed text-white">{ty.intro}</p>
          {ty.body && <p className="mt-3 text-xs leading-relaxed text-white">{ty.body}</p>}

          <div className="mt-5 grid grid-cols-1 gap-3">
            {(ty.cards || []).map((c) => (
              <TypicalCard key={c.number} c={c} compact />
            ))}
          </div>
          <div className="mt-4">
            <ScopeBar ty={ty} compact />
          </div>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden px-4 py-12 sm:px-6 md:block lg:px-8">
          <div className="relative mx-auto max-w-6xl">
            <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-10">
              <div>
                <p className="text-xl font-extrabold italic uppercase text-white/85">{ty.kicker}</p>
                <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
                  <span className="text-chrome">{ty.title}</span>
                </h2>
                <Dash className="mt-4" />
                <p className="mt-5 text-sm leading-relaxed text-white">{ty.intro}</p>
                {ty.body && <p className="mt-4 text-sm leading-relaxed text-white">{ty.body}</p>}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {(ty.cards || []).map((c) => (
                  <TypicalCard key={c.number} c={c} />
                ))}
              </div>
            </div>
            <div className="mt-8">
              <ScopeBar ty={ty} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
