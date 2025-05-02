
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
import Head from "next/head";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  author: { name: string; image: any; bio: any[] };
  categories: Array<{ title: string }>;
  body: any[];
  seo?: SeoType;
}

interface BlogPostPageProps {
  params: { slug: string };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const data = await client.fetch(postQuery, { slug: params.slug });
        if (!data) {
          router.push('/404');
          return;
        }
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
        router.push('/404');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [params.slug, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-700">Loading post...</h2>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return null; // This shouldn't happen as we redirect to 404 if post is null
  }

  // Set document title and meta tags
  useEffect(() => {
    if (post) {
      document.title = post.seo?.metaTitle || `${post.title} | Touchstone Digital Solutions Blog`;
      
      // You can add more meta tags here if needed
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.seo?.metaDescription || `Read about ${post.title} on the Touchstone Digital Solutions blog.`);
      }
    }
  }, [post]);

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
};

export default BlogPostPage;
