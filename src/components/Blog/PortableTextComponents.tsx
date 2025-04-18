import React from 'react';
import { urlFor } from '@/lib/sanity';

/**
 * Custom components for rendering Portable Text content from Sanity
 * with enhanced styling for better visuals and readability
 */
const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-10 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
          <img
            src={urlFor(value).width(1000).url()}
            alt={value.alt || "Blog image"}
            className="w-full h-auto"
          />
          {value.caption && (
            <div className="text-sm text-center text-gray-600 bg-gray-50 py-3 px-4 border-t border-gray-100">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
    // Add support for code blocks if they exist in your schema
    code: ({ value }: any) => {
      return (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg my-6 overflow-x-auto">
          <code className="text-sm font-mono">{value.code}</code>
        </pre>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold mt-10 mb-6 text-gray-900 border-b pb-2 border-gray-200">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 relative pl-3 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-purple-500 before:rounded-full">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-bold mt-6 mb-2 text-gray-800">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="mb-6 text-gray-700 leading-relaxed text-lg text-justify">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-6 py-1 my-8 bg-gray-50 rounded-r-lg shadow-sm italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-none pl-5 mb-6 space-y-2 text-gray-700">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-5 mb-6 space-y-2 text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start mb-2">
        <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: any) => (
      <li className="mb-2 pl-2">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-gray-800">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 text-blue-800 px-1.5 py-0.5 rounded font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-blue-600 font-medium hover:text-purple-600 hover:underline transition-colors duration-200"
        >
          {children}
        </a>
      );
    },
    highlight: ({ children }: any) => (
      <span className="bg-yellow-100 px-1 rounded">{children}</span>
    ),
  },
};

export default PortableTextComponents;
