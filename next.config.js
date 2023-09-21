/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/api/now-playing',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, s-maxage=60, stale-while-revalidate=30',
              },
            ],
          },
        ]
      },
}

module.exports = nextConfig