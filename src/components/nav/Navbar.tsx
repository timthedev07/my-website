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
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

interface NavContextType {
  navTransparent: boolean;
  setNavTransparent: Dispatch<SetStateAction<boolean>>;
  windowSize?: number;
}

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
  const { data: session } = useSession();
  const { asPath } = useRouter();
  const [windowSize, setWindowSize] = useState<number>(0);
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
              ? (scrollY > 100 ? "bg-transparent" : "bg-gray-900") + " sticky"
              : (scrollY > 100 ? "bg-gray-900" : "bg-transparent") + " fixed"
          } z-50 h-14 flex justify-between items-center gap-5 px-8`}
        >
          <div className="flex justify-start items-center w-[40%] gap-5">
            {NAV_LINKS.map((navLink) => {
              return (
                <NavbarItem
                  key={navLink.name}
                  {...navLink}
                  className="select-none"
                />
              );
            })}
          </div>
          {session && session.user ? (
            session.user.image ? (
              <Image
                src={session.user.image}
                alt=""
                onClick={() => {
                  if (confirm("Are you sure to sign out?"))
                    signOut({ callbackUrl: asPath });
                }}
                width="48px"
                height="48px"
              />
            ) : (
              <>
                <span
                  onClick={() => {
                    if (confirm("Are you sure to sign out?"))
                      signOut({ callbackUrl: asPath });
                  }}
                  className="cursor-pointer transition duration-300 ease-in-out text-gray-300 hover:text-gray-100"
                >
                  {session.user.name}
                </span>
              </>
            )
          ) : (
            <NavbarItem href="/auth/signin" name="sign in" className="" />
          )}
        </div>
      ) : null}
      {children}
      <div
        className={`${
          windowSize <= BREAK_POINT ? "block" : "hidden"
        } bg-transparent h-5`}
      ></div>
      {windowSize <= BREAK_POINT ? <BottomNav /> : null}
    </NavContext.Provider>
  );
};

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
