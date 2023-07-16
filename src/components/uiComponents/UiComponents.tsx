import UiHeader from "./UiHeader";

export default function UiComponents() {
  return (
    <div>
      <div className="flex flex-col gap-5 w-1/2">
        <span className="text-indigo-600 text-lg font-medium">Components</span>
        <span className="font-bold text-4xl">
          Beautifully crafted UI components, ready for your next project.
        </span>
        <span className="text-gray-600">
          Over 500+ professionally designed, fully responsive, expertly crafted
          component examples you can drop into your Tailwind projects and
          customize to your heart’s content.
        </span>
        <span className="curser-pointer text-indigo-600 font-semibold text-lg">
          Browse all components →
        </span>
      </div>
      <UiHeader />
    </div>
  );
}
