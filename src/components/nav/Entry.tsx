import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

const BREAK_POINT = 300;

export const NavigationEntry: React.FC = ({}) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const resizeHandler = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return windowWidth > BREAK_POINT ? <Navbar /> : <Sidebar />;
};
