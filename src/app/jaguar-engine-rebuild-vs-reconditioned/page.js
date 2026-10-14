import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/jaguar-engine-rebuild-vs-reconditioned.json";

const PATH = "/jaguar-engine-rebuild-vs-reconditioned";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Jaguar Engine Rebuild vs Reconditioned | Jaguar Garage",
  description: "Jaguar engine rebuild vs reconditioned: what the terms mean, process differences, and how we advise customers. Clear, factual decision support from our Essex workshop.",
  alternates: { canonical: PATH },
};

export default function JaguarEngineRebuildVsReconditionedPage() {
  return (
    <>
      <JsonLd
        data={graphDoc([
          serviceSchema({ name: data.h1, description: data.metaDescription, path: PATH }),
          faqSchema(FAQ, PATH),
          breadcrumbSchema(
            [{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: data.h1, path: PATH }],
            PATH
          ),
        ])}
      />
      <AuthorityPage data={data} />
    </>
  );
}
