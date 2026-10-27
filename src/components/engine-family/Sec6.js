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
        <Icon key={i} name="star" className="h-3.5 w-3.5 fill-[#ffffff] text-[#ffffff]" />
      ))}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div>
      <JaguarStripe className="float-left mr-3 mt-1.5 h-10 w-16 shrink-0" />
      {children}
    </div>
  );
}

export default function Sec6({ data }) {
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
      <section className="theme-light relative overflow-hidden">
        {/* ===== mobile ===== */}
        <div className="relative md:hidden">
          <div className="relative px-4 pb-8 pt-8">
          <div className="overflow-hidden">
            <JaguarStripe className="float-left mr-2 mt-0.5 h-6 w-12 shrink-0" />
            <h2 className="h2 uppercase">
              <span className="text-[#111111]">{reviews.titlePre}</span>
              <span className="text-hero-blue">{reviews.titleHighlight}</span>
            </h2>
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="no-scrollbar -mx-4 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2"
          >
            {reviews.items.map((r) => (
              <div
                key={r.name}
                className="glow-card--sm relative flex min-h-56 w-[82%] shrink-0 snap-center flex-col overflow-hidden rounded-2xl p-5"
                style={{ background: "rgba(13,13,13,0.95)", border: "1px solid rgba(150,154,160,0.35)", boxShadow: "0 15px 35px -20px rgba(0,0,0,0.5)" }}
              >
                <div className="relative flex items-center justify-between">
                  <Stars />
                  {r.platform === "google" ? <GoogleG className="h-5 w-5" /> : <TrustpilotMark className="h-5 w-5" />}
                </div>
                <p className="mt-3 text-base font-bold text-white">{r.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-white">&ldquo;{r.text}&rdquo;</p>
                <p className="mt-auto pt-3 text-sm font-medium text-white underline underline-offset-4">{r.tag}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-1.5">
            {reviews.items.map((r, i) => (
              <span
                key={r.name}
                className={`rounded-full transition-all ${i === activeIndex ? "h-2 w-6 bg-hero-blue" : "h-2 w-2 bg-[#111111]/15"}`}
              />
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <Link href="/our-reviews" className="relative flex w-full items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wide text-[#111111] shadow-sm transition hover:-translate-y-0.5">
              Check All Our Reviews <span aria-hidden>→</span>
            </Link>
          </div>
          </div>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
          <div className="relative mx-auto max-w-6xl">
            <SectionTitle>
              <h2 className="h2 uppercase">
                <span className="text-[#111111]">{reviews.titlePre}</span>
                <span className="text-hero-blue">{reviews.titleHighlight}</span>
              </h2>
            </SectionTitle>

            <div className="relative mt-6">
            <button
              type="button"
              aria-label="Previous reviews"
              className="absolute -left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-hero-blue shadow-lg transition hover:bg-hero-blue hover:text-white"
            >
              <Icon name="chevron-left" className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next reviews"
              className="absolute -right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-hero-blue shadow-lg transition hover:bg-hero-blue hover:text-white"
            >
              <Icon name="chevron-right" className="h-4 w-4" />
            </button>
            <div className={`grid gap-3 ${reviews.items.length >= 6 ? "grid-cols-6" : "grid-cols-5"}`}>
              {reviews.items.map((r) => (
                <div
                  key={r.name}
                  className="glow-card--sm relative flex min-h-64 flex-col overflow-hidden rounded-xl p-4"
                  style={{ background: "rgba(13,13,13,0.95)", border: "1px solid rgba(150,154,160,0.35)", boxShadow: "0 15px 35px -20px rgba(0,0,0,0.5)" }}
                >
                  <div className="relative flex items-center justify-between">
                    <Stars />
                    {r.platform === "google" ? <GoogleG className="h-4 w-4" /> : <TrustpilotMark className="h-4 w-4" />}
                  </div>
                  <p className="mt-3 text-sm font-bold text-white">{r.name}</p>
                  <p className="mt-2 text-xs leading-relaxed text-white">&ldquo;{r.text}&rdquo;</p>
                  <p className="mt-auto pt-3 text-xs font-medium text-white underline underline-offset-4">{r.tag}</p>
                </div>
              ))}
            </div>
            </div>

            <div className="mt-5 flex justify-center gap-4">
              <Link href="/our-reviews" className="relative flex items-center justify-center gap-2 rounded-md border border-black/10 bg-white px-6 py-3 text-sm font-bold text-[#111111] shadow-sm transition hover:-translate-y-0.5">
                Check All Our Reviews <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ coverage banner ============ */}
      <section
        className="theme-light relative z-10 border-y border-black/10 bg-white"
        style={{ boxShadow: "0 25px 45px -15px rgba(0,0,0,0.55), 0 -25px 45px -15px rgba(0,0,0,0.55)" }}
      >
        {/* ===== mobile ===== */}
        <div className="relative px-4 py-6 md:hidden">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-white shadow-sm">
              <Icon name={coverage.icon} className="h-6 w-6 text-hero-blue" />
            </span>
            <h4 className="h4 uppercase">
              <span className="block text-[#111111]">{coverage.titlePre}</span>
              <span className="block text-hero-blue">{coverage.titleHighlight}</span>
            </h4>
          </div>

          <p className="mt-3 text-xs text-[#111111]">{coverage.body}</p>

          <div className="mt-4">
            <RegLookupForm buttonLabel={coverage.buttonLabel} stacked hideButton lightPlate smallText plateLabel="GB" placeholder="Search by Registration" />
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
            <div className="absolute inset-0 translate-x-[7%]">
              <Image src={coverage.image} alt="Jaguar front grille" fill className="object-cover object-right" sizes="100vw" />
            </div>
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
              <RegLookupForm buttonLabel={coverage.buttonLabel} row lightPlate smallText plateLabel="GB" placeholder="Search by Registration" />
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
        <div className="relative px-4 py-7 md:hidden">
          <h2 className="h2 uppercase">
            <JaguarStripe className="float-left mr-2 mt-0.5 h-6 w-12 shrink-0" />
            {whyChooseWords.map((t, i) => (
              <span key={i} className={t.highlight ? "text-hero-blue" : "text-[#111111]"}>
                {t.w}
                {i < whyChooseWords.length - 1 ? " " : ""}
              </span>
            ))}
          </h2>

          <div className="mt-5 space-y-3">
            {whyChoose.items.map((item) => (
              <div key={item.title} className="flex items-start gap-2.5">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-hero-blue text-hero-blue" />
                <p className="text-xs leading-snug text-[#111111]">{item.title}</p>
              </div>
            ))}
          </div>

        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
          <div className="relative mx-auto max-w-6xl">
            <SectionTitle>
              <h2 className="h2 uppercase">
                <span className="text-[#111111]">{whyChoose.titlePre}</span>
                <span className="text-hero-blue">{whyChoose.titleHighlight}</span>
              </h2>
            </SectionTitle>

            <div className="mt-8 columns-3 gap-x-10">
              {whyChoose.items.map((item) => (
                <div key={item.title} className="mb-5 flex min-w-0 break-inside-avoid items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 rounded-full border border-hero-blue text-hero-blue" />
                  <p className="min-w-0 text-sm leading-snug text-[#111111]">{item.title}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
