import BG from "../../../../public/images/macOS-Ventura-Wallpaper-2.jpeg";
import { NextPage } from "next";
import { useNavContext } from "../../../components/nav/Navbar";
import { useEffect } from "react";
import { IndexAppDisplay } from "../../../components/ib-pages/IndexBoard";
import Image from "next/image";
import { ExperiencesSVG } from "../../../components/svgs/ib-cas/ExperiencesSVG";
import { ProfileSVG } from "../../../components/svgs/ib-cas/ProfileSVG";
import { ProjectsSVG } from "../../../components/svgs/ib-cas/ProjectsSVG";
import { ReflectionsSVG } from "../../../components/svgs/ib-cas/ReflectionsSVG";
import { AppleBGAttribution } from "../../../components/AppleBGAttribution";
import { pageMinHeight } from "./tok-journal/[month]";

const IBCASIndex: NextPage = () => {
  const { setNavTransparent } = useNavContext();

  useEffect(() => {
    setNavTransparent(true);
  }, [setNavTransparent]);

  return (
    <div className={`flex justify-center relative h-screen ${pageMinHeight}`}>
      <Image
        src={BG}
        alt=""
        fill
        className="z-0 object-cover blur brightness-[0.8]"
      />
      <AppleBGAttribution />
      <div className="w-screen z-10 relative flex flex-col items-center justify-evenly h-[80%]">
        <header className="relative mb-12 rounded-3xl backdrop-blur-lg bg-slate-800/50 w-[90%] sm:w-[70%] flex justify-center h-48 items-center">
          <h1 className="font-xl font-semibold">CAS Portfolio</h1>
        </header>
        <div className="flex w-[90%] sm:w-[70%] justify-between">
          <IndexAppDisplay
            title="Projects"
            icon={ProjectsSVG}
            bgColorClassName="bg-amber-500 hover:bg-amber-500/80"
            linkURL="/ib/cas/projects"
          />
          <IndexAppDisplay
            title="Experiences"
            icon={ExperiencesSVG}
            bgColorClassName="bg-emerald-500 hover:bg-emerald-500/80"
            linkURL="/ib/cas/experiences"
          />
          <IndexAppDisplay
            title="Profile"
            icon={ProfileSVG}
            bgColorClassName="bg-sky-400 hover:bg-sky-400/80"
            linkURL="/ib/cas/profile"
          />

          <IndexAppDisplay
            title="Reflections"
            icon={ReflectionsSVG}
            bgColorClassName="bg-fuchsia-400 hover:bg-fuchsia-400/80"
            linkURL={`/ib/cas/tok-journal/`}
          />
        </div>
      </div>
    </div>
  );
};

export default IBCASIndex;
