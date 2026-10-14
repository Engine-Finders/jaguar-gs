import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/jaguar-engine-repair-vs-full-rebuild.json";

const PATH = "/jaguar-engine-repair-vs-full-rebuild";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Jaguar Engine Repair vs Full Rebuild | Jaguar Garage",
  description: "Understanding the difference between a targeted Jaguar engine repair and a complete full rebuild. Decision factors, process overview, and expert guidance for your Jaguar.",
  alternates: { canonical: PATH },
};

export default function JaguarEngineRepairVsFullRebuildPage() {
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
