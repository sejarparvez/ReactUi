import { GoCheckCircleFill } from "react-icons/go";

export default function HeroNewsletter() {
  return (
    <div className="border-2 border-indigo-600 rounded-lg p-4 bg-white shadow-xl w-96 hover:bg-slate-100 text-sm">
      <div className="flex items-center justify-between mb-1">
        <div>Newsletter</div>
        <div>
          <GoCheckCircleFill color="#4f46e5" />
        </div>
      </div>
      <div className="text-gray-600 mb-5">Last message sent an hour ago</div>
      <div>621 users</div>
    </div>
  );
}
