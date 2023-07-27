"use client";
import { useState } from "react";

const HeroToggle = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className={`block bg-indigo-600 w-14 h-8 rounded-full ${
            isChecked ? "bg-indigo-600" : "bg-slate-400"
          }`}
        ></div>
        <div
          className={` absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
            isChecked ? "transform translate-x-6 " : ""
          }`}
        ></div>
      </div>
    </label>
  );
};

export default HeroToggle;
