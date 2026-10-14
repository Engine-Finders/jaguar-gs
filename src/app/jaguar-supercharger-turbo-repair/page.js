import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/jaguar-supercharger-turbo-repair.json";

const PATH = "/jaguar-supercharger-turbo-repair";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Jaguar Supercharger & Turbo Repair | Jaguar Garage",
  description: "Jaguar supercharger and turbo repair services at Jaguar Garage. We rebuild Eaton superchargers and replace turbocharger cartridges for all Jaguar models.",
  alternates: { canonical: PATH },
};

export default function JaguarSuperchargerTurboRepairPage() {
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
