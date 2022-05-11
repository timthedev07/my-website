import { NextPage } from "next";
import { useEffect } from "react";
import { useNavContext } from "../components/nav/Navbar";

const About: NextPage = () => {

  const {setNavTransparent} = useNavContext();

  useEffect(() => {
    setNavTransparent(false);
  }, []);  

  return (
    <div>
      There is nothing about me.
      Thanks for your attention.
    </div>
  )
};

export default About;