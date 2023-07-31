import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <div className="flex justify-between">
      <div className="lg:w-1/2">
        <HeroLeft />
      </div>
      <div className="hidden lg:block w-1/2">
        <HeroRight />
      </div>
    </div>
  );
}
