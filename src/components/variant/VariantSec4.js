import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import QuoteLink from "@/components/shared/QuoteLink";

export default function VariantSec4({ data }) {
  return (
    <section className="theme-light relative overflow-hidden" style={{ backgroundColor: "#d7d6db" }}>
      {/* full-section background: the artwork fades to the section colour at the bottom */}
      <div className="pointer-events-none absolute left-0 top-0 w-[122%] md:inset-x-0 md:w-auto" aria-hidden="true">
        <Image src={data.topImage} alt="" width={1024} height={768} priority className="block h-auto w-full" sizes="100vw" />
      </div>
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        <div className="relative h-40 w-full overflow-hidden">
          <div className="relative z-10 p-4">
            {/* soft, uneven white wash beneath the copy: overlapping radial blobs that all reach zero before the box edge, so no outline shows */}
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse 62% 48% at 24% 30%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0) 100%), radial-gradient(ellipse 55% 42% at 38% 76%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse 34% 40% at 62% 38%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",
              }}
              aria-hidden="true"
            />
            <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
              <span className="block text-[#111111]">{data.headlinePre}</span>
              <span className="block text-hero-blue">{data.headlineHighlight}</span>
            </h2>
            <p className="mt-2 max-w-[52%] text-xs leading-snug text-[#111111]">{data.description}</p>
          </div>
        </div>

        <div className="relative px-4 pb-10">
          <div className="mt-5 grid grid-cols-2 gap-2.5">
            {data.cards.map((c) => (
              <div key={c.number} className="glass-card flex flex-col rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--theme-light-bg) shadow-[0_4px_10px_-3px_rgba(0,0,0,0.3)]">
                    <Icon name={c.icon} className="h-5 w-5 text-hero-blue" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-extrabold text-hero-blue">{c.number}</span>
                      {c.badge && (
                        <span className="rounded-sm bg-hero-blue px-1.5 py-0.5 text-[7px] font-extrabold uppercase text-white">{c.badge}</span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-xs font-extrabold uppercase leading-tight text-[#111111]">{c.title}</p>
                <p className="body-text mt-1.5 line-clamp-4 leading-snug text-[#4a4a4a]">{c.body}</p>
                <QuoteLink href="#quote-form" className="label-text mt-2 inline-flex w-fit items-center gap-1 font-bold text-hero-blue">
                  {c.link || "Learn more"} <span aria-hidden>→</span>
                </QuoteLink>
              </div>
            ))}
          </div>

          <div className="glass-card relative mt-5 overflow-hidden rounded-2xl p-3">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex w-16 gap-1.5" style={{ transform: "skewX(-25deg)", transformOrigin: "bottom left" }} aria-hidden="true">
              <span className="chrome-bar-a w-3" />
              <span className="chrome-bar-b w-2" />
              <span className="chrome-bar-a w-4" />
            </div>

            <div className="relative z-10 pl-20">
              <p className="text-sm font-extrabold uppercase leading-tight text-[#111111]">{data.banner.title}</p>
              <p className="mt-1.5 text-xs leading-snug text-[#111111]">{data.banner.body}</p>
              <QuoteLink
                href={data.banner.cta.href}
                className="btn-text mt-3 flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-linear-to-br from-hero-blue to-hero-blue-dark px-4 py-2.5 uppercase text-white shadow-lg transition-transform hover:scale-[1.02]"
              >
                {data.banner.cta.label} <span aria-hidden>→</span>
              </QuoteLink>
            </div>
          </div>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden md:block">
        <div className="relative h-64 w-full overflow-hidden lg:h-72">
          <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg">
              <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
                <span className="block text-[#111111]">{data.headlinePre}</span>
                <span className="block text-hero-blue">{data.headlineHighlight}</span>
              </h2>
              <p className="mt-3 text-sm text-[#111111] lg:text-base">{data.description}</p>
            </div>
          </div>
        </div>

        <div className="relative px-4 pb-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-3 gap-3">
              {data.cards.map((c) => (
                <div
                  key={c.number}
                  className="glass-card flex flex-col justify-between rounded-lg p-4"
                >
                  <div>
                    <div className="flex items-start gap-4">
                      <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-(--theme-light-bg) shadow-[0_6px_14px_-4px_rgba(0,0,0,0.3)]">
                        <Icon name={c.icon} className="h-11 w-11 text-hero-blue" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-extrabold text-hero-blue">{c.number}</span>
                          {c.badge && (
                            <span className="label-text rounded-sm bg-hero-blue px-2.5 py-1 font-extrabold uppercase text-white">{c.badge}</span>
                          )}
                        </div>
                        <p className="mt-1 text-base font-extrabold uppercase leading-tight text-[#111111]">{c.title}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[#4a4a4a]">{c.body}</p>
                  </div>
                  <QuoteLink href="#quote-form" className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-hero-blue">
                    {c.link || "Learn more"} <span aria-hidden>→</span>
                  </QuoteLink>
                </div>
              ))}
            </div>

            <div className="glass-card relative mt-6 grid grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_auto] items-stretch gap-6 overflow-hidden rounded-2xl p-6">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex w-20 gap-1.5" style={{ transform: "skewX(-25deg)", transformOrigin: "bottom left" }} aria-hidden="true">
              <span className="chrome-bar-a w-3" />
              <span className="chrome-bar-b w-2" />
              <span className="chrome-bar-a w-4" />
            </div>

              <div className="relative z-10 flex items-center pl-24">
                <div>
                  <p className="text-lg font-extrabold uppercase leading-tight text-[#111111]">{data.banner.title}</p>
                  <p className="mt-1.5 text-sm leading-snug text-[#111111]">{data.banner.body}</p>
                </div>
              </div>

              <div className="relative -my-6 overflow-hidden opacity-15" aria-hidden="true">
                <Image src={data.banner.image} alt="" fill className="object-cover" sizes="240px" />
              </div>

              <QuoteLink
                href={data.banner.cta.href}
                className="relative z-10 flex h-14 shrink-0 items-center justify-center self-center whitespace-nowrap rounded-sm bg-linear-to-br from-hero-blue to-hero-blue-dark px-8 text-sm font-bold uppercase text-white shadow-lg transition-transform hover:scale-[1.02]"
              >
                {data.banner.cta.label} <span className="ml-2" aria-hidden>→</span>
              </QuoteLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
