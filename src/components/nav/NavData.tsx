export interface NavbarItemProps {
  name: string;
  href: string;
  className?: string;
}
export const NAV_LINKS: NavbarItemProps[] = [
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
  {
    href: "/contact",
    name: "contact",
  },
];
