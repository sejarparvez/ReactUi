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
    <div className="grid grid-cols-1 md:grid-cols-3 w-full mb-[33rem] lg:mb-[44rem]">
      <div className=" col-span-2 md:mt-6 lg:mt-20">
        <HeroLeft />
        {/* test comment */}
      </div>

      <div className="col-span-1 relative">
        <div className="md:absolute mt-6 md:mt-0  lg:right-0 bg-white scale-100 md:scale-75 lg:scale-100">
          <HeroCalendar />
        </div>
        <div className="hidden md:block md:absolute md:right-60 lg:right-[21rem] top-16">
          <HeroToggle />
        </div>
        <div className="hidden md:block md:absolute md:right-[21rem] lg:right-[28rem] top-32">
          <Switch />
        </div>
        <div className="hidden md:block md:absolute top-28 md:right-60 lg:right-[21rem]">
          <Button>Button</Button>
        </div>
        <div className="hidden md:block md:absolute top-36 md:right-[14rem] scale-90 lg:scale-100 lg:right-[21rem]">
          <HeroBookmark />
        </div>
        <div className="hidden md:block md:absolute md:right-[14rem] lg:right-[21rem] top-[15.4rem] md:w-[14rem] lg:w-[17rem]">
          <HeroAlert />
        </div>
        <div className="hidden md:block md:absolute -right-12 md:scale-90 lg:scale-100 md:top-[28rem] lg:top-[22rem]">
          <HeroMusic />
        </div>
        <div className="absolute -right-5 md:-right-16 lg:right-0 scale-90 md:scale-75 lg:scale-100 top-[24rem] md:top-[31rem] lg:top-[30rem]">
          <HeroNotification />
        </div>
        <div className="hidden md:block md:absolute scale-75 lg:scale-100 right-60 lg:right-[26rem] top-[31rem] lg:top-[30rem]">
          <HeroTabs />
        </div>
        <div className="hidden lg:block lg:absolute w-full lg:right-[53rem] top-[38rem]">
          <HeroCommand />
        </div>
        <div className="lg:absolute lg:block hidden w-full right-[45.5rem] top-[30rem]">
          <HeroNev />
        </div>
      </div>
    </div>
  );
}
