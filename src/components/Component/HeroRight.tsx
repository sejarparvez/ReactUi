import React from "react";
import HeroList from "../Home/Hero/HeroList";
import HeroSearch from "../Home/Hero/HeroSearch";
import HeroStateSwitch from "../Home/Hero/HeroStateSwitch";
import HeroToggleTwo from "../Home/Hero/HeroToggleTwo";
import HeroBookmark from "../Home/Hero/HeroBookmark";
import HeroButton from "../Home/Hero/HeroButton";

export default function HeroRight() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 scale-90">
        <HeroSearch />
      </div>
      <div className="absolute top-0 right-0">
        <HeroStateSwitch />
      </div>
      <div className="absolute top-32 -right-28 scale-90">
        <HeroList />
      </div>
      <div className="flex items-center gap-7 justify-center absolute top-96">
        <div className="scale-90">
          <HeroToggleTwo />
        </div>
        <div className="scale-90 -mt-4">
          <HeroBookmark />
        </div>
        <div>
          <HeroButton />
        </div>
      </div>
    </div>
  );
}
