import Image from "next/image";
import { FC } from "react";
import { getBlurDataURL } from "../../../utils/blurDataUrl";

export type SafeNumber = number | `${number}`;

export const DEFAULT_IMG_HOST =
  "https://raw.githubusercontent.com/timthedev07/my-website/dev/assets";

interface SizedImageProps {
  width: SafeNumber;
  height: SafeNumber;
  src: string | { host?: string; dir: string; fname: string };
  alt?: string;
  quality: number;
}

export const SizedImage: FC<SizedImageProps> = ({
  alt = "",
  src,
  ...props
}) => {
  return (
    <Image
      {...props}
      src={
        typeof src === "string"
          ? src
          : `${src.host || DEFAULT_IMG_HOST}/${src.dir}/${src.fname}`
      }
      alt={alt}
      placeholder="blur"
      blurDataURL={getBlurDataURL(props.width, props.height)}
      className="mx-auto rounded-xl"
    />
  );
};
