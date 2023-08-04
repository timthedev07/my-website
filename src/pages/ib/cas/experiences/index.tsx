import { NextPage } from "next";

// timeline style page; from newest to oldest
const ExperiencesIndex: NextPage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full fixed" id="experience-index"></div>
    </div>
  );
};

export default ExperiencesIndex;
