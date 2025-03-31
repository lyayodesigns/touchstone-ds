import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Touchstone Digital Solutions - Interactive Digital Halls of Fame',
  description = 'Transform how you celebrate achievement with Touchstone Digital Solutions\' interactive digital Halls of Fame for schools, teams, and communities.',
  canonical = '',
  image = '/og-image.jpg',
  type = 'website'
}) => {
  const siteUrl = window.location.origin;
  const fullUrl = canonical ? `${siteUrl}${canonical}` : window.location.href;
  const fullTitle = title.includes('Touchstone') ? title : `${title} | Touchstone Digital Solutions`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content="Touchstone Digital Solutions" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@touchstone_ds" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
};

export default SEO;
