import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/jaguar-ingenium-diesel-repair.json";

const PATH = "/jaguar-ingenium-diesel-repair";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Jaguar Ingenium Diesel Repair (AJ200D) | Jaguar Garage",
  description: "Specialist repair for Jaguar Ingenium AJ200D diesel engines. Timing chain replacement, injector seals, and full rebuilds by expert technicians. Get a fixed-price quote.",
  alternates: { canonical: PATH },
};

export default function JaguarIngeniumDieselRepairPage() {
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
