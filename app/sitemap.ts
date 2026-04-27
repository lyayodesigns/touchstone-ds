import { MetadataRoute } from 'next';
import { createClient } from '@sanity/client';

export const revalidate = 3600;

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7l8oyxeq',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
});

const BASE_URL = 'https://touchstone-ds.com';

const STATIC_PAGES: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}/`,                                                      changeFrequency: 'weekly',  priority: 1.0 },
  { url: `${BASE_URL}/features/`,                                             changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/about/`,                                                changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/faq/`,                                                  changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/contact/`,                                              changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/touchscreen-software/`,                                 changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/touchscreen-hardware/`,                                 changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/touchscreen-hardware/55-inch-touchscreen-display/`,     changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/touchscreen-hardware/65-inch-touchscreen-display/`,     changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/touchscreen-hardware/75-inch-touchscreen-display/`,     changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/touchscreen-hardware/86-inch-touchscreen-display/`,     changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/privacy/`,                                              changeFrequency: 'yearly',  priority: 0.3 },
  { url: `${BASE_URL}/terms/`,                                                changeFrequency: 'yearly',  priority: 0.3 },
  { url: `${BASE_URL}/blog/`,                                                 changeFrequency: 'weekly',  priority: 0.9 },
  { url: `${BASE_URL}/news/`,                                                 changeFrequency: 'weekly',  priority: 0.8 },
  { url: `${BASE_URL}/compare-us/`,                                           changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/digital-yearbooks/`,                                    changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/digital-trophy-case/`,                                  changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/digital-athletic-hall-of-fame/`,                        changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/digital-donor-walls/`,                                  changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/digital-history-archive/`,                              changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/digital-record-boards/`,                                changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/touchstone-fundraising/`,                               changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/yearbook-scanning/`,                                    changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/digital-hall-of-fame-buyers-guide.pdf`,                 changeFrequency: 'yearly',  priority: 0.7 },
];

interface SanityPost {
  slug: string;
  publishedAt?: string;
  _updatedAt?: string;
}

const PRESS_RELEASE_FILTER = `count(categories[defined(@->title) && (@->title match "press*release" || @->title == "press-release" || @->title == "press release")])`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogPosts, newsPosts] = await Promise.all([
    sanity.fetch<SanityPost[]>(
      `*[_type == "post" && defined(slug.current) && ${PRESS_RELEASE_FILTER} == 0]
       | order(_updatedAt desc) [0...500] {
         "slug": slug.current,
         publishedAt,
         _updatedAt
       }`
    ),
    sanity.fetch<SanityPost[]>(
      `*[_type == "post" && defined(slug.current) && ${PRESS_RELEASE_FILTER} > 0]
       | order(_updatedAt desc) [0...500] {
         "slug": slug.current,
         publishedAt,
         _updatedAt
       }`
    ),
  ]);

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post._updatedAt || post.publishedAt || new Date()),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const newsEntries: MetadataRoute.Sitemap = newsPosts.map((post) => ({
    url: `${BASE_URL}/news/${post.slug}/`,
    lastModified: new Date(post._updatedAt || post.publishedAt || new Date()),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...STATIC_PAGES, ...blogEntries, ...newsEntries];
}
