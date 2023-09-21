import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { ContactForm } from "../components/ContactForm";
import SEOConfig from "../utils/seo-config";

import { forwardRef, SVGProps } from "react";

export const BGSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg ref={ref} viewBox="0 0 1200 1200" {...props}>
        <path
          fill="#ffa35e"
          d="m0 361 28.5-28C57 305 114 249 171.2 217c57.1-32 114.5-40 171.6-46 57.2-6 114.2-10 171.4 22 57.1 32 114.5 100 171.6 108 57.2 8 114.2-44 171.4-88 57.1-44 114.5-80 171.6-72 57.2 8 114.2 60 142.7 86l28.5 26V0H0Z"
        />
        <path
          fill="#fc8e3b"
          d="m0 589 28.5-38C57 513 114 437 171.2 415c57.1-22 114.5 10 171.6 26 57.2 16 114.2 16 171.4 56 57.1 40 114.5 120 171.6 140 57.2 20 114.2-20 171.4-48 57.1-28 114.5-44 171.6-42 57.2 2 114.2 22 142.7 32l28.5 10V251l-28.5-26c-28.5-26-85.5-78-142.7-86-57.1-8-114.5 28-171.6 72-57.2 44-114.2 96-171.4 88-57.1-8-114.5-76-171.6-108-57.2-32-114.2-28-171.4-22-57.1 6-114.5 14-171.6 46C114 247 57 303 28.5 331L0 359Z"
        />
        <path
          fill="#f7770f"
          d="m0 649 28.5-32C57 585 114 521 171.2 513c57.1-8 114.5 40 171.6 54 57.2 14 114.2-6 171.4 20 57.1 26 114.5 98 171.6 132 57.2 34 114.2 30 171.4 28 57.1-2 114.5-2 171.6 8 57.2 10 114.2 30 142.7 40l28.5 10V587l-28.5-10c-28.5-10-85.5-30-142.7-32-57.1-2-114.5 14-171.6 42-57.2 28-114.2 68-171.4 48-57.1-20-114.5-100-171.6-140-57.2-40-114.2-40-171.4-56-57.1-16-114.5-48-171.6-26C114 435 57 511 28.5 549L0 587Z"
        />
        <path
          fill="#d5670f"
          d="m0 721 28.5-22c28.5-22 85.5-66 142.7-70 57.1-4 114.5 32 171.6 48 57.2 16 114.2 12 171.4 38 57.1 26 114.5 82 171.6 114 57.2 32 114.2 40 171.4 36 57.1-4 114.5-20 171.6-6 57.2 14 114.2 58 142.7 80l28.5 22V803l-28.5-10c-28.5-10-85.5-30-142.7-40-57.1-10-114.5-10-171.6-8-57.2 2-114.2 6-171.4-28-57.1-34-114.5-106-171.6-132-57.2-26-114.2-6-171.4-20-57.1-14-114.5-62-171.6-54C114 519 57 583 28.5 615L0 647Z"
        />
        <path
          fill="#b5580e"
          d="M0 1201h1200V959l-28.5-22c-28.5-22-85.5-66-142.7-80-57.1-14-114.5 2-171.6 6-57.2 4-114.2-4-171.4-36-57.1-32-114.5-88-171.6-114-57.2-26-114.2-22-171.4-38-57.1-16-114.5-52-171.6-48C114 631 57 675 28.5 697L0 719Z"
        />
      </svg>
    );
  }
);

BGSVG.displayName = "BGSVG";

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
      <NextSeo
        title="Contact Me"
        description="Contact me on the page or check out my profiles!"
        openGraph={{ url: `${SEOConfig}contact` }}
      />
      <div className="w-full min-h-screen relative flex flex-col items-center">
        <div className="fixed z-0">
          <BGSVG className="h-[150vh] landscape:w-screen landscape:h-auto object-cover brightness-[0.5] blur-sm" />
        </div>
        <div className="relative w-full z-10 flex justify-center items-center min-h-screen">
          {/* <div className="flex w-full justify-center items-center"> */}
          <div className="justify-evenly flex items-center border border-slate-400/40 rounded-xl bg-black/70 flex-col gap-16 px-4 py-24 w-[98%] mx-8 sm:flex-row sm:w-[95%] sm:px-5 sm:mx-24 sm:py-6 md:py-10 md:px-0 md:gap-16 md:w-8/12">
            <div className="flex-col flex gap-4 w-96">
              <h3 className="font-bold text-center">Reach me at</h3>
              <section className="flex justify-around items-center">
                <ContactLink
                  href="mailto:timpersonal07@gmail.com"
                  name="email"
                />
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
      </div>
    </>
  );
};

export default Contact;
