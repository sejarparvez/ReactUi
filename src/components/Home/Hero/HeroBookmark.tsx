import { FiBookmark } from "react-icons/fi";

export default function HeroBookmark() {
  return (
    <div className="flex justify-between hover:bg-slate-50 bg-white mt-7 w-56 shadow-2xl border rounded-md">
      <div className="flex items-center gap-5 px-4">
        <FiBookmark /> <span>Bookmark</span>
      </div>
      <div className="border-l flex items-center justify-center h-12 px-3">
        12k
      </div>
    </div>
  );
}
