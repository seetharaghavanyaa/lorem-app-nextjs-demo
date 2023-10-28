import Image from "next/image";
import { type FC } from "react"
import { Icon } from "../Icons";
import type { AccordionItemProps } from "@/app/types/pages";
import Container from "../Container";


const AccordionItem: FC<AccordionItemProps> = ({ title, description, onClick, isExpanded }) => (
    <article>
        <div className="relative cursor-pointer" onClick={onClick}>
            {isExpanded && (
                <Image src={'/assets/images/banner.png'} alt="background-image" layout="fill" className="w-screen" />
            )}
            <Container>
                <div className="flex justify-between items-center relative">
                    <p className="text-white uppercase lg:text-[1.5rem] md:text-[1rem] xs:text-[1rem] font-medium">
                        {title}
                    </p>
                    <button className="text-left text-white font-semibold focus:outline-none">
                        <Image alt="plus-icon" src={!isExpanded ? Icon.plus : Icon.minus} />
                    </button>
                </div>
            </Container>
        </div>
        <Container>
            <div className={`${isExpanded ? 'visible' : 'hidden'}`}>
                <p className="leading-7 mt-5 text-[#a1a1a1]">
                    {description}
                </p>
            </div>
        </Container>
    </article>
)

export default AccordionItem;