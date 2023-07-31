import { FaArrowRight, FaCubes } from "react-icons/fa";
import { PiInfinity } from "react-icons/pi";
import { BiWindowAlt } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
export default function () {
  return (
    <div className="bg-white rounded-3xl border shadow-lg p-4 md:p-10">
      <div className="border-b pb-10">
        <div className="flex justify-between">
          <div className="text-cyan font-bold">Get with all-access</div>
          <button className="flex gap-1 items-center bg-black text-white px-4 py-2 rounded-lg">
            Get all-access <FaArrowRight />
          </button>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0 items-center">
          <div className="text-4xl font-bold">$299</div>
          <div className="flex flex-col">
            <div className="font-bold">one-time payment</div>
            <div className="text-gray-600">plus local taxes</div>
          </div>
        </div>
        <div className="text-gray-600 mt-6">
          Get lifetime access to all of the application UI, marketing, and
          ecommerce components, as well as all of our site templates for a
          single one-time purchase.
        </div>
      </div>
      <div>
        <div className="flex gap-8 leading-8 mt-10 flex-col">
          <div className="flex gap-4">
            <div>
              <FaCubes size={35} color="#0eafe9" />
            </div>
            <div>
              <span className="font-bold">Over 500+ components — </span>
              <span className="text-gray-600">
                everything you need to build beautiful application UIs,
                marketing sites, ecommerce stores and more.
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <BiWindowAlt size={35} color="#0eafe9" />
            </div>
            <div>
              <span className="font-bold">Every site templates — </span>
              <span className="text-gray-600">
                beautifully designed, expartly crafted website templates build
                with mordern technologys like React, Nextjs
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <PiInfinity color="#0eafe9" size={35} />
            </div>
            <div>
              <span className="font-bold">Lifetime access — </span>
              <span className="text-gray-600">
                get instant access to everything we have today, plus any new
                components and templates we add in the future.
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-10 md:p-10 p-4 bg-slate-200 rounded-lg">
          <div>
            <AiOutlineTeam size={30} />
          </div>
          <div>
            <span className="font-bold">Available for teams — </span>
            <span className="text-gray-600">
              get access to all of our components and templates plus any future
              updates for your entire team.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
