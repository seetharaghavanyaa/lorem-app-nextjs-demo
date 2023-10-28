import { type Marquee } from "@/app/types/pages";
import Image from "next/image";
import { type FC } from "react";

const Marquee: FC<Marquee> = ({ text }) => (
  <header className="overflow-hidden flex relative h-12">
    <Image
      src={require("/public/assets/images/banner.png")}
      alt="marquee-banner-image"
      layout="fill"
    />
    <div className="animate-marquee whitespace-nowrap text-white py-2">
      {text.split("").map((_, relativeIndex) => (
        <span className="uppercase text-lg font-bold mx-4" key={relativeIndex}>
          {text}
        </span>
      ))}
    </div>
    <div className="animate-marquee2 absolute top-0 whitespace-nowrap text-white py-2">
      {text.split("").map((_, absoluteIndex) => (
        <span className="uppercase text-lg font-bold mx-4" key={absoluteIndex}>
          {text}
        </span>
      ))}
    </div>
  </header>
);

export default Marquee;
