/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: export,
}

/*async redirects() {
      return [
        {
          source: '/about',
          destination: '/',
          permanent: true,
        },
      ]
    },*/

module.exports = nextConfig
