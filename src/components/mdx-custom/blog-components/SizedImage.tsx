import Image from "next/image";
import { FC } from "react";
import { getBlurDataURL } from "../../../utils/blurDataUrl";

export type SafeNumber = number | `${number}`;

interface SizedImageProps {
  width: SafeNumber;
  height: SafeNumber;
  src: string;
  alt?: string;
}

export const SizedImage: FC<SizedImageProps> = ({ alt = "", ...props }) => {
  return (
    <Image
      {...props}
      alt={alt}
      placeholder="blur"
      blurDataURL={getBlurDataURL(props.width, props.height)}
      className="mx-auto rounded-xl"
    />
  );
};
