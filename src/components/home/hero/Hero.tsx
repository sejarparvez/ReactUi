import HeroAccount from "./HeroAccount";
import HeroAssign from "./HeroAssign";
import HeroBookmark from "./HeroBookmark";
import HeroButton from "./HeroButton";
import HeroCustomer from "./HeroCustomer";
import HeroDate from "./HeroDate";
import HeroLeft from "./HeroLeft";
import HeroList from "./HeroList";
import HeroMusic from "./HeroMusic";
import HeroNev from "./HeroNev";
import HeroNewsletter from "./HeroNewsletter";
import HeroSearch from "./HeroSearch";
import HeroStateSwitch from "./HeroStateSwitch";
import HeroToggle from "./HeroToggle";
import HeroToggleTwo from "./HeroToggleTwo";

export default function Hero() {
  return (
    <div className="mb-[54rem] flex flex-col justify-center lg:top-10 lg:mb-[52rem] lg:flex-row">
      <div className="mt-10 lg:mt-20 lg:w-8/12">
        <HeroLeft />
      </div>
      <div className="relative flex w-screen lg:w-4/12">
        <div className="line absolute top-12 -right-10 w-[20rem] md:hidden  lg:top-0 lg:block lg:w-[28rem]"></div>
        <div className="line absolute top-[17.1rem] -right-10 w-[30rem] md:hidden lg:top-[21rem] lg:block lg:w-[41.5rem] "></div>
        <div className="line absolute top-[14rem] right-[15rem] w-[11rem] md:hidden lg:top-[17rem] lg:right-[20.5rem] lg:block lg:w-[17rem] "></div>
        <div className="line absolute top-[11rem] right-[7.3rem] w-[17rem] rotate-90 md:hidden lg:right-[9rem] lg:block lg:w-[26rem]"></div>
        <div className="line absolute top-[16rem] right-[22rem] w-[5rem] rotate-90 md:hidden lg:top-[19rem] lg:right-[33rem] lg:block lg:w-[6rem]"></div>
        <div className="line absolute top-[11rem] -right-[13rem] w-[26rem] rotate-90"></div>
        <div className="absolute -right-10 scale-[0.6] md:right-4 md:scale-90 lg:top-0 lg:right-0">
          <HeroList />
        </div>

        <div className=" absolute top-[12.7rem] right-[13rem] scale-[0.55] md:top-[15.2rem] md:right-[22rem] md:scale-[0.8] lg:top-[16rem]">
          <HeroBookmark />
        </div>

        <div className="absolute top-44 right-[16rem] scale-75 md:top-52 md:right-[23.5rem] md:scale-100">
          <HeroButton />
        </div>
        <div className="absolute top-[11.3rem]  right-[21rem] scale-[0.6] md:top-52 md:right-[31rem] md:scale-75">
          <HeroToggleTwo />
        </div>
        <div className="absolute top-32 right-[16rem] scale-[0.6] md:right-[23.5rem] md:scale-75 lg:top-36">
          <HeroToggle />
        </div>
        <div className="absolute top-[17rem] -right-12 scale-[0.7] md:right-8 md:top-[21rem] md:scale-100 lg:top-[23rem] lg:right-0">
          <HeroMusic />
        </div>
        <div className="absolute top-[20rem] -right-36 scale-[0.6] md:top-[27rem] md:right-3 md:scale-90 lg:right-0 lg:top-[30rem]">
          <HeroSearch />
        </div>
        <div className="absolute top-[23rem] right-[10rem] scale-[0.6] md:top-[27.8rem] md:right-[28rem]  md:scale-90 lg:top-[30rem] lg:right-[30rem] ">
          <HeroNewsletter />
        </div>
        <div className="absolute top-[29rem] right-[10rem] scale-[0.6] md:top-[36rem] md:right-[28rem] md:scale-90 lg:top-[40rem] lg:right-[30rem]">
          <HeroCustomer />
        </div>
        <div className="absolute top-[36rem] -left-[9.8rem] scale-75 md:top-[44rem] md:left-[2.4rem] md:scale-90 lg:top-[43rem] lg:-left-[50rem]">
          <HeroNev />
        </div>
        <div className="absolute -left-[6.5rem] top-[43rem] scale-90 md:top-[49rem] md:left-[6.5rem] md:scale-100 lg:top-[38rem] lg:-left-[44rem]">
          <HeroDate />
        </div>
        <div className="absolute top-[36rem] -right-36 scale-[0.6] md:hidden md:scale-100 lg:right-0 lg:top-[55rem] lg:block">
          <HeroAccount />
        </div>
        <div className="absolute top-[50rem] right-[30rem] hidden lg:block">
          <HeroAssign />
        </div>
        <div className="absolute top-[50rem] left-40 hidden lg:-left-[43rem] lg:block">
          <HeroStateSwitch />
        </div>

        <div className="line absolute top-[49rem] -left-[53rem] hidden w-[54rem] lg:block"></div>

        <div className="line absolute top-[67.5rem] -left-[35rem] hidden w-[36rem] lg:block"></div>

        <div className="line absolute top-[41.5rem] -left-[53rem] hidden w-[25rem] lg:block"></div>
        <div className="line absolute top-[45.5rem] -left-[34rem] hidden w-[10.5rem] rotate-90 lg:block"></div>
        <div className="line absolute top-[44.5rem] -left-[57rem] hidden w-[11.5rem] rotate-90 lg:block"></div>
        <div className="line absolute top-[58.5rem] -left-[43rem] hidden w-[23rem] rotate-90 lg:block"></div>

        <div className="line absolute top-[58.5rem] right-[17.5rem] hidden w-[23rem] rotate-90 lg:block"></div>
        <div className="line absolute top-[55rem] -left-[51rem] hidden w-[14rem] rotate-90 lg:block"></div>
        <div className="line absolute top-[60rem] -left-[47rem] hidden w-[18rem] lg:block "></div>
        <div className="Green_bg"></div>
        <div className="Purple_bg absolute top-[20rem] left-[26rem]"></div>
      </div>
    </div>
  );
}
