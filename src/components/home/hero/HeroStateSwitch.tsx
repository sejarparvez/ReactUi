import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";

export default function HeroStateSwitch() {
  return (
    <div className="bg-white text-sm shadow-2xl w-40 p-3 rounded-lg border">
      <div className="flex gap-4 items-center hover:bg-slate-50 p-1 rounded-lg">
        <div className="w-7 h-7 flex items-center justify-center rounded-md border shadow-sm">
          <FiSun color="blue" />
        </div>
        <div>Light</div>
      </div>
      <div className="flex gap-4 items-center hover:bg-slate-50 p-1 rounded-lg">
        <div className="w-7 h-7 flex items-center justify-center rounded-md border shadow-sm">
          <FiMoon color="gray" />
        </div>
        <div>Dark</div>
      </div>
      <div className="flex gap-4 items-center hover:bg-slate-50 p-1 rounded-lg">
        <div className="w-7 h-7 flex items-center justify-center rounded-md border shadow-sm">
          <FiMonitor color="gray" />
        </div>
        <div>System</div>
      </div>
    </div>
  );
}
