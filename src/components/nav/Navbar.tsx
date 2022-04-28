import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { NavbarItemProps, NAV_LINKS } from "./NavData";

const NavbarItem: FC<NavbarItemProps> = ({ name, href, className = "" }) => {
  return (
    <Link href={href} passHref={true}>
      <a
        className={`nav-item uppercase transition duration-300 ease-in-out text-gray-300 hover:text-gray-100 ${className}`}
      >
        {name}
      </a>
    </Link>
  );
};

export const Navbar: FC = ({}) => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handler = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 w-full ${
        scrollY > 100 ? "bg-gray-900" : "bg-transparent"
      } z-50 h-14 flex justify-between items-center gap-5 px-8`}
    >
      <div className="flex justify-start items-center w-[40%] gap-5">
        {NAV_LINKS.slice(0, -1).map((navLink) => {
          return <NavbarItem key={navLink.name} {...navLink} className="" />;
        })}
      </div>
      <NavbarItem {...NAV_LINKS.at(-1)!} className="" />
    </div>
  );
};
