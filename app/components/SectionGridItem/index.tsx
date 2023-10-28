import { type SectionGridItem, Orientation } from "@/app/types/pages";
import Image from "next/image";
import type { FC } from "react";

const ROW_ORIENTATION =
  "flex flex-col lg:flex-row sm:px-3 items-end gap-x-2 basis-full justify-end";
const COLUMN_ORIENTATION =
  "flex  basis-full sm:basis-1/2 lg:basis-1/3  flex-col sm:px-3";

const Item: FC<SectionGridItem> = ({
  title,
  description,
  image,
  orientation = Orientation.COLUMN,
  Icon,
}) => (
  <div
    className={`${
      orientation === Orientation.ROW ? ROW_ORIENTATION : COLUMN_ORIENTATION
    }`}
  >
    {image && (
      <Image
        alt={`${title} image`}
        src={image}
        width="500"
        height="500"
        className={`mt-4 mr-2 mb-8 ${
          orientation === Orientation.ROW ? "lg:basis-1/3" : ""
        }`}
      />
    )}
    <div
      className={`flex flex-col self-start ${
        orientation === Orientation.ROW ? "basis-1/3 " : ""
      }`}
    >
      <h1 className="font-bold text-[1.5rem] lg:leading-[0.75rem] text-white uppercase mt-5">
        {title}
      </h1>
      <p className="text-base leading-8 text-white opacity-70 mt-1">
        {description}
      </p>
      <div className="mt-4.5">
        <Image
          alt={`${title} footer icon`}
          src={Icon}
          width="20"
          height="20"
          className="mt-8"
        />
      </div>
    </div>
  </div>
);

export default Item;
