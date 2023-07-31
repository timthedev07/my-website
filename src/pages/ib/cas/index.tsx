import BG from "../../../../public/images/macOS-Ventura-Wallpaper-2.jpeg";
import { NextPage } from "next";
import { useNavContext } from "../../../components/nav/Navbar";
import { useEffect } from "react";
import { IndexBoard } from "../../../components/ib-pages/IndexBoard";
import Image from "next/image";
import { ExperiencesSVG } from "../../../components/svgs/ib-cas/ExperiencesSVG";
import { ProfileSVG } from "../../../components/svgs/ib-cas/ProfileSVG";
import { ProjectsSVG } from "../../../components/svgs/ib-cas/ProjectsSVG";

const IBCASIndex: NextPage = () => {
  const { setNavTransparent } = useNavContext();

  useEffect(() => {
    setNavTransparent(false);
  }, [setNavTransparent]);

  return (
    <div className="flex justify-center relative h-screen">
      <Image src={BG} alt="" fill className="z-0 object-cover blur" />
      <div className="w-screen z-10 relative flex flex-col items-center justify-evenly h-[80%]">
        <header className="relative mb-12 rounded-3xl backdrop-blur-lg bg-slate-800/50 w-[70%] flex justify-center h-48 items-center">
          <h1 className="font-xl font-semibold">CAS Portfolio</h1>
        </header>
        <div className="flex w-[70%] justify-between">
          <IndexBoard
            title="Profile"
            icon={ProfileSVG}
            bgColorClassName="bg-cyan-500 hover:bg-cyan-600"
            linkURL="/ib/cas/profile"
          />
          <IndexBoard
            title="Experiences"
            icon={ExperiencesSVG}
            bgColorClassName="bg-emerald-500 hover:bg-emerald-600"
            linkURL="/ib/cas/experiences"
          />
          <IndexBoard
            title="Projects"
            icon={ProjectsSVG}
            bgColorClassName="bg-amber-500 hover:bg-amber-600"
            linkURL="/ib/cas/projects"
          />
        </div>
      </div>
    </div>
  );
};

export default IBCASIndex;
