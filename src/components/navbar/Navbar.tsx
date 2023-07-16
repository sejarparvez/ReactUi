"use client";
import React from "react";
import { FaArrowRight, FaUikit } from "react-icons/fa";
import Search from "../search/Search";

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-20 px-12">
        <a href="/" className="flex items-center gap-2 text-2xl font-medium">
          <FaUikit color="#0eafe9" />
          ReactUi
        </a>
        <div className="flex gap-10 items-center font-semibold">
          <a href="/components">Components</a>
          <a href="/blog">Blog</a>
          <a href="/documentation">Documentation</a>
          <Search />
          <span className="text-gray-400">|</span>
          <span>Sign in</span>
          <button className="flex gap-1 items-center bg-black text-white px-4 py-2 rounded-lg">
            Get full_access <FaArrowRight />
          </button>
        </div>
      </div>

      <hr className="w-[96%] mx-auto" />
      <div className="Blue_bg absolute -top-60 right-0">a</div>
      <div className="Pink_bg absolute -top-40 right-44">a</div>
      <div className="Blue_bg absolute -top-0 right-[40rem]">a</div>
    </div>
  );
};

export default Navbar;
