import { FC, useEffect, useState } from "react";
import Link from "next/link";

interface NavbarItemProps {
  name: string;
  href: string;
}

const NavbarItem: FC<NavbarItemProps> = ({ name, href }) => {
  return (
    <Link href={href} passHref={true}>
      <a className="nav-item uppercase text-gray-800 transition duration-300 ease-in-out dark:text-gray-300 dark:hover:text-gray-100">
        {name}
      </a>
    </Link>
  );
};

export const NAV_LINKS: NavbarItemProps[] = [
  {
    href: "/about",
    name: "about",
  },
  {
    href: "/projects",
    name: "projects",
  },
  {
    href: "/contact",
    name: "contact me",
  },
  {
    href: "/blog",
    name: "blog",
  },
];

export const Navbar: FC = ({}) => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handler = () => {
      console.log(window.scrollY);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full ${
        scrollY > 100 ? "bg-gray-900" : "bg-transparent"
      } z-50 h-12 flex justify-around items-center`}
    >
      <Link href="/">
        <div className="nav-item w-auto h-7 cursor-pointer">
          <img className="w-full h-full" src="/images/timthedev07.svg" alt="" />
        </div>
      </Link>

      {NAV_LINKS.map((navLink) => {
        return <NavbarItem key={navLink.name} {...navLink} />;
      })}
    </div>
  );
};
