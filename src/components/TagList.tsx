import { FC } from "react";

interface TagListProps {
  tagContents: string[];
  className?: string;
}

const tagColors = [
  "bg-yellow-600",
  "bg-emerald-600",
  "bg-violet-600",
  "bg-cyan-600",
  "bg-orange-600",
  "bg-rose-600",
  "bg-slate-500",
];

export const TagList: FC<TagListProps> = ({ tagContents, className = "" }) => {
  return (
    <ul className={`flex gap-3 ${className} flex-wrap`}>
      {tagContents.map((tag, ind) => (
        <li
          key={tag}
          className={`whitespace-nowrap font-semibold text-sm w-max rounded-md px-2 py-1 ${tagColors[ind]}`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};
