import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string, // use current date (YYYY-MM-DD) to target the latest API version
});

// Set up a helper function for generating image URLs with the Sanity image pipeline
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
