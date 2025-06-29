import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
});

const formatDate = (date) => {
  return date ? new Date(date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
};

async function generateSitemap() {
  try {
    const posts = await client.fetch(`*[_type == "post"] { slug, publishedAt, _updatedAt }`);
    
    // Replace with your actual domain
    const domain = process.env.SITE_URL || 'https://your-domain.com';
    
    const staticPages = [
      { loc: `${domain}/`, lastmod: formatDate(new Date()), changefreq: 'weekly', priority: '1.0' },
      { loc: `${domain}/about`, lastmod: formatDate(new Date()), changefreq: 'monthly', priority: '0.8' },
      { loc: `${domain}/blog`, lastmod: formatDate(new Date()), changefreq: 'daily', priority: '0.9' },
      // Add more static pages as needed
    ];
    
    const blogEntries = posts.map(post => {
      const slug = post.slug?.current;
      if (!slug) return null;
      return {
        loc: `${domain}/blog/${slug}`,
        lastmod: formatDate(post._updatedAt || post.publishedAt),
        changefreq: 'monthly',
        priority: '0.7'
      };
    }).filter(Boolean);

    const allPages = [...staticPages, ...blogEntries];
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    allPages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${page.loc}</loc>\n`;
      sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';

    const publicDir = path.resolve(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
    
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
