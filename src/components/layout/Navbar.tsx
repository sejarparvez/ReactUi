import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { FaUikit } from "react-icons/fa";
import { Button } from "../ui/button";
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
        <div className="hidden items-center gap-6 lg:flex">
          <Button variant="ghost">
            <Link href="/components" className="font-semibold">
              Components
            </Link>
          </Button>
          <Button variant="ghost">
            <Link href="/blog" className="font-semibold">
              Blog
            </Link>
          </Button>
          <Button variant="ghost">
            <Link href="/components" className="font-semibold">
              Documentation
            </Link>
          </Button>

          <Search />
          <span className="text-gray-400">|</span>
          <Button variant="ghost">
            <Link href="/components" className="font-semibold">
              Sign In
            </Link>
          </Button>
          <Button size="lg">
            <Link href="/premium" className="flex items-center gap-1">
              Get full access <BsArrowRightShort size={25} />
            </Link>
          </Button>
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
