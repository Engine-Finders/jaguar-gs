import Icon from "@/components/reusable/Icon";
import JaguarLogo from "@/components/reusable/JaguarLogo";
import JaguarStripe from "@/components/reusable/JaguarStripe";

export default function VariantSec6({ data }) {
  return (
    <section className="theme-light relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative px-4 pb-10 pt-7 md:hidden">
        <h2 className="h2 text-[#111111] uppercase">
          <JaguarStripe className="float-left mr-2 mt-0.5 h-6 w-12 shrink-0" />
          {data.titlePre}
          <span className="text-hero-blue">{data.titleHighlight}</span>
        </h2>

        <div className="no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-1">
          {data.steps.map((s, i) => (
            <div key={s.title} className="relative flex w-[38vw] shrink-0 snap-start flex-col items-center text-center">
              <span
                className={`pointer-events-none absolute top-7 border-t-2 border-dashed border-hero-blue/30 ${
                  i === 0 ? "left-1/2 right-0" : i === data.steps.length - 1 ? "left-0 right-1/2" : "left-0 right-0"
                }`}
                aria-hidden="true"
              />
              <span
                className="relative z-10 flex h-14 w-14 shrink-0 rounded-full p-[3px]"
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #9b9b9f 38%, #f1f1f2 58%, #7a7a7e 100%)",
                  boxShadow: "0 8px 18px -6px rgba(0,0,0,0.35)",
                }}
              >
                <span className="flex h-full w-full items-center justify-center rounded-full bg-linear-to-br from-(--theme-light-bg) to-[#e6e6e8]">
                  <Icon name={s.icon} className="h-6 w-6 text-hero-blue-dark" />
                </span>
              </span>
              <p className="mt-2 flex items-center gap-1.5">
                <span className="text-xs font-bold text-hero-blue">{i + 1}</span>
                <span className="text-xs font-bold text-[#111111]">{s.title}</span>
              </p>
              <p className="body-text mt-1 line-clamp-3 leading-snug text-[#111111]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden px-4 py-12 sm:px-6 md:block lg:px-8">
        <div className="relative mx-auto max-w-6xl py-2">
          <div className="flex items-start gap-3">
            <JaguarLogo className="h-14 w-14 shrink-0" />
            <h2 className="h2 text-[#111111] uppercase">
              {data.titlePre}
              <span className="text-hero-blue">{data.titleHighlight}</span>
            </h2>
          </div>

          <div className="relative mt-10 grid grid-cols-10 gap-2">
            <span className="pointer-events-none absolute left-[5%] right-[5%] top-9 border-t-2 border-dashed border-hero-blue/30" aria-hidden="true" />
            {data.steps.map((s, i) => (
              <div key={s.title} className="relative flex flex-col items-center text-center">
                <span
                  className="relative z-10 flex h-[72px] w-[72px] shrink-0 rounded-full p-1"
                  style={{
                    background: "linear-gradient(145deg, #ffffff 0%, #9b9b9f 38%, #f1f1f2 58%, #7a7a7e 100%)",
                    boxShadow: "0 12px 26px -8px rgba(0,0,0,0.35)",
                  }}
                >
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-linear-to-br from-(--theme-light-bg) to-[#e6e6e8]">
                    <Icon name={s.icon} className="h-8 w-8 text-hero-blue-dark" />
                  </span>
                </span>
                <p className="mt-2 text-lg font-extrabold text-hero-blue">{i + 1}</p>
                <p className="mt-1 text-sm font-bold leading-tight text-[#111111]">{s.title}</p>
                <p className="mt-1.5 px-1 text-xs leading-snug text-[#111111]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
