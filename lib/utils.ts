import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { PortableTextBlock } from '@portabletext/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Calculate reading time for a blog post
 * @param blocks - PortableText blocks from the blog post
 * @param wordsPerMinute - Average reading speed (default: 200 words per minute)
 * @returns Reading time in minutes as a string (e.g. "5 min read")
 */
export function calculateReadingTime(blocks: PortableTextBlock[], wordsPerMinute = 200): string {
  // Extract all text from the portable text blocks
  const text = blocks
    .map(block => {
      // Handle different block types
      if (block._type === 'block' && block.children) {
        return block.children
          .filter(child => child._type === 'span')
          .map(span => span.text || '')
          .join('');
      }
      return '';
    })
    .join(' ');

  // Count words (split by spaces and filter out empty strings)
  const words = text.split(/\s+/).filter(Boolean).length;
  
  // Calculate reading time
  const minutes = Math.ceil(words / wordsPerMinute);
  
  return `${minutes} min read`;
}

