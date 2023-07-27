'use client'
import React, { useState } from "react";
import { BsFolder2, BsFolderPlus, BsHash, BsSearch } from "react-icons/bs";
import { FiFilePlus } from "react-icons/fi";
import { MdOutlineNewLabel } from "react-icons/md";

export default function HeroSearch() {
  const [hoveredItem, setHoveredItem] = useState(0);

  const handleItemHover = (index: React.SetStateAction<number>) => {
    setHoveredItem(index);
  };

  return (
    <div className="bg-white shadow-2xl border rounded-2xl w-[28rem] text-sm">
      {/* Search input */}
      <div className="flex gap-4 items-center px-4 py-3 border-b">
        <BsSearch color="gray" size={20} />
        <span className="text-gray-400">Search projects...</span>
      </div>

      {/* Recent searches */}
      <div className="p-4 border-b pb-6">
        <span className="text-sm text-gray-600">Recent searches</span>
        <div className="flex flex-col mt-3">
          <div
            className={`flex gap-4 pl-3 items-center py-1 ${
              hoveredItem === 0
                ? "bg-indigo-600 text-white"
                : "text-gray-600 hover:bg-indigo-600 hover:text-white"
            } rounded-lg`}
            onMouseEnter={() => handleItemHover(0)}
          >
            <div>
              <BsFolder2 size={24} />
            </div>
            <div className="text-md">Tailwind Labs / Website Redesign</div>
          </div>
          <div
            className={`flex gap-4 pl-3 items-center py-1 ${
              hoveredItem === 1
                ? "bg-indigo-600 text-white"
                : "text-gray-600 hover:bg-indigo-600 hover:text-white"
            } rounded-lg`}
            onMouseEnter={() => handleItemHover(1)}
          >
            <div>
              <BsFolder2 size={24} />
            </div>
            <div className="text-md">Laravel LLC / Conference Branding</div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col py-6 px-4">
        <div
          className={`flex gap-4 pl-3 items-center py-1 ${
            hoveredItem === 2
              ? "bg-indigo-600 text-white"
              : "text-gray-600 hover:bg-indigo-600 hover:text-white"
          } rounded-lg`}
          onMouseEnter={() => handleItemHover(2)}
        >
          <div>
            <FiFilePlus size={24} />
          </div>
          <div className="text-md">Add new file...</div>
        </div>
        <div
          className={`flex gap-4 pl-3 items-center py-1 ${
            hoveredItem === 3
              ? "bg-indigo-600 text-white"
              : "text-gray-600 hover:bg-indigo-600 hover:text-white"
          } rounded-lg`}
          onMouseEnter={() => handleItemHover(3)}
        >
          <div>
            <BsFolderPlus size={24} />
          </div>
          <div className="text-md">Add new folder...</div>
        </div>
        <div
          className={`flex gap-4 pl-3 items-center py-1 ${
            hoveredItem === 4
              ? "bg-indigo-600 text-white"
              : "text-gray-600 hover:bg-indigo-600 hover:text-white"
          } rounded-lg`}
          onMouseEnter={() => handleItemHover(4)}
        >
          <div>
            <BsHash size={24} />
          </div>
          <div className="text-md">Add hashtag...</div>
        </div>
        <div
          className={`flex gap-4 pl-3 items-center py-1 ${
            hoveredItem === 5
              ? "bg-indigo-600 text-white"
              : "text-gray-600 hover:bg-indigo-600 hover:text-white"
          } rounded-lg`}
          onMouseEnter={() => handleItemHover(5)}
        >
          <div>
            <MdOutlineNewLabel size={24} />
          </div>
          <div className="text-md">Add label...</div>
        </div>
      </div>
    </div>
  );
}
