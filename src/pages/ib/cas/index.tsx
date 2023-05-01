import { NextPage } from "next";
import { useNavContext } from "../../../components/nav/Navbar";
import { useEffect } from "react";
import { IndexBoard } from "../../../components/ib-pages/IndexBoard";
import { ExperiencesSVG } from "../../../components/svgs/ib-cas/ExperiencesSVG";
import { ProfileSVG } from "../../../components/svgs/ib-cas/ProfileSVG";
import { ProjectsSVG } from "../../../components/svgs/ib-cas/ProjectsSVG";

const ICON_SIZE = "w-32 h-32";

const IBCASIndex: NextPage = () => {
  const { setNavTransparent } = useNavContext();

  useEffect(() => {
    setNavTransparent(false);
  }, [setNavTransparent]);

  return (
    <div className="p-12">
      <header className="flex justify-center items-center"></header>
      <main>
        <div className="flex gap-2 w-full justify-center -space-x-10">
          <IndexBoard
            title="Profile"
            description="IB Profile"
            icon={<ProfileSVG className={ICON_SIZE} />}
            buttonColor="teal"
            defaultZIndexClass="z-30"
            linkURL="/ib/cas/profile"
          />
          <IndexBoard
            title="Experiences"
            description="IB Experiences"
            icon={<ExperiencesSVG className={ICON_SIZE} />}
            buttonColor="emerald"
            defaultZIndexClass="z-20"
            linkURL="/ib/cas/experiences"
          />
          <IndexBoard
            title="Projects"
            description="IB Projects"
            icon={<ProjectsSVG className={ICON_SIZE} />}
            buttonColor="sky"
            defaultZIndexClass="z-10"
            linkURL="/ib/cas/projects"
          />
        </div>
      </main>
    </div>
  );
};

export default IBCASIndex;
