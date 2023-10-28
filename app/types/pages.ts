import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export enum Orientation {
  ROW = "row",
  COLUMN = "column",
  ROW_REVERSE = "row-reverse",
  COLUMN_REVERSE = "column-reverse",
}

export enum ComponentTypes {
  SectionGrid = "Section Grid",
  Marquee = "Marquee",
  Hero = "Hero",
  Accordion = "Accordion",
}

export interface SectionGridItem {
  title: string;
  description: string;
  image?: string;
  orientation?: Orientation;
  Icon: StaticImport;
}

export interface SectionGridContent {
  title: string;
  items: SectionGridItem[];
}

export interface Hero {
  title: string;
  bgImage?: string;
  avatarImage?: string;
  description?: string;
}

export interface Marquee {
  text: string;
}

export interface AccordionItem {
  title: string;
  description: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  title: string;
  openFirst?: boolean;
  onlyActive?: boolean;
}

export interface AccordionItemProps extends AccordionItem {
  isExpanded: boolean;
  onClick: () => void;
}

export interface ContentLayout {
  itemType: ComponentTypes;
  items: SectionGridContent | Marquee | AccordionItem | Hero;
  anchor: string;
}

export interface PageContent {
  collections: ContentLayout[];
}
