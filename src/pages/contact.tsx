import type { NextPage } from "next";
import Link from "next/link";

const ContactLink: React.FC<{ href: string; name: string }> = ({
  href,
  name,
}) => {
  return (
    <Link href={href}>
      <a>
        <li>
          <img
            className="w-7 h-7 lg:w-10 lg:h-10 transition ease-in-out transform hover:scale-105"
            src={`/images/${name}.svg`}
            alt={name}
          />
        </li>
      </a>
    </Link>
  );
};

const Contact: NextPage = () => {
  return (
    <div className="p-5 my-80 flex justify-around items-center relative lg:my-0">
      {/* <div className="lg:z-20">
        <h1 className="text-3xl py-3 lg:text-5xl lg:py-4">Reach me at</h1>
        <ul className="flex justify-around items-center">
          <ContactLink href="mailto:timpersonal07@gmail.com" name="email" />
          <ContactLink href="https://github.com/timthedev07" name="github" />
          <ContactLink
            href="https://www.reddit.com/user/im-just-a-dev"
            name="reddit"
          />
        </ul>
      </div> */}
    </div>
  );
};

export default Contact;
