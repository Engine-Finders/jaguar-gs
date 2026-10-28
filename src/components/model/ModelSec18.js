"use client";

import Image from "next/image";

import { useState } from "react";
import Icon from "@/components/reusable/Icon";
import QuoteRegField from "@/components/reusable/QuoteRegField";
import useLeadForm, { LeadStatus } from "@/components/reusable/useLeadForm";
import JaguarLogo from "@/components/reusable/JaguarLogo";
import JaguarStripe from "@/components/reusable/JaguarStripe";
import FormSelect from "@/components/reusable/FormSelect";

function FaqCard({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-xl border border-black/5 bg-white/80 p-5 shadow-[0_15px_40px_-25px_rgba(0,0,0,0.4)] backdrop-blur-md">
      <button type="button" onClick={onToggle} className="flex w-full items-start gap-3 text-left">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-hero-blue text-sm font-extrabold text-white">
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

function Field({ name, label, placeholder, type = "text" }) {
  return (
    <label className="block">
      <span className="label-text uppercase tracking-wide text-white">
        {label} <span className="text-hero-blue">*</span>
      </span>
      <input name={name} required
        type={type}
        placeholder={placeholder}
        className="mt-2 h-13 w-full rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-hero-blue"
      />
    </label>
  );
}

export default function ModelSec18({ data }) {
  const [openIndex, setOpenIndex] = useState(new Set());

  function toggle(i) {
    setOpenIndex((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  const lead = useLeadForm();
  const handleSubmit = lead.handleSubmit;

  const [formHighlightWord1, ...formHighlightRestWords] = data.form.headlineHighlight.split(" ");
  const formMobileLine2 = formHighlightRestWords.join(" ");

  return (
    <section id="quote-form" className="theme-light relative scroll-mt-6 overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative px-4 pb-10 pt-4 md:hidden">
        <div className="flex items-center gap-2">
          <Image src="/brand/logo-icon-light.webp" alt="Jaguar Garage" width={512} height={173} className="h-8 w-auto shrink-0" sizes="120px" />
          <h2 className="h2 origin-left scale-y-110 scale-x-90 whitespace-nowrap uppercase">
            <span className="text-[#111111]">{data.kicker} </span>
            <span className="text-hero-blue">{data.kickerHighlight}</span>
          </h2>
        </div>

        <div className="mt-5 space-y-4">
          {[...data.faqLeft, ...data.faqRight].map((item, i) => (
            <FaqCard key={item.q} item={item} isOpen={openIndex.has(i)} onToggle={() => toggle(i)} />
          ))}
        </div>

        {/* quote form */}
        <form
          onSubmit={handleSubmit}
          className="theme-dark relative mt-8 overflow-hidden rounded-2xl p-5"
          style={{
            background: "linear-gradient(135deg, #101012 0%, #050505 100%)",
            boxShadow: "0 0 0 1px rgba(150,154,160,0.3), 0 25px 60px -20px rgba(150,154,160,0.4)",
          }}
        >
          <JaguarStripe className="absolute right-5 top-5 h-6 w-12" />

          <h3 className="h3 origin-left scale-y-110 scale-x-90 max-w-[82%] uppercase">
            <span className="block">
              <span className="text-white">{data.form.headlinePre} </span>
              <span className="text-hero-blue">{formHighlightWord1}</span>
            </span>
            <span className="block text-hero-blue">{formMobileLine2}</span>
            <span className="block text-white">{data.form.headlinePost}</span>
          </h3>

          <div className="mt-5 space-y-4">
            <QuoteRegField label={data.form.fields.reg.label} labelClass="label-text uppercase tracking-wide text-white" starClass="text-hero-blue" />

            <Field name="name" label={data.form.fields.name.label} placeholder={data.form.fields.name.placeholder} />
            <Field name="number" label={data.form.fields.phone.label} placeholder={data.form.fields.phone.placeholder} type="tel" />
            <Field name="email" label={data.form.fields.email.label} placeholder={data.form.fields.email.placeholder} type="email" />
            <Field name="postcode" label={data.form.fields.postcode.label} placeholder={data.form.fields.postcode.placeholder} />

            <label className="block">
              <span className="label-text uppercase tracking-wide text-white">
                {data.form.fields.enquiry.label} <span className="text-hero-blue">*</span>
              </span>
              <div className="relative mt-2">
                <FormSelect name="description" required theme="dark" placeholder={data.form.fields.enquiry.placeholder} options={data.form.fields.enquiry.options} className="h-13 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white" />
              </div>
            </label>
          </div>

          <button
            type="submit" disabled={lead.status === "loading"}
            className="mt-6 flex w-full items-center justify-center gap-2 btn-chrome rounded-lg py-4 text-sm font-extrabold uppercase tracking-wide transition hover:brightness-105"
          >
            {data.form.submitLabel} <span aria-hidden>→</span>
          </button>
<LeadStatus lead={lead} />

          <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-white">
            <Icon name="shield-check" className="h-4 w-4 shrink-0 text-hero-blue" />
            {data.form.guarantee}
          </p>
        </form>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-center gap-2">
          <Image src="/brand/logo-icon-light.webp" alt="Jaguar Garage" width={512} height={173} className="h-10 w-auto shrink-0" sizes="120px" />
          <div role="heading" aria-level="2" className="h2 origin-left scale-y-110 scale-x-90 uppercase">
            <span className="text-[#111111]">{data.kicker} </span>
            <span className="text-hero-blue">{data.kickerHighlight}</span>
          </div>
        </div>

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
          style={{
            background: "linear-gradient(135deg, #101012 0%, #050505 100%)",
            boxShadow: "0 0 0 1px rgba(150,154,160,0.3), 0 25px 60px -20px rgba(150,154,160,0.4)",
          }}
        >
          <JaguarStripe className="absolute right-6 top-6 h-8 w-16" />

          <div role="heading" aria-level="3" className="h3 origin-left scale-y-110 scale-x-90 whitespace-nowrap text-white uppercase">
            {data.form.headlinePre} <span className="text-hero-blue">{data.form.headlineHighlight}</span>{" "}
            {data.form.headlinePost}
          </div>

          <div className="group/reg mt-6 grid grid-cols-3 gap-4">
            <QuoteRegField label={data.form.fields.reg.label} labelClass="label-text uppercase tracking-wide text-white" starClass="text-hero-blue" />

            <Field name="name" label={data.form.fields.name.label} placeholder={data.form.fields.name.placeholder} />
            <Field name="number" label={data.form.fields.phone.label} placeholder={data.form.fields.phone.placeholder} type="tel" />
            <Field name="email" label={data.form.fields.email.label} placeholder={data.form.fields.email.placeholder} type="email" />
            <Field name="postcode" label={data.form.fields.postcode.label} placeholder={data.form.fields.postcode.placeholder} />

            <label className="block md:group-has-[[data-vehicle]]/reg:col-span-2">
              <span className="label-text uppercase tracking-wide text-white">
                {data.form.fields.enquiry.label} <span className="text-hero-blue">*</span>
              </span>
              <div className="relative mt-2">
                <FormSelect name="description" required theme="dark" placeholder={data.form.fields.enquiry.placeholder} options={data.form.fields.enquiry.options} className="h-13 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white" />
              </div>
            </label>
          </div>

          <button
            type="submit" disabled={lead.status === "loading"}
            className="mt-6 flex w-full items-center justify-center gap-2 btn-chrome rounded-lg py-4 text-sm font-extrabold uppercase tracking-wide transition hover:brightness-105"
          >
            {data.form.submitLabel} <span aria-hidden>→</span>
          </button>
<LeadStatus lead={lead} />

          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-white">
            <Icon name="shield-check" className="h-4 w-4 shrink-0 text-hero-blue" />
            {data.form.guarantee}
          </p>
        </form>
      </div>
      </div>
    </section>
  );
}
