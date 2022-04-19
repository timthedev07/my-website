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
    <div>
      <div className="">
        <h3 className="">Reach me at</h3>
        <ul className="flex justify-around items-center">
          <ContactLink href="mailto:timpersonal07@gmail.com" name="email" />
          <ContactLink href="https://github.com/timthedev07" name="github" />
          <ContactLink
            href="https://www.reddit.com/user/im-just-a-dev"
            name="reddit"
          />
        </ul>
      </div>
    </div>
  );
};

export default Contact;
