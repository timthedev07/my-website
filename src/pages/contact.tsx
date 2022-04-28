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
    <div className="">
      {/* <div className="flex justify-evenly items-center flex-col sm:flex-row sm:w-[95%] sm:px-5 sm:py-6 md:py-10 md:px-0 md:gap-4 md:w-10/12 lg:flex-row-reverse">
        <div className="">
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
      </div> */}
      <div className="flex w-full justify-center items-center">
        <div className="justify-evenly flex mt-20 items-center border border-slate-400/40 rounded-xl bg-slate-700/10 flex-col sm:flex-row sm:w-[95%] sm:px-5 sm:py-6 md:py-10 md:px-0 md:gap-4 md:w-10/12">
          <div className="max-w-sm">
            <h3 className="">Reach me at</h3>
            <section className="flex justify-around items-center">
              <div className="bg-blue-200 w-52 flex justify-center items-center h-12 rounded-xl">
                HI
              </div>
              <div className="bg-blue-200 w-52 flex justify-center items-center h-12 rounded-xl">
                HI
              </div>
              <div className="bg-blue-200 w-52 flex justify-center items-center h-12 rounded-xl">
                HI
              </div>
            </section>
          </div>
          <div className="bg-teal-200 w-52 flex justify-center items-center h-36 rounded-xl">
            Bye
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
