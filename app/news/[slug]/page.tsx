import React from "react";
import { notFound } from "next/navigation";
import { client, urlFor } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BlogHeroSection from "../../../components/Blog/BlogHeroSection";
import PressReleasePortableTextComponents from "../../../components/Blog/PressReleasePortableTextComponents";
import { postQuery } from "../../../lib/sanity/queries";
import { SeoType } from "../../../lib/sanity/types";
import Link from "next/link";
import { Metadata } from "next";
import { formatDate, calculateReadingTime } from "../../../lib/utils";
import JsonLd from "../../../components/JsonLd";
import { articleSchema, breadcrumbSchema } from "../../../lib/schema";

import type { PortableTextBlock } from "@portabletext/types";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Helper function to extract first sentence from PortableText
function getFirstSentence(body: PortableTextBlock[]): string {
  if (!body || body.length === 0) return "";
  
  const firstBlock = body.find((block) => block._type === "block" && block.children);
  if (!firstBlock || !("children" in firstBlock)) return "";
  
  const text = firstBlock.children
    .filter((child: any) => child._type === "span" && child.text)
    .map((child: any) => child.text)
    .join("");
  
  // Extract first sentence (ending with . ! or ?)
  const match = text.match(/^[^.!?]+[.!?]/);
  return match ? match[0].trim() : text.split(".")[0].trim() + ".";
}

// Helper function to remove first sentence from body
function removeFirstSentence(body: PortableTextBlock[]): PortableTextBlock[] {
  if (!body || body.length === 0) return body;
  
  const firstSentence = getFirstSentence(body);
  if (!firstSentence) return body;
  
  const bodyCopy = JSON.parse(JSON.stringify(body));
  const firstBlockIndex = bodyCopy.findIndex((block: any) => block._type === "block" && block.children);
  
  if (firstBlockIndex === -1) return body;
  
  const firstBlock = bodyCopy[firstBlockIndex];
  let remainingText = "";
  
  // Get full text from first block
  const fullText = firstBlock.children
    .filter((child: any) => child._type === "span" && child.text)
    .map((child: any) => child.text)
    .join("");
  
  // Remove first sentence
  remainingText = fullText.replace(firstSentence, "").trim();
  
  if (remainingText) {
    // Update first block with remaining text
    firstBlock.children = firstBlock.children.map((child: any) => {
      if (child._type === "span" && child.text) {
        return { ...child, text: remainingText };
      }
      return child;
    }).filter((child: any) => child.text && child.text.trim());
    
    return bodyCopy;
  } else {
    // Remove entire first block if it only contained the first sentence
    return bodyCopy.filter((_: any, index: number) => index !== firstBlockIndex);
  }
}

interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  crop?: Record<string, unknown>;
  hotspot?: Record<string, unknown>;
  _type?: string;
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

interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const post = await client.fetch(postQuery, { slug });

    if (!post) {
      return {
        title: "News Not Found | Touchstone Digital Solutions",
        description: "The requested news article could not be found.",
      };
    }

    const postUrl = `https://touchstone-ds.com/news/${slug}/`;
    return {
      title:
        post.seo?.metaTitle || `${post.title} | Touchstone Digital Solutions`,
      description:
        post.seo?.metaDescription ||
        `Read the news: ${post.title} from Touchstone Digital Solutions.`,
      alternates: {
        canonical: postUrl,
      },
      openGraph: {
        title: post.seo?.metaTitle || post.title,
        description:
          post.seo?.metaDescription ||
          `Read the news: ${post.title} from Touchstone Digital Solutions.`,
        url: postUrl,
        type: "article",
        images: post.mainImage
          ? [
              {
                url: urlFor(post.mainImage).width(1200).height(675).url(),
                width: 1200,
                height: 675,
                alt: post.title,
              },
            ]
          : undefined,
        publishedTime: post.publishedAt,
        authors: post.author?.name ? [post.author.name] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: post.seo?.metaTitle || post.title,
        description:
          post.seo?.metaDescription ||
          `Read the news: ${post.title} from Touchstone Digital Solutions.`,
        images: post.mainImage
          ? [urlFor(post.mainImage).width(1200).height(675).url()]
          : undefined,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "News | Touchstone Digital Solutions",
      description:
        "Official announcements and updates from Touchstone Digital Solutions.",
    };
  }
}

async function NewsPage({ params }: NewsPageProps) {
  const { slug } = await params;
  let post: Post | null = null;

  try {
    post = await client.fetch(postQuery, { slug });

    if (!post) {
      return notFound();
    }

    // Only allow press-release posts in this section.
    const isPressRelease = post.categories?.some((cat) =>
      (() => {
        const t = (cat.title || "").toLowerCase();
        return t.includes("press-release") || t.includes("press release");
      })(),
    );
    if (!isPressRelease) return notFound();
  } catch (error) {
    console.error("Error fetching post:", error);
    return notFound();
  }

  const newsUrl = `https://touchstone-ds.com/news/${post.slug.current}/`;
  const newsImageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(675).url()
    : undefined;

  const newsArticleSchema = articleSchema({
    title: post.title,
    description:
      post.seo?.metaDescription || `Read the news: ${post.title} from Touchstone Digital Solutions.`,
    url: newsUrl,
    imageUrl: newsImageUrl,
    publishedAt: post.publishedAt,
    authorName: post.author?.name,
    isNewsArticle: true,
  });

  const newsBreadcrumbSchema = breadcrumbSchema([
    { name: 'Home', url: 'https://touchstone-ds.com/' },
    { name: 'News', url: 'https://touchstone-ds.com/news/' },
    { name: post.title, url: newsUrl },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <JsonLd schema={[newsArticleSchema, newsBreadcrumbSchema]} />
      <Navbar />
      <BlogHeroSection
        title={post.title}
        isPost={true}
        publishedDate={formatDate(post.publishedAt)}
        author={post.author?.name}
        categories={
          post.categories
            ?.filter(
              (cat) => {
                const t = (cat.title || "").toLowerCase();
                return !(t.includes("press-release") || t.includes("press release"));
              },
            )
            .map((cat) => cat.title)
            .join(", ")
        }
        readingTime={calculateReadingTime(post.body)}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle - First Sentence */}
          <div className="mb-8 border-l-4 border-blue-500 pl-6 py-4 bg-gray-50/50 rounded-r-lg">
            <p className="text-xl font-light text-gray-700 leading-relaxed italic">
              {getFirstSentence(post.body)}
            </p>
          </div>
          {post.mainImage && (
            <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
              <img
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
      <section className="pt-2 pb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/news"
              className="inline-flex items-center text-blue-600 hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>
            <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-justify prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:text-purple-600 hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg">
              <PortableText
                value={removeFirstSentence(post.body)}
                components={PressReleasePortableTextComponents}
              />
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
                    <h3 className="text-xl font-semibold text-gray-900">
                      About the Author
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {post.author.name}
                    </p>
                    {post.author.bio && (
                      <div className="mt-2 text-gray-600">
                        <PortableText
                          value={post.author.bio}
                          components={PressReleasePortableTextComponents}
                        />
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

export default NewsPage;

