import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/reusable/Icon";
import JaguarLogo from "@/components/reusable/JaguarLogo";
import JaguarStripe from "@/components/reusable/JaguarStripe";

const NOTE = "If your exact specification isn’t listed here, get in touch — we’ll confirm availability directly against your reg.";

// "Jaguar E-Pace D165 2.0 Litre Engine" -> bold "Jaguar E-Pace D165" + regular remainder
function DetailItem({ text, vehicle, className = "" }) {
  const hasVehicle = vehicle && text.startsWith(vehicle);
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-b from-[#3a3a3c] to-[#0d0d0d] text-white shadow-md">
        <Icon name="check" className="h-5 w-5" />
      </span>
      <p className="text-sm text-[#111111]">
        {hasVehicle ? <span className="font-bold">{vehicle}</span> : null}
        {hasVehicle ? text.slice(vehicle.length) : text}
      </p>
    </div>
  );
}

function RelatedCard({ related, compact = false }) {
  return (
    <div className={`glass-card rounded-2xl ${compact ? "p-4" : "p-6"}`}>
      <JaguarLogo className={compact ? "h-8" : "h-11"} />
      <p className={`mt-3 font-extrabold uppercase leading-tight text-[#111111] ${compact ? "text-base" : "text-xl"}`}>{related.title}</p>
      {related.intro && <p className={`mt-2 text-[#111111] ${compact ? "text-xs" : "text-sm"}`}>{related.intro}</p>}
      <div className="mt-3 divide-y divide-black/10">
        {related.links.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className={`flex items-center gap-2 text-[#111111] transition-colors hover:text-black/60 ${compact ? "py-2.5 text-xs" : "py-3 text-sm"}`}
          >
            {l.label} <span aria-hidden>→</span>
          </Link>
        ))}
      </div>
      <a
        href={related.viewAllHref}
        className={`mt-4 flex items-center justify-center gap-2 rounded-lg border border-black/15 bg-white font-semibold text-[#111111] transition-colors hover:bg-(--theme-light-bg) ${compact ? "px-4 py-2.5 text-xs" : "px-4 py-3 text-sm"}`}
      >
        <span aria-hidden>←</span> {related.viewAll}
      </a>
    </div>
  );
}

function CostsPanel({ costs, compact = false }) {
  return (
    <div className={`theme-dark relative overflow-hidden rounded-2xl border border-white/15 ${compact ? "p-4" : "p-8"}`}>
      {compact ? null : (
        <div
          className="pointer-events-none absolute right-6 top-16 aspect-[340/272] h-60"
          style={{ maskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)" }}
        >
          <Image src={costs.image} alt="Jaguar engine" fill className="object-contain" sizes="300px" />
        </div>
      )}

      <div className="relative">
        <div className="flex items-start gap-3">
          <JaguarStripe className={compact ? "mt-1 h-5 w-9 shrink-0" : "h-8 w-14 shrink-0"} />
          <h2 className={`h2 origin-left scale-y-110 scale-x-90 uppercase ${compact ? "text-lg" : ""}`} style={compact ? undefined : { whiteSpace: "nowrap", fontSize: "38px" }}>
            <span className="text-white">{costs.titlePre}</span>
            <span className="text-hero-blue">{costs.titleHighlight}</span>
          </h2>
        </div>

        <p className={`${compact ? "mt-3 text-xs" : "mt-5 text-base"} text-white`}>{costs.intro}</p>
        <p className={`${compact ? "text-5xl" : "text-8xl"} font-extrabold leading-tight text-chrome`}>{costs.price}</p>
        {compact && (
          <div
            className="relative mx-auto my-2 aspect-[340/272] h-40"
            style={{ maskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)" }}
          >
            <Image src={costs.image} alt="Jaguar engine" fill className="object-contain" sizes="200px" />
          </div>
        )}
        <p className={`${compact ? "mt-2 text-xs" : "mt-3 max-w-[48%] text-sm"} leading-relaxed text-white`}>{costs.body.replace(/^[.\s]+/, "")}</p>

        <div className={`${compact ? "mt-4 grid-cols-1 gap-2.5" : "mt-8 grid-cols-2 gap-5"} grid`}>
          {costs.subCards.map((c) => (
            <div key={c.title} className={`glass-card-dark flex items-start gap-3 rounded-xl ${compact ? "p-3" : "p-5"}`}>
              <Icon name={c.icon} className={`shrink-0 text-white ${compact ? "h-8 w-8" : "h-11 w-11"}`} />
              <div className="min-w-0">
                <p className={`font-extrabold uppercase leading-tight text-white ${compact ? "text-xs" : "text-base"}`}>{c.title}</p>
                {(c.items || [c.item]).map((it) => (
                  <p key={it} className={`text-white ${compact ? "mt-1 text-xs" : "mt-2 text-sm"}`}>• {it}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function VariantSec12({ data }) {
  const { yearBanner, costs, related } = data;
  const vehicle = yearBanner.vehicleLabel;
  const details = costs.subCards.flatMap((c) => c.items || [c.item]);

  return (
    <section className="theme-light relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative px-4 pb-10 pt-7 md:hidden">
        <div className="glass-card rounded-2xl p-4">
          <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase text-[#111111]">{vehicle} Engine Details:</h2>
          <div className="mt-3 space-y-3">
            {details.map((d) => (
              <DetailItem key={d} text={d} vehicle={vehicle} />
            ))}
          </div>
          <p className="mt-3 text-xs leading-snug text-[#111111]">{NOTE}</p>
        </div>

        <div className="mt-4">
          <CostsPanel costs={costs} compact />
        </div>

        <div className="mt-4">
          <RelatedCard related={related} compact />
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden px-4 py-10 sm:px-6 md:block lg:px-8">
        <div className="relative mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="h2 origin-left scale-y-110 scale-x-90 uppercase text-[#111111]">{vehicle} Engine Details:</h2>
            <div className="mt-4 flex flex-wrap items-center gap-x-16 gap-y-3">
              {details.map((d) => (
                <DetailItem key={d} text={d} vehicle={vehicle} />
              ))}
            </div>
            <p className="mt-4 text-sm leading-snug text-[#111111]">{NOTE}</p>
          </div>

          <div className="mt-6 grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-stretch gap-6">
            <CostsPanel costs={costs} />
            <RelatedCard related={related} />
          </div>
        </div>
      </div>
    </section>
  );
}
