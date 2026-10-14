import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/jaguar-engine-replacement-and-fitting.json";

const PATH = "/jaguar-engine-replacement-and-fitting";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Jaguar Engine Replacement & Fitting | Jaguar Garage",
  description: "Professional Jaguar engine replacement and fitting service. Full supply & fit for all models. Fixed-price quotes, 12-month warranty. Nationwide coverage.",
  alternates: { canonical: PATH },
};

export default function JaguarEngineReplacementAndFittingPage() {
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
