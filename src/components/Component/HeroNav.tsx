export default function HeroNav() {
  return (
    <div className="flex overflow-x-scroll gap-8 md:justify-between font-bold border-y py-5 bg-white mt-10">
      <div className="flex gap-8 items-center [&>*]:cursor-pointer">
        <div>Marketing</div>
        <div>Application_UI</div>
        <div>Ecommerce</div>
      </div>
      <div className="flex gap-8 items-center [&>*]:cursor-pointer">
        <div>Pricing</div>
        <div>FAQs</div>
      </div>
    </div>
  );
}
