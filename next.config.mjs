/** @type {import('next').NextConfig} */
const ghPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  reactStrictMode: true,
  ...(ghPages
    ? {
        output: "export",
        basePath: "/landingpage2",
        assetPrefix: "/landingpage2/",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
