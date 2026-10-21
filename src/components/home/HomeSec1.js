import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import JaguarLogo from "@/components/reusable/JaguarLogo";
import RegLookupForm from "@/components/reusable/RegLookupForm";

// Glass panel shared by the mobile + desktop lookup cards — dark graphite on the left
// fading to brushed silver on the right, with a mirror sheen, per the reference.
const PANEL_BG =
  "linear-gradient(105deg, rgba(14,14,14,0.92) 0%, rgba(28,28,28,0.88) 38%, rgba(120,120,120,0.55) 64%, rgba(226,226,226,0.82) 100%)";
const PANEL_SHADOW =
  "shadow-[0_0_30px_rgba(255,255,255,0.18),0_30px_60px_-12px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.55)]";

function PanelSheen() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.7) 47%, rgba(255,255,255,0.7) 53%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -left-1/4 -top-10 h-24 w-[150%] opacity-60"
        style={{
          transform: "rotate(-4deg)",
          background: "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 80%)",
          filter: "blur(3px)",
        }}
      />
    </>
  );
}

function LookupNote({ children }) {
  return (
    <p className="label-text relative mt-3 flex items-center justify-center gap-2 text-center tracking-wide text-white/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
      <Icon name="shield-check" className="h-4 w-4 shrink-0" />
      {children}
    </p>
  );
}

export default function HomeSec1({ hero, lookup }) {
  const [line1, line2, line3] = hero.h1.split("|");

  return (
    <section id="find-my-jaguar" className="theme-dark relative z-10">
      {/* ===== mobile ===== */}
      <div className="md:hidden">
        <div className="relative w-full">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={hero.mobileImage}
              alt="Jaguar engine rebuild workshop"
              fill
              priority
              className="object-cover object-[80%_center]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-b from-hero-dark/60 via-hero-dark/10 to-hero-dark" />
            <div className="absolute inset-0 bg-linear-to-r from-hero-dark/85 via-hero-dark/30 to-transparent" />
          </div>

          {/* content flows normally so the hero's real height tracks whatever the text/box
              actually need on this device — no reserved overlap padding, no scroll past fold. */}
          <div className="relative flex flex-col px-4 pb-48 pt-6">
            <div className="w-[68vw]">
              <h1 className="h1 uppercase">
                <span className="block text-chrome">{line1}</span>
                <span className="block text-chrome-dim">{line2}</span>
                <span className="block text-chrome">{line3}</span>
              </h1>
              <span className="mt-3 block h-px w-24 bg-white/45" />
              <p className="body-text mt-3 text-white/85">{hero.subhead}</p>
            </div>

            <div
              id="hero-lookup"
              className={`absolute inset-x-4 bottom-0 z-10 translate-y-1/2 overflow-hidden rounded-2xl border border-white/45 p-3 backdrop-blur-xl ${PANEL_SHADOW}`}
              style={{ background: PANEL_BG }}
            >
              <PanelSheen />
              <div className="relative">
                <RegLookupForm
                  buttonLabel={lookup.buttonLabel}
                  compact
                  tight
                  darkButton
                  left={
                    <div className="shrink-0">
                      <h2 className="h3 flex items-start justify-center gap-2 uppercase not-italic text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                        <JaguarLogo className="h-[1.1em] w-[1.1em]" />
                        {lookup.h2}
                      </h2>
                      <p className="body-text mx-auto mt-1.5 max-w-xs text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                        {lookup.description}
                      </p>
                    </div>
                  }
                />
                <LookupNote>{lookup.note}</LookupNote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="hidden md:block">
        {/* hero visual: sized by the h1/subhead/CTA content; deliberately NOT overflow-hidden so the
            card below can bleed past its bottom edge */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden">
            <Image src={hero.image} alt="Jaguar engine rebuild workshop" fill priority className="object-cover object-right" sizes="100vw" />
            <div className="absolute inset-0 bg-linear-to-r from-hero-dark via-hero-dark/40 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-hero-dark/80 via-transparent to-transparent" />
          </div>

          <div className="relative mx-auto max-w-[76rem] px-4 pb-32 pt-8 sm:px-6 lg:px-8 lg:pt-12">
            <h1 className="h1 uppercase">
              <span className="block text-chrome">{line1}</span>
              <span className="block text-chrome-dim">{line2}</span>
              <span className="block text-chrome">{line3}</span>
            </h1>
            <span className="mt-5 block h-px w-52 bg-white/45" />
            <p className="body-text mt-5 max-w-md text-white/85">{hero.subhead}</p>

            <div
              id="hero-lookup"
              className={`absolute inset-x-0 bottom-0 z-10 mx-auto max-w-6xl translate-y-1/2 overflow-hidden rounded-3xl border border-white/55 p-4 backdrop-blur-xl sm:p-6 ${PANEL_SHADOW}`}
              style={{ background: PANEL_BG }}
            >
              <PanelSheen />
              <div className="relative">
                <RegLookupForm
                  buttonLabel={lookup.buttonLabel}
                  large
                  tight
                  darkButton
                  left={
                    <div className="shrink-0 sm:max-w-xs">
                      <h2 className="h3 flex items-start justify-center gap-2.5 uppercase not-italic text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] sm:justify-start">
                        <JaguarLogo className="h-[1.1em] w-[1.1em]" />
                        {lookup.h2}
                      </h2>
                      <p className="body-text mx-auto mt-2 max-w-xs text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] sm:mx-0">
                        {lookup.description}
                      </p>
                    </div>
                  }
                />
                <LookupNote>{lookup.note}</LookupNote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
