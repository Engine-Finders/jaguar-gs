import Link from "next/link";
import JaguarStripe from "@/components/reusable/JaguarStripe";

/**
 * Renders a Core / Authoritative content page from a parsed block list.
 * data = { title, subtitle, updated, intro, blocks: [
 *   { type: "h2"|"h3", text },
 *   { type: "p", text },
 *   { type: "ul", items: [string] },
 * ] }
 * Inline markdown supported: **bold**, [label](href).
 */
function inline(text, keyBase) {
  const nodes = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      nodes.push(
        <strong key={`${keyBase}-b${i}`} className="font-semibold text-[#111111]">
          {m[1]}
        </strong>
      );
    } else {
      const href = m[3];
      const isInternal = href.startsWith("/") || href.startsWith("#");
      nodes.push(
        isInternal ? (
          <Link key={`${keyBase}-l${i}`} href={href} className="text-hero-blue underline underline-offset-2">
            {m[2]}
          </Link>
        ) : (
          <a
            key={`${keyBase}-l${i}`}
            href={href}
            className="text-hero-blue underline underline-offset-2"
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {m[2]}
          </a>
        )
      );
    }
    last = re.lastIndex;
    i += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export default function LegalPage({ data }) {
  const blocks = data.blocks || [];
  return (
    <main className="theme-light mono-accent">
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">
          <JaguarStripe className="h-4 w-8 shrink-0" />
          Jaguar Garage
        </p>
        <h1 className="h2 mt-3 uppercase text-[#111111]">{data.title}</h1>
        <span className="mt-4 block h-0.5 w-24 chrome-bar-c" aria-hidden="true" />
        {data.subtitle ? <p className="mt-3 text-lg text-[#3a3a3d]">{data.subtitle}</p> : null}
        {data.updated ? <p className="mt-2 text-sm text-[#8a8a8e]">{data.updated}</p> : null}
        {data.intro ? (
          <p className="mt-6 border-l-2 border-[#111111]/25 pl-4 text-sm italic leading-relaxed text-[#3a3a3d]">
            {inline(data.intro, "intro")}
          </p>
        ) : null}

        <div className="mt-8 space-y-4">
          {blocks.map((b, i) => {
            if (b.type === "h2") {
              return (
                <h2 key={i} className="h4 mt-10 uppercase text-[#111111]">
                  {b.text}
                </h2>
              );
            }
            if (b.type === "h3") {
              return (
                <h3 key={i} className="mt-6 text-base font-bold text-[#111111]">
                  {b.text}
                </h3>
              );
            }
            if (b.type === "ul") {
              return (
                <ul key={i} className="ml-5 list-disc space-y-1.5 text-sm leading-relaxed text-[#3a3a3d]">
                  {(b.items || []).map((it, j) => (
                    <li key={j}>{inline(it, `${i}-${j}`)}</li>
                  ))}
                </ul>
              );
            }
            if (b.type === "ctaRow") {
              return (
                <div key={i} className="flex flex-wrap gap-3 py-1">
                  {b.items.map((it, j) => (
                    <Link
                      key={j}
                      href={it.href}
                      className={
                        j === 0
                          ? "rounded-md bg-hero-blue px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                          : "rounded-md border border-hero-blue px-5 py-2.5 text-sm font-bold text-hero-blue transition-colors hover:bg-hero-blue hover:text-white"
                      }
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              );
            }
            return (
              <p key={i} className="text-sm leading-relaxed text-[#3a3a3d]">
                {inline(b.text || "", `p${i}`)}
              </p>
            );
          })}
        </div>
      </section>
    </main>
  );
}
