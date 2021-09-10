import type { NextPage } from "next";
import Link from "next/link";

const Contact: NextPage = () => {
  return (
    <div className="p-5 flex justify-around items-center">
      <div>
        <h1 className="text-5xl">Reach me at</h1>
        <ul>
          <Link href="mailto:timpersonal07@gmail.com">
            <a>
              <li>Email</li>
            </a>
          </Link>
          <Link href="https://github.com/timthedev07">
            <a>
              <li>GitHub</li>
            </a>
          </Link>
          <Link href="https://www.reddit.com/user/im-just-a-dev">
            <a>
              <li>Reddit</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="w-auto overflow-hidden">
        <img className="animate-spin-slow" src="/images/tech-ring.png" />
      </div>
    </div>
  );
};

export default Contact;
