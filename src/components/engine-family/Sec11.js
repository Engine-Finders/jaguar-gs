"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import useLeadForm, { LeadStatus } from "@/components/reusable/useLeadForm";
import JaguarLogo from "@/components/reusable/JaguarLogo";
import QuoteLink from "@/components/shared/QuoteLink";
import FormSelect from "@/components/reusable/FormSelect";

const OPTION_RESULT = ["Our rebuild service is exactly that.", "Our rebuild service covers this.", "That’s consistent with what our rebuild service delivers."];
const FEATURES = [
  { icon: "price", title: "FIXED PRICE", text: "Transparent quotes with no hidden extras." },
  { icon: "shield-check", title: "12-MONTH WARRANTY", text: "Unlimited mileage for total peace of mind." },
  { icon: "clock", title: "QUICK RESPONSE", text: "Most quotes returned within 30 minutes during working hours." },
];
const CMP_ICONS = ["piston", "engine", "calendar"];
const CIRCLE = "border border-white/50 bg-white/5 shadow-[0_0_14px_rgba(255,255,255,0.18)]";

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

function FaqRow({ item, isOpen, onToggle }) {
  return (
    <div className="px-5 py-4">
      <button type="button" onClick={onToggle} className="flex w-full items-center gap-3 text-left">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/8 text-sm font-bold text-[#111111]">?</span>
        <span className="flex-1 text-sm font-bold text-[#111111]">{item.q}</span>
        <span className={`relative flex h-5 w-5 shrink-0 items-center justify-center transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">
          <span className="absolute h-4 w-0.5 rounded-full bg-[#111111]" />
          <span className="absolute h-0.5 w-4 rounded-full bg-[#111111]" />
        </span>
      </button>
      {isOpen && <p className="mt-2 pl-11 text-sm leading-relaxed text-[#333333]">{item.a}</p>}
    </div>
  );
}

function Field({ name, icon, placeholder, type = "text" }) {
  return (
    <label className="relative block">
      {icon && <Icon name={icon} className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />}
      <input name={name} required
        type={type}
        placeholder={placeholder}
        className={`h-12 w-full rounded-lg border border-white/15 bg-white/5 pr-4 text-sm uppercase tracking-wide text-white outline-none placeholder:text-white/45 focus:border-white/50 ${icon ? "pl-10" : "pl-4"}`}
      />
    </label>
  );
}

function InfoCard({ card, compact = false }) {
  if (!card) return null;
  const rows = [
    { icon: "car", label: "MODEL", value: card.model },
    { icon: "engine", label: "ENGINE", value: card.engine },
    { icon: "calendar", label: "YEAR", value: card.year },
    { icon: "price", label: "STARTING FROM", value: card.price },
  ];
  return (
    <div className={`rounded-2xl bg-white/95 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] ${compact ? "divide-y divide-black/10 px-4" : "divide-y divide-black/10 px-5"}`}>
      {rows.map((r) => (
        <div key={r.label} className={`flex items-center gap-3 ${compact ? "py-2.5" : "py-3.5"}`}>
          <Icon name={r.icon} className={`shrink-0 text-[#111111] ${compact ? "h-6 w-6" : "h-8 w-8"}`} />
          <div className="min-w-0">
            <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#111111]">{r.label}</p>
            <p className={`text-[#333333] ${compact ? "text-xs" : "text-sm"}`}>{r.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function BoldMoney({ text }) {
  const parts = text.split(/(£[\d,]+|30 minutes)/);
  return parts.map((p, i) => (/^(£[\d,]+|30 minutes)$/.test(p) ? <strong key={i}>{p}</strong> : p));
}

export default function Sec11({ data }) {
  const { costBanner, comparison, options, faq, quote } = data;
  const [openIndex, setOpenIndex] = useState(() => new Set());

  function toggle(i) {
    setOpenIndex((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  const lead = useLeadForm();
  const handleSubmit = lead.handleSubmit;

  const faqAll = [...faq.faqLeft, ...faq.faqRight];

  return (
    <>
      {/* ============ engine rebuild cost ============ */}
      <section className="theme-light relative overflow-hidden" style={{ backgroundColor: "#e9e9e9" }}>
        {/* ===== mobile ===== */}
        <div className="relative md:hidden">
          <div className="relative px-4 pt-7">
            <JaguarLogo className="h-9" />
            <p className="mt-3 text-lg font-extrabold italic uppercase text-[#111111]">{costBanner.titlePre}</p>
            <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
              <span className="text-[#111111]">{costBanner.titleHighlight}</span>
              <span className="text-hero-blue">{costBanner.titlePost}</span>
            </h2>
            <Dash className="mt-3" />
          </div>
          <div className="relative mt-3 aspect-[584/388] w-full overflow-hidden">
            <Image src={costBanner.imageMobile} alt="Jaguar engine on a steel workshop table" fill className="object-cover object-right" sizes="100vw" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-linear-to-b from-[#e9e9e9] to-transparent" />
          </div>
          <div className="relative px-4 pb-7">
            <div className="space-y-2 text-xs leading-relaxed text-[#111111]">
              {costBanner.paragraphs.map((p) => (
                <p key={p}>
                  <BoldMoney text={p} />
                </p>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="rounded-xl bg-white px-5 py-3 text-center shadow-[0_8px_24px_-10px_rgba(0,0,0,0.3)]">
                <p className="text-[10px] uppercase tracking-wide text-[#555555]">{costBanner.startingFromLabel}</p>
                <p className="text-3xl font-extrabold leading-tight text-[#111111]">{costBanner.startingFromPrice}</p>
              </div>
              <div className="min-w-0 flex-1">
                <QuoteLink href="#quote-form" className="flex items-center justify-center gap-2 rounded-lg bg-linear-to-b from-[#2a2a2c] to-[#0d0d0d] px-4 py-3 text-xs font-bold uppercase text-white shadow-lg">
                  Submit your registration <span aria-hidden>→</span>
                </QuoteLink>
                <p className="mt-1 text-[11px] text-[#333333]">Get a fixed-price quote within 30 minutes.</p>
              </div>
            </div>
            <div className="mt-4">
              <InfoCard card={costBanner.card} compact />
            </div>
          </div>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden overflow-hidden md:block">
          <div className="absolute inset-0">
            <Image src={costBanner.image} alt="Jaguar engine on a steel workshop table" fill className="object-cover object-right" sizes="100vw" />
          </div>
          <div className="relative mx-auto w-[min(72rem,calc(100%-2rem))] py-10 sm:w-[min(72rem,calc(100%-3rem))] lg:w-[min(72rem,calc(100%-4rem))]">
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_16rem] items-start gap-4">
              <div className="col-span-1 max-w-md">
                <JaguarLogo className="h-14" />
                <p className="mt-3 text-2xl font-extrabold italic uppercase text-[#111111]">{costBanner.titlePre}</p>
                <h2 className="h2 origin-left scale-y-110 scale-x-90 whitespace-nowrap uppercase">
                  <span className="text-[#111111]">{costBanner.titleHighlight}</span>
                  <span className="text-hero-blue">{costBanner.titlePost}</span>
                </h2>
                <Dash className="mt-4" />
                <div className="mt-5 space-y-1 text-sm leading-relaxed text-[#111111]">
                  {costBanner.paragraphs.map((p) => (
                    <p key={p}>
                      <BoldMoney text={p} />
                    </p>
                  ))}
                </div>
                <div className="mt-6 flex items-start gap-5">
                  <div className="rounded-xl bg-white px-7 py-4 text-center shadow-[0_8px_24px_-10px_rgba(0,0,0,0.3)]">
                    <p className="text-xs uppercase tracking-wide text-[#555555]">{costBanner.startingFromLabel}</p>
                    <p className="text-5xl font-extrabold leading-tight text-[#111111]">{costBanner.startingFromPrice}</p>
                  </div>
                  <div>
                    <QuoteLink href="#quote-form" className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-linear-to-b from-[#2a2a2c] to-[#0d0d0d] px-7 py-3.5 text-sm font-bold uppercase text-white shadow-lg transition-transform hover:scale-[1.02]">
                      Submit your registration <span aria-hidden>→</span>
                    </QuoteLink>
                    <p className="mt-2 text-xs text-[#333333]">Get a fixed-price quote within 30 minutes.</p>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" />
              <div className="mt-24">
                <InfoCard card={costBanner.card} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ rebuild vs replacement vs used ============ */}
      <section className="theme-dark relative overflow-hidden" style={{ backgroundColor: "#0b0c0e" }}>
        {/* ===== mobile ===== */}
        <div className="relative px-4 py-7 md:hidden">
          <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
            <span className="text-chrome">
              {comparison.titlePre} {comparison.titleHighlight}
            </span>
          </h2>
          <Dash className="mt-3" />
          <div className="mt-6 space-y-6">
            {comparison.cards.map((c, i) => (
              <div key={i}>
                <div className="flex items-center gap-3">
                  <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${CIRCLE}`}>
                    <Icon name={c.icon} className="h-7 w-7 text-white" />
                  </span>
                  <p className="h3 origin-left scale-y-110 scale-x-90 font-extrabold italic uppercase text-white">
                    {c.title} {c.titleHighlight}
                  </p>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-white">{c.body}</p>
                {c.bullets && (
                  <ul className="mt-3 space-y-1.5">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-white">
                        <Icon name="check" className="h-4 w-4 shrink-0 rounded-full border border-white/70" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <QuoteLink href={comparison.cta.href} className="glass-card-dark inline-flex items-center justify-center rounded-lg px-6 py-3 text-xs font-bold uppercase text-white">
              {comparison.cta.label}
            </QuoteLink>
            <p className="mt-2 text-xs text-white">Enter your registration and we’ll talk you through both options honestly.</p>
          </div>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden px-4 py-12 sm:px-6 md:block lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="h2 origin-center scale-y-110 scale-x-90 text-center uppercase">
              <span className="text-chrome">
                {comparison.titlePre} {comparison.titleHighlight}
              </span>
            </h2>
            <Dash className="mx-auto mt-3 w-fit" />

            {/* circle row: opaque circles with connector segments (and end dots) only BETWEEN them */}
            <div className="relative mt-8 grid grid-cols-3">
              {comparison.cards.map((c, i) => (
                <div key={i} className="relative flex justify-center">
                  <span
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/50"
                    style={{ background: "#0b0c0e", boxShadow: "0 0 14px rgba(255,255,255,0.18), inset 0 0 12px rgba(255,255,255,0.06)" }}
                  >
                    <Icon name={CMP_ICONS[i % 3]} className="h-8 w-8 text-white" />
                  </span>
                </div>
              ))}
              {[0, 1].map((n) => (
                <span
                  key={n}
                  className="pointer-events-none absolute top-8 flex h-px items-center bg-white/30"
                  style={{ left: `calc(${(n * 100) / 3 + 100 / 6}% + 2.5rem)`, width: `calc(${100 / 3}% - 5rem)` }}
                  aria-hidden="true"
                >
                  <span className="absolute -left-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                  <span className="absolute -right-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                </span>
              ))}
            </div>

            {/* text columns: dividers start below the circles */}
            <div className="mt-6 grid grid-cols-3 divide-x divide-white/10">
              {comparison.cards.map((c, i) => (
                <div key={i} className={`text-center ${i === 0 ? "pr-8" : i === comparison.cards.length - 1 ? "pl-8" : "px-8"}`}>
                  <p className="h3 origin-center scale-y-110 scale-x-90 text-xl font-extrabold italic uppercase text-white" style={{ fontSize: "22px" }}>
                    {c.title} {c.titleHighlight}
                  </p>
                  <p className="mt-3 text-left text-sm leading-relaxed text-white">{c.body}</p>
                  {c.bullets && (
                    <ul className="mt-4 space-y-2 text-left">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5 text-sm text-white">
                          <Icon name="check" className="h-5 w-5 shrink-0 rounded-full border border-white/70" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <QuoteLink href={comparison.cta.href} className="glass-card-dark inline-flex items-center justify-center rounded-lg px-12 py-3.5 text-sm font-bold uppercase text-white transition-colors hover:bg-white/10">
                {comparison.cta.label}
              </QuoteLink>
              <p className="mt-3 text-sm text-white">Enter your registration and we’ll talk you through both options honestly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ reconditioned / refurbished / remanufactured ============ */}
      <section className="theme-light relative overflow-hidden" style={{ backgroundColor: "#ececed" }}>
        {/* ===== mobile ===== */}
        <div className="px-4 py-7 md:hidden">
          <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase text-[#111111]">Reconditioned, Refurbished or Remanufactured?</h2>
          <Dash className="mt-3" />
          <div className="mt-5 space-y-3">
            {options.map((o, i) => (
              <div key={i} className="glass-card rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-b from-white to-[#d6d6d8] shadow-md">
                    <Icon name={o.icon} className="h-6 w-6 text-[#111111]" />
                  </span>
                  <p className="h3 origin-left scale-y-110 scale-x-90 text-base font-extrabold italic uppercase leading-tight text-[#111111]">
                    {o.titlePre} {o.titleHighlight}
                    {o.titlePost}
                  </p>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#333333]">{o.body}</p>
                <p className="mt-2 text-xs font-bold text-[#111111]">→ {OPTION_RESULT[i % 3]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden px-4 py-12 sm:px-6 md:block lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="h2 origin-left scale-y-110 scale-x-90 whitespace-nowrap uppercase text-[#111111]">Reconditioned, Refurbished or Remanufactured?</h2>
            <Dash className="mt-3" />
            <div className="mt-6 divide-y divide-black/10">
              {options.map((o, i) => (
                <div key={i} className="grid grid-cols-[auto_minmax(0,0.8fr)_minmax(0,2fr)_auto_minmax(0,0.9fr)] items-stretch gap-x-6 py-4">
                  <span className="flex items-center">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-linear-to-b from-white to-[#d6d6d8] shadow-[0_8px_18px_-8px_rgba(0,0,0,0.4)]">
                      <Icon name={o.icon} className="h-8 w-8 text-[#111111]" />
                    </span>
                  </span>
                  <p className="flex items-center origin-left scale-y-110 scale-x-90 font-title font-extrabold italic uppercase leading-tight text-[#111111]" style={{ fontSize: "20px" }}>
                    <span>
                      {o.titlePre}
                      <br />
                      {o.titleHighlight}
                      {o.titlePost}
                    </span>
                  </p>
                  {/* separators: full row height, same x in every row */}
                  <p className="flex items-center border-l border-black/15 pl-6 text-sm leading-relaxed text-[#333333]">{o.body}</p>
                  <span className="flex items-center border-l border-black/15 pl-6 text-xl text-[#111111]" aria-hidden="true">
                    →
                  </span>
                  <p className="flex items-center text-sm font-bold text-[#111111]">{OPTION_RESULT[i % 3]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ faq ============ */}
      <section className="theme-light relative overflow-hidden" style={{ backgroundColor: "#f3f3f4" }}>
        {/* ===== mobile ===== */}
        <div className="relative px-4 py-7 md:hidden">
          <JaguarLogo className="h-9" />
          <h2 className="h2 origin-left scale-y-110 scale-x-90 mt-2 uppercase text-[#111111]">
            {faq.kicker} {faq.kickerHighlight}
          </h2>
          <Dash className="mt-3" />
          <div className="glass-card mt-5 divide-y divide-black/10 rounded-xl">
            {faqAll.map((item, i) => (
              <FaqRow key={item.q} item={item} isOpen={openIndex.has(i)} onToggle={() => toggle(i)} />
            ))}
          </div>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
          <div className="mx-auto max-w-6xl">
            <JaguarLogo className="h-12" />
            <h2 className="h2 origin-left scale-y-110 scale-x-90 mt-3 uppercase text-[#111111]">
              {faq.kicker} {faq.kickerHighlight}
            </h2>
            <Dash className="mt-3" />

            <div className="mt-6 grid grid-cols-2 items-start gap-6">
              <div className="glass-card divide-y divide-black/10 rounded-xl">
                {faq.faqLeft.map((item, i) => (
                  <FaqRow key={item.q} item={item} isOpen={openIndex.has(i)} onToggle={() => toggle(i)} />
                ))}
              </div>
              <div className="glass-card divide-y divide-black/10 rounded-xl">
                {faq.faqRight.map((item, i) => {
                  const idx = faq.faqLeft.length + i;
                  return <FaqRow key={item.q} item={item} isOpen={openIndex.has(idx)} onToggle={() => toggle(idx)} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ quote form ============ */}
      <section className="theme-dark relative overflow-hidden" id="quote-form" style={{ backgroundColor: "#06090c" }}>
        {/* ===== mobile ===== */}
        <div className="relative md:hidden">
          <div className="relative px-4 pt-7">
            <p className="text-xl font-bold uppercase text-white">{quote.headlinePre}</p>
            <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
              <span className="block text-chrome">{quote.headlineHighlight}</span>
              <span className="block text-white">{quote.headlinePost}</span>
            </h2>
            <Dash className="mt-3" />
          </div>
          <div className="relative space-y-3 px-4 pb-4 pt-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/30">
                  <Icon name={f.icon} className="h-5 w-5 text-white" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase text-white">{f.title}</p>
                  <p className="text-xs text-white/80">{f.text}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="relative mx-4 mb-7 space-y-3 rounded-2xl p-4" style={{ background: "linear-gradient(160deg, rgba(34,34,37,0.9) 0%, rgba(14,14,16,0.94) 100%)", border: "1px solid rgba(255,255,255,0.16)" }}>
            <p className="text-sm leading-snug text-white">{quote.subtext}</p>
            <Field name="vehicle_vrm" icon="car" placeholder="ENTER YOUR REGISTRATION" />
            <Field name="postcode" icon="pin" placeholder={quote.fields.postcode.label} />
            <Field name="name" icon="tech" placeholder={quote.fields.name.label} />
            <Field name="number" icon="phone" placeholder={quote.fields.phone.label} type="tel" />
            <Field name="email" icon="note" placeholder={quote.fields.email.label} type="email" />
            <label className="relative block">
              <FormSelect name="description" required theme="dark" placeholder={quote.fields.enquiry.label} options={["Engine Failure", "Replacement Needed", "General Enquiry"]} className="h-12 rounded-lg border border-white/15 bg-white/5 px-4 text-sm uppercase tracking-wide text-white/80" />
            </label>
            <button type="submit" disabled={lead.status === "loading"} className="btn-chrome flex h-12 w-full items-center justify-center gap-2 rounded-lg text-sm font-extrabold uppercase">
              Get my quote <span aria-hidden>→</span>
            </button>
<LeadStatus lead={lead} />
          </form>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden overflow-hidden md:block">
          <div className="absolute inset-0">
            <Image src="/engine/sec11_middle.webp" alt="Dark Jaguar saloon in a workshop" fill className="object-cover object-left" sizes="100vw" />
            {/* uneven dark wash beneath the copy: overlapping radial patches (heading, feature list, intro line) that all fade to zero, so no edge shows */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 34% 40% at 16% 16%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0) 100%), radial-gradient(ellipse 36% 36% at 20% 62%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0) 100%), radial-gradient(ellipse 30% 30% at 38% 80%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%), radial-gradient(ellipse 22% 28% at 40% 36%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)",
              }}
              aria-hidden="true"
            />
          </div>
          <div className="relative mx-auto grid w-[min(72rem,calc(100%-2rem))] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 py-12 sm:w-[min(72rem,calc(100%-3rem))] lg:w-[min(72rem,calc(100%-4rem))]">
            <div>
              <p className="text-3xl font-bold uppercase text-white">{quote.headlinePre}</p>
              <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
                <span className="block text-chrome">{quote.headlineHighlight}</span>
                <span className="block text-white">{quote.headlinePost}</span>
              </h2>
              <Dash className="mt-4" />
              <div className="mt-8 space-y-6">
                {FEATURES.map((f) => (
                  <div key={f.title} className="flex items-start gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-white/30 bg-black/30">
                      <Icon name={f.icon} className="h-7 w-7 text-white" />
                    </span>
                    <div>
                      <p className="text-lg font-bold uppercase text-white">{f.title}</p>
                      <p className="text-sm text-white/85">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 rounded-2xl p-7 backdrop-blur-md" style={{ background: "linear-gradient(160deg, rgba(34,34,37,0.9) 0%, rgba(14,14,16,0.94) 100%)", border: "1px solid rgba(255,255,255,0.16)", boxShadow: "0 24px 50px -20px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.14)" }}>
              <p className="text-xl leading-snug text-white">{quote.subtext}</p>
              <Field name="vehicle_vrm" icon="car" placeholder="ENTER YOUR REGISTRATION" />
              <Field name="postcode" icon="pin" placeholder={quote.fields.postcode.label} />
              <div className="grid grid-cols-2 gap-3">
                <Field name="name" icon="tech" placeholder={quote.fields.name.label} />
                <Field name="number" icon="phone" placeholder={quote.fields.phone.label} type="tel" />
              </div>
              <Field name="email" icon="note" placeholder={quote.fields.email.label} type="email" />
              <label className="relative block">
                <FormSelect name="description" required theme="dark" placeholder={quote.fields.enquiry.label} options={["Engine Failure", "Replacement Needed", "General Enquiry"]} className="h-12 rounded-lg border border-white/15 bg-white/5 px-4 text-sm uppercase tracking-wide text-white/80" />
              </label>
              <button type="submit" disabled={lead.status === "loading"} className="btn-chrome flex h-14 w-full items-center justify-center gap-2 rounded-lg text-sm font-extrabold uppercase">
                Get my quote <span aria-hidden>→</span>
              </button>
<LeadStatus lead={lead} />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
