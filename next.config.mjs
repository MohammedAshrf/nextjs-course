/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "nextjs-course-sigma-six.vercel.app/",
      },
    ],
  },
};

export default nextConfig;
