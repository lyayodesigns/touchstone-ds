const BASE_URL = 'https://touchstone-ds.com';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Touchstone Digital Solutions',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo/logo-midnight.png`,
      width: 512,
      height: 512,
    },
    description:
      'Family-owned company specializing in interactive digital Hall of Fame and recognition software for schools, universities, and organizations.',
    sameAs: [
      'https://www.facebook.com/TouchStoneDigitalSolutions/',
      'https://twitter.com/touchstone_ds',
      'https://www.instagram.com/touchstone_ds',
      'https://www.linkedin.com/company/touchstone-digital-solutions',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: `${BASE_URL}/contact/`,
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Touchstone Digital Solutions',
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
  };
}

export interface ServiceSchemaOptions {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}

export function serviceSchema(options: ServiceSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${options.url}#service`,
    name: options.name,
    description: options.description,
    url: options.url,
    serviceType: options.serviceType ?? 'Digital Recognition Software',
    provider: {
      '@id': `${BASE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Schools, Universities, and Organizations',
    },
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqPageSchema(questions: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export interface ArticleSchemaOptions {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  publishedAt: string;
  authorName?: string;
  isNewsArticle?: boolean;
}

export function articleSchema(options: ArticleSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': options.isNewsArticle ? 'NewsArticle' : 'BlogPosting',
    '@id': `${options.url}#article`,
    headline: options.title,
    description: options.description,
    url: options.url,
    datePublished: options.publishedAt,
    ...(options.imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: options.imageUrl,
      },
    }),
    author: options.authorName
      ? { '@type': 'Person', name: options.authorName }
      : { '@id': `${BASE_URL}/#organization` },
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
  };
}

export interface ProductSchemaOptions {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
}

export function productSchema(options: ProductSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${options.url}#product`,
    name: options.name,
    description: options.description,
    url: options.url,
    ...(options.imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: options.imageUrl,
      },
    }),
    brand: {
      '@type': 'Brand',
      name: 'Touchstone Digital Solutions',
    },
    manufacturer: {
      '@id': `${BASE_URL}/#organization`,
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
