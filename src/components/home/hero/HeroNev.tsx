import { BiCubeAlt } from "react-icons/bi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaBars, FaGithub } from "react-icons/fa";
import { HiOutlineSun } from "react-icons/hi";

export default function HeroNev() {
  return (
    <div className="bg-white flex items-center justify-between shadow-lg w-80  p-4 rounded-lg text-sm">
      <div className="flex gap-6 items-center">
        <FaBars size={20} />
        <BiCubeAlt color="#4f46e5" size={38} />
      </div>
      <div className="flex items-center gap-6">
        <span className="h-8 w-8 flex items-center justify-center bg-slate-100 rounded-md">
          <HiOutlineSun />
        </span>
        <span className="flex items-center gap-2">
          v3.0
          <span className="mt-2">
            <BsFillCaretDownFill color="gray" size={10} />
          </span>
        </span>
        <FaGithub size={24} />
      </div>
    </div>
  );
}
