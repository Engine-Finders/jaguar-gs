import Icon from "@/components/reusable/Icon";

export default function ModelSec6({ data }) {
  return (
    <section className="theme-dark relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative px-4 py-3 md:hidden">
        <div className="mb-6 flex justify-center">
          <div
            className="h-px w-40"
            style={{
              background:
                "linear-gradient(90deg, transparent, #8e8e8e, #ffffff, #8e8e8e, transparent)",
            }}
          />
        </div>

        <div
          className="grid grid-cols-4 divide-x divide-white/20 px-2 py-2"
        >
          {data.metrics.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-1.5 px-1 text-center">
              <Icon name={m.icon} className="h-7 w-7 text-white" />
              <p className="text-sm font-extrabold leading-tight text-white">
                {m.value} {m.suffix && <span className="text-white">{m.suffix}</span>}
              </p>
              <p className="label-text font-semibold uppercase leading-tight tracking-wide text-white/80">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
        <div
          className="relative mx-auto grid max-w-6xl grid-cols-4 divide-x divide-white/20 px-6 py-6"
        >
          {data.metrics.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-2 px-4 text-center">
              <span className="flex h-16 w-16 items-center justify-center">
                <Icon name={m.icon} className="h-12 w-12 text-white" />
              </span>
              <p className="text-2xl font-extrabold text-white lg:text-3xl">
                {m.value} {m.suffix && <span className="text-white">{m.suffix}</span>}
              </p>
              <p className="label-text uppercase tracking-widest text-white/80">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
