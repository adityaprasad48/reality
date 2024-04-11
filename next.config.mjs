/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        // port: "",
        // pathname: "/my-bucket/**",
      },
      {
        protocol: "https",
        hostname: "www.w3schools.com",
        // port: "",
        // pathname: "/my-bucket/**",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
