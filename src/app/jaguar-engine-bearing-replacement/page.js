import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/jaguar-engine-bearing-replacement.json";

const PATH = "/jaguar-engine-bearing-replacement";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Jaguar Engine Bearing Replacement | Jaguar Garage",
  description: "Precision engine bearing replacement for Jaguar petrol and diesel engines. Full engine-out strip-down, clearance measurement, and rebuild at our Essex workshop. Get a quote today.",
  alternates: { canonical: PATH },
};

export default function JaguarEngineBearingReplacementPage() {
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
