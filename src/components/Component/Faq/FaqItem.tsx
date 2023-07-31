"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  return (
    <div>
      <div>
        <div
          onClick={handleClick}
          className="flex items-center justify-between mt-4"
        >
          <div
            className={`font-medium text-lg ${
              isExpanded ? "text-indigo-600" : ""
            }`}
          >
            {question}
          </div>
          <div>{isExpanded ? <FaMinus size={20} /> : <FaPlus size={20} />}</div>
        </div>
        {isExpanded && (
          <div className="mt-5 flex flex-col gap-4 text-gray-600 text-lg">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
