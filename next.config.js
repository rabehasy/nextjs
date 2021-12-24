module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/contact-page.html',
        destination: '/contact',
        permanent: true // triggers 308
      }
    ]
  }
}
