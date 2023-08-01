import Link from "next/link";
import { FC } from "react";

interface IndexAppDisplayProps {
  title: string;
  icon: any;
  linkURL: string;
  bgColorClassName: string;
}

export const IndexAppDisplay: FC<IndexAppDisplayProps> = ({
  title,
  icon,
  bgColorClassName,
  linkURL,
}) => {
  const I = icon;
  return (
    <article className="flex-col flex items-center gap-2 cursor-pointer">
      <Link href={linkURL}>
        <div
          className={`transition duration-900 ${bgColorClassName} shadow-2xl w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl flex justify-center items-center`}
        >
          <I className="w-12 h-12 md:w-16 md:h-16 opacity-100" />
        </div>
      </Link>
      <span className="font-semibold text-center md:text-lg md:font-bold">
        {title}
      </span>
    </article>
  );
};