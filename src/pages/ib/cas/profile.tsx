import { NextPage } from "next";
import { ProfileBGSVG } from "../../../components/svgs/ib-cas/ProfileBG";
import Link from "next/link";

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <p className="text-base font-normal leading-7">{children}</p>;
};

const Profile: NextPage = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col items-center">
      <div className="fixed z-0 blur-sm">
        <ProfileBGSVG className="h-[150vh] landscape:w-screen landscape:h-auto object-cover brightness-[0.5] blur-sm" />
      </div>
      <div className="relative z-10 pt-32 w-10/12 md:w-1/2 flex flex-col gap-8">
        <header className="relative z-10 w-full text-center font-semibold">
          <h1>My IB CAS Profile</h1>
        </header>
        <div className="flex flex-col gap-8">
          <Paragraph>
            As an IB learner, I am aiming to take advantage of the opportunities
            created by the CAS program and apply my knowledge, interest, and
            passion in <b>programming</b> and <b>mathematics</b> wherever
            suitable that is within the range of my skills, and this includes
            benefiting the community to bring ease and joy to people associated
            with us, which may be achieved through actions such as ethical
            initiatives by myself or colleagues that require the presence of my
            skills to accomplish a certain target that enriches ourselves and
            enhances our community.
          </Paragraph>

          <Paragraph>
            Aside from that, I am always looking forward to use the experience
            and expertise gained during this challenging but doable CAS program
            in my future career, and hence I would concentrate more on
            extracurricular tasks that not only cover the three strands, but
            also directly involve the competence and comfort that I developed in
            certain areas earlier, namely programming, and if you like,
            mathematics.
          </Paragraph>

          <p className="text-base font-normal leading-7">
            For more information, visit my{" "}
            <Link className="decorated-link" href="/">
              homepage
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
