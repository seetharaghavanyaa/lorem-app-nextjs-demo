import Image from "next/image";
import Container from "../Container";
import type { FC } from "react";
import type { Hero } from "@/app/types/pages";

const Hero: FC<Hero> = ({
  title,
  bgImage = "",
  avatarImage = "",
  description,
}) => (
  <section className="h-[450px] hidden lg:block group relative mt-20 mb-36">
    {bgImage && (
      <Image
        alt="background hero image"
        src={bgImage}
        layout="fill"
        objectFit="cover"
        className="hidden group-hover:block"
      />
    )}
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 transition-all items-center">
        <div className="relative">
          <h1 className="mb-4 font-bold tracking-tight text-[96px] text-white uppercase leading-none">
            {title.split(" ")?.[0]} <br />
            {title.split(" ").slice(1)?.join(" ")}
          </h1>
          <p className="leading-8 text-white opacity-70">Lorem</p>
          <p className="leading-8 text-white opacity-70">Lorem</p>
          {avatarImage && (
            <div className="w-[330px] h-[330px] absolute top-24 left-48  group-hover:hidden">
              <Image
                alt="hero avatar image"
                className="rounded-full"
                src={avatarImage}
                layout="fill"
              />
            </div>
          )}
        </div>
        <p className="leading-8 text-white opacity-70">{description}</p>
      </div>
    </Container>
  </section>
);

export default Hero;
