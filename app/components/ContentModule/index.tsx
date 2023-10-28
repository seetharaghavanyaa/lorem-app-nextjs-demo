import { ComponentTypes, type ContentLayout } from "@/app/types/pages";
import AccordionComponent from "@/app/components/Accordion";
import HeroComponent from "@/app/components/Hero";
import MarqueeComponent from "@/app/components/Marquee";
import SectionGridContentComponent from "@/app/components/Content";
import { FC } from "react";

const ModulesMap = {
  [ComponentTypes.Accordion]: AccordionComponent,
  [ComponentTypes.Hero]: HeroComponent,
  [ComponentTypes.Marquee]: MarqueeComponent,
  [ComponentTypes.SectionGrid]: SectionGridContentComponent,
};

const ContentModule: FC<ContentLayout> = ({ itemType, items, anchor }) => {
  const DynamicModule = ModulesMap[itemType as ComponentTypes];
  if (!DynamicModule) {
    return;
  }
  return (
    <section id={anchor}>
      {/* any required since this is a dynamic module populated from content pages. */}
      <DynamicModule {...(items as any)} /> 
    </section>
  );
};

export default ContentModule;

