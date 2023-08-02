import {
  FC,
  useEffect,
  useState,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import Link from "next/link";
import { NavbarItemProps, NAV_LINKS } from "./NavData";
import { BottomNav } from "./BottomNav";

interface NavContextType {
  navTransparent: boolean;
  setNavTransparent: Dispatch<SetStateAction<boolean>>;
  windowSize?: number;
}

export const NAV_Z_INDEX_CLASS = "z-[100]";

const BREAK_POINT = 600;

const NavContext = createContext<NavContextType>({
  navTransparent: false,
  setNavTransparent: () => {},
  windowSize: typeof window !== "undefined" ? window.innerWidth : undefined,
});

export const useNavContext = () => {
  return useContext(NavContext);
};

export const NavProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [windowSize, setWindowSize] = useState<number>(1000000);
  const [navTransparent, setNavTransparent] = useState<boolean>(true);

  useEffect(() => {
    setWindowSize(window.innerWidth);
    const resizeHandler = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    const handler = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const value: NavContextType = {
    navTransparent,
    setNavTransparent,
    windowSize,
  };

  return (
    <NavContext.Provider value={value}>
      {windowSize > BREAK_POINT ? (
        <div
          className={`top-0 w-full ${
            !navTransparent
              ? "bg-black" + " sticky"
              : (scrollY > 100 ? "bg-black" : "bg-transparent") + " fixed"
          } ${NAV_Z_INDEX_CLASS} h-14 flex justify-between items-center gap-5 px-8`}
        >
          <div className="flex justify-start items-center w-[40%] gap-5">
            {NAV_LINKS.slice(0, -1).map((navLink) => {
              return (
                <NavbarItem
                  key={navLink.name}
                  {...navLink}
                  className="select-none"
                />
              );
            })}
          </div>
          <NavbarItem {...NAV_LINKS[NAV_LINKS.length - 1]} className="" />
        </div>
      ) : null}
      <div className={`${windowSize <= BREAK_POINT ? "pb-24" : ""}`}>
        {children}
      </div>
      {/* <div
        className={`${
           ? "block" : "hidden"
        } bg-transparent h-24 w-full`}
      ></div> */}
      {windowSize <= BREAK_POINT ? <BottomNav /> : null}
    </NavContext.Provider>
  );
};

const NavbarItem: FC<NavbarItemProps> = ({ name, href, className = "" }) => {
  return (
    <Link href={href} passHref={true}>
      <span
        className={`cursor-pointer nav-item uppercase transition duration-300 ease-in-out text-gray-300 hover:text-gray-100 ${className}`}
      >
        {name}
      </span>
    </Link>
  );
};
