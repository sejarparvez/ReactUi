export default function () {
  return (
    <div className="flex flex-col p-6 gap-16 md:pl-10 pr-6 relative">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-600">Marketing</span>
          <button className="px-4 py-2 font-bold border rounded-lg">
            Get package
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <span className="font-bold text-2xl">$149</span>
          <span className="text-gray-600">plus local taxes</span>
        </div>
        <div className="text-gray-600">
          Heroes, feature sections, newsletter sign up forms — all of the
          components you need to build beautiful marketing websites.
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-600">Application UI</span>
          <button className="px-4 py-2 font-bold border rounded-lg">
            Get package
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <span className="font-bold text-2xl">$149</span>
          <span className="text-gray-600">plus local taxes</span>
        </div>
        <div className="text-gray-600">
          Form layouts, tables, modal dialogs — all of the components you need
          to build beautiful responsive web applications.
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-600">Ecommerce</span>
          <button className="px-4 py-2 font-bold border rounded-lg">
            Get package
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <span className="font-bold text-2xl">$149</span>
          <span className="text-gray-600">plus local taxes</span>
        </div>
        <div className="text-gray-600">
          Checkout forms, shopping carts, product views — all of the components
          you need to build your next ecommerce front-end.
        </div>
      </div>

      <div className="line absolute -top-4  md:-left-6 -left-12 w-[30rem] md:w-[43rem]"></div>
      <div className="line absolute top-[13.5rem] md:top-[12rem] -left-12 md:-left-6 w-[30rem] md:w-[43rem]"></div>
      <div className="line absolute top-[27.5rem] -left-12 md:top-[24.5rem] md:-left-6 w-[30rem]  md:w-[43rem]"></div>
      <div className="line absolute top-[41.5rem] md:top-[37rem] -left-12 w-[30rem]  md:-left-6 md:w-[43rem]"></div>
      <div className="line absolute top-[20rem] md:top-[19rem] rotate-90 -left-[25rem] md:-left-[22rem] w-[50rem] md:w-[45rem]"></div>
      <div className="line absolute top-[20rem] md:top-[19rem] rotate-90 -right-[24.8rem] md:-right-[22.8rem] lg:hidden md:w-[45rem] w-[50rem]"></div>
    </div>
  );
}
