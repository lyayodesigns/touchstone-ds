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

import type { PortableTextBlock } from "@portabletext/types";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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

interface PressReleasePageProps {
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
        title: "Press Release Not Found | Touchstone Digital Solutions",
        description: "The requested press release could not be found.",
      };
    }

    return {
      title:
        post.seo?.metaTitle || `${post.title} | Touchstone Digital Solutions`,
      description:
        post.seo?.metaDescription ||
        `Read the press release: ${post.title} from Touchstone Digital Solutions.`,
      openGraph: {
        title: post.seo?.metaTitle || post.title,
        description:
          post.seo?.metaDescription ||
          `Read the press release: ${post.title} from Touchstone Digital Solutions.`,
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
          `Read the press release: ${post.title} from Touchstone Digital Solutions.`,
        images: post.mainImage
          ? [urlFor(post.mainImage).width(1200).height(675).url()]
          : undefined,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Press Releases | Touchstone Digital Solutions",
      description:
        "Official announcements and updates from Touchstone Digital Solutions.",
    };
  }
}

async function PressReleasePage({ params }: PressReleasePageProps) {
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

  return (
    <div className="min-h-screen flex flex-col bg-white">
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
          {post.mainImage && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/press-releases"
              className="inline-flex items-center text-blue-600 hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Press Releases
            </Link>
            <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-justify prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:text-purple-600 hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg">
              <PortableText
                value={post.body}
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

export default PressReleasePage;

