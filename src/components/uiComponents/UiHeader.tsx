"use client";
import img1 from "@/img/img1.jpg";
import img10 from "@/img/img10.jpg";
import img12 from "@/img/img12.jpeg";
import img2 from "@/img/img2.jpg";
import img3 from "@/img/img3.jpg";
import img4 from "@/img/img4.jpg";
import img5 from "@/img/img5.jpg";
import img6 from "@/img/img6.jpeg";
import img7 from "@/img/img7.jpg";
import img8 from "@/img/img8.jpg";
import img9 from "@/img/img9.jpg";
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
        { image: img1, data1: "Data 1-1", data2: "Data 1-2" },
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
        { image: img1, data1: "Data 1-1", data2: "Data 1-2" },
        { image: img2, data1: "Data 2-1", data2: "Data 2-2" },
        { image: img7, data1: "Data 7-1", data2: "Data 7-2" },
        { image: img8, data1: "Data 8-1", data2: "Data 8-2" },
        { image: img9, data1: "Data 9-1", data2: "Data 9-2" },
        { image: img3, data1: "Data 3-1", data2: "Data 3-2" },
      ],
    },
  ];

  const activeSectionData = sectionData.find(
    (data) => data.section === activeSection
  );

  const sectionImages = activeSectionData ? activeSectionData.images : [];

  return (
     <div>
      <div className="mt-12 flex item-center justify-center">
        <div
          className={`pt-10 border-t ${
            activeSection === "application-ui" ? "border-indigo-600" : ""
          }`}
          onClick={() => setActiveSection("application-ui")}
        >
          <div
            className={`font-medium text-xl mb-4 ${
              activeSection === "application-ui" ? "text-indigo-600" : ""
            }`}
          >
            Application UI
          </div>
          <div className="text-sm">
            From layouts, tables, modal dialogs — everything you need to build
            beautiful responsive web applications.
          </div>
        </div>
        <div
          className={`pt-10 border-t ${
            activeSection === "marketing" ? "border-indigo-600" : ""
          }`}
          onClick={() => setActiveSection("marketing")}
        >
          <div
            className={`font-medium text-xl mb-4 mx-6 ${
              activeSection === "marketing" ? "text-indigo-600" : ""
            }`}
          >
            Marketing
          </div>
          <div className="mx-6 text-sm">
            Heroes, feature sections, newsletter sign-up forms — everything you
            need to build beautiful marketing websites.
          </div>
        </div>
        <div
          className={`pt-10 border-t ${
            activeSection === "ecommerce" ? "border-indigo-600" : ""
          }`}
          onClick={() => setActiveSection("ecommerce")}
        >
          <div
            className={`font-medium text-xl mb-4 ${
              activeSection === "ecommerce" ? "text-indigo" : ""
            }`}
          >
            Ecommerce
          </div>
          <div className="text-sm">
            Checkout forms, shopping carts, product views — everything you need
            to build your next ecommerce front-end.
          </div>
        </div>
      </div>
      <div className="grid gap-10 mt-4 mx-auto object-cover grid-cols-3">
        {sectionImages.map((image, index) => (
          <div
            key={index}
            className="h-80 w-96 flex mt-10 mx-auto flex-col rounded-md hover:shadow-lg  hover:bg-slate-100"
          >
            <Image
              src={image.image}
              alt=""
              className="object-cover mx-auto h-60 w-[22rem] rounded-md"
            />
            <div className="flex flex-col mt-4 gap-3 ml-4">
              <div>{image.data1}</div>
             <div className="text-gray-600 text-sm">{image.data2} <span className='ml-1'>components</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

