import React from 'react';

interface YouTubeEmbedProps {
  url: string;
  caption?: string;
}

/**
 * Server component for embedding YouTube videos in blog posts
 * This component extracts the video ID from a YouTube URL and creates an embed iframe
 */
const YouTubeEmbed = ({ url, caption }: YouTubeEmbedProps) => {
  // Extract video ID from various YouTube URL formats
  const getYouTubeVideoId = (url: string): string | null => {
    // Handle different YouTube URL formats
    const regexps = [
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/i,
      /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/i,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/i,
    ];

    for (const regex of regexps) {
      const match = url.match(regex);
      if (match && match[1]) {
        return match[1];
      }
    }

    return null;
  };

  const videoId = getYouTubeVideoId(url);

  if (!videoId) {
    return (
      <div className="my-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
        <p>Invalid YouTube URL: {url}</p>
      </div>
    );
  }

  return (
    <div className="my-10">
      <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      {caption && (
        <div className="mt-2 text-sm text-center text-gray-600">
          {caption}
        </div>
      )}
    </div>
  );
};

export default YouTubeEmbed;
