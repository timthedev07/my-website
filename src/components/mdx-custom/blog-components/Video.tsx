import { FC } from "react";
import { MDXAssetURL, handleSrc } from "./SizedImage";

interface VideoProps {
  src: MDXAssetURL;
  width: string | number;
  height: string | number;
}

export const Video: FC<VideoProps> = ({ src, ...props }) => {
  return (
    <video className="mx-auto rounded-lg" {...props} controls>
      <source src={handleSrc(src)} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
