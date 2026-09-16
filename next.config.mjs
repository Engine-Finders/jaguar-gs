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
