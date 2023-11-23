import { FC, ReactNode } from "react";
import { Stack } from "./Stack";
import Image from "next/image";
import {
  MDXAssetURL,
  SafeNumber,
  handleSrc,
} from "../blog-components/SizedImage";
import { getBlurDataURL } from "../../../utils/blurDataUrl";

interface ImageTextHStackProps {
  children: ReactNode;
  imgSrc: MDXAssetURL;
  width: SafeNumber;
  height: SafeNumber;
  imgAlt?: string;
  direction?: "text-img" | "img-text";
}

export const ImageTextHStack: FC<ImageTextHStackProps> = ({
  children,
  imgSrc,
  direction = "img-text",
  width,
  height,
  imgAlt = "image",
}) => {
  return (
    <Stack layout="H" reversed={direction === "text-img"}>
      <div className="relative flex-1">
        <Image
          src={handleSrc(imgSrc)}
          alt={imgAlt}
          placeholder="blur"
          width={width}
          height={height}
          blurDataURL={getBlurDataURL(width, height)}
          fill
          className="rounded-xl object-contain"
        />
      </div>
      {children}
    </Stack>
  );
};
