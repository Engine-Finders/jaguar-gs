import DirectoryPage from "@/components/shared/DirectoryPage";
import JsonLd from "@/components/shared/JsonLd";
import { webPageSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/core/engines.json";

const PATH = "/engines";

export const metadata = {
  title: "Jaguar Engine Rebuilds | Jaguar Garage",
  description: "Every Jaguar engine family we rebuild and replace - click through for pricing, applications and known issues.",
  alternates: { canonical: PATH },
};

export default function EnginesPage() {
  return (
    <>
      <JsonLd
        data={graphDoc([
          webPageSchema({ name: "Jaguar Engine Rebuilds | Jaguar Garage", description: "Every Jaguar engine family we rebuild and replace \u2014 click through for pricing, applications and known issues.", path: PATH, type: "CollectionPage" }),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Jaguar Engine Rebuilds", path: PATH }], PATH),
        ])}
      />
      <DirectoryPage data={data} />
    </>
  );
}
