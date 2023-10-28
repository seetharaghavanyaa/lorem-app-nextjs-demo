import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import type { FC } from "react";

interface SidebarProps {
  navs?: string[];
  setIsOpen: () => void;
  isOpen: boolean;
}

const Sidebar: FC<SidebarProps> = ({ navs = [], setIsOpen, isOpen }) => {
  return (
    <article
      className={`flex h-full items-center sm:hidden ${
        isOpen ? "block" : "hidden"
      } fixed top-10 bg-black w-full z-[2000] overflow-hidden`}
    >
      <nav className="mt-2 space-y-6 px-5 flex flex-col" onClick={setIsOpen}>
        {navs.map((item, index) => (
          <Link
            href={`#${item}`}
            className="text-lg uppercase text-white uppercase font-medium  hover:text-gray-200"
            key={index}
          >
            {item}
          </Link>
        ))}
        <div className="flex justify-between">
          <Link
            href="/more-info"
            className="text-white text-opacity-40 font-bold text-lg uppercase"
          >
            Lorem Ipsum
          </Link>
          <Link
            href="/faqs"
            className="text-white text-opacity-40 font-bold text-lg uppercase ml-[25px]"
          >
            comming soon
          </Link>
        </div>
      </nav>
      <div className="fixed bottom-0 w-full">
        <Marquee text="Lorem Ipsum" />
      </div>
    </article>
  );
};

export default Sidebar;
