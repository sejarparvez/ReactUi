"use client";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaUikit } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function Menu() {
  const [NavOpen, setNavOpen] = useState(false);

  const HandleClick = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden">
      <div
        className={`z-40 flex flex-col gap-1 p-3 duration-300 ${
          NavOpen ? "rotate-[360deg]" : ""
        }`}
        onClick={HandleClick}
      >
        <span
          className={`h-0.5 w-6 bg-black duration-300 ${
            NavOpen ? " translate-y-1.5 rotate-45 " : ""
          } `}
        ></span>
        <span
          className={`h-0.5 w-6 bg-black duration-300  ${
            NavOpen ? "hidden" : ""
          } `}
        ></span>
        <span
          className={`h-0.5 w-6 bg-black duration-300 ${
            NavOpen ? "-rotate-45 duration-300 ease-in-out" : ""
          } `}
        ></span>
      </div>
      <div
        className={`fixed top-0 right-0 z-10 flex h-screen w-full transform justify-end  bg-slate-200 bg-opacity-5 backdrop-blur-sm transition duration-300 ease-out dark:bg-black ${
          NavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="z-50  flex w-9/12 flex-col gap-4 bg-white [&>*]:cursor-pointer hover:[&>*]:text-indigo-600">
          <div>
            <div className="flex items-center justify-between px-8 py-5">
              <FaUikit color="#0eafe9" size={30} />
              <AiOutlineClose size={24} onClick={HandleClick} />
            </div>
            <hr />
            <div className="my-4 flex flex-col gap-4 px-8">
              <span>Components</span>
              <span>Templates</span>
              <span>Documentation</span>
            </div>
            <hr />
            <div className="my-4 px-8">Sign in</div>
            <button className="flex gap-1  bg-black text">
              <span>Get all-access</span>
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
