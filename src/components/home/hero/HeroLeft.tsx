import { FiArrowRight } from "react-icons/fi";

export default function HeroLeft() {
  return (
    <div>
      <div className="text-4xl font-bold leading-snug md:pr-48 md:text-6xl">
        Craft your React masterpiece today!
      </div>
      <div className="mt-4 text-lg text-gray-800 md:pr-48">
        Seamlessly integrate our React components into your projects and
        effortlessly achieve stunning visual effects, thanks to the power of
        Tailwind CSS.
      </div>

      <div className="mt-10 flex flex-col gap-5 md:flex-row md:gap-8">
        <button className="flex items-center justify-center rounded-md bg-black px-3 py-2 font-medium text-white">
          Browse components
          <FiArrowRight />
        </button>
        <button className="flex items-center justify-center rounded-md border-2 px-3 py-2 font-medium">
          Explore templates <FiArrowRight />
        </button>
      </div>
    </div>
  );
}
