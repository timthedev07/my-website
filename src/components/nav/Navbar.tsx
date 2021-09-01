import { FC } from "react";
import Link from "next/link";

interface NavbarItemProps {
  name: string;
  href: string;
}

const NavbarItem: FC<NavbarItemProps> = ({ name, href }) => {
  return (
    <Link href={href} passHref={true}>
      <a className="uppercase text-gray-800 transition duration-300 ease-in-out dark:text-gray-50 dark:hover:text-gray-300">
        {name}
      </a>
    </Link>
  );
};

const NAV_LINKS: NavbarItemProps[] = [
  {
    href: "/contact",
    name: "contact",
  },
];

export const Navbar: FC = ({}) => {
  return (
    <div className="dark:bg-black h-10 flex justify-around items-center">
      {NAV_LINKS.map((navLink) => {
        return <NavbarItem {...navLink} />;
      })}
    </div>
  );
};
