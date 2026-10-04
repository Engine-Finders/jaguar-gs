import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import JaguarLogo from "@/components/reusable/JaguarLogo";

export default function HomeSec4({ data }) {
  return (
    <section className="px-2 pt-3 pb-8 sm:px-6 lg:px-8">
      <div className="theme-light relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-black/10 px-3 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-5">
        <div className="text-center">
          <div className="mx-auto mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-black/20" />
            <JaguarLogo className="h-10 w-10 text-[#1a1a1a]" />
            <span className="h-px w-16 bg-black/20" />
          </div>
          <h2 className="h2 text-[#1a1a1a]">{data.h2}</h2>
          <p className="body-text mt-2 text-[#1a1a1a]">{data.description}</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {data.symptoms.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              className="group relative overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image src={s.image} alt={s.label} fill className="object-cover" sizes="220px" />
                <span className="absolute bottom-11 left-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/55 text-[#1a1a1a] shadow-sm backdrop-blur-md sm:bottom-16 sm:left-3 sm:h-12 sm:w-12">
                  <Icon name={s.icon} className="h-5 w-5 sm:h-7 sm:w-7" />
                </span>
              </div>
              <div
                className="absolute inset-x-0 bottom-0 px-2 py-1.5 sm:px-3 sm:py-2.5"
                style={{
                  background:
                    "linear-gradient(to top, rgba(242,242,242,1) 0%, rgba(242,242,242,0.96) 55%, rgba(242,242,242,0) 100%)",
                  paddingTop: "1.75rem",
                }}
              >
                <p className="text-xs font-semibold leading-tight text-[#1a1a1a] sm:text-sm">
                  {i + 1}. {s.label}
                </p>
                <span className="mt-1 block h-0.5 w-1/2 bg-hero-blue transition-all group-hover:w-full sm:mt-2" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
