import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { client, urlFor } from "@/lib/sanity";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHeroSection from "@/components/Blog/BlogHeroSection";
import BlogSeo from "@/components/Blog/BlogSeo";
import { postsQuery } from "@/lib/sanity/queries";
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
  };
  categories: Array<{
    title: string;
  }>;
  excerpt?: string;
  seo?: SeoType;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Using the predefined query with SEO fields
        const data = await client.fetch(postsQuery);
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      {/* SEO Component - using default values for blog listing page */}
      <BlogSeo 
        seo={null} 
        slug="/blog"
        defaultTitle="Blog | Touchstone Digital Solutions"
        defaultDescription="Latest news, insights, and updates from Touchstone Digital Solutions."
      />

      <BlogHeroSection 
        title="Our Blog" 
        subtitle="Insights, updates, and stories from Touchstone Digital Solutions" 
        description="Stay informed about the latest innovations in digital recognition systems, success stories, and expert insights from the Touchstone team." 
      />

      {/* Blog Posts */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-700">No posts found</h2>
              <p className="mt-2 text-gray-500">Check back soon for new content!</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col h-full bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    {post.mainImage && (
                      <img
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {post.categories?.map((category, idx) => (
                        <span
                          key={idx}
                          className={cn(
                            "px-2.5 py-0.5 text-xs font-medium rounded-full",
                            idx % 3 === 0 ? "bg-blue-100 text-blue-800" :
                            idx % 3 === 1 ? "bg-purple-100 text-purple-800" :
                            "bg-green-100 text-green-800"
                          )}
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      <Link
                        to={`/blog/${post.slug.current}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                      <div className="flex items-center">
                        {post.author?.image && (
                          <img
                            src={urlFor(post.author.image).width(40).height(40).url()}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                        )}
                        <span className="text-sm text-gray-600">{post.author?.name}</span>
                      </div>
                      <time className="text-sm text-gray-500">
                        {formatDate(post.publishedAt)}
                      </time>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
