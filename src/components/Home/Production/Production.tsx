import ProductionSlide from "./ProductionSlide";

export default function Production() {
  return (
    <div className="mt-28 flex flex-col gap-4">
      <div className=" flex flex-col gap-4 lg:w-1/2">
        <div className="font-bold text-indigo-600">Templates</div>
        <div className="text-4xl font-bold">
          Production-ready website templates, built the way you want them.
        </div>
        <div className="text-gray-600">
          Visually-stunning, easy to customize site templates built with React
          and Next.js. The perfect starting point for your next project and the
          ultimate resource for learning how experts build real websites with
          Tailwind CSS.
        </div>
        <div className=" cursor-pointer text-indigo-600">
          Explore all templates →
        </div>
      </div>
      <ProductionSlide />
    </div>
  );
}
