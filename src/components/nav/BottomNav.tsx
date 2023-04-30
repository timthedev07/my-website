import React from "react";
import { NAV_LINKS } from "./NavData";
import Link from "next/link";
import { BOTTOM_NAV_ICON_MAP } from "../svgs/bottom-nav/iconmap";
import { NAV_Z_INDEX_CLASS } from "./Navbar";

export const BottomNav: React.FC = ({}) => {
  return (
    <ul
      className={`py-5 w-full ${NAV_Z_INDEX_CLASS} flex justify-around items-center fixed bottom-0 bg-inherit`}
    >
      {NAV_LINKS.map(({ name, href }) => {
        const Icon = BOTTOM_NAV_ICON_MAP[name];

        return (
          <Link passHref key={name} href={href}>
            <li className="select-none cursor-pointer">
              {<Icon alt={name} className="w-8 h-8" />}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
