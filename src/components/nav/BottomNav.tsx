import React from "react";
import { NAV_LINKS } from "./Navbar";
import Link from "next/link";

export const BottomNav: React.FC = ({}) => {
  return (
    <ul className="py-5 w-full flex justify-around items-center">
      {NAV_LINKS.map(({ name, href }) => (
        <Link key={name} href={href}>
          <a>
            <li>
              <img
                className="w-10 h-10"
                src={`/images/bottomnav/${name}.svg`}
                alt=""
              />
            </li>
          </a>
        </Link>
      ))}
    </ul>
  );
};
