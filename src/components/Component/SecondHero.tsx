import React from "react";
import { BiCodeCurly } from "react-icons/bi";
import { FaLayerGroup, FaSquarespace } from "react-icons/fa";

export default function SecondHero() {
  return (
    <>
      <div className="flex mt-16 flex-col lg:flex-row md:px-16 lg:px-0 pb-6 gap-8 lg:gap-6 justify-between">
        <div className="flex gap-5 lg:w-1/3 md:w-full items-start">
          <div className="p-1 border-indigo-600 border rounded-lg text-indigo-600">
            <FaLayerGroup size={35} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold">500+ Components</div>
            <div className="text-gray-600">
              Beautifully designed, expartly crafted componest that follow all
              accessibility best practice and are easy to customize.
            </div>
          </div>
        </div>

        <div className="flex items-start gap-5 md:w-full lg:w-1/3">
          <div className="p-1 border-indigo-600 border text-indigo-600 rounded-lg">
            <BiCodeCurly size={35} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold">React, Vue, and HTML</div>
            <div className="text-gray-600">
              Interactive examples of React and Vue powered by Headless UI, plus
              vanila HTML if you'd rather write any necessary JS yourself.
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-start md:w-full lg:w-1/3">
          <div className="p-1 border-indigo-600 border text-indigo-600 rounded-lg">
            <FaSquarespace size={35} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold">Fully Responsive</div>
            <div className="text-gray-600">
              Every example is fully responsive and carefully designed and
              implemented to look great at any screen size.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
