import React from "react";
import { formatDate } from "../../lib/utils";
import { client, urlFor } from "../../lib/sanity";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogHeroSection from "../../components/Blog/BlogHeroSection";
import BlogPagination from "../../components/Blog/BlogPagination";
import { blogPostsPaginatedQuery, postsCountQuery } from "../../lib/sanity/queries";
import Link from "next/link";
import { Metadata } from "next";
import type { Post } from "../../lib/sanity/types";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema } from "../../lib/schema";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Blog | Touchstone Digital Solutions',
  description: 'Explore tips and insights on digital Hall of Fame systems, donor walls, record boards, and touchscreen displays from Touchstone Digital Solutions.',
  openGraph: {
    title: 'Blog | Touchstone Digital Solutions',
    description: 'Explore tips and insights on digital Hall of Fame systems, donor walls, record boards, and touchscreen displays from Touchstone Digital Solutions.',
    url: 'https://touchstone-ds.com/blog/',
    type: 'website',
    images: [
      {
        url: 'https://touchstone-ds.com/og-image.jpg',
      },
    ],
    siteName: 'Touchstone Digital Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@touchstone_ds',
    title: 'Blog | Touchstone Digital Solutions',
    description: 'Explore tips and insights on digital Hall of Fame systems, donor walls, record boards, and touchscreen displays from Touchstone Digital Solutions.',
    images: ['https://touchstone-ds.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://touchstone-ds.com/blog/',
  },
};

const POSTS_PER_PAGE = 12;

async function fetchBlogPageData(page: number) {
  try {
    const [posts, totalCount] = await Promise.all([
      client.fetch(blogPostsPaginatedQuery, { categoryTitle: null, page }),
      client.fetch(postsCountQuery),
    ]);

    return {
      posts: (posts || []) as Post[],
      totalCount: typeof totalCount === "number" ? totalCount : Number(totalCount) || 0,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { posts: [] as Post[], totalCount: 0 };
  }
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const requestedPage = Number(resolvedSearchParams?.page ?? 1);
  const currentPage = Number.isFinite(requestedPage) && requestedPage >= 1 ? Math.floor(requestedPage) : 1;

  const { posts, totalCount } = await fetchBlogPageData(currentPage);
  // Blog page should not surface press releases.
  const blogPosts = posts.filter(
    (post) =>
      !post.categories?.some((cat) =>
        (() => {
          const t = (cat.title || "").toLowerCase();
          return t.includes("press-release") || t.includes("press release");
        })(),
      ),
  );

  const hasPrev = currentPage > 1;
  const hasNext = currentPage * POSTS_PER_PAGE < totalCount;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', url: 'https://touchstone-ds.com/' },
        { name: 'Blog', url: 'https://touchstone-ds.com/blog/' },
      ])} />
      <Navbar />
      <BlogHeroSection 
        title="Our Blog" 
        subtitle="Insights, updates, and stories from Touchstone Digital Solutions" 
      />
      {/* Blog Posts */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div id="blog-list" className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-700">No posts found</h2>
              <p className="mt-2 text-gray-500">Check back soon for new content!</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <div
                  key={post._id}
                  className="flex flex-col h-full bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden border-b border-gray-100">
                    {post.mainImage && (
                      <img
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.title}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      <Link href={`/blog/${post.slug.current}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-400 mt-4">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>{post.author?.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <BlogPagination currentPage={currentPage} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
      </section>
      <Footer />
    </div>
  );
}