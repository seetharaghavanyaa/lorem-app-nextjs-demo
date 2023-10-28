import { SectionGridContent } from "@/app/types/pages";
import { FC, useMemo } from "react";
import Item from "@/app/components/SectionGridItem";
import Container from "@/app/components/Container";

const SectionGridContent: FC<SectionGridContent> = ({ title, items }) => {
  const renderItems = useMemo(
    () =>
      items.map((item, index) => (
        <Item {...item} key={`content-page-${index}`} />
      )),
    [items]
  );
  return (
    <Container className="mt-20 lg:mt-20 mb-36">
      <h2 className="mb-7 lg:mb-14 font-bold text-white lg:text-8xl text-3xl  dark:text-white uppercase">
        {title}
      </h2>
      <div className="flex flex-row flex-wrap gap-y-4">{renderItems}</div>
    </Container>
  );
};

export default SectionGridContent;
