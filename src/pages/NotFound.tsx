import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Page Not Found | Touchstone Digital Solutions</title>
        <meta name="description" content="The page you are looking for does not exist or has been moved." />
        <meta name="robots" content="noindex, nofollow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Page Not Found | Touchstone Digital Solutions" />
        <meta property="og:description" content="The page you are looking for does not exist or has been moved." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Touchstone Digital Solutions" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
