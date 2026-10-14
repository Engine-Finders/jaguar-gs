import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/jaguar-high-mileage-engine-rebuild.json";

const PATH = "/jaguar-high-mileage-engine-rebuild";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Jaguar High-Mileage Engine Rebuild | Jaguar Garage",
  description: "Specialist high-mileage engine rebuild service for Jaguar vehicles. Full disassembly, precision machining, and reassembly to factory tolerances.",
  alternates: { canonical: PATH },
};

export default function JaguarHighMileageEngineRebuildPage() {
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
