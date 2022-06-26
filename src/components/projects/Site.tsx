import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { WithStarCount } from "../../pages/projects";
import { TagList } from "../TagList";

export const Site: FC<WithStarCount & { ss?: string }> = ({
  githubRepo,
  name,
  stars,
  url,
  topics,
  description,
  ss,
}) => {
  return (
    <div className="p-4 rounded-md border border-slate-400/40 w-80 md:w-[556px] h-[416px] bg-slate-400/20">
      <div className="w-full h-[70%] relative rounded-md overflow-hidden">
        <Link href={url} passHref>
          <Image
            layout="fill"
            alt="screenshot"
            objectFit="cover"
            objectPosition={"top center"}
            src={`data:image/jpeg;base64,${ss}`}
          />
        </Link>
      </div>
      <h3 className="font-bold">{name}</h3>
      <p>{description}</p>
      <TagList tagContents={topics} className="overflow-x-auto" />
    </div>
  );
};
