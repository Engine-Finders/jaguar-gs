"use client";

import { useRef } from "react";
import Image from "next/image";
import JaguarLogo from "@/components/reusable/JaguarLogo";

export default function HomeSec9({ data }) {
  const trackRef = useRef(null);

  function scrollBy(dir) {
    trackRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" });
  }

  const mobileImages = data.images.slice(0, 9);

  return (
    <section className="theme-dark relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-hero-blue/10 blur-3xl" />

      {/* ===== mobile ===== */}
      <div className="relative px-4 py-8 md:hidden">
        <div className="mb-3 flex justify-center">
          <JaguarLogo className="h-9 w-9" />
        </div>
        <h2 className="h2 text-center uppercase text-white">
          <span className="block">Recently Completed</span>
          <span className="block text-chrome-dim">Jaguar Rebuilds</span>
        </h2>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {mobileImages.map((img, i) => (
            <div key={i} className="hud-card">
              <div className="hud-card-inner aspect-square">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="140px" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center gap-3">
          <a
            href={data.cta.href}
            className="block whitespace-nowrap rounded-md border border-white/35 bg-linear-to-b from-[#1c1c1c] to-[#080808] px-8 py-3 text-center text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-none hover:bg-white hover:text-[#111111]"
          >
            {data.cta.label} →
          </a>
          <span className="label-text flex items-center gap-2 uppercase tracking-wide text-white/70">
            {data.footerTagline}
          </span>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative mx-auto hidden max-w-6xl px-4 py-8 sm:px-6 md:block lg:px-8 lg:py-10">
        <div className="mb-3 flex justify-center">
          <JaguarLogo className="h-12 w-12" />
        </div>
        <h2 className="h2 text-center uppercase text-white">
          Recently Completed <span className="text-chrome-dim">Jaguar</span> Rebuilds
        </h2>

        <div className="relative mt-6">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="absolute -left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:flex lg:hidden"
          >
            ❮
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="absolute -right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:flex lg:hidden"
          >
            ❯
          </button>

          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-1 pb-2 lg:grid lg:grid-cols-5 lg:grid-rows-2 lg:overflow-visible"
          >
            {data.images.map((img, i) => (
              <div key={i} className="hud-card w-40 shrink-0 snap-start sm:w-48 lg:w-auto">
                <div className="hud-card-inner aspect-square">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="220px" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href={data.cta.href}
            className="block rounded-md border border-white/35 bg-linear-to-b from-[#1c1c1c] to-[#080808] px-10 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-none hover:bg-white hover:text-[#111111]"
          >
            {data.cta.label} →
          </a>
          <span className="h-6 w-px bg-white/20" />
          <span className="label-text flex items-center gap-2 uppercase tracking-wide text-white/70">
            {data.footerTagline}
          </span>
        </div>
      </div>
    </section>
  );
}
