import Image from "next/image";
import JaguarLogo from "@/components/reusable/JaguarLogo";
import Icon from "@/components/reusable/Icon";

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

function Title({ kicker, titlePre, titleHighlight, titlePost, dark = false, nowrap = false }) {
  return (
    <>
      {kicker && (
        <p className={`mt-3 text-xl font-extrabold uppercase leading-tight lg:text-2xl ${dark ? "text-white" : "text-[#111111]"}`}>{kicker}</p>
      )}
      <h2 className={`h2 origin-left scale-y-110 scale-x-90 mt-1 uppercase ${nowrap ? "whitespace-nowrap" : ""}`}>
        {titlePre && <span className={`block ${dark ? "text-white" : "text-[#111111]"}`}>{titlePre}</span>}
        <span className="block">
          <span className={dark ? "text-white" : "text-[#111111]"}>{titleHighlight}</span>
          <span className="text-hero-blue">{titlePost}</span>
        </span>
      </h2>
      <Dash className="mt-3" />
    </>
  );
}

export default function Sec9({ data }) {
  const { about, byModel, compatibility } = data;

  return (
    <>
      {/* ============ about ============ */}
      <section className="theme-light relative overflow-hidden" style={{ backgroundColor: "#e9edee" }}>
        {/* ===== mobile ===== */}
        <div className="relative px-4 pb-4 pt-7 md:hidden">
          <JaguarLogo className="h-9" />
          <Title kicker="ABOUT THE" titleHighlight={`JAGUAR ${about.titleHighlight}`} titlePost={about.titlePost} />
          <p className="mt-4 text-xs leading-relaxed text-[#111111]">{about.body}</p>
        </div>
        <div className="relative aspect-[584/460] w-full overflow-hidden md:hidden">
          <Image src={about.imageMobile} alt="Jaguar engine on a workshop table" fill className="object-cover object-right" sizes="100vw" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-linear-to-b from-[#e9edee] to-transparent" />
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden overflow-hidden md:block">
          <div className="absolute inset-0">
            <Image src={about.image} alt="Jaguar engine on a workshop table" fill className="object-cover object-right" sizes="100vw" />
          </div>
          <div className="relative mx-auto w-[min(72rem,calc(100%-2rem))] py-12 sm:w-[min(72rem,calc(100%-3rem))] lg:w-[min(72rem,calc(100%-4rem))]">
            <div className="max-w-[44%]">
              <JaguarLogo className="h-14" />
              <Title nowrap kicker="ABOUT THE" titleHighlight={`JAGUAR ${about.titleHighlight}`} titlePost={about.titlePost} />
              <p className="mt-5 text-sm leading-relaxed text-[#111111] lg:text-[15px]">{about.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ applications by model ============ */}
      <section className="theme-dark relative overflow-hidden" style={{ backgroundColor: "#08090b" }}>
        {/* ===== mobile ===== */}
        <div className="relative px-4 pt-7 md:hidden">
          <Title kicker={byModel.kicker} titleHighlight={byModel.titleHighlight} titlePost={byModel.titlePost} dark />
        </div>
        <div className="relative mt-4 aspect-[560/449] w-full overflow-hidden md:hidden">
          <Image src={byModel.imageMobile} alt="Classic Jaguar saloon in a dark showroom" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative px-4 pb-7 md:hidden">
          <p className="mt-4 text-xs leading-relaxed text-white">{byModel.body}</p>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden overflow-hidden md:block">
          <div className="absolute inset-0">
            <Image src={byModel.image} alt="Classic Jaguar saloon in a dark showroom" fill className="object-cover object-left" sizes="100vw" />
          </div>
          <div className="relative mx-auto w-[min(72rem,calc(100%-2rem))] py-16 sm:w-[min(72rem,calc(100%-3rem))] lg:w-[min(72rem,calc(100%-4rem))]">
            <div className="ml-auto max-w-[42%]">
              <Title nowrap kicker={byModel.kicker} titleHighlight={byModel.titleHighlight} titlePost={byModel.titlePost} dark />
              <p className="mt-5 text-sm leading-relaxed text-white lg:text-[15px]">{byModel.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ compatibility ============ */}
      <section className="theme-light relative overflow-hidden" style={{ backgroundColor: "#e1e5e8" }}>
        {/* ===== mobile ===== */}
        <div className="relative px-4 py-7 md:hidden">
          <Title kicker={compatibility.kicker} titleHighlight={compatibility.titleHighlight} titlePost={compatibility.titlePost} />
          <p className="mt-4 text-xs leading-relaxed text-[#111111]">{compatibility.body}</p>

          <div className="relative mt-5 overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <Image src={compatibility.imageMobile} alt="Jaguar engine confirmed against a registration plate" fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-linear-to-b from-white/70 via-white/35 to-white/70" />
            </div>
            <div className="relative space-y-2.5 p-4">
              {compatibility.points.map((p) => (
                <div key={p.title} className="glass-card flex items-center gap-3 rounded-xl p-3">
                  <Icon name={p.icon} className="h-6 w-6 shrink-0 text-[#111111]" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#111111]">{p.title}</p>
                    <p className="text-[10px] leading-snug text-[#4a4a4a]">{p.text}</p>
                  </div>
                  <Icon name="check" className="h-5 w-5 shrink-0 rounded-full border border-[#111111] text-[#111111]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== desktop ===== */}
        <div className="relative hidden overflow-hidden md:block">
          <div className="absolute inset-0">
            <Image src={compatibility.image} alt="Jaguar engine confirmed against a registration plate" fill className="object-cover object-right" sizes="100vw" />
          </div>

          <div className="relative mx-auto grid w-[min(72rem,calc(100%-2rem))] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center py-14 sm:w-[min(72rem,calc(100%-3rem))] lg:w-[min(72rem,calc(100%-4rem))]">
            <div className="max-w-md">
              <Title nowrap kicker={compatibility.kicker} titleHighlight={compatibility.titleHighlight} titlePost={compatibility.titlePost} />
              <p className="mt-5 text-sm leading-relaxed text-[#111111] lg:text-[15px]">{compatibility.body}</p>
            </div>

            <div className="w-full max-w-64 space-y-3 justify-self-start">
              {compatibility.points.map((p) => (
                <div key={p.title} className="glass-card flex items-center gap-3 rounded-xl p-3.5 backdrop-blur-sm">
                  <Icon name={p.icon} className="h-7 w-7 shrink-0 text-[#111111]" />
                  <p className="min-w-0 flex-1 text-xs font-extrabold uppercase leading-tight tracking-wide text-[#111111]">{p.title}</p>
                  <Icon name="check" className="h-6 w-6 shrink-0 rounded-full border border-[#111111] text-[#111111]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
