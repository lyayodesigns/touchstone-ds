import React from "react";
import { PortableTextReactComponents } from "@portabletext/react";

import BasePortableTextComponents from "./PortableTextComponents";

/**
 * Press-release-specific Portable Text overrides.
 * We keep blog styling intact by only changing the `em` mark here.
 */
const PressReleasePortableTextComponents: Partial<PortableTextReactComponents> =
  {
    ...BasePortableTextComponents,
    marks: {
      ...(BasePortableTextComponents.marks as Partial<NonNullable<PortableTextReactComponents["marks"]>>),
      em: ({ children }) => (
        // Inline italic needs a "border in front" look; `inline-block` ensures
        // the left border + padding render reliably inside prose paragraphs.
        <em className="italic text-gray-800 inline-block border-l-2 border-gray-900 pl-4">
          {children}
        </em>
      ),
    },
  };

export default PressReleasePortableTextComponents;

