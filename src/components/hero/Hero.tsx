import HeroLeft from "./HeroLeft";
import HeroAccount from "./heroComponents/HeroAccount";
import HeroAssign from "./heroComponents/HeroAssign";
import HeroBookmark from "./heroComponents/HeroBookmark";
import HeroButton from "./heroComponents/HeroButton";
import HeroCustomer from "./heroComponents/HeroCustomer";
import HeroDate from "./heroComponents/HeroDate";
import HeroList from "./heroComponents/HeroList";
import HeroMusic from "./heroComponents/HeroMusic";
import HeroNev from "./heroComponents/HeroNev";
import HeroNewsletter from "./heroComponents/HeroNewsletter";
import HeroSearch from "./heroComponents/HeroSearch";
import HeroStateSwitch from "./heroComponents/HeroStateSwitch";
import HeroToggle from "./heroComponents/HeroToggle";
import HeroToggleTwo from "./heroComponents/HeroToggleTwo";

export default function Hero() {
  return (
    <div className="flex justify-center relative mb-[52rem]">
      <div className="w-8/12  mt-20 -z-10">
        <HeroLeft />
      </div>
      <div className="w-4/12">
        <div className="line absolute top-0 w-[28rem] -right-10"></div>
        <div className="line absolute top-[21rem] w-[41.5rem] -right-10"></div>
        <div className="line absolute top-[17rem] w-[17rem] right-[20.5rem]"></div>
        <div className="line absolute top-[11rem] w-[26rem] rotate-90 right-[9rem]"></div>
        <div className="line absolute top-[19rem] w-[6rem] rotate-90 right-[33rem]"></div>
        <div className="line absolute top-[11rem] w-[26rem] rotate-90 -right-[13rem]"></div>
        <div className=" right-0 scale-90 absolute">
          <HeroList />
        </div>

        <div className="absolute top-[16rem] right-[22rem] scale-[0.8]">
          <HeroBookmark />
        </div>

        <div className="absolute top-52 right-[23.5rem]">
          <HeroButton />
        </div>
        <div className="absolute top-52 right-[31rem] scale-75">
          <HeroToggleTwo />
        </div>
        <div className="absolute top-36 right-[23.5rem] scale-75">
          <HeroToggle />
        </div>
        <div className="absolute top-[23rem] right-0">
          <HeroMusic />
        </div>
        <div className="absolute top-[30rem]">
          <HeroSearch />
        </div>
        <div className="absolute top-[30rem] right-[30rem]">
          <HeroNewsletter />
        </div>
        <div className="absolute top-[40rem] right-[30rem]">
          <HeroCustomer />
        </div>
        <div className="absolute top-[43rem] left-16">
          <HeroNev />
        </div>
        <div className="absolute top-[38rem] left-36">
          <HeroDate />
        </div>
        <div className="absolute top-[55rem]">
          <HeroAccount />
        </div>
        <div className="absolute top-[50rem] right-[30rem]">
          <HeroAssign />
        </div>
        <div className="absolute top-[50rem] left-40">
          <HeroStateSwitch />
        </div>

        <div className="line absolute top-[49rem] w-[54rem] left-0"></div>
        <div className="line absolute top-[67.5rem] w-[36rem] left-[18rem]"></div>
        <div className="line absolute top-[41.5rem] w-[25rem] left-6"></div>
        <div className="line absolute top-[45.5rem] w-[10.5rem] -left-10 rotate-90"></div>
        <div className="line absolute top-[45.5rem] w-[10.5rem] left-80 rotate-90"></div>
        <div className="line absolute top-[58.5rem] w-[23rem] left-[10.4rem] rotate-90"></div>
        <div className="line absolute top-[58.5rem] w-[23rem] right-[17rem] rotate-90"></div>
        <div className="line absolute top-[55rem] w-[14rem] left-[1.4rem] rotate-90"></div>
        <div className="line absolute top-[60rem] w-[18rem] left-[6rem] "></div>
        <div className="Green_bg"></div>
        <div className="Purple_bg absolute top-[20rem] left-[26rem]"></div>
      </div>
    </div>
  );
}
