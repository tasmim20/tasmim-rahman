/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FiSearch } from "react-icons/fi";

const Blog = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 bg-[#050f25] text-gray-300">
      {/* Search Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4 shadow-inner">
        <FiSearch size={28} className="text-white/70" />
      </div>

      {/* Title */}
      <h2 className="text-lg sm:text-xl font-bold text-purple-400 mb-2">
        No Blogs yet..
      </h2>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-400 max-w-md">
        Stay tuned! I'll be sharing insights, technical guides, and project
        experiences soon. Check back later.
      </p>
    </section>
  );
};

export default Blog;
