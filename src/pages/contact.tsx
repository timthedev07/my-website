import type { NextPage } from "next";
import Link from "next/link";

const contactIconClass = "w-10 h-10";

const ContactLink: React.FC<{ href: string; name: string }> = ({
  href,
  name,
}) => {
  return (
    <Link href={href}>
      <a>
        <li>
          <img
            className={contactIconClass}
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
    <div className="p-5 flex justify-around items-center">
      <div>
        <h1 className="text-5xl py-4">Reach me at</h1>
        <ul className="flex justify-around items-center">
          <ContactLink href="mailto:timpersonal07@gmail.com" name="email" />
          <ContactLink href="https://github.com/timthedev07" name="github" />
          <ContactLink
            href="https://www.reddit.com/user/im-just-a-dev"
            name="reddit"
          />
        </ul>
      </div>
      <div className="w-auto hidden overflow-hidden lg:block">
        <img className="animate-spin-slow" src="/images/tech-ring.png" />
      </div>
    </div>
  );
};

export default Contact;
