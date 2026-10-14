import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/jaguar-engine-compatibility-and-application-matching.json";

const PATH = "/jaguar-engine-compatibility-and-application-matching";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Jaguar Engine Compatibility & Application Matching | Jaguar Garage",
  description: "Professional Jaguar engine compatibility and application matching. Verify engine fitment by VIN, engine code, model year, drivetrain, and ancillaries. Expert advice from our Essex workshop.",
  alternates: { canonical: PATH },
};

export default function JaguarEngineCompatibilityAndApplicationMatchingPage() {
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
