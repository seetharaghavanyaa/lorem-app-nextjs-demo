import {
  ComponentTypes,
  type ContentLayout,
  type PageContent,
} from "@/app/types/pages";
import { FirstGridInfo } from "@/app/data/components/FirstGridLayout";
import { AboutHero } from "@/app/data/components/AboutHero";
import { IndexMarquee } from "@/app/data/components/IndexMarquee";
import { SecondGridLayout } from "@/app/data/components/SecondGridLayout";
import { IndexAccordion } from "@/app/data/components/IndexAccordtion";

export const HomePageContent: PageContent = {
  collections: [
    {
      itemType: ComponentTypes.SectionGrid,
      items: {
        title: "Lorem Ipsum",
        items: FirstGridInfo,
      },
      anchor: 'landing',
    },
    {
      itemType: ComponentTypes.Hero,
      items: AboutHero,
      anchor: 'about-us',
    },
    {
      itemType: ComponentTypes.Marquee,
      items: IndexMarquee,
      anchor: 'marquee',
    },
    {
      itemType: ComponentTypes.SectionGrid,
      items: {
        title: "Lorem Ipsum Dolor Set",
        items: SecondGridLayout,
      },
      anchor: 'more-info'
    },
    {
      itemType: ComponentTypes.Accordion,
      items: IndexAccordion,
      anchor: 'faqs',
    },
  ],
};

