import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/jaguar-xk-aj26-aj27-timing-chain-tensioner-repair.json";

const PATH = "/jaguar-xk-aj26-aj27-timing-chain-tensioner-repair";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Jaguar XK AJ26/AJ27 Timing Chain Tensioner Repair | Jaguar Garage",
  description: "Specialist timing chain tensioner replacement for Jaguar XK8 and XKR with AJ26 and AJ27 V8 engines. Precision repair at our Essex workshop.",
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
