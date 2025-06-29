import { createClient } from '@sanity/client';

// Initialize the Sanity client - using direct values to ensure it works during build time
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7l8oyxeq',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
});

// This function generates the sitemap entries
export default async function sitemap() {
  try {
    // Get all blog posts from Sanity
    const posts = await client.fetch(`*[_type == "post"] { slug, publishedAt, _updatedAt }`);
    console.log(`Sitemap: Fetched ${posts.length} posts from Sanity`);
    
    // Base URL from environment variable or default
    const baseUrl = (process.env.SITE_URL || 'https://touchstone-ds.com').replace(/\/$/, '');
    
    // Define static pages with their metadata
    const staticPages = [
      {
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/features`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/faq`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: `${baseUrl}/privacy`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/terms`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
    ];
    
    // Create sitemap entries for blog posts
    const blogPages = posts
      .filter(post => post.slug?.current)
      .map(post => ({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: new Date(post._updatedAt || post.publishedAt || new Date()),
        changeFrequency: 'monthly',
        priority: 0.7,
      }));
    
    // Combine static pages and blog pages
    return [...staticPages, ...blogPages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Return basic static pages on error
    const baseUrl = (process.env.SITE_URL || 'https://touchstone-ds.com').replace(/\/$/, '');
    return [
      { url: `${baseUrl}/`, lastModified: new Date() },
      { url: `${baseUrl}/about`, lastModified: new Date() },
      { url: `${baseUrl}/blog`, lastModified: new Date() },
      { url: `${baseUrl}/contact`, lastModified: new Date() },
    ];
  }
}
