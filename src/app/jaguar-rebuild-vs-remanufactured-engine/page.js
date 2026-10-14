import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/jaguar-rebuild-vs-remanufactured-engine.json";

const PATH = "/jaguar-rebuild-vs-remanufactured-engine";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Jaguar Rebuild vs Remanufactured Engine | Jaguar Garage",
  description: "Understanding the difference between rebuilt and remanufactured Jaguar engines. Process definitions, technical distinctions, and decision factors explained.",
  alternates: { canonical: PATH },
};

export default function JaguarRebuildVsRemanufacturedEnginePage() {
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
