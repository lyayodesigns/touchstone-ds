export default function robots() {
  const baseUrl = process.env.SITE_URL || 'https://touchstone-ds.com';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/studio/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
