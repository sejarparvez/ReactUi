"use client";
import React, { useState } from "react";
import Image from "next/image";
import img3 from "@/img/img1.jpg";
import img4 from "@/img/img2.jpg";
import img5 from "@/img/img3.jpg";

type ImageNumber = 1 | 2 | 3;

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<ImageNumber>(2); // Set the default selected image to 2

  const handleImageClick = (imageNumber: ImageNumber) => {
    setSelectedImage(imageNumber);
  };

  return (
    <div className="flex items-center flex-col gap-10 justify-center mt-20 lg:mt-16">
      <div className="flex items-center justify-center gap-6">
        <Image
          src={img3}
          alt=""
          className={`h-16 w-16 rounded-full object-cover ${
            selectedImage === 1 ? "mb-10" : "blur"
          }`}
          onClick={() => handleImageClick(1)}
        />
        <Image
          src={img4}
          alt=""
          className={`h-16 w-16 rounded-full object-cover ${
            selectedImage === 2 ? "mb-10" : "blur"
          }`}
          onClick={() => handleImageClick(2)}
        />
        <Image
          src={img5}
          alt=""
          className={`h-16 w-16 rounded-full object-cover ${
            selectedImage === 3 ? "mb-10" : "blur"
          }`}
          onClick={() => handleImageClick(3)}
        />
      </div>
      <div className="text-center">
        {selectedImage === 1 && (
          <div className="lg:w-1/2 w-full md:w-3/4 mx-auto">
            <p className="text-2xl">
              "Tailwind UI made it possible for me to ship the first version of
              Reflect entirely by myself, while still being immensely proud of
              the design."
            </p>
            <div className="flex items-center mt-8 flex-col gap-4">
              <p className="text-xl font-bold">Alex MacCaw</p>
              <p className="text-gray-600">Founder of Reflect & Clearbit</p>
            </div>
          </div>
        )}
        {selectedImage === 2 && (
          <div className="lg:w-1/2 w-full md:w-3/4 mx-auto">
            <p className="text-2xl">
              "Yet again Tailwind and Tailwind UI are dramatically speeding up
              my frontend work. At this point Tailwind UI is hands-down the
              highest ROI digital asset I’ve ever bought."
            </p>
            <div className="flex items-center mt-8 flex-col gap-4">
              <p className="text-xl font-bold">Ben Barbersmith</p>
              <p className="text-gray-600">@benbarbersmith</p>
            </div>
          </div>
        )}
        {selectedImage === 3 && (
          <div className="mx-auto lg:w-1/2 w-full md:w-3/4">
            <p className="text-2xl">
              "We’ve gone through several iterations of our pricing page
              recently, and every time we wanted to try a new idea I was able to
              find the perfect starting point in Tailwind UI. It’s turned a
              project I might have never made the time to tackle into something
              I could finish and ship in an hour."
            </p>
            <div className="flex items-center mt-8 flex-col gap-4">
              <p className="text-xl font-bold">Justin Jackson</p>
              <p className="text-gray-600">Founder of Transistor</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
