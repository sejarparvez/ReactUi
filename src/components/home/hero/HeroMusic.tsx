import { Slider } from "@/components/ui/slider";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiPlay } from "react-icons/hi";
import { PiSpeakerSimpleLowFill } from "react-icons/pi";
import { TbRewindBackward15, TbRewindForward15 } from "react-icons/tb";

export default function HeroMusic() {
  return (
    <div className="flex h-20 items-center rounded-lg border bg-white text-sm shadow-2xl">
      <div className="flex h-full items-center gap-3 border-r-2 px-6">
        <TbRewindBackward15 size={23} color="gray" />
        <HiPlay size={50} />
        <TbRewindForward15 size={23} color="gray" />
      </div>
      <div className="flex items-center gap-6 px-6">
        <div>01:17</div>

        <div className="w-80">
          <Slider defaultValue={[33]} max={100} step={1} />
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
