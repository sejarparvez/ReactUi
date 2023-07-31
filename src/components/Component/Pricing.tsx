import PriceHeading from "./PriceHeading";
import PricingLeft from "./PricingLeft";
import PricingRight from "./PricingRight";

export default function () {
  return (
    <div className="relative md:px-16 lg:px-0" id="pricing">
      <PriceHeading />
      <div className="flex flex-col-reverse lg:flex-row justify-between">
        <div className="mt-16 w-full lg:w-1/2">
          <PricingLeft />
        </div>
        <div className="lg:-mt-1 mt-16 w-full lg:w-1/2">
          <PricingRight />
        </div>
      </div>

      <div className="Blue_bg absolute -top-60 right-[27rem]"></div>
      <div className="Pink_bg absolute -top-40 right-44"></div>
      <div className="Blue_bg absolute -top-0 right-[40rem]"></div>
    </div>
  );
}
