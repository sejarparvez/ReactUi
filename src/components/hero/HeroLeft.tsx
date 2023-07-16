import { FiArrowRight } from "react-icons/fi";

export default function HeroLeft() {
  return (
    <div>
      <div className="leading-snug font-bold text-6xl pr-48">
        Craft your React masterpiece today!
      </div>
      <div className="mt-4 text-gray-800 pr-48">
        Seamlessly integrate our React components into your projects and
        effortlessly achieve stunning visual effects, thanks to the power of
        Tailwind CSS.
      </div>

      <div className="flex gap-8 mt-10">
        <button className="flex items-center justify-center text-white bg-black px-3 py-2 rounded-md font-medium">
          Browse components
          <FiArrowRight />
        </button>
        <button className="flex items-center font-medium justify-center border-2 px-3 py-2 rounded-md">
          Explore templates <FiArrowRight />
        </button>
      </div>
    </div>
  );
}
