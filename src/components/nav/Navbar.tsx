import { FC } from "react";
import Link from "next/link";

interface NavbarItemProps {
  name: string;
  href: string;
}

const NavbarItem: FC<NavbarItemProps> = ({ name, href }) => {
  return (
    <Link href={href} passHref={true}>
      <a className="nav-item uppercase text-gray-800 transition duration-300 ease-in-out dark:text-gray-50 dark:hover:text-gray-300">
        {name}
      </a>
    </Link>
  );
};

export const NAV_LINKS: NavbarItemProps[] = [
  {
    href: "/contact",
    name: "contact",
  },
  {
    href: "/",
    name: "home",
  },
  {
    href: "/about",
    name: "about",
  },
  {
    href: "/projects",
    name: "projects",
  },
  {
    href: "/blog",
    name: "blog",
  },
];

export const Navbar: FC = ({}) => {
  return (
    <div
      className={`fixed w-full bg-gray-200 dark:bg-black h-12 flex justify-around items-center`}
    >
      <Link href="/">
        <div className="nav-item w-auto h-7 cursor-pointer">
          <img className="w-full h-full" src="/images/timthedev07.svg" alt="" />
        </div>
      </Link>

      {NAV_LINKS.slice(1).map((navLink) => {
        return <NavbarItem key={navLink.name} {...navLink} />;
      })}
    </div>
  );
};
