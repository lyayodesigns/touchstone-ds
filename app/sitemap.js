import { createClient } from '@sanity/client';

// Initialize the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
});

export default async function sitemap() {
  // Get all blog posts from Sanity
  const posts = await client.fetch(`*[_type == "post"] { slug, publishedAt, _updatedAt }`);
  
  // Base URL from environment variable or default
  const baseUrl = process.env.SITE_URL || 'https://your-domain.com';
  
  // Define static pages
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
    // Add more static pages as needed
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
}
