import React from 'react';
import { Helmet } from 'react-helmet-async';
import { urlFor } from '../../lib/sanity';
import { SeoType, MetaTagType, OpenGraphType, CustomImageType, MetaAttributeType } from '../../lib/sanity/types';

// Helper functions for SEO data
const resolveImage = (image?: CustomImageType) => {
  return image?.asset?.url ?? "";
};

const getMetaAttribute = (attrs: MetaAttributeType[] | undefined) => {
  if (!attrs) {
    return null;
  }
  const obj: Record<string, string> = {};
  attrs.forEach((i) => {
    Object.assign(obj, {
      [i?.attributeKey as string]:
        i.attributeType === "image"
          ? resolveImage(i?.attributeValueImage)
          : i.attributeValueString,
    });
  });
  return obj;
};

const getMetaObjects = (tags: MetaTagType[], allowIndexing?: boolean) => {
  const metaTags: React.ReactNode[] = [];
  
  tags.forEach(tag => {
    const excludeTag =
      !allowIndexing &&
      !!tag.metaAttributes?.find(
        i =>
          i?.attributeValueString?.includes('noindex') ||
          i?.attributeValueString?.includes('nofollow'),
      );
      
    if (!excludeTag) {
      const metaAttrs = getMetaAttribute(tag?.metaAttributes);
      if (metaAttrs) {
        Object.entries(metaAttrs).forEach(([key, value]) => {
          metaTags.push(<meta key={`${key}-${value}`} property={key} content={value} />);
        });
      }
    }
  });
  
  return metaTags;
};

interface BlogSeoProps {
  seo: SeoType | null;
  slug: string;
  defaultTitle?: string;
  defaultDescription?: string;
}

const BlogSeo: React.FC<BlogSeoProps> = ({
  seo,
  slug,
  defaultTitle = 'Touchstone Digital Solutions Blog',
  defaultDescription = 'Latest news, insights, and updates from Touchstone Digital Solutions.'
}) => {
  const { additionalMetaTags, metaDescription, metaTitle, twitter, nofollowAttributes, seoKeywords, openGraph } = seo || {};
  
  // Base URL for canonical links
  const baseUrl = window.location.origin;
  const url = `${baseUrl}${slug?.startsWith("/") ? slug : `/${slug}`}`;
  
  // Prepare meta tags
  const metaTags = React.useMemo(() => {
    const tags: React.ReactNode[] = [];
    
    // Basic meta tags
    if (metaTitle) {
      tags.push(<title key="title">{metaTitle}</title>);
    }
    
    if (metaDescription) {
      tags.push(<meta key="description" name="description" content={metaDescription} />);
    }
    
    // Keywords
    if (seoKeywords && seoKeywords.length > 0) {
      tags.push(<meta key="keywords" name="keywords" content={seoKeywords.join(', ')} />);
    }
    
    // Robots
    if (nofollowAttributes) {
      tags.push(<meta key="robots" name="robots" content="noindex, nofollow" />);
    }
    
    // Canonical
    tags.push(<link key="canonical" rel="canonical" href={url} />);
    
    // Twitter
    if (twitter) {
      if (twitter.cardType) {
        tags.push(<meta key="twitter:card" name="twitter:card" content={twitter.cardType} />);
      }
      if (twitter.site) {
        tags.push(<meta key="twitter:site" name="twitter:site" content={twitter.site} />);
      }
      if (twitter.creator) {
        tags.push(<meta key="twitter:creator" name="twitter:creator" content={twitter.creator} />);
      }
      if (twitter.handle) {
        tags.push(<meta key="twitter:handle" name="twitter:handle" content={twitter.handle} />);
      }
    }
    
    // Open Graph
    if (openGraph) {
      tags.push(<meta key="og:title" property="og:title" content={openGraph.title || metaTitle || defaultTitle} />);
      tags.push(<meta key="og:type" property="og:type" content="article" />);
      tags.push(<meta key="og:url" property="og:url" content={url} />);
      
      if (openGraph.description || metaDescription) {
        tags.push(
          <meta 
            key="og:description" 
            property="og:description" 
            content={openGraph.description || metaDescription || defaultDescription} 
          />
        );
      }
      
      if (openGraph.siteName) {
        tags.push(<meta key="og:site_name" property="og:site_name" content={openGraph.siteName} />);
      }
      
      if (openGraph.image && openGraph.image.asset?.url) {
        tags.push(<meta key="og:image" property="og:image" content={openGraph.image.asset.url} />);
      }
    }
    
    // Additional meta tags
    if (additionalMetaTags && additionalMetaTags.length > 0) {
      const additionalTags = getMetaObjects(additionalMetaTags);
      tags.push(...additionalTags);
    }
    
    return tags;
  }, [seo, slug, defaultTitle, defaultDescription, url]);
  
  return (
    <Helmet>
      {metaTags}
    </Helmet>
  );
};

export default BlogSeo;
