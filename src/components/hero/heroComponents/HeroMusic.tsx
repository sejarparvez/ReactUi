import { BsThreeDotsVertical } from "react-icons/bs";
import { HiPlay } from "react-icons/hi";
import { PiSpeakerSimpleLowFill } from "react-icons/pi";
import { TbRewindBackward15, TbRewindForward15 } from "react-icons/tb";

export default function HeroMusic() {
  return (
    <div className="bg-white shadow-2xl flex h-20 items-center rounded-lg border text-sm">
      <div className="flex items-center gap-3 border-r-2 h-full px-6">
        <TbRewindBackward15 size={23} color="gray" />
        <HiPlay size={50} />
        <TbRewindForward15 size={23} color="gray" />
      </div>
      <div className="flex items-center gap-6 px-6">
        <div>02:17</div>
        <div className="h-2 w-56 bg-gray-300 rounded-full relative">
          <div className="h-2 w-32 bg-indigo-600 rounded-l-full"></div>
          <div className="h-5 w-[0.3rem] rounded-3xl bg-indigo-600 absolute left-[8.1rem] -top-1.5"></div>
        </div>
        <div>04:13</div>
      </div>
      <div className="flex gap-8 pr-6">
        <PiSpeakerSimpleLowFill size={20} color="gray" />
        <BsThreeDotsVertical />
      </div>
    </div>
  );
}
