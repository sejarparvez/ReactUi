import { AiOutlineCopyright } from "react-icons/ai";
import { FaUikit } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <hr className="mx-auto w-[96%]" />
      <div className="flex items-center justify-center py-10 flex-col gap-6">
        <div className="flex gap-2 items-center text-2xl font-semibold">
          <FaUikit color="#0eafe9" /> ReactUi
        </div>
        <div className="flex gap-2 items-center text-gray-500">
          <AiOutlineCopyright />
          {currentYear} ReactUi. All rights reserved
        </div>
        <div className="flex items-center gap-10 mt-6 font-semibold">
          <div>Privacy Policy</div>
          <div>Changelog</div>
        </div>
      </div>
    </div>
  );
}
