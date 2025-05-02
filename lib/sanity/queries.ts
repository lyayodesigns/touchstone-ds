// Sanity GROQ queries for fetching data including SEO fields

// Helper queries for SEO components

export const imageFields = /* groq */ `
  _type,
  crop{
    _type,
    right,
    top,
    left,
    bottom
  },
  hotspot{
    _type,
    x,
    y,
    height,
    width,
  },
  asset->{...}
`;

export const metaAttributesQuery = /* groq */ `
  _type,
  attributeValueString,
  attributeType,
  attributeKey,
  attributeValueImage{
    ${imageFields}
  }
`;

export const twitterQuery = /* groq */ `
  _type,
  site,
  creator,
  cardType,
  handle
`;

export const openGraphQuery = /* groq */ `
  _type,
  siteName,
  url,
  description,
  title,
  image{
    ${imageFields}
  }
`;

export const seofields = /* groq */ `
  _type,
  metaTitle,
  nofollowAttributes,
  seoKeywords,
  metaDescription,
  openGraph{
    ${openGraphQuery}
  },
  twitter{
    ${twitterQuery}
  },
  additionalMetaTags[]{
    _type,
    metaAttributes[]{
      ${metaAttributesQuery}
    }
  }
`;

// SEO related queries
export const seo = /* groq */ `seo{
  ${seofields}
}`;

// Blog post query with SEO fields
export const postQuery = /* groq */ `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "author": author->{
      name,
      image,
      bio
    },
    "categories": categories[]->{title},
    body,
    ${seo}
  }
`;

// Blog posts list query with SEO fields
export const postsQuery = /* groq */ `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "author": author->{name, image},
    "categories": categories[]->{title},
    "excerpt": array::join(string::split(pt::text(body), "")[0..255], "") + "...",
    ${seo}
  }
`;
