"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import JaguarStripe from "@/components/reusable/JaguarStripe";
import RegLookupForm from "@/components/reusable/RegLookupForm";
import { GoogleG, TrustpilotMark } from "@/components/reusable/BrandLogos";
import Link from "next/link";

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className="h-3.5 w-3.5 fill-white text-white" />
      ))}
    </div>
  );
}

export default function VariantSec7({ data }) {
  const { reviews, coverage, whyChoose } = data;
  const whyChooseWords = [
    ...whyChoose.titlePre.trim().split(/\s+/).map((w) => ({ w, highlight: false })),
    ...whyChoose.titleHighlight.trim().split(/\s+/).map((w) => ({ w, highlight: true })),
  ];
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    const ratio = el.scrollLeft / maxScroll;
    setActiveIndex(Math.round(ratio * (reviews.items.length - 1)));
  }

  return (
    <>
      {/* ============ reviews ============ */}
      <section className="theme-dark relative overflow-hidden">
        {/* ===== mobile ===== */}
        <div className="relative md:hidden">
          <div className="relative px-4 pb-8 pt-8">
          <h2 className="h2 text-white uppercase">
            <JaguarStripe className="float-left mr-2 mt-0.5 h-6 w-12 shrink-0" />
            {reviews.titlePre}
            <span className="text-hero-blue">{reviews.titleHighlight}</span>
          </h2>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="no-scrollbar -mx-4 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2"
          >
            {reviews.items.map((r) => (
              <div
                key={r.name}
                className="glass-card-dark relative flex min-h-56 w-[82%] shrink-0 snap-center flex-col overflow-hidden rounded-2xl p-5"
              >
                <div className="relative flex items-center justify-between">
                  <Stars />
                  {r.platform === "google" ? <GoogleG className="h-5 w-5" /> : <TrustpilotMark className="h-5 w-5" />}
                </div>
                <p className="mt-3 text-base font-bold text-white">{r.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-white">&ldquo;{r.text}&rdquo;</p>
                <p className="label-text mt-auto pt-3 font-semibold text-white">{r.platform === "google" ? "See on Google" : "See on Trustpilot"} <span aria-hidden>→</span></p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-1.5">
            {reviews.items.map((r, i) => (
              <span
                key={r.name}
                className={`rounded-full transition-all ${i === activeIndex ? "h-2 w-6 bg-hero-blue" : "h-2 w-2 bg-white/25"}`}
              />
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <Link href="/our-reviews" className="btn-text relative flex w-full items-center justify-center gap-2 rounded-lg border glass-card-dark px-6 py-3.5 uppercase tracking-wide text-white transition hover:-translate-y-0.5">
              Check All Our Reviews <span aria-hidden>→</span>
            </Link>
          </div>
          </div>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
          <div
            className="pointer-events-none absolute -right-4 top-0 flex h-28 gap-3"
            style={{ transform: "skewX(-18deg)", transformOrigin: "top right" }}
            aria-hidden="true"
          >
            <span className="chrome-bar-a h-full w-5 opacity-50" />
            <span className="chrome-bar-b h-full w-5 opacity-50" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="flex items-center gap-3">
              <JaguarStripe className="h-10 w-16 shrink-0" />
              <h2 className="h2 text-white uppercase">
                {reviews.titlePre}
                <span className="text-hero-blue">{reviews.titleHighlight}</span>
              </h2>
            </div>

            <div className="relative mt-6">
            <button
              type="button"
              aria-label="Previous reviews"
              className="absolute -left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0d0d0d] text-white shadow-lg transition hover:bg-hero-blue"
            >
              <Icon name="chevron-left" className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next reviews"
              className="absolute -right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0d0d0d] text-white shadow-lg transition hover:bg-hero-blue"
            >
              <Icon name="chevron-right" className="h-4 w-4" />
            </button>
            <div className="grid grid-cols-6 gap-3">
              {reviews.items.map((r) => (
                <div
                  key={r.name}
                  className="glass-card-dark relative flex min-h-64 flex-col overflow-hidden rounded-xl p-4"
                >
                  <div className="relative flex items-center justify-between">
                    <Stars />
                    {r.platform === "google" ? <GoogleG className="h-4 w-4" /> : <TrustpilotMark className="h-4 w-4" />}
                  </div>
                  <p className="mt-3 text-sm font-bold text-white">{r.name}</p>
                  <p className="mt-2 text-xs leading-relaxed text-white">&ldquo;{r.text}&rdquo;</p>
                  <p className="label-text mt-auto pt-3 font-semibold text-white">{r.platform === "google" ? "See on Google" : "See on Trustpilot"} <span aria-hidden>→</span></p>
                </div>
              ))}
            </div>
            </div>

            <div className="mt-5 flex justify-center gap-4">
              <Link href="/our-reviews" className="glass-card-dark relative flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white uppercase transition hover:-translate-y-0.5">
                Check All Our Reviews <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ coverage banner ============ */}
      <section
        className="theme-light relative z-10 border-y border-black/10"
        style={{ boxShadow: "0 25px 45px -15px rgba(0,0,0,0.55), 0 -25px 45px -15px rgba(0,0,0,0.55)" }}
      >
        {/* ===== mobile ===== */}
        <div className="relative px-4 pb-8 pt-6 md:hidden">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-white shadow-sm">
              <Icon name={coverage.icon} className="h-6 w-6 text-hero-blue" />
            </span>
            <h2 className="h2 uppercase">
              <span className="block text-[#111111]">{coverage.titlePre}</span>
              <span className="block text-hero-blue">{coverage.titleHighlight}</span>
            </h2>
          </div>

          <p className="mt-3 text-xs text-[#111111]">{coverage.body}</p>

          <div className="mt-4">
            <RegLookupForm buttonLabel={coverage.buttonLabel} stacked hideButton />
            <button
              type="button"
              className="mt-3 flex h-11 w-full items-center justify-center rounded-sm border-2 border-hero-blue bg-hero-blue text-sm font-bold text-white transition-colors hover:bg-white hover:text-hero-blue"
            >
              {coverage.buttonLabel} →
            </button>
          </div>

          <div className="mt-3 flex items-center justify-center gap-3">
            {coverage.ticks.map((t) => (
              <span key={t} className="flex items-center gap-1.5 whitespace-nowrap text-xs font-medium text-[#111111]">
                <Icon name="check" className="h-4 w-4 shrink-0 rounded-full border border-hero-blue text-hero-blue" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden overflow-hidden md:block">
          <div className="absolute inset-0">
            <Image src={coverage.image} alt="Jaguar front grille" fill className="object-cover object-right" sizes="100vw" />
            <div className="absolute inset-0 bg-linear-to-r from-white via-white/70 to-transparent" />
          </div>

          <div className="relative mx-auto flex items-center gap-8 w-[min(72rem,calc(100%-2rem))] sm:w-[min(72rem,calc(100%-3rem))] lg:w-[min(72rem,calc(100%-4rem))] py-10">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm">
              <Icon name={coverage.icon} className="h-8 w-8 text-hero-blue" />
            </span>

            <div className="shrink-0 border-r border-black/10 pr-8">
              <h2 className="h2 uppercase">
                <span className="block text-[#111111]">{coverage.titlePre}</span>
                <span className="block text-hero-blue">{coverage.titleHighlight}</span>
              </h2>
              <p className="mt-2 max-w-xs text-sm text-[#111111]">{coverage.body}</p>
            </div>

            <div className="max-w-md flex-1">
              <RegLookupForm buttonLabel={coverage.buttonLabel} row />
              <div className="mt-3 flex items-center gap-4">
                {coverage.ticks.map((t, i) => (
                  <span key={t} className="flex items-center gap-3 text-sm font-medium text-[#111111]">
                    {i > 0 && <span className="h-1 w-1 rounded-full bg-[#111111]/30" aria-hidden="true" />}
                    <span className="flex items-center gap-1.5">
                      <Icon name="check" className="h-4 w-4 shrink-0 rounded-full border border-hero-blue text-hero-blue" />
                      {t}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ why choose us ============ */}
      <section className="theme-light relative overflow-hidden">
        {/* ===== mobile ===== */}
        <div className="relative px-4 pb-10 pt-7 md:hidden">
          <h2 className="h2 uppercase">
            <JaguarStripe className="float-left mr-2 mt-0.5 h-6 w-12 shrink-0" />
            {whyChooseWords.map((t, i) => (
              <span key={i} className={t.highlight ? "text-hero-blue" : "text-[#111111]"}>
                {t.w}
                {i < whyChooseWords.length - 1 ? " " : ""}
              </span>
            ))}
          </h2>

          <div className="mt-5 space-y-3.5">
            {whyChoose.items.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-hero-blue text-hero-blue" />
                <p className="text-xs leading-snug text-[#111111]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
          <div className="relative mx-auto max-w-6xl">
            <div className="flex items-center gap-3">
              <JaguarStripe className="h-10 w-16 shrink-0" />
              <h2 className="h2 uppercase">
                <span className="text-[#111111]">{whyChoose.titlePre}</span>
                <span className="text-hero-blue">{whyChoose.titleHighlight}</span>
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-x-10 gap-y-6">
              {whyChoose.items.map((item) => (
                <div key={item} className="flex min-w-0 items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 rounded-full border border-hero-blue text-hero-blue" />
                  <p className="min-w-0 text-sm leading-snug text-[#111111]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
