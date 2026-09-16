import { Suspense } from "react";
import GetQuoteClient from "./GetQuoteClient";

export const metadata = {
  title: "Get Your Jaguar Engine Quote | Jaguar Garage",
  description: "Get a fast, no-obligation Jaguar engine rebuild quote. Compare prices from trusted Jaguar specialists.",
  robots: { index: false, follow: false },
};

export default function GetQuotePage() {
  return (
    <Suspense fallback={null}>
      <GetQuoteClient />
    </Suspense>
  );
}
