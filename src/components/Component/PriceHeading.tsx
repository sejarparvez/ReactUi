import { FaHtml5, FaReact, FaVuejs } from "react-icons/fa";

export default function () {
  return (
    <div className="flex gap-4 flex-col lg:w-1/2 mt-12">
      <div className="font-bold text-indigo-600">Pricing</div>
      <div className="font-bold text-5xl">Buy once, use forever.</div>
      <div className="text-gray-600 leading-8">
        Every component pacakege include lifetime access, free updates, and
        <br />
        example in React, Vue, and Plain Html
      </div>
      <div className="flex flex-wrap gap-10 text-gray-600 items-center">
        <div className="flex items-center gap-2">
          <span>
            <FaHtml5 size={30} />
          </span>
          <span>HTML</span>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <FaReact size={30} />
          </span>
          <span>React</span>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <FaVuejs size={30} />
          </span>
          <span>Vue</span>
        </div>
      </div>
    </div>
  );
}
