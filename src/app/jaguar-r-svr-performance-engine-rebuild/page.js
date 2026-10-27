import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/jaguar-r-svr-performance-engine-rebuild.json";

const PATH = "/jaguar-r-svr-performance-engine-rebuild";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Jaguar R/SVR Performance Engine Rebuild | Jaguar Garage",
  description: "Specialist performance engine rebuild for Jaguar R and SVR models - F-Type, F-Pace, XFR, XJR. Full strip-down, machining, supercharger service, and precision assembly.",
  alternates: { canonical: PATH },
};

export default function JaguarRSvrPerformanceEngineRebuildPage() {
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
