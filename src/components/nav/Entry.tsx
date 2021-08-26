import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

interface EntryProps {}

const BREAK_POINT = 300;

export const NavigationEntry: React.FC<EntryProps> = ({}) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const resizeHandler = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

  return windowWidth > BREAK_POINT ? <Navbar /> : <Sidebar />;
};
