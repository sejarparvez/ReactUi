import React from "react";
import { FaArrowRight, FaHtml5, FaReact, FaVuejs } from "react-icons/fa";

export default function HeroLeft() {
  return (
    <div className="flex flex-col gap-8 md:px-16 lg:px-0 lg:mt-20">
      <div className="font-bold text-xl text-indigo-600 mb-2">
        By the makers of Tailwind CSS
      </div>
      <div className="text-4xl md:text-5xl font-bold">
        Beautifull Ui components, crafted with Tailwind CSS
      </div>
      <div className="flex flex-wrap gap-8 text-gray-600 items-center text-xl">
        <span className="flex gap-2 items-center">
          <span>
            <FaHtml5 size={30} />
          </span>
          <span>HTML</span>
        </span>
        <span className="flex gap-2 items-center">
          <span>
            <FaReact size={30} />
          </span>
          <span>Reactjs</span>
        </span>
        <span className="flex gap-2 items-center">
          <span>
            <FaVuejs size={30} />
          </span>
          <span>Vuejs</span>
        </span>
      </div>
      <div className="mr-8 text-gray-700">
        Over 500+ professionally designed, fully responsive, expartly crafted
        component examples you can drop into your Tailwind projects and
        customize to your hears content.
      </div>
      <div className="flex gap-8 flex-wrap">
        <button className="flex items-center justify-center px-4 py-2 gap-1 bg-black text-white rounded-lg">
          <span>Live Preview</span>{" "}
          <span>
            <FaArrowRight />
          </span>
        </button>
        <button className="flex items-center justify-center px-4 py-2 gap-1 bg-white text-black border rounded-lg">
          <span>Documentation</span>
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
}
