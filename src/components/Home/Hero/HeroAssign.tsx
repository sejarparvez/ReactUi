'use client'
import { useState } from "react";
import { PiCaretUpDown } from "react-icons/pi";

export default function HeroAssign() {
  const [hoveredItem, setHoveredItem] = useState(0);
  const handleItemHover = (index: React.SetStateAction<number>) => {
    setHoveredItem(index);
  };

  return (
    <div className="flex text-sm flex-col gap-2 w-[27rem] bg-white shadow-2xl p-4">
      <div>Assigned to</div>
      <div className="flex items-center justify-between border rounded-md p-2">
        <div>Tom Cook</div>
        <div>
          <PiCaretUpDown />
        </div>
      </div>
      <div className="flex flex-col [&>*]:p-2 hover:[&>*]:bg-indigo-600 border rounded-md">
        <span
          onMouseEnter={() => handleItemHover(1)}
          className={`${
            hoveredItem === 1
              ? "bg-indigo-600 text-white"
              : "text-gray-600 hover:bg-indigo-600 hover:text-white"
          }`}
        >
          Wade Cooper
        </span>
        <span
          onMouseEnter={() => handleItemHover(2)}
          className={`${
            hoveredItem === 2
              ? "bg-indigo-600 text-white"
              : "text-gray-600 hover:bg-indigo-600 hover:text-white"
          }`}
        >
          Mat Henry
        </span>
        <span
          onMouseEnter={() => handleItemHover(0)}
          className={`${
            hoveredItem === 0
              ? "bg-indigo-600 text-white"
              : "text-gray-600 hover:bg-indigo-600 hover:text-white"
          }`}
        >
          Tom Cook
        </span>
        <span
          onMouseEnter={() => handleItemHover(3)}
          className={`${
            hoveredItem === 3
              ? "bg-indigo-600 text-white"
              : "text-gray-600 hover:bg-indigo-600 hover:text-white"
          }`}
        >
          Nathan Aka
        </span>
      </div>
    </div>
  );
}
