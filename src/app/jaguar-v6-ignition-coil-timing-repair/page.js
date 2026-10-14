import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/jaguar-v6-ignition-coil-timing-repair.json";

const PATH = "/jaguar-v6-ignition-coil-timing-repair";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Jaguar V6 Ignition Coil & Timing Repair | Jaguar Garage",
  description: "Specialist Jaguar V6 ignition coil and timing chain/belt repair for AJ-V6 and AJD-V6 engines. Full workshop process, fixed-price quotes, and nationwide recovery.",
  alternates: { canonical: PATH },
};

export default function JaguarV6IgnitionCoilTimingRepairPage() {
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
