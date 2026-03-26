"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type BlogPaginationProps = {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
  anchorId?: string;
};

export default function BlogPagination({
  currentPage,
  hasPrev,
  hasNext,
  anchorId = "blog-list",
}: BlogPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageParamRaw = searchParams.get("page");

  useEffect(() => {
    // Only perform smooth scrolling when the user is on a paginated URL (has `?page=`).
    if (pageParamRaw === null) return;

    const el = document.getElementById(anchorId);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pageParamRaw, anchorId]);

  const goToPage = (page: number) => {
    router.push(`/blog?page=${page}`, { scroll: false });
  };

  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      {hasPrev ? (
        <button
          type="button"
          onClick={() => goToPage(currentPage - 1)}
          className="px-4 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Previous
        </button>
      ) : (
        <button
          type="button"
          disabled
          className="px-4 py-2 rounded-md border border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed"
        >
          Previous
        </button>
      )}

      <div className="text-sm text-gray-500">Page {currentPage}</div>

      {hasNext ? (
        <button
          type="button"
          onClick={() => goToPage(currentPage + 1)}
          className="px-4 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Next
        </button>
      ) : (
        <button
          type="button"
          disabled
          className="px-4 py-2 rounded-md border border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed"
        >
          Next
        </button>
      )}
    </div>
  );
}
