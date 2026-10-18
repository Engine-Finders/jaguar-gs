import Image from "next/image";
import { partImageFor } from "@/lib/partImage";
import Icon from "@/components/reusable/Icon";
import JaguarStripe from "@/components/reusable/JaguarStripe";

// a card is a part when its title is ("Timing Chain"), else the first listed component that names a part
const partTexts = (c) => [c.title, ...(c.items || [])];

const POS = ["50% 40%", "25% 25%", "78% 70%", "50% 100%", "10% 80%"];

function CardBody({ c, compact = false }) {
  return (
    <>
      <p className={`font-extrabold uppercase leading-tight text-[#111111] ${compact ? "text-xs" : "text-sm"}`}>{c.title}</p>
      {c.items ? (
        <ul className={`mt-2 space-y-1.5 text-left text-[#333333] ${compact ? "text-[11px] leading-snug" : "text-sm leading-snug"}`}>
          {c.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      ) : (
        <p className={`mt-2 text-[#4a4a4a] ${compact ? "text-[11px] leading-snug" : "text-xs leading-relaxed"}`}>{c.body}</p>
      )}
    </>
  );
}

export default function Sec4({ data }) {
  const cols = data.cards.length === 4 ? "grid-cols-4" : data.cards.length === 3 ? "grid-cols-3" : "grid-cols-5";
  return (
    <section className="theme-light relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative px-4 py-7 md:hidden">
        <div className="overflow-hidden">
          <JaguarStripe className="float-left mr-2 mt-0.5 h-6 w-12 shrink-0" />
          <h2 className="h2 uppercase">
            <span className="text-[#111111]">{data.titlePre}</span>
            <span className="text-hero-blue">{data.titleHighlight}</span>
          </h2>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          {data.cards.map((c, i) => (
            <div key={c.title + i} className="glass-card relative flex flex-col overflow-hidden rounded-2xl">
              <div className="relative aspect-4/3 w-full">
                <Image src={partImageFor(partTexts(c), c.image)} alt={c.title} fill className={partImageFor(partTexts(c)) ? "object-contain px-4 pb-8 pt-3" : "object-cover"} style={partImageFor(partTexts(c)) ? undefined : { objectPosition: POS[i % POS.length] }} sizes="50vw" />
              </div>
              <div className="relative px-3 pb-4 pt-6 text-center">
                <span
                  className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-linear-to-b from-white to-[#dcdcde]"
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
                >
                  <Icon name={c.icon} className="h-4 w-4 text-hero-blue" />
                </span>
                <CardBody c={c} compact />
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card relative mt-5 grid grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] items-stretch overflow-hidden rounded-xl">
          <div className="relative z-10 flex items-start gap-3 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-hero-blue">
              <Icon name="info" className="h-4 w-4 text-white" />
            </span>
            <p className="text-xs leading-snug text-[#4a4a4a]">{data.notice}</p>
          </div>

          <div className="relative overflow-hidden bg-(--theme-light-bg)">
            <Image src={data.noticeImage} alt="" fill className="object-cover opacity-25" sizes="140px" />
            <div className="absolute inset-0 bg-linear-to-r from-white via-white/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="h2 uppercase">
            <JaguarStripe className="float-left mr-3 mt-1.5 h-10 w-16 shrink-0" />
            <span className="text-[#111111]">{data.titlePre}</span>
            <span className="text-hero-blue">{data.titleHighlight}</span>
          </h2>

          <div className={`mt-8 grid ${cols} gap-6`}>
            {data.cards.map((c, i) => (
              <div
                key={c.title + i}
                className="glass-card relative flex flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-0.5"
              >
                <div className="relative aspect-4/3 w-full">
                  <Image src={partImageFor(partTexts(c), c.image)} alt={c.title} fill className={partImageFor(partTexts(c)) ? "object-contain px-4 pb-8 pt-3" : "object-cover"} style={partImageFor(partTexts(c)) ? undefined : { objectPosition: POS[i % POS.length] }} sizes="25vw" />
                </div>
                <div className="relative px-4 pb-6 pt-8 text-center">
                  <span
                    className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-linear-to-b from-white to-[#dcdcde]"
                    style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
                  >
                    <Icon name={c.icon} className="h-6 w-6 text-hero-blue" />
                  </span>
                  <CardBody c={c} />
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card relative mt-6 grid grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] items-stretch overflow-hidden rounded-2xl">
            <div className="relative z-10 flex items-center gap-4 px-6 py-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-hero-blue">
                <Icon name="info" className="h-5 w-5 text-white" />
              </span>
              <p className="text-sm leading-relaxed text-[#4a4a4a]">{data.notice}</p>
            </div>

            <div className="relative overflow-hidden bg-(--theme-light-bg)">
              <Image src={data.noticeImage} alt="" fill className="object-cover opacity-25" sizes="320px" />
              <div className="absolute inset-0 bg-linear-to-r from-white via-white/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
