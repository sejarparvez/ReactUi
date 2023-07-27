import Image from "next/image";
import img1 from "../../../img/img1.jpg";
import img2 from "../../../img/img2.jpg";
import img3 from "../../../img/img3.jpg";

export default function HeroList() {
  return (
    <div className="w-[22rem] flex-col justify-between rounded-xl border bg-white text-sm shadow-2xl md:flex">
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center gap-4">
          <div>
            <Image src={img1} alt="" className="h-12 w-12 rounded-full" />
          </div>
          <div>
            <div>Lisa Smith</div>
            <div className="text-gray-600">@lisasmith</div>
          </div>
        </div>
        <button className="rounded-md border px-2 py-1.5 hover:bg-slate-50">
          view
        </button>
      </div>
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center gap-4">
          <div>
            <Image src={img2} alt="" className="h-12 w-12 rounded-full" />
          </div>
          <div>
            <div>Natasha Swift</div>
            <div className="text-gray-600">@natashaswift</div>
          </div>
        </div>
        <button className="rounded-md border px-2 py-1.5 hover:bg-slate-50">
          view
        </button>
      </div>
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center gap-4">
          <div>
            <Image src={img3} alt="" className="h-12 w-12 rounded-full" />
          </div>
          <div>
            <div>Chris Brook</div>
            <div className="text-gray-600">@chrisbrook</div>
          </div>
        </div>
        <button className="rounded-md border px-2 py-1.5 hover:bg-slate-50">
          view
        </button>
      </div>
      <button className=" mx-4 my-6 flex items-center justify-center border p-2 hover:bg-slate-50 ">
        view all
      </button>
    </div>
  );
}
