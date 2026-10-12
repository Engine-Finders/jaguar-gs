import Icon from "@/components/reusable/Icon";
import JaguarLogo from "@/components/reusable/JaguarLogo";

export default function Sec7({ data }) {
  return (
    <section className="theme-dark relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative px-4 py-7 md:hidden">
        <div
          className="relative overflow-hidden rounded-2xl p-4"
          style={{ border: "1px solid rgba(214,218,224,0.28)", background: "rgba(255,255,255,0.03)" }}
        >
        <div className="flex items-center gap-2">
          <JaguarLogo className="h-8 w-8" />
        </div>
        <h2 className="h2 mt-2 uppercase">
          <span className="text-white">{data.titlePre}</span>
          <span className="text-hero-blue">{data.titleHighlight}</span>
        </h2>

        <div className="no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1">
          {data.steps.map((s, i) => (
            <div key={s.title} className="relative flex w-[38vw] shrink-0 snap-start flex-col items-center text-center">
              <span
                className={`pointer-events-none absolute top-5 border-t border-hero-blue/50 ${
                  i === 0 ? "left-1/2 right-0" : i === data.steps.length - 1 ? "left-0 right-1/2" : "left-0 right-0"
                }`}
                aria-hidden="true"
              />
              <span
                className="relative z-10 flex h-10 w-10 shrink-0 rounded-full p-[1.5px]"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0.55) 100%), rgba(13,13,13,0.9)",
                  boxShadow: "0 8px 18px -6px rgba(0,0,0,0.5)",
                }}
              >
                <span className="flex h-full w-full items-center justify-center rounded-full bg-linear-to-br from-[#1a1a1a] to-[#0d0d0d]">
                  <Icon name={s.icon} className="h-5 w-5 text-hero-blue" />
                </span>
              </span>
              <p className="mt-2 flex items-center gap-1.5">
                <span className="text-xs font-bold text-hero-blue">{i + 1}</span>
                <span className="text-xs font-bold text-white">{s.title}</span>
              </p>
              <p className="mt-1 line-clamp-3 text-[10px] leading-snug text-white">{s.body}</p>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden px-4 py-12 sm:px-6 md:block lg:px-8">
        <div
          className="relative mx-auto max-w-6xl"
        >
          <div className="flex items-center gap-4">
            <JaguarLogo className="h-10 shrink-0" />
            <div className="h-10 w-px shrink-0 bg-white/15" aria-hidden="true" />
            <div>
              <h2 className="h2 origin-left scale-y-110 scale-x-90 whitespace-nowrap uppercase">
                <span className="text-white">{data.titlePre}</span>
                <span className="text-hero-blue">{data.titleHighlight}</span>
              </h2>
            </div>
          </div>

          <div className="relative mt-10 grid grid-cols-10 gap-2">
            <span className="pointer-events-none absolute left-[5%] right-[5%] top-9 border-t border-hero-blue/50" aria-hidden="true" />
            {data.steps.map((s, i) => (
              <div key={s.title} className="relative flex flex-col items-center text-center">
                <span
                  className="relative z-10 flex h-[72px] w-[72px] shrink-0 rounded-full p-[3px]"
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0.55) 100%), rgba(13,13,13,0.9)",
                    boxShadow: "0 12px 26px -8px rgba(0,0,0,0.5)",
                  }}
                >
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-linear-to-br from-[#1a1a1a] to-[#0d0d0d]">
                    <Icon name={s.icon} className="h-8 w-8 text-hero-blue" />
                  </span>
                </span>
                <p className="mt-2 text-lg font-extrabold text-hero-blue">{i + 1}</p>
                <p className="mt-1 text-sm font-bold leading-tight text-white">{s.title}</p>
                <p className="mt-1.5 px-1 text-xs leading-snug text-white">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
