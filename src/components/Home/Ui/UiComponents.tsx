import UiHeader from "./UiHeader";

export default function UiComponents() {
  return (
    <div>
      <div className="mb-10 flex flex-col gap-5 lg:w-1/2">
        <span className="text-lg font-medium text-indigo-600">Components</span>
        <span className="text-4xl font-bold">
          Beautifully crafted UI components, ready for your next project.
        </span>
        <span className="text-gray-600">
          Over 500+ professionally designed, fully responsive, expertly crafted
          component examples you can drop into your Tailwind projects and
          customize to your heart’s content.
        </span>
        <span className="curser-pointer text-lg font-semibold text-indigo-600">
          Browse all components →
        </span>
      </div>
      <UiHeader />
    </div>
  );
}
