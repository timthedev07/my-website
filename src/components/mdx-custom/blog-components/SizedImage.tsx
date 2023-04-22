import Image from "next/image";
import { FC } from "react";
import { blurDataUrl } from "../../../utils/blurDataUrl";

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
      blurDataURL={blurDataUrl}
      className="mx-auto rounded-xl"
    />
  );
};
