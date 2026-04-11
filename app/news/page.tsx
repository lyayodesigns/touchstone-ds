import React from "react";
import { formatDate } from "../../lib/utils";
import { client, urlFor } from "../../lib/sanity";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogHeroSection from "../../components/Blog/BlogHeroSection";
import { postsQuery } from "../../lib/sanity/queries";
import Link from "next/link";
import { Metadata } from "next";
import type { Post } from "../../lib/sanity/types";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema } from "../../lib/schema";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "News | Touchstone Digital Solutions",
  description:
    "Official announcements and updates from Touchstone Digital Solutions.",
  openGraph: {
    title: "News | Touchstone Digital Solutions",
    description:
      "Official announcements and updates from Touchstone Digital Solutions.",
    url: "https://touchstone-ds.com/news/",
    type: "website",
    images: [
      {
        url: "https://touchstone-ds.com/og-image.jpg",
      },
    ],
    siteName: "Touchstone Digital Solutions",
  },
  twitter: {
    card: "summary_large_image",
    site: "@touchstone_ds",
    title: "News | Touchstone Digital Solutions",
    description:
      "Official announcements and updates from Touchstone Digital Solutions.",
    images: ["https://touchstone-ds.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://touchstone-ds.com/news/",
  },
};

async function fetchNews(): Promise<Post[]> {
  try {
   
    const posts = await client.fetch(postsQuery, { categoryTitle: null });
    return (posts || []).filter((post) =>
      post.categories?.some((cat) =>
        (cat.title || "").toLowerCase().includes("press-release"),
      ),
    );
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

export default async function NewsPage() {
  const posts = await fetchNews();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', url: 'https://touchstone-ds.com/' },
        { name: 'News', url: 'https://touchstone-ds.com/news/' },
      ])} />
      <Navbar />
      <BlogHeroSection
        title="News"
        subtitle="Official announcements and updates from Touchstone Digital Solutions"
      />
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-700">
                No news found
              </h2>
              <p className="mt-2 text-gray-500">Check back soon for updates.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
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
                      <Link
                        href={`/news/${post.slug.current}`}
                        className="hover:text-blue-600 transition-colors"
                      >
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
        </div>
      </section>
      <Footer />
    </div>
  );
}

