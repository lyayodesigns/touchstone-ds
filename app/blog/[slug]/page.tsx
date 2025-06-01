import React from "react";
import { notFound } from "next/navigation";
import { client, urlFor } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BlogHeroSection from "../../../components/Blog/BlogHeroSection";
import PortableTextComponents from "../../../components/Blog/PortableTextComponents";
import { postQuery } from "../../../lib/sanity/queries";
import { SeoType } from "../../../lib/sanity/types";
import Link from "next/link";
import { Metadata } from "next";
import { formatDate } from '../../../lib/utils';

import type { PortableTextBlock } from '@portabletext/types';

interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  crop?: Record<string, unknown>;
  hotspot?: Record<string, unknown>;
  _type?: string;
}

// Force static generation
export const dynamic = 'force-static';

// Generate static paths
export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"] { slug { current } }`, {}, {
    next: {
      revalidate: 3600 // Revalidate every hour
    }
  });
  
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }));
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: SanityImage;
  publishedAt: string;
  author: { name: string; image: SanityImage; bio: PortableTextBlock[] };
  categories: Array<{ title: string }>;
  body: PortableTextBlock[];
  seo?: SeoType;
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    // Await the params object as required by Next.js 15+
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    
    const post = await client.fetch(postQuery, { slug });
    
    if (!post) {
      return {
        title: 'Post Not Found | Touchstone Digital Solutions Blog',
        description: 'The requested blog post could not be found.',
      };
    }
    
    return {
      title: post.seo?.metaTitle || `${post.title} | Touchstone Digital Solutions Blog`,
      description: post.seo?.metaDescription || `Read about ${post.title} on the Touchstone Digital Solutions blog.`,
      openGraph: {
        title: post.seo?.metaTitle || post.title,
        description: post.seo?.metaDescription || `Read about ${post.title} on the Touchstone Digital Solutions blog.`,
        type: 'article',
        images: post.mainImage ? [
          {
            url: urlFor(post.mainImage).width(1200).height(675).url(),
            width: 1200,
            height: 675,
            alt: post.title,
          }
        ] : undefined,
        publishedTime: post.publishedAt,
        authors: post.author?.name ? [post.author.name] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.seo?.metaTitle || post.title,
        description: post.seo?.metaDescription || `Read about ${post.title} on the Touchstone Digital Solutions blog.`,
        images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(675).url()] : undefined,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: 'Blog | Touchstone Digital Solutions',
      description: 'Latest news, insights, and updates from Touchstone Digital Solutions.',
    };
  }
}

async function BlogPostPage({ params }: BlogPostPageProps) {
  // Await the params object as required by Next.js 15+
  const { slug } = await params;
  let post: Post | null = null;
  
  try {
    post = await client.fetch(postQuery, { slug });
    
    // If post not found, return 404
    if (!post) {
      return notFound();
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    return notFound();
  }

  // Post is guaranteed to exist at this point

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <BlogHeroSection
        title={post.title}
        isPost={true}
        publishedDate={formatDate(post.publishedAt)}
        author={post.author?.name}
        categories={post.categories?.map(cat => cat.title).join(', ')}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {post.mainImage && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:underline mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-justify prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:text-purple-600 hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg">
              <PortableText value={post.body} components={PortableTextComponents} />
            </article>
            {/* Author Bio */}
            {post.author && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center">
                  {post.author.image && (
                    <img
                      src={urlFor(post.author.image).width(80).height(80).url()}
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">About the Author</h3>
                    <p className="text-gray-700 font-medium">{post.author.name}</p>
                    {post.author.bio && (
                      <div className="mt-2 text-gray-600">
                        <PortableText value={post.author.bio} components={PortableTextComponents} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BlogPostPage;
