import Image from "next/image";
import Icon from "@/components/reusable/Icon";
import JaguarStripe from "@/components/reusable/JaguarStripe";

export default function ModelSec11({ data }) {
  const [line1, line2] = data.h2.split("|");

  return (
    <section className="theme-light relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        <div className="px-4 pb-3 pt-8">
          <JaguarStripe className="h-3 w-6" />
          <h2 className="h2 origin-left scale-y-110 scale-x-90 mt-2 uppercase">
            <span className="block text-[#1a1a1a]">{line1}</span>
            <span className="block text-hero-blue">{line2}</span>
          </h2>
        </div>

        <div className="relative aspect-[644/455] w-full">
          <Image src={data.imageMobile} alt="Jaguar technician rebuilding an engine block" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-(--color-light-surface) to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-(--color-light-surface) to-transparent" />
        </div>

        <div className="divide-y divide-black/10 border-t border-black/10 px-4 pb-8">
          {data.checklist.map((item) => (
            <div key={item} className="flex items-center gap-3 py-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hero-blue/70">
                <Icon name="check" className="h-4 w-4 text-hero-blue" />
              </span>
              <p className="text-sm text-[#1a1a1a]">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden px-4 py-6 sm:px-6 md:block lg:px-8">
      {/* photo pushed to the right so the checklist sits on clean light space */}
      <div className="absolute inset-0 translate-x-[8%]">
        <Image src={data.image} alt="Jaguar technician rebuilding an engine block" fill className="object-cover object-right" sizes="100vw" />
        <div className="absolute inset-y-0 left-0 w-1/5 bg-linear-to-r from-(--color-light-surface) to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-[42%]">
          <JaguarStripe className="h-6 w-11 shrink-0" />
          <h2 className="h2 origin-left scale-y-110 scale-x-90 mt-2 uppercase">
            <span className="block whitespace-nowrap text-[#1a1a1a]">{line1}</span>
          </h2>
          <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase">
            <span className="block text-hero-blue">{line2}</span>
          </h2>

          <div className="mt-3 divide-y divide-black/10 border-t border-black/10">
            {data.checklist.map((item) => (
              <div key={item} className="flex items-center gap-2.5 py-2">
                <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full border border-hero-blue/60 bg-hero-blue/10">
                  <Icon name="check" className="h-3 w-3 text-hero-blue" />
                </span>
                <p className="text-sm text-[#1a1a1a]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
