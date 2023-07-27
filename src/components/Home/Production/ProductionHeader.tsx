"use client";
import { useState } from "react";
import { useSwiper } from "swiper/react";

type Section = "primer" | "transmit" | "syntax" | "salient";

export default function ProductionHeader() {
  const swiper = useSwiper();
  const [activeSection, setActiveSection] = useState<Section>("primer");

  return (
    <div className="relative w-full">
      <div className="absolute top-0 -z-10 h-[1.5px] w-11/12 bg-slate-200"></div>
      <div className="flex flex-col gap-2 overflow-auto pb-3">
        <div className="flex mr-16 gap-10 [&>*]:flex [&>*]:w-full [&>*]:pt-10">
          <div
            className={`flex-col border-t-[2px] ${
              activeSection === "primer"
                ? "border-indigo-600"
                : "border-slate-200 hover:border-slate-400"
            }`}
            onClick={() => {
              setActiveSection("primer");
              swiper.slideTo(0);
            }}
          >
            <div
              className={`mb-6 flex w-28 items-center justify-center rounded-full px-2 py-1 text-sm  ${
                activeSection === "primer"
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-200 hover:bg-slate-300"
              }`}
            >
              Info product
            </div>
            <div
              className={`mb-4 text-xl font-medium ${
                activeSection === "primer" ? "text-indigo-600" : ""
              }`}
            >
              Primer
            </div>
            <div className="hidden text-sm text-gray-600 lg:block">
              We've actually published four info products ourselves and this
              landing page is honestly better than the sites we designed for all
              of those.
            </div>
          </div>
          <div
            className={`flex-col border-t-[2px]  ${
              activeSection === "transmit"
                ? "border-green-500"
                : "border-slate-200 hover:border-slate-400"
            }`}
            onClick={() => {
              setActiveSection("transmit");
              swiper.slideTo(1);
            }}
          >
            <div
              className={`mb-6 flex w-24 items-center justify-center rounded-full px-2 py-1 text-sm ${
                activeSection === "transmit"
                  ? "bg-green-500 text-white"
                  : "bg-slate-200 hover:bg-slate-300"
              }`}
            >
              Podcast
            </div>
            <div
              className={`mb-4 text-xl font-medium ${
                activeSection === "transmit" ? "text-green-500" : ""
              }`}
            >
              Transmit
            </div>
            <div className="hidden text-sm text-gray-600 lg:block">
              You've ordered your SM7B, boom arm, and a bunch of acoustic foam.
              With this template, you can finally stop procrastinating and
              record your first episode.
            </div>
          </div>
          <div
            className={`flex-col border-t-[2px]  ${
              activeSection === "syntax"
                ? "border-cyan"
                : "border-slate-200 hover:border-slate-400"
            }`}
            onClick={() => {
              swiper.slideTo(2);
              setActiveSection("syntax");
            }}
          >
            <div
              className={`mb-6 flex w-32 items-center justify-center rounded-full px-2 py-1 text-sm ${
                activeSection === "syntax"
                  ? "bg-cyan text-white"
                  : "bg-slate-200 hover:bg-slate-300"
              }`}
            >
              Documentation
            </div>
            <div
              className={`mb-4 text-xl font-medium ${
                activeSection === "syntax" ? "text-cyan" : ""
              }`}
            >
              Syntax
            </div>
            <div className="hidden text-sm text-gray-600 lg:block">
              Writing documentation is enough to make you rip your hair out
              without worrying about the design. Let us help you keep a few
              strands.
            </div>
          </div>
          <div
            className={`flex-col border-t-[2px]  ${
              activeSection === "salient"
                ? "border-orange-500"
                : "border-slate-200 hover:border-slate-400"
            }`}
            onClick={() => {
              setActiveSection("salient");
              swiper.slideTo(3);
            }}
          >
            <div
              className={`mb-6 flex w-32 items-center justify-center rounded-full px-2 py-1.5 text-sm ${
                activeSection === "salient"
                  ? "bg-orange-600 text-white"
                  : "bg-slate-200"
              }`}
            >
              SaaS marketing
            </div>
            <div
              className={`mb-4 text-xl font-medium ${
                activeSection === "salient" ? "text-orange-500" : ""
              }`}
            >
              Salient
            </div>
            <div className="hidden text-sm text-gray-600 lg:block">
              Every SaaS marketing site uses the same formula a hero, feature
              sections, some testimonials, you know the drill. But some are
              prettier than others.
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pt-4 lg:hidden">
        <div
          className={`text-sm text-gray-600 ${
            activeSection === "primer" ? "block" : "hidden"
          }`}
        >
          We've actually published four info products ourselves and this landing
          page is honestly better than the sites we designed for all of those.
        </div>
        <div
          className={`text-sm text-gray-600 ${
            activeSection === "transmit" ? "block" : "hidden"
          }`}
        >
          You've ordered your SM7B, boom arm, and a bunch of acoustic foam. With
          this template, you can finally stop procrastinating and record your
          first episode.
        </div>
        <div
          className={`text-sm text-gray-600 ${
            activeSection === "syntax" ? "block" : "hidden"
          }`}
        >
          Writing documentation is enough to make you rip your hair out without
          worrying about the design. Let us help you keep a few strands.
        </div>
        <div
          className={`text-sm text-gray-600 ${
            activeSection === "salient" ? "block" : "hidden"
          }`}
        >
          Every SaaS marketing site uses the same formula a hero, feature
          sections, some testimonials, you know the drill. But some are prettier
          than others.
        </div>
      </div>
    </div>
  );
}
