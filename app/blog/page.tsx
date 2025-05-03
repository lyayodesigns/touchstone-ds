
import React from "react";
import { formatDate } from "../../lib/utils";
import { client, urlFor } from "../../lib/sanity";
import { cn } from "../../lib/utils";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogHeroSection from "../../components/Blog/BlogHeroSection";
import { postsQuery } from "../../lib/sanity/queries";
import { SeoType } from "../../lib/sanity/types";
import Link from "next/link";
import { Metadata } from "next";

import type { Post } from "../../lib/sanity/types";





async function fetchPosts() {
  try {
    const posts = await client.fetch(postsQuery);
    return posts || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

import Head from "next/head";

async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <>
      <Head>
        <title>Blog | Touchstone Digital Solutions</title>
        <meta name="description" content="Latest news, insights, and updates from Touchstone Digital Solutions." />
        <link rel="canonical" href="https://touchstone-ds.com/blog/" />
        {/* Open Graph */}
        <meta property="og:title" content="Blog | Touchstone Digital Solutions" />
        <meta property="og:description" content="Latest news, insights, and updates from Touchstone Digital Solutions." />
        <meta property="og:url" content="https://touchstone-ds.com/blog/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://touchstone-ds.com/og-image.jpg" />
        <meta property="og:site_name" content="Touchstone Digital Solutions" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@touchstone_ds" />
        <meta name="twitter:title" content="Blog | Touchstone Digital Solutions" />
        <meta name="twitter:description" content="Latest news, insights, and updates from Touchstone Digital Solutions." />
        <meta name="twitter:image" content="https://touchstone-ds.com/og-image.jpg" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
        <BlogHeroSection 
          title="Our Blog" 
          subtitle="Insights, updates, and stories from Touchstone Digital Solutions" 
        />
        {/* Blog Posts */}
        <section className="py-8 sm:py-10 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-gray-700">No posts found</h2>
                <p className="mt-2 text-gray-500">Check back soon for new content!</p>
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
                        <Link href={`/blog/${post.slug.current}`} className="hover:text-blue-600 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                        {post.seo?.description || "No description available."}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-400 mt-auto">
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
    </>
  );
};

export default BlogPage;
