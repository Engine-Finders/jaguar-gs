"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import useLeadForm, { LeadStatus } from "@/components/reusable/useLeadForm";
import JaguarStripe from "@/components/reusable/JaguarStripe";

function FaqCard({ item, isOpen, onToggle, compact = false }) {
  return (
    <div className={`glass-card rounded-xl ${compact ? "p-3.5" : "p-5"}`}>
      <button type="button" onClick={onToggle} className="flex w-full items-start gap-3 text-left">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-sm font-extrabold text-white">
          ?
        </span>
        <span className="origin-left scale-y-115 flex-1 text-sm font-extrabold text-[#111111]">{item.q}</span>
        <Icon
          name="chevron-down"
          className={`h-4 w-4 shrink-0 text-[#111111] transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && <p className="ml-10 mt-2 text-sm leading-relaxed text-[#111111]">{item.a}</p>}
    </div>
  );
}

function Field({ name, label, placeholder, type = "text", compact = false }) {
  return (
    <label className="block">
      <span className="label-text uppercase tracking-wide text-white">
        {label} <span className="text-bmw-red">*</span>
      </span>
      <input name={name} required
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-hero-blue ${
          compact ? "mt-1.5 h-11" : "mt-2 h-13"
        }`}
      />
    </label>
  );
}

