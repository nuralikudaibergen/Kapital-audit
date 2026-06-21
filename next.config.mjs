/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict TypeScript in CI; flips off the v0-era "ignore errors" workaround.
  typescript: {
    ignoreBuildErrors: false,
  },
  // Keep next/image unoptimized: all assets are local static files in /public,
  // so the default loader is sufficient. Flip this if you ever serve remote
  // imagery and need Vercel's image optimization.
  images: {
    unoptimized: true,
  },
  // Vercel-friendly: explicit React 19 + experimental.serverActions defaults.
  reactStrictMode: true,
}

export default nextConfig
