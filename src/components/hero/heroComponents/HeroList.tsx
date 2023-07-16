import Image from "next/image";
import img1 from "../../../img/img1.jpg";
import img2 from "../../../img/img2.jpg";
import img3 from "../../../img/img3.jpg";

export default function HeroList() {
  return (
    <div className="flex justify-between bg-white shadow-2xl border rounded-xl flex-col w-[22rem] text-sm">
      <div className="flex justify-between items-center border-b p-4">
        <div className="flex gap-4 items-center">
          <div>
            <Image src={img1} alt="" className="w-12 h-12 rounded-full" />
          </div>
          <div>
            <div>Lisa Smith</div>
            <div className="text-gray-600">@lisasmith</div>
          </div>
        </div>
        <button className="border px-2 py-1.5 rounded-md hover:bg-slate-50">
          view
        </button>
      </div>
      <div className="flex justify-between items-center border-b p-4">
        <div className="flex gap-4 items-center">
          <div>
            <Image src={img2} alt="" className="w-12 h-12 rounded-full" />
          </div>
          <div>
            <div>Natasha Swift</div>
            <div className="text-gray-600">@natashaswift</div>
          </div>
        </div>
        <button className="border px-2 py-1.5 rounded-md hover:bg-slate-50">
          view
        </button>
      </div>
      <div className="flex justify-between items-center border-b p-4">
        <div className="flex gap-4 items-center">
          <div>
            <Image src={img3} alt="" className="w-12 h-12 rounded-full" />
          </div>
          <div>
            <div>Chris Brook</div>
            <div className="text-gray-600">@chrisbrook</div>
          </div>
        </div>
        <button className="border px-2 py-1.5 rounded-md hover:bg-slate-50">
          view
        </button>
      </div>
      <button className=" items-center justify-center border flex mx-4 hover:bg-slate-50 p-2 my-6 ">
        view all
      </button>
    </div>
  );
}
