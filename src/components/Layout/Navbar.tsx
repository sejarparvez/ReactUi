import { FaArrowRight, FaUikit } from "react-icons/fa";
import Menu from "./Menu";
import Search from "./Search";

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="relative flex h-20 items-center justify-between px-4 lg:px-12">
        <a href="/" className="flex items-center gap-2 text-2xl font-medium">
          <FaUikit color="#0eafe9" />
          ReactUi
        </a>
        <div className="hidden items-center gap-10 font-semibold lg:flex">
          <a href="/components">Components</a>
          <a href="/blog">Blog</a>
          <a href="/documentation">Documentation</a>
          <Search />
          <span className="text-gray-400">|</span>
          <span>Sign in</span>
          <button className="flex items-center gap-1 rounded-lg bg-black px-4 py-2 text-white">
            Get full_access <FaArrowRight />
          </button>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <Search />
          <Menu />
        </div>
        <div className="Blue_bg absolute -top-60 right-0"></div>
        <div className="Pink_bg absolute -top-40 right-44"></div>
        <div className="Blue_bg absolute -top-0 right-[40rem]"></div>
      </div>

      <hr className="mx-auto w-[96%]" />
    </div>
  );
};

export default Navbar;
