"use client";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import React, { ReactElement, useRef, useState } from "react";

import { BsMoon, BsPhone, BsTablet } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { RiFileCopy2Line } from "react-icons/ri";

interface CodeContainerProps {
  component: React.ReactNode;
  name: string;
  details: string;
}

const CodeContainer = ({
  component,
  name,
  details,
}: CodeContainerProps): ReactElement => {
  const [tooltipText, setTooltipText] = useState("Copy text to clipboard");
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const codeRef = useRef<HTMLDivElement>(null);
  const [jsxCode, setJSXCode] = useState("");

  const handleCopyClick = () => {
    const codeText = showPreview ? jsxCode : codeRef.current?.textContent || "";
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTooltipText("Copied");
      setTimeout(() => {
        setCopied(false);
        setTooltipText("Copy text to clipboard");
      }, 2000);
    });
  };

  const handlePreviewClick = () => {
    setShowPreview(true);
  };

  const handleJsxClick = () => {
    setShowPreview(false);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col gap-3 mb-6">
        <div className=" text-3xl flex gap-2 items-center">
          <span className=" font-medium">Name:</span>
          <span className="font-bold">{name}</span>
        </div>
        <div className="text-gray-700">
          <span className="mr-2 font-medium">Details:</span>
          <span>{details}</span>
        </div>
      </div>
      <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white">
        <div className="border-b border-gray-300 h-12 flex items-center justify-between px-4 sm:px-6 bg-gray-50">
          <div className="flex gap-4 items-center">
            <button
              className={`font-medium rounded-lg px-2 py-1 text-sm ${
                showPreview ? "bg-gray-200" : "bg-white"
              }`}
              onClick={handlePreviewClick}
            >
              Preview
            </button>
            <button
              className={`font-medium rounded-lg px-2 py-1 text-sm ${
                !showPreview ? "bg-gray-200" : "bg-white"
              }`}
              onClick={handleJsxClick}
            >
              JSX
            </button>
          </div>
          <div className="flex gap-4">
            <Tooltip placement="top" overlay="Toggle to PC version">
              <span className="border p-2 rounded-lg hover:bg-gray-200">
                <MdComputer size={20} />
              </span>
            </Tooltip>
            <Tooltip placement="top" overlay="Toggle to Tablet version">
              <span className="border p-2 rounded-lg hover:bg-gray-200">
                <BsTablet size={20} />
              </span>
            </Tooltip>
            <Tooltip placement="top" overlay="Toggle to Mobile version">
              <span className="border p-2 rounded-lg hover:bg-gray-200">
                <BsPhone size={20} />
              </span>
            </Tooltip>
            <Tooltip placement="top" overlay="Toggle to Dark version">
              <span className="border p-2 rounded-lg hover:bg-gray-200">
                <BsMoon size={20} />
              </span>
            </Tooltip>
          </div>
          <Tooltip placement="top" overlay={tooltipText}>
            <div
              className={`border p-2 rounded-lg hover:bg-gray-200 ${
                copied ? "text-cyan" : ""
              }`}
              onClick={handleCopyClick}
            >
              <RiFileCopy2Line size={20} />
            </div>
          </Tooltip>
        </div>
        <div className="relative h-96">
          <div className={`p-4 sm:p-6 ${showPreview ? "block" : "hidden"}`}>
            {component}
          </div>
          {!showPreview && (
            <div
              className="p-4 sm:p-6 flex items-center justify-center"
              ref={codeRef}
            >
              {jsxCode}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeContainer;
