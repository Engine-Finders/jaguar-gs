import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/jaguar-v8-supercharged-timing-chain-repair.json";

const PATH = "/jaguar-v8-supercharged-timing-chain-repair";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Jaguar V8 Supercharged Timing Chain Repair (AJ133/AJ126) | Jaguar Garage",
  description: "Jaguar V8 timing chain repair for AJ133 and AJ126 engines at Jaguar Garage. Specialist timing chain replacement for 5.0 V8 and 3.0 V6 supercharged engines.",
  alternates: { canonical: PATH },
};

export default function JaguarV8SuperchargedTimingChainRepairPage() {
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
