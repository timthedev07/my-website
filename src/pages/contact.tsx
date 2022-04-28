import type { NextPage } from "next";
import Link from "next/link";
import { ContactForm } from "../components/ContactForm";

const ContactLink: React.FC<{ href: string; name: string }> = ({
  href,
  name,
}) => {
  return (
    <Link href={href}>
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
    <div className="flex w-full justify-center items-center">
      <div className="justify-evenly flex mt-20 items-center border border-slate-400/40 rounded-xl bg-slate-700/10 flex-col xs:flex-row xs:w-[95%] xs:px-5 xs:py-6 md:py-10 md:px-0 md:gap-4 md:w-10/12">
        <div className="max-w-sm">
          <h3 className="">Reach me at</h3>
          <section className="flex justify-around items-center">
            <ContactLink href="mailto:timpersonal07@gmail.com" name="email" />
            <ContactLink href="https://github.com/timthedev07" name="github" />
            <ContactLink
              href="https://www.reddit.com/user/im-just-a-dev"
              name="reddit"
            />
          </section>
        </div>
        <ContactForm className="w-96" />
      </div>
    </div>
  );
};

export default Contact;
