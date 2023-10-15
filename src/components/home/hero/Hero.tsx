import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import HeroAlert from "./HeroAlert";
import HeroBookmark from "./HeroBookmark";
import HeroCalendar from "./HeroCalendar";
import { HeroCommand } from "./HeroCommand";
import HeroLeft from "./HeroLeft";
import HeroMusic from "./HeroMusic";
import HeroNev from "./HeroNev";
import { HeroNotification } from "./HeroNotification";
import { HeroTabs } from "./HeroTabs";
import HeroToggle from "./HeroToggle";

export default function Hero() {
  return (
    <div className="grid grid-cols-3 w-full mb-[40rem]">
      <div className=" col-span-2 mt-20">
        <HeroLeft />
      </div>

      <div className="col-span-1 relative">
        <div className="absolute right-0 bg-white">
          <HeroCalendar />
        </div>
        <div className="absolute right-[21rem] top-16">
          <HeroToggle />
        </div>
        <div className="absolute right-[28rem] top-32">
          <Switch />
        </div>
        <div className="absolute top-28 right-[21rem]">
          <Button>Button</Button>
        </div>
        <div className="absolute top-36 right-[21rem]">
          <HeroBookmark />
        </div>
        <div className="absolute right-[21rem] top-[15.4rem] w-[17rem]">
          <HeroAlert />
        </div>
        <div className="absolute right-0 top-[22rem]">
          <HeroMusic />
        </div>
        <div className="absolute right-0 top-[30rem]">
          <HeroNotification />
        </div>
        <div className="absolute right-[26rem] top-[30rem]">
          <HeroTabs />
        </div>
        <div className="absolute w-full right-[53rem] top-[38rem]">
          <HeroCommand />
        </div>
        <div className="absolute w-full right-[45.5rem] top-[30rem]">
          <HeroNev />
        </div>
      </div>
    </div>
  );
}