export default function VariantSec13({ data }) {
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

  return (
    <section id="quote-form" className="theme-light relative scroll-mt-6 overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative px-4 pb-7 pt-5 md:hidden">
        <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
          <JaguarStripe className="float-left mr-2 mt-0.5 h-6 w-12 shrink-0" />
          <span className="text-[#111111]">{data.kicker} </span>
          <span className="text-hero-blue">{data.kickerHighlight}</span>
        </h2>

        <div className="mt-4 space-y-3">
          {[...data.faqLeft, ...data.faqRight].map((item, i) => (
            <FaqCard key={item.q} item={item} isOpen={openIndex.has(i)} onToggle={() => toggle(i)} compact />
          ))}
        </div>

        {/* quote form */}
        <form
          onSubmit={handleSubmit}
          className="theme-dark relative mt-6 overflow-hidden rounded-2xl p-4"
          style={{ boxShadow: "0 0 0 1px rgba(150,154,160,0.3), 0 25px 60px -20px rgba(150,154,160,0.4)" }}
        >
          <div className="absolute inset-0">
            <Image src="/variant/sec13.webp" alt="Black Jaguar E-Pace in a dark showroom" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-black/25" />
          </div>

          <div className="relative">
            <h3 className="h3 origin-left scale-y-110 scale-x-90 uppercase">
              <JaguarStripe className="float-left mr-2 mt-0.5 h-5 w-10 shrink-0" />
              <span className="text-white">{data.form.headlinePre} </span>
              <span className="text-hero-blue">{data.form.headlineHighlight}</span>{" "}
              <span className="text-white">{data.form.headlinePost}</span>
            </h3>

            <div className="mt-3 space-y-2.5">
              <label className="block">
                <span className="label-text uppercase tracking-wide text-white">
                  {data.form.fields.reg.label} <span className="text-bmw-red">*</span>
                </span>
                <div className="mt-1.5 flex h-11 overflow-hidden rounded-lg border border-white/15 bg-white/5">
                  <span className="flex w-14 shrink-0 items-center justify-center bg-white/15 text-sm font-extrabold text-white">
                    GB
                  </span>
                  <input
                    name="vehicle_vrm" required maxLength={8} type="text"
                    placeholder={data.form.fields.reg.placeholder}
                    className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white placeholder:text-white/40 outline-none"
                  />
                </div>
              </label>

              <Field name="postcode" label={data.form.fields.postcode.label} placeholder={data.form.fields.postcode.placeholder} compact />
              <Field name="name" label={data.form.fields.name.label} placeholder={data.form.fields.name.placeholder} compact />
              <Field name="number" label={data.form.fields.phone.label} placeholder={data.form.fields.phone.placeholder} type="tel" compact />
              <Field name="email" label={data.form.fields.email.label} placeholder={data.form.fields.email.placeholder} type="email" compact />

              <label className="block">
                <span className="label-text uppercase tracking-wide text-white">
                  {data.form.fields.enquiry.label} <span className="text-bmw-red">*</span>
                </span>
                <div className="relative mt-1.5">
                  <select name="description" required className="h-11 w-full appearance-none rounded-lg border border-white/15 bg-white/5 px-4 pr-10 text-sm text-white outline-none">
                    <option value="">{data.form.fields.enquiry.placeholder}</option>
                    {["Engine Failure", "Replacement Needed", "General Enquiry"].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <Icon
                    name="chevron-down"
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white"
                  />
                </div>
              </label>
            </div>

            <button
              type="submit" disabled={lead.status === "loading"}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:brightness-110"
              style={{ background: "linear-gradient(180deg, rgba(40,44,52,0.9) 0%, rgba(14,16,20,0.95) 100%)", border: "1px solid rgba(214,218,224,0.55)", boxShadow: "0 8px 20px rgba(0,0,0,0.5)" }}
            >
              {data.form.submitLabel} <span aria-hidden>→</span>
            </button>
<LeadStatus lead={lead} />

            <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-white">
              <Icon name="shield-check" className="h-4 w-4 shrink-0 text-hero-blue" />
              {data.form.guarantee}
            </p>
          </div>
        </form>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
          <span className="text-[#111111]">{data.kicker} </span>
          <span className="text-hero-blue">{data.kickerHighlight}</span>
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            {data.faqLeft.map((item, i) => (
              <FaqCard key={item.q} item={item} isOpen={openIndex.has(i)} onToggle={() => toggle(i)} />
            ))}
          </div>
          <div className="space-y-4">
            {data.faqRight.map((item, i) => {
              const idx = data.faqLeft.length + i;
              return <FaqCard key={item.q} item={item} isOpen={openIndex.has(idx)} onToggle={() => toggle(idx)} />;
            })}
          </div>
        </div>

        {/* quote form */}
        <form
          onSubmit={handleSubmit}
          className="theme-dark relative mt-8 overflow-hidden rounded-2xl p-8"
          style={{ backgroundColor: "#030a10", boxShadow: "0 0 0 1px rgba(150,154,160,0.3), 0 25px 60px -20px rgba(150,154,160,0.4)" }}
        >
          {/* artwork edge to edge at its natural proportions; the car sits right of the fields, the bottom feathers into the card colour */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0"
            style={{ maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)" }}
          >
            <Image src="/variant/sec13.webp" alt="Black Jaguar E-Pace in a dark showroom" width={1024} height={285} className="block h-auto w-full" sizes="1152px" />
          </div>

          <div className="relative">
            <JaguarStripe className="mb-2 h-5 w-10" />
            <h3 className="h3 origin-left scale-y-110 scale-x-90 whitespace-nowrap text-white uppercase">
              {data.form.headlinePre} <span className="text-hero-blue">{data.form.headlineHighlight}</span>{" "}
              {data.form.headlinePost}
            </h3>

            <div className="mt-6 grid max-w-[66%] grid-cols-3 gap-4">
              <label className="block">
                <span className="label-text uppercase tracking-wide text-white">
                  {data.form.fields.reg.label} <span className="text-bmw-red">*</span>
                </span>
                <div className="mt-2 flex h-13 overflow-hidden rounded-lg border border-white/15 bg-white/5">
                  <span className="flex w-14 shrink-0 items-center justify-center bg-white/15 text-sm font-extrabold text-white">
                    GB
                  </span>
                  <input
                    name="vehicle_vrm" required maxLength={8} type="text"
                    placeholder={data.form.fields.reg.placeholder}
                    className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white placeholder:text-white/40 outline-none"
                  />
                </div>
              </label>

              <Field name="postcode" label={data.form.fields.postcode.label} placeholder={data.form.fields.postcode.placeholder} />
              <Field name="name" label={data.form.fields.name.label} placeholder={data.form.fields.name.placeholder} />
              <Field name="number" label={data.form.fields.phone.label} placeholder={data.form.fields.phone.placeholder} type="tel" />
              <Field name="email" label={data.form.fields.email.label} placeholder={data.form.fields.email.placeholder} type="email" />

              <label className="block">
                <span className="label-text uppercase tracking-wide text-white">
                  {data.form.fields.enquiry.label} <span className="text-bmw-red">*</span>
                </span>
                <div className="relative mt-2">
                  <select name="description" required className="h-13 w-full appearance-none rounded-lg border border-white/15 bg-white/5 px-4 pr-10 text-sm text-white outline-none">
                    <option value="">{data.form.fields.enquiry.placeholder}</option>
                    {["Engine Failure", "Replacement Needed", "General Enquiry"].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <Icon
                    name="chevron-down"
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white"
                  />
                </div>
              </label>
            </div>

            <button
              type="submit" disabled={lead.status === "loading"}
              className="mt-6 flex w-full max-w-[66%] items-center justify-center gap-2 rounded-lg py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:brightness-110"
              style={{ background: "linear-gradient(180deg, rgba(40,44,52,0.9) 0%, rgba(14,16,20,0.95) 100%)", border: "1px solid rgba(214,218,224,0.55)", boxShadow: "0 8px 20px rgba(0,0,0,0.5)" }}
            >
              {data.form.submitLabel} <span aria-hidden>→</span>
            </button>
<LeadStatus lead={lead} />

            <p className="mt-4 flex max-w-[66%] items-center justify-center gap-2 text-xs text-white">
              <Icon name="shield-check" className="h-4 w-4 shrink-0 text-hero-blue" />
              {data.form.guarantee}
            </p>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
}
