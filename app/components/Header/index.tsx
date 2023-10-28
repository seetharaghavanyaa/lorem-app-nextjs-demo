"use client";
import Image from "next/image";
import Logo from "@/app/components/Logo";
import { Icon } from "@/app/components/Icons";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navs = ["landing", "about-us", "more-info"];
  return (
    <>
      <header className="flex flex-row py-[5px] fixed w-full bg-black z-20 top-0 justify-between px-[10px] pr-[35px]">
        <Logo />
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image src={!isOpen ? Icon.menu : Icon.close} height={20} width={20} alt="burger-icon" />
        </button>
      </header>
      <Sidebar setIsOpen={() => setIsOpen(!isOpen)} isOpen={isOpen} navs={navs} />
    </>
  );
};

export default Header;
