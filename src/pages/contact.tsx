import type { NextPage } from "next";
import Link from "next/link";
import { ContactForm } from "../components/ContactForm";
import { getHeadForPage } from "../utils/getHead";

const ContactLink: React.FC<{ href: string; name: string }> = ({
  href,
  name,
}) => {
  return (
    <Link href={href} passHref>
      <img
        className="w-7 h-7 lg:w-10 lg:h-10 transition ease-in-out transform hover:scale-105"
        src={`/images/${name}.svg`}
        alt={name}
      />
    </Link>
  );
};

const Contact: NextPage = () => {
  return (
    <>
      {getHeadForPage({
        description: "Contact me on the page or check out my profiles!",
        path: "/contact",
        title: "Contact Me",
      })}
      <div className="flex w-full justify-center items-center">
        <div className="justify-evenly flex mt-20 items-center border border-slate-400/40 rounded-xl bg-slate-700/10 flex-col gap-4 px-4 pt-10 pb-14 w-[98%] sm:flex-row sm:w-[95%] sm:px-5 sm:py-6 md:py-10 md:px-0 md:gap-4 md:w-10/12">
          <div>
            <h3 className="">Reach me at</h3>
            <section className="flex justify-around items-center">
              <ContactLink href="mailto:timpersonal07@gmail.com" name="email" />
              <ContactLink
                href="https://github.com/timthedev07"
                name="github"
              />
              <ContactLink
                href="https://www.reddit.com/user/im-just-a-dev"
                name="reddit"
              />
            </section>
          </div>
          <ContactForm className="w-96" />
        </div>
      </div>
    </>
  );
};

export default Contact;
