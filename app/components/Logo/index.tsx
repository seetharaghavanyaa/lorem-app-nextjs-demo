"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href="/" className="flex flex-row gap-x-[5px] py-[12.5px]">
    <Image
      src={"/assets/icons/logo.svg"}
      alt="logo"
      className="mr-2"
      width={35}
      height={30}
    />
    <p className="px-2 text-[16px] font-semibold w-full text-white">Lorem</p>
  </Link>
);

export default Logo;
