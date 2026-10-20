import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/jaguar-aj26-timing-chain-repair.json";

const PATH = "/jaguar-aj26-timing-chain-repair";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Jaguar XK AJ26/AJ27 Timing Chain Tensioner Repair | Jaguar Garage",
  description: "Specialist timing chain tensioner replacement for Jaguar X100 XK8 & XKR V8 engines. Full timing system overhaul with upgraded metal tensioners. Fixed-price quotes.",
  alternates: { canonical: PATH },
};

export default function JaguarXkAj26Aj27TimingChainTensionerRepairPage() {
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
