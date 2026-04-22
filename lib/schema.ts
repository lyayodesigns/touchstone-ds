const BASE_URL = 'https://touchstone-ds.com';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Touchstone Digital Solutions',
    alternateName: ['Touchstone DS', 'TDS'],
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo/logo-midnight.png`,
      width: 512,
      height: 512,
    },
    description:
      'Family-owned company specializing in fully customized interactive digital Hall of Fame, donor recognition, and touchscreen recognition software for K–12 schools, universities, athletic departments, and community organizations.',
    founder: [
      {
        '@type': 'Person',
        name: 'Gardner Sr',
      },
      {
        '@type': 'Person',
        name: 'Gardner Jr',
      },
      {
        '@type': 'Person',
        name: 'Colby',
      },
    ],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 10,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8 Powder Hill Road',
      addressLocality: 'Bedford',
      addressRegion: 'NH',
      postalCode: '03110',
      addressCountry: 'US',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-603-361-7541',
        email: 'info@touchstone-ds.com',
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: 'en',
        url: `${BASE_URL}/contact/`,
      },
      {
        '@type': 'ContactPoint',
        telephone: '+1-603-361-7541',
        email: 'support@touchstone-ds.com',
        contactType: 'customer support',
        areaServed: 'US',
        availableLanguage: 'en',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    knowsAbout: [
      'Digital Hall of Fame',
      'Interactive Touchscreen Software',
      'Donor Recognition Walls',
      'Athletic Recognition Displays',
      'Digital Trophy Case',
      'Digital Record Boards',
      'Digital Yearbooks',
      'Yearbook Scanning',
      'Alumni Engagement',
      'Touchstone Fundraising',
    ],
    sameAs: [
      'https://www.facebook.com/TouchStoneDigitalSolutions/',
      'https://x.com/Touchstone_DS',
      'https://www.instagram.com/touchstone_ds',
      'https://www.linkedin.com/company/touchstone-digital-solutions',
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Touchstone Digital Solutions',
    alternateName: 'Touchstone DS',
    description:
      'Interactive digital Hall of Fame, donor recognition, and touchscreen recognition software for schools, universities, and athletic departments.',
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    inLanguage: 'en-US',
  };
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${BASE_URL}/#software`,
    name: 'Touchstone Digital Hall of Fame',
    alternateName: 'Touchstone Digital Wall of Fame',
    description:
      'Fully customized, cloud-based interactive touchscreen recognition software that honors athletic records, academic honors, alumni achievements, donor recognition, trophies, and yearbooks for schools and organizations.',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'DigitalSignage',
    operatingSystem: 'Web, iOS, Android',
    url: BASE_URL,
    inLanguage: 'en-US',
    provider: {
      '@id': `${BASE_URL}/#organization`,
    },
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    featureList: [
      'Fully customized design tailored to each school\'s brand, culture, and identity',
      'Cloud-based CMS for real-time content updates from any device',
      'Unlimited multimedia support for photos, videos, interviews, bios, and statistics',
      'Web-accessible on touchscreens, phones, tablets, laptops, and desktops',
      'Automatic over-the-air software updates and unlimited 24/7 support',
      'Full content setup, design, branding, and data migration included',
      'Integrated Digital Hall of Fame, donor walls, record boards, trophy case, and yearbook modules',
      'Multimedia embeds from YouTube, Hudl, Vimeo, and Facebook',
    ],
    audience: {
      '@type': 'Audience',
      audienceType:
        'K–12 Schools, Universities, Athletic Departments, and Community Organizations',
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

export interface VideoObjectSchemaOptions {
  name: string;
  description: string;
  thumbnailUrl: string | string[];
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}

export function videoObjectSchema(options: VideoObjectSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: options.name,
    description: options.description,
    thumbnailUrl: options.thumbnailUrl,
    uploadDate: options.uploadDate,
    ...(options.duration && { duration: options.duration }),
    ...(options.contentUrl && { contentUrl: options.contentUrl }),
    ...(options.embedUrl && { embedUrl: options.embedUrl }),
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
  };
}

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

export interface HowToSchemaOptions {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  image?: string;
}

export function howToSchema(options: HowToSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: options.name,
    description: options.description,
    ...(options.totalTime && { totalTime: options.totalTime }),
    ...(options.image && {
      image: {
        '@type': 'ImageObject',
        url: options.image,
      },
    }),
    step: options.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && {
        image: {
          '@type': 'ImageObject',
          url: step.image,
        },
      }),
    })),
  };
}

export interface ItemListEntry {
  name: string;
  url: string;
  description?: string;
  image?: string;
}

export interface ItemListSchemaOptions {
  name?: string;
  description?: string;
  items: ItemListEntry[];
  itemType?: 'ListItem' | 'Thing';
}

export function itemListSchema(options: ItemListSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    ...(options.name && { name: options.name }),
    ...(options.description && { description: options.description }),
    numberOfItems: options.items.length,
    itemListElement: options.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: item.url,
      name: item.name,
      ...(item.description && { description: item.description }),
      ...(item.image && { image: item.image }),
    })),
  };
}
