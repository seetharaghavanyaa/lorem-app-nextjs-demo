"use client";
import { FC, useCallback, useState } from "react";
import AccordionItem from "./AccordionItem";
import { AccordionProps } from "@/app/types/pages";
import Container from "../Container";

const Accordion: FC<AccordionProps> = ({
  openFirst = false,
  onlyActive = true,
  items,
  title,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(openFirst ? 0 : -1);
  const onToggle = useCallback(
    (index: number) => {
      if (index === activeIndex && onlyActive) {
        setActiveIndex(-1);
        return;
      }
      setActiveIndex(index);
    },
    [activeIndex]
  );
  return (
    <div className="mt-20 pb-36">
      <Container>
        <h2 className="mb-14 font-bold text-white lg:text-8xl text-3xl  dark:text-white uppercase">
          {title}
        </h2>
      </Container>
      <div className="flex flex-col gap-y-12">
        {items.map((item, index) => (
          <AccordionItem
            key={`accordion-line-item-${index}`}
            {...item}
            onClick={() => onToggle(index)}
            isExpanded={activeIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
