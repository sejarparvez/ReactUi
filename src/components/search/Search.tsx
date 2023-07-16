import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SearchResult, dummySearchQuery } from "./SearchData";

const Search: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

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
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
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
    if (isSearchOpen) {
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 0);
    }
  }, [isSearchOpen]);

  return (
    <div className="relative ">
      <button
        onClick={handleSearchClick}
        className="rounded-full p-2 focus:outline-none transition-opacity duration-300 ease-in-out hover:opacity-75"
      >
        <FiSearch size={24} />
      </button>
      {isSearchOpen && (
        <div className="fixed inset-0 flex items-start justify-center backdrop-filter backdrop-blur-sm bg-opacity-70 bg-black pt-5rem transition-opacity duration-300 ease-in-out z-50">
          <div className="bg-white rounded-lg p-4 mt-20 z-40 relative w-full md:w-[30rem]">
            <div className="relative">
              <input
                id="search-input"
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border rounded px-2 py-1 w-full outline-none focus:border-cyan focus:border-2"
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
                        <div className="flex justify-between items-center">
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
