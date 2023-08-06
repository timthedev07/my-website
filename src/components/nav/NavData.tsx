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
  // {
  //   href: "/projects",
  //   name: "projects",
  // },
  {
    href: "/blog",
    name: "blog",
  },
  {
    href: "/ib/cas",
    name: "ib-cas",
  },
  {
    href: "/contact",
    name: "contact",
  },
];
