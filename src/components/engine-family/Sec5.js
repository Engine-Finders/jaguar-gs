"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import JaguarLogo from "@/components/reusable/JaguarLogo";
import JaguarStripe from "@/components/reusable/JaguarStripe";

const MOBILE_VISIBLE_COUNT = 6;

function WorkshopCard({ it, data, sizes, compact = false }) {
  return (
    <div className="neon-card neon-card--soft relative flex flex-col overflow-hidden rounded-xl">
      <div className={`relative ${compact ? "aspect-[4/3]" : "aspect-[4/3]"}`}>
        <Image src={it.image || data.image} alt={it.label} fill className="object-cover" sizes={sizes} />
        <span className={`absolute bottom-0 left-0 bg-hero-dark/90 font-extrabold text-white ${compact ? "px-2 py-1 text-[10px]" : "px-3 py-1.5 text-sm"}`}>
          {it.number}
        </span>
      </div>
      <div className={`flex-1 ${compact ? "px-2.5 py-2" : "px-3 py-3"}`} style={{ background: "rgba(14,14,16,0.92)" }}>
        <p className={`font-extrabold uppercase leading-tight text-white ${compact ? "text-[10px]" : "text-xs"}`}>{it.label}</p>
        {it.caption && <p className={`mt-1 leading-snug text-white/80 ${compact ? "text-[10px]" : "text-xs"}`}>{it.caption}</p>}
      </div>
    </div>
  );
}

function FootNote({ data, compact = false }) {
  return (
    <div className={`glass-card-dark relative flex items-center gap-3 overflow-hidden rounded-xl ${compact ? "py-3.5 pl-4 pr-9" : "px-6 py-5"}`}>
      <Icon name="camera" className={`shrink-0 text-white ${compact ? "h-6 w-6" : "h-8 w-8"}`} />
      <p className={`relative z-10 min-w-0 text-white ${compact ? "text-xs" : "text-sm"}`}>{data.footerNote}</p>
      <div
        className="pointer-events-none absolute bottom-0 right-0 z-0 flex gap-1.5"
        style={{ height: compact ? "40px" : "70px", transform: "skewX(-25deg)", transformOrigin: "bottom right" }}
        aria-hidden="true"
      >
        <span className={`h-full chrome-bar-a ${compact ? "w-3" : "w-5"}`} />
        <span className={`h-full chrome-bar-b ${compact ? "w-3" : "w-5"}`} />
      </div>
    </div>
  );
}

export default function Sec5({ data }) {
  const [showAll, setShowAll] = useState(false);
  const mobileItems = showAll ? data.items : data.items.slice(0, MOBILE_VISIBLE_COUNT);

  return (
    <section className="theme-dark relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative px-4 pb-10 pt-7 md:hidden">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <JaguarStripe className="h-6 w-12 shrink-0" />
            <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
              {data.titlePre}
              <span className="text-hero-blue">{data.titleHighlight}</span>
            </h2>
          </div>
          <JaguarLogo className="h-7" />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {mobileItems.map((it) => (
            <WorkshopCard key={it.number} it={it} data={data} sizes="50vw" compact />
          ))}
        </div>

        {data.items.length > MOBILE_VISIBLE_COUNT && (
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="btn-text glass-card-dark flex items-center gap-2 rounded-lg px-6 py-2.5 uppercase tracking-wide text-white transition-colors hover:bg-white/10"
            >
              {showAll ? "View Less" : data.viewMoreLabel}
              <span className={`transition-transform ${showAll ? "rotate-180" : ""}`} aria-hidden>
                ↓
              </span>
            </button>
          </div>
        )}

        <div className="mt-5">
          <FootNote data={data} compact />
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
        <div className="relative mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <JaguarStripe className="h-10 w-16 shrink-0" />
              <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
                {data.titlePre}
                <span className="text-hero-blue">{data.titleHighlight}</span>
              </h2>
            </div>
            <JaguarLogo className="h-12" />
          </div>

          <div className="mt-6 grid grid-cols-5 gap-4">
            {data.items.map((it) => (
              <WorkshopCard key={it.number} it={it} data={data} sizes="20vw" />
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <button className="glass-card-dark flex items-center gap-2 rounded-lg px-10 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10">
              {data.viewMoreLabel} <span aria-hidden>→</span>
            </button>
          </div>

          <div className="mt-6">
            <FootNote data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
