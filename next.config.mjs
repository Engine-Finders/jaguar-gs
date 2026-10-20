/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      // guide pages renamed to the addresses used in the content documents: old address keeps working
      { source: "/jaguar-cylinder-head-repair-rebuild", destination: "/jaguar-cylinder-head-repair", permanent: true },
      { source: "/jaguar-engine-compatibility-and-application-matching", destination: "/jaguar-engine-compatibility", permanent: true },
      { source: "/jaguar-engine-machining-and-rebuild-preparation", destination: "/jaguar-engine-machining", permanent: true },
      { source: "/jaguar-engine-matching-by-registration-and-vin", destination: "/jaguar-engine-matching", permanent: true },
      { source: "/jaguar-engine-rebuild-vs-reconditioned", destination: "/jaguar-rebuild-vs-reconditioned", permanent: true },
      { source: "/jaguar-engine-rebuild-vs-replacement", destination: "/jaguar-rebuild-vs-replacement", permanent: true },
      { source: "/jaguar-engine-rebuild-vs-used-engine", destination: "/jaguar-rebuild-vs-used", permanent: true },
      { source: "/jaguar-engine-repair-vs-full-rebuild", destination: "/jaguar-repair-vs-rebuild", permanent: true },
      { source: "/jaguar-failed-previous-rebuild-remediation", destination: "/jaguar-failed-rebuild-repair", permanent: true },
      { source: "/jaguar-nationwide-engine-recovery", destination: "/jaguar-engine-recovery", permanent: true },
      { source: "/jaguar-rebuild-vs-remanufactured-engine", destination: "/jaguar-rebuild-vs-remanufactured", permanent: true },
      { source: "/jaguar-v8-supercharged-timing-chain-repair", destination: "/jaguar-v8-timing-chain-repair", permanent: true },
      { source: "/jaguar-xk-aj26-aj27-timing-chain-tensioner-repair", destination: "/jaguar-aj26-timing-chain-repair", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.jaguargarage.uk" }],
        destination: "https://jaguargarage.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
