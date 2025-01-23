const nextConfig = {
  async redirects() {
    return [
      {
        source: '/login',
        has: [{
          type: 'cookie',
          key: 'token',
        }],
        destination: '/chart',
        permanent: false,
      },
      {
        source: '/chart',
        missing: [
          {
            type: "cookie",
            key: "token",
          },
        ],
        destination: '/login',
        permanent: false,
      },
      {
        source: '/',
        missing: [
          {
            type: "cookie",
            key: "token",
          },
        ],
        destination: '/login',
        permanent: false,
      },
      {
        source: '/',
        has: [
          {
            type: "cookie",
            key: "token",
          },
        ],
        destination: '/chart',
        permanent: false,
      },
    ]
  }
}

export default nextConfig