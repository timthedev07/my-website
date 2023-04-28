import { NextPage } from "next";
import { useNavContext } from "../../../components/nav/Navbar";
import { useEffect } from "react";

const IBCASIndex: NextPage = () => {
  const { setNavTransparent } = useNavContext();

  useEffect(() => {
    setNavTransparent(false);
  }, [setNavTransparent]);

  return (
    <>
      <header className="flex justify-center items-center h-[80vh]"><h1 className="text-center">Coming up...</h1></header>
      <main></main>
    </>
  );
};

export default IBCASIndex;
