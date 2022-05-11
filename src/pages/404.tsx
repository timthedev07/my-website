import type { NextPage } from "next";
import { useEffect } from "react";
import { useNavContext } from "../components/nav/Navbar";

const NotFound: NextPage = () => {
  const {setNavTransparent} = useNavContext();

  useEffect(() => {
    setNavTransparent(false);
  }, [])

  return <div>404</div>;
};

export default NotFound;
