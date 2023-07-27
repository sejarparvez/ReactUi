"use client";
import Link from "next/link";
import img10 from "../../../img/pic2.jpg";
import img3 from "../../../img/pic1.jpg";
import img12 from "../../../img/pic4.jpeg";
import img2 from "../../../img/pic3.jpg";
import img4 from "../../../img/pic5.jpeg";
import img5 from "../../../img/pic2.jpg";
import img6 from "../../../img/pic2.jpg";
import img7 from "../../../img/pic4.jpeg";
import img8 from "../../../img/pic1.jpg";
import img1 from "../../../img/pic5.jpeg";
import img9 from "../../../img/pic2.jpg";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type Section = "application-ui" | "marketing" | "ecommerce";

interface SectionData {
  section: Section;
  images: { image: StaticImageData; data1: string; data2: string }[];
}

export default function UiHeader() {
  const [activeSection, setActiveSection] = useState<Section>("application-ui");

  const sectionData: SectionData[] = [
    {
      section: "application-ui",
      images: [
        { image: img1, data1: "Header", data2: "13" },
        { image: img2, data1: "Hero section", data2: "11" },
        { image: img3, data1: "Footer", data2: "9" },
        { image: img4, data1: "Navigation", data2: "12" },
        { image: img5, data1: "Call to action", data2: "6" },
        { image: img6, data1: "About section", data2: "5" },
      ],
    },
    {
      section: "marketing",
      images: [
        { image: img7, data1: "Data 1-1", data2: "Data 1-2" },
        { image: img10, data1: "Data 10-1", data2: "Data 10-2" },
        { image: img12, data1: "Data 12-1", data2: "Data 12-2" },
        { image: img9, data1: "Data 9-1", data2: "Data 9-2" },
        { image: img2, data1: "Data 2-1", data2: "Data 2-2" },
        { image: img3, data1: "Data 3-1", data2: "Data 3-2" },
      ],
    },
    {
      section: "ecommerce",
      images: [
        { image: img4, data1: "Data 1-1", data2: "Data 1-2" },
        { image: img2, data1: "Data 2-1", data2: "Data 2-2" },
        { image: img7, data1: "Data 7-1", data2: "Data 7-2" },
        { image: img8, data1: "Data 8-1", data2: "Data 8-2" },
        { image: img9, data1: "Data 9-1", data2: "Data 9-2" },
        { image: img3, data1: "Data 3-1", data2: "Data 3-2" },
      ],
    },
  ];

  const activeSectionData = sectionData.find(
    (data) => data.section === activeSection,
  );

  const sectionImages = activeSectionData ? activeSectionData.images : [];

  return (
    <div className=" relative">
      <div className="absolute top-0 -z-10 h-[1.5px] w-full bg-slate-200"></div>
      <div className="flex gap-2 md:gap-5 [&>*]:flex  [&>*]:w-full [&>*]:pt-4 md:[&>*]:pt-10">
        <div
          className={`flex-col border-t-[2px] ${
            activeSection === "application-ui"
              ? "border-indigo-600"
              : "border-slate-200 hover:border-slate-400"
          }`}
          onClick={() => setActiveSection("application-ui")}
        >
          <div
            className={`mb-4 cursor-pointer font-medium md:text-xl ${
              activeSection === "application-ui" ? "text-indigo-600" : ""
            }`}
          >
            Application UI
          </div>
          <div className="hidden text-sm md:block">
            From layouts, tables, modal dialogs — everything you need to build
            beautiful responsive web applications.
          </div>
        </div>
        <div
          className={`flex-col border-t-[2px]  ${
            activeSection === "marketing"
              ? "border-indigo-600"
              : "border-slate-200 hover:border-slate-400"
          }`}
          onClick={() => setActiveSection("marketing")}
        >
          <div
            className={`mx-6 mb-4 cursor-pointer font-medium md:text-xl ${
              activeSection === "marketing" ? "text-indigo-600" : ""
            }`}
          >
            Marketing
          </div>
          <div className="mx-6 hidden text-sm md:block">
            Heroes, feature sections, newsletter sign-up forms — everything you
            need to build beautiful marketing websites.
          </div>
        </div>
        <div
          className={`flex-col border-t-[2px]  ${
            activeSection === "ecommerce"
              ? "border-indigo-600"
              : "border-slate-200 hover:border-slate-400"
          }`}
          onClick={() => setActiveSection("ecommerce")}
        >
          <div
            className={`mb-4 cursor-pointer font-medium md:text-xl ${
              activeSection === "ecommerce" ? "text-indigo-600" : ""
            }`}
          >
            Ecommerce
          </div>
          <div className="hidden text-sm md:block">
            Checkout forms, shopping carts, product views — everything you need
            to build your next ecommerce front-end.
          </div>
        </div>
      </div>
      <div>
        <div
          className={`text-sm text-gray-600 md:hidden ${
            activeSection === "application-ui" ? "block" : "hidden"
          }`}
        >
          From layouts, tables, modal dialogs — everything you need to build
          beautiful responsive web applications.
        </div>
        <div
          className={`text-sm text-gray-600 md:hidden ${
            activeSection === "marketing" ? "block" : "hidden"
          }`}
        >
          Heroes, feature sections, newsletter sign-up forms — everything you
          need to build beautiful marketing websites.
        </div>
        <div
          className={`text-sm text-gray-600 md:hidden ${
            activeSection === "ecommerce" ? "block" : "hidden"
          }`}
        >
          Checkout forms, shopping carts, product views — everything you need to
          build your next ecommerce front-end.
        </div>
      </div>
      <div className="mx-auto mt-4 grid-cols-3 gap-10 object-cover md:grid">
        {sectionImages.map((image, index) => (
          <div
            key={index}
            className=" mt-10 flex-col rounded-md hover:bg-slate-100  hover:shadow-lg"
          >
            <Image
              src={image.image}
              alt=""
              className="h-60 w-[28rem] rounded-md object-cover md:h-40  lg:h-60"
            />

            <div className="mt-4 flex flex-col gap-3">
              <div>{image.data1}</div>
              <div className="text-sm text-gray-600">
                {image.data2} <span className="ml-1">components</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href={"/components"}>
        <button className="mx-auto mt-16 flex rounded-md bg-black px-10 py-2 text-white">
          view all
        </button>
      </Link>
    </div>
  );
}
