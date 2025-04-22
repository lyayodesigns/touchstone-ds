import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHeroSection from "@/components/Blog/BlogHeroSection";
import PortableTextComponents from "@/components/Blog/PortableTextComponents";
import { postQuery } from "@/lib/sanity/queries";
import { SeoType } from "@/lib/sanity/types";

// Define the Post type
interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: any;
  publishedAt: string;
  author: {
    name: string;
    image: any;
    bio: any[];
  };
  categories: Array<{
    title: string;
  }>;
  body: any[];
  seo?: SeoType;
}

// Using the imported PortableTextComponents

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!slug) {
          setError("Post not found");
          setIsLoading(false);
          return;
        }

        // Using the predefined query with SEO fields

        const data = await client.fetch(postQuery, { slug });
        
        if (!data) {
          setError("Post not found");
        } else {
          setPost(data);
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setError("Failed to load post");
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center px-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{error || "Post not found"}</h1>
          <p className="text-gray-600 mb-6">The post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{post.seo?.metaTitle || `${post.title} | Touchstone Digital Solutions Blog`}</title>
        <meta name="description" content={post.seo?.metaDescription || `Read about ${post.title} on the Touchstone Digital Solutions blog.`} />
        <link rel="canonical" href={`https://touchstone-ds.com/blog/${post.slug.current}`} />
        
        {/* Keywords if available */}
        {post.seo?.seoKeywords && post.seo.seoKeywords.length > 0 && (
          <meta name="keywords" content={post.seo.seoKeywords.join(', ')} />
        )}
        
        {/* Robots meta if nofollow is set */}
        {post.seo?.nofollowAttributes && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={post.seo?.openGraph?.title || post.seo?.metaTitle || `${post.title} | Touchstone Digital Solutions Blog`} />
        <meta property="og:description" content={post.seo?.openGraph?.description || post.seo?.metaDescription || `Read about ${post.title} on the Touchstone Digital Solutions blog.`} />
        <meta property="og:url" content={`https://touchstone-ds.com/blog/${post.slug.current}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.seo?.openGraph?.image?.asset?.url || post.mainImage ? urlFor(post.mainImage).width(1200).height(675).url() : "https://touchstone-ds.com/og-image.jpg"} />
        {post.seo?.openGraph?.siteName && (
          <meta property="og:site_name" content={post.seo.openGraph.siteName} />
        )}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={post.seo?.twitter?.cardType || "summary_large_image"} />
        {post.seo?.twitter?.site && (
          <meta name="twitter:site" content={post.seo.twitter.site} />
        )}
        {post.seo?.twitter?.creator && (
          <meta name="twitter:creator" content={post.seo.twitter.creator} />
        )}
        {post.seo?.twitter?.handle && (
          <meta name="twitter:handle" content={post.seo.twitter.handle} />
        )}
        <meta name="twitter:title" content={post.seo?.metaTitle || `${post.title} | Touchstone Digital Solutions Blog`} />
        <meta name="twitter:description" content={post.seo?.metaDescription || `Read about ${post.title} on the Touchstone Digital Solutions blog.`} />
        <meta name="twitter:image" content={post.seo?.openGraph?.image?.asset?.url || post.mainImage ? urlFor(post.mainImage).width(1200).height(675).url() : "https://touchstone-ds.com/og-image.jpg"} />
      </Helmet>

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
            <Link to="/blog" className="inline-flex items-center text-blue-600 hover:underline mb-8">
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

export default BlogPost;
