import FaqRight from "./FaqRight";

export default function Faq() {
  return (
    <div
      className="flex my-16 md:px-16 lg:px-0 flex-col lg:flex-row border-t py-16"
      id="faq"
    >
      <div className="w-full mb-16 lg:mb-0 lg:w-5/12 flex flex-col gap-8">
        <div className="text-indigo-600 font-bold">
          Frequently asked questions
        </div>
        <div className="text-4xl md:text-5xl font-bold">
          Everything you
          <br /> need to know
        </div>
      </div>
      <div className="w-full lg:w-7/12">
        <FaqRight />
      </div>
    </div>
  );
}
