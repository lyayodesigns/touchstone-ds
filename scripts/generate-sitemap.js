const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Initialize the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7l8oyxeq',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
  token: process.env.SANITY_API_TOKEN, // Add token if you have one for authenticated requests
});

const formatDate = (date) => {
  return date ? new Date(date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
};

async function generateSitemap() {
  try {
    // Get all blog posts from Sanity with a more comprehensive query
    const posts = await client.fetch(
      `*[_type == "post" && defined(slug.current)] | order(_updatedAt desc) [0...100] { 
        "slug": slug.current, 
        publishedAt, 
        _updatedAt 
      }`
    );
    console.log(`Fetched ${posts.length} posts from Sanity for sitemap`);
    
    // Base URL from environment variable or default
    const baseUrl = (process.env.SITE_URL || 'https://touchstone-ds.com').replace(/\/$/, '');
    console.log(`Using base URL: ${baseUrl} for sitemap generation`);
    
    // Define static pages with their metadata
    const staticPages = [
      { 
        loc: `${baseUrl}/`, 
        lastmod: formatDate(new Date()), 
        changefreq: 'weekly', 
        priority: '1.0' 
      },
      { 
        loc: `${baseUrl}/features/`, 
        lastmod: formatDate(new Date()), 
        changefreq: 'monthly', 
        priority: '0.9' 
      },
      { 
        loc: `${baseUrl}/about/`, 
        lastmod: formatDate(new Date()), 
        changefreq: 'monthly', 
        priority: '0.8' 
      },
      { 
        loc: `${baseUrl}/faq/`, 
        lastmod: formatDate(new Date()), 
        changefreq: 'monthly', 
        priority: '0.8' 
      },
      { 
        loc: `${baseUrl}/contact/`, 
        lastmod: formatDate(new Date()), 
        changefreq: 'monthly', 
        priority: '0.7' 
      },
      { 
        loc: `${baseUrl}/privacy/`, 
        lastmod: formatDate(new Date()), 
        changefreq: 'yearly', 
        priority: '0.3' 
      },
      { 
        loc: `${baseUrl}/terms/`, 
        lastmod: formatDate(new Date()), 
        changefreq: 'yearly', 
        priority: '0.3' 
      },
      { 
        loc: `${baseUrl}/blog/`, 
        lastmod: formatDate(new Date()), 
        changefreq: 'weekly', 
        priority: '0.9' 
      },
    ];
    
    // Create sitemap entries for blog posts
    const blogEntries = posts
      .filter(post => post.slug)
      .map(post => {
        return {
          loc: `${baseUrl}/blog/${post.slug}/`,
          lastmod: formatDate(post._updatedAt || post.publishedAt || new Date()),
          changefreq: 'weekly',
          priority: '0.7'
        };
      });
    
    // Combine static pages and blog pages
    const allPages = [...staticPages, ...blogEntries];
    
    // Generate XML
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
    
    // Write to file
    const publicDir = path.resolve(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully!');
    console.log(`Total URLs in sitemap: ${allPages.length}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the function
generateSitemap();

module.exports = { generateSitemap };
