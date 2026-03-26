import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Provide defaults so local dev doesn't hard-crash when env vars are missing.
// (These defaults match the ones used in `scripts/generate-sitemap.js`.)
const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_PROJECT_ID ||
  '7l8oyxeq';
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_DATASET ||
  process.env.SANITY_STUDIO_DATASET ||
  'production';
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  process.env.SANITY_API_VERSION ||
  '2023-05-03';

let _client: ReturnType<typeof createClient> | null = null;
function getClient() {
  if (_client) return _client;
  _client = createClient({
    projectId: projectId as string,
    dataset: dataset as string,
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: apiVersion as string,
  });
  return _client;
}

// Avoid hard crashing during SSR/dev when env vars are not set yet.
export const client = {
  fetch: async (...args: Parameters<ReturnType<typeof createClient>['fetch']>) => {
    return getClient().fetch(...args);
  },
} as unknown as ReturnType<typeof createClient>;

// Set up a helper function for generating image URLs with the Sanity image pipeline
let _builder: ReturnType<typeof imageUrlBuilder> | null = null;
function getBuilder() {
  if (_builder) return _builder;
  _builder = imageUrlBuilder(getClient());
  return _builder;
}

// Tiny chainable stub so pages can render without Sanity env vars (images will just be blank).
const EMPTY_URL_BUILDER = {
  width: () => EMPTY_URL_BUILDER,
  height: () => EMPTY_URL_BUILDER,
  url: () => '',
};

export function urlFor(source: SanityImageSource) {
  try {
    return getBuilder().image(source);
  } catch {
    return EMPTY_URL_BUILDER as any;
  }
}
