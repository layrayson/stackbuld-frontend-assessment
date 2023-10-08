/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      process.env.NEXT_PUBLIC_IMAGE_STORE_HOST_ONE,
      process.env.NEXT_PUBLIC_IMAGE_STORE_HOST_TWO,
    ],
  },
};

module.exports = nextConfig;
