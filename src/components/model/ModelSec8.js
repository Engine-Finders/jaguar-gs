"use client";

import Image from "next/image";

import { useRef, useState } from "react";
import Icon from "@/components/reusable/Icon";
import { GoogleG, TrustpilotMark } from "@/components/reusable/BrandLogos";
import Link from "next/link";

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" className="h-3.5 w-3.5 fill-white text-white" />
      ))}
    </div>
  );
}

// Long model names ("Land Rover Range Rover Evoque") run into the logo in the corner, so over MAX_NAME
// characters the leading brand word is dropped ("Range Rover Evoque"); anything still longer is cut with an ellipsis.
const MAX_NAME = 22;
function shortName(name) {
  let n = name.trim();
  if (n.length > MAX_NAME) n = n.replace(/^(Land Rover|Mercedes-Benz|Mercedes|Jaguar|BMW)\s+/i, "");
  return n.length > MAX_NAME ? `${n.slice(0, MAX_NAME - 1).trimEnd()}…` : n;
}

function renderTitleLine(line, defaultClassName) {
  const parts = line.split(/(\*\*.*?\*\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    const match = part.match(/^\*\*(.*)\*\*$/);
    return match ? (
      <span key={i} className="text-hero-blue">
        {shortName(match[1])}
      </span>
    ) : (
      <span key={i} className={defaultClassName}>
        {part}
      </span>
    );
  });
}

export default function ModelSec8({ data }) {
  const [line1, line2] = data.headline.split("|");
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    const ratio = el.scrollLeft / maxScroll;
    setActiveIndex(Math.round(ratio * (data.reviews.length - 1)));
  }

  return (
    <section className="theme-dark relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        <Image src="/brand/logo-icon.webp" alt="Jaguar Garage" width={512} height={173} className="h-14 w-auto absolute right-4 top-4" sizes="120px" />

        <div className="relative px-4 pb-8 pt-8">
          <h2 className="h2 max-w-[68%] origin-left scale-y-110 scale-x-90 uppercase">
            <span className="block text-white">{renderTitleLine(line1, "text-white")}</span>
            <span className="block text-hero-blue">{renderTitleLine(line2, "text-hero-blue")}</span>
          </h2>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2"
          >
            {data.reviews.map((r) => (
              <div
                key={r.name}
                className="glow-card--sm relative flex min-h-64 w-[82%] shrink-0 snap-center flex-col overflow-hidden rounded-2xl p-5"
                style={{
                  border: "1px solid rgba(255,255,255,0.22)",
                  boxShadow: "0 -8px 18px -8px rgba(255,255,255,0.3), 0 18px 36px -18px rgba(0,0,0,0.9)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 25%, transparent 48%)",
                  }}
                />

                <div className="relative flex items-center justify-between">
                  <Stars />
                  {r.platform === "google" ? (
                    <GoogleG className="h-5 w-5" />
                  ) : (
                    <TrustpilotMark className="h-5 w-5" />
                  )}
                </div>
                <p className="mt-4 text-base font-bold text-white">{r.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-white">&ldquo;{r.text}&rdquo;</p>
                <div className="relative mt-auto flex items-center gap-2 border-t border-white/15 pt-4">
                <Icon name="shield-check" className="h-4 w-4 shrink-0 text-white" />
                <p className="label-text tracking-wide text-white/90">{r.tag}</p>
              </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-1.5">
            {data.reviews.map((r, i) => (
              <span
                key={r.name}
                className={`rounded-full transition-all ${i === activeIndex ? "h-2 w-6 bg-white" : "h-2 w-2 bg-white/25"}`}
              />
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <Link href="/our-reviews" className="btn-text card-corner-glare relative flex w-full items-center justify-center gap-2 rounded-lg border border-white/25 bg-[#101010] px-6 py-3.5 uppercase text-white transition duration-200 hover:-translate-y-0.5 hover:brightness-110">
              Check All Our Reviews <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
      <div className="pointer-events-none absolute -top-2 right-[18%] flex h-48 gap-3" style={{ transform: "skewX(-24deg)" }} aria-hidden="true">
        <span className="chrome-bar-b w-3 opacity-70" />
        <span className="chrome-bar-a w-6" />
        <span className="chrome-bar-c w-2 opacity-70" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-start gap-5 pt-8">
          <Image src="/brand/logo-icon.webp" alt="Jaguar Garage" width={512} height={173} className="h-14 w-auto mt-2" sizes="120px" />
          <div role="heading" aria-level="2" className="h2 origin-left scale-y-110 scale-x-90 uppercase">
            <span className="block text-white">{renderTitleLine(line1, "text-white")}</span>
            <span className="block text-hero-blue">{renderTitleLine(line2, "text-hero-blue")}</span>
          </div>
        </div>

        <div className="mt-6 grid gap-3" style={{ gridTemplateColumns: `repeat(${data.reviews.length}, minmax(0, 1fr))` }}>
          {data.reviews.map((r) => (
            <div
              key={r.name}
              className="glow-card--sm relative flex min-h-72 flex-col overflow-hidden rounded-xl p-5"
              style={{
                border: "1px solid rgba(255,255,255,0.22)",
                boxShadow: "0 -8px 18px -8px rgba(255,255,255,0.3), 0 18px 36px -18px rgba(0,0,0,0.9)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 25%, transparent 48%)",
                }}
              />

              <div className="relative flex items-center justify-between">
                <Stars />
                {r.platform === "google" ? (
                  <GoogleG className="h-5 w-5" />
                ) : (
                  <TrustpilotMark className="h-5 w-5" />
                )}
              </div>
              <p className="mt-4 text-base font-bold text-white">{r.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-white">&ldquo;{r.text}&rdquo;</p>
              <div className="relative mt-auto flex items-center gap-2 border-t border-white/15 pt-4">
                <Icon name="shield-check" className="h-4 w-4 shrink-0 text-white" />
                <p className="label-text tracking-wide text-white/90">{r.tag}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-center gap-4">
          <Link href="/our-reviews" className="btn-text card-corner-glare relative flex items-center justify-center gap-2 rounded-md border border-white/25 bg-[#101010] px-6 py-3 text-white transition hover:-translate-y-0.5">
            Check All Our Reviews <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}
