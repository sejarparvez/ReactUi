"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SearchResult, dummySearchQuery } from "./SearchData";

const Search: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [shouldFocusInput, setShouldFocusInput] = useState<boolean>(false);

  const debounce = (func: Function, delay: number) => {
    let timer: NodeJS.Timeout;
    return function (this: any, ...args: any[]) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = (): void => {
    setIsSearchOpen(true);
  };

  const handleSearch = (): void => {
    if (searchQuery === "") {
      setSearchResults([]);
    } else {
      const results = dummySearchQuery.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setSearchResults(results);
    }
  };

  const debouncedSearch = debounce(handleSearch, 300);

  const handleCloseSearch = (): void => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleLinkClick = (): void => {
    handleCloseSearch();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        handleCloseSearch();
      }
    };

    if (isSearchOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSearchOpen]);

  useEffect(() => {
    debouncedSearch();
  }, [searchQuery, debouncedSearch]);

  useEffect(() => {
    if (shouldFocusInput && searchInputRef.current) {
      searchInputRef.current.focus();
      setShouldFocusInput(false);
    }
  }, [shouldFocusInput]);

  useEffect(() => {
    if (isSearchOpen) {
      setShouldFocusInput(true);
    }
  }, [isSearchOpen]);

  return (
    <div className="relative ">
      <button
        onClick={handleSearchClick}
        className="rounded-full p-2 transition-opacity duration-300 ease-in-out hover:opacity-75 focus:outline-none"
      >
        <FiSearch size={24} />
      </button>
      {isSearchOpen && (
        <div className="pt-5rem fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-70 backdrop-blur-sm backdrop-filter transition-opacity duration-300 ease-in-out">
          <div className="relative z-40 mt-20 w-full rounded-lg bg-white p-4 md:w-[30rem]">
            <div className="relative">
              <input
                ref={searchInputRef} // Add the ref to the input element
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded border px-2 py-1 outline-none focus:border-2 focus:border-cyan"
                placeholder="Search"
              />
              <div className="absolute right-2 top-2">
                <FiSearch size={24} color="gray" />
              </div>
            </div>
            {searchQuery === "" ? (
              <p className="mt-4 text-gray-500">
                Start typing to see the search results.
              </p>
            ) : searchResults.length > 0 ? (
              <ul className="mt-4 max-h-48 overflow-y-auto">
                {searchResults.map((result) => (
                  <li key={result.id} className="border-b py-2 last:border-b-0">
                    <Link href={result.link}>
                      <li
                        onClick={handleLinkClick}
                        className="block py-2 px-4 transition-colors duration-200 ease-in-out hover:bg-gray-100"
                      >
                        <div className="flex items-center justify-between">
                          <div className="mr-4">{result.name}</div>
                          <div className="text-gray-500">{result.link}</div>
                        </div>
                      </li>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-500">
                No results found for "{searchQuery}".
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
