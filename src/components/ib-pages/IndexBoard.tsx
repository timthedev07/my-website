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
          className={`transition duration-900 ${bgColorClassName} shadow-2xl w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-2xl lg:rounded-3xl flex justify-center items-center`}
        >
          <I className="w-9 h-9 md:w-12 md:h-12 lg:w-16 lg:h-16 opacity-100" />
        </div>
      </Link>
      <span className="font-semibold text-center md:text-lg md:font-bold">
        {title}
      </span>
    </article>
  );
};
