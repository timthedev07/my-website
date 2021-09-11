import React from "react";
import { NAV_LINKS } from "./Navbar";
import Link from "next/link";

export const BottomNav: React.FC = ({}) => {
  return (
    <ul className="py-5 w-full flex justify-around items-center fixed bottom-0 bg-dark-bg">
      {NAV_LINKS.map(({ name, href }) => (
        <Link key={name} href={href}>
          <a>
            <li>
              <img
                className="w-8 h-8"
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
