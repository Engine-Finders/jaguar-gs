import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/jaguar-engine-machining-and-rebuild-preparation.json";

const PATH = "/jaguar-engine-machining-and-rebuild-preparation";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Jaguar Engine Machining & Rebuild Preparation | Jaguar Garage",
  description: "Precision engine machining for Jaguar AJ-series engines. Cylinder boring, honing, crankshaft grinding, and block preparation at our Essex workshop. Get a quote.",
  alternates: { canonical: PATH },
};

export default function JaguarEngineMachiningAndRebuildPreparationPage() {
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
