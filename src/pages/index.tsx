import type { NextPage } from "next";
import Image from "next/image";
import { useRef } from "react";
import heroImage from "../../public/images/home-hero.jpg";
import { DevSVG } from "../components/svgs/home/Dev";
import { ExpressSVG } from "../components/svgs/home/Express";
import { GraphQLSVG } from "../components/svgs/home/GraphQL";
import { MongoDBSVG } from "../components/svgs/home/MongoDB";
import { NextjsSVG } from "../components/svgs/home/Nextjs";
import { PostgresSVG } from "../components/svgs/home/Postgres";
import { SvelteSVG } from "../components/svgs/home/Svelte";
import { TailwindCSSSVG } from "../components/svgs/home/TailwindCSS";
import { TypeScriptSVG } from "../components/svgs/home/TypeScript";
import { blurDataUrl } from "../utils/blurDataUrl";
import { useViewportClassname } from "../utils/hooks";

const Home: NextPage = () => {
  const sectionHeading2 = useRef<HTMLHeadingElement | null>(null);
  const techIconsRef = useRef<HTMLDivElement | null>(null);
  const techIconClassname = "rounded full w-24 h-24 animate-wiggle";
  const technicalExperienceRef = useRef<HTMLParagraphElement | null>(null);

  useViewportClassname(sectionHeading2, "animate-fade-in-up-slow", "");
  useViewportClassname(techIconsRef, "animate-fade-in-left", "opacity-0");
  useViewportClassname(
    technicalExperienceRef,
    "animate-fade-in-right",
    "opacity-0"
  );

  return (
    <>
      <header className="gap-4 md:gap-0 h-screen w-full flex flex-col justify-center items-center md:items-start relative overflow-hidden">
        <Image
          src={heroImage}
          alt=""
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority
          blurDataURL={blurDataUrl}
          className="object-[50%_30%] absolute blur-[2px] brightness-[0.5] z-10"
        />
        <div className="z-20 absolute flex flex-col px-6 sm:mx-0 md:w-[96%] md:flex-row md:justify-center md:gap-32">
          <div className="flex flex-col items-start gap-5 animate-fade-in-left-slow">
            <span className="text-base text-neutral-50/60">Hi, I am</span>
            <h1 className="font-semibold text-8xl">Tim</h1>
            <h5 className="max-w-sm text-neutral-100/70">
              A software developer interested and specialized in building real
              world projects on the web. Currently a full-time student pursuing
              his dream of studying at G5 colleges.
            </h5>
          </div>
          <DevSVG className="w-60 h-60 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite,fadeInRight_1300ms_ease-in-out]" />
        </div>
      </header>
      <section className="min-h-[70vh] bg-indigo-900/60 pt-6 h-max w-full relative overflow-hidden flex flex-col">
        <h1
          className="font-bold text-center w-full opacity-0 underline underline-offset-4 decoration-slate-400/40"
          ref={sectionHeading2}
        >
          Technical Experience
        </h1>
        <div className="relative flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 flex flex-col gap-12 justify-center flex-1 relative after:content-[''] after:absolute after:right-0 after:h-[60%] after:top-[20%] after:bg-white/40 after:w-[1px]">
            <div
              className="flex justify-center flex-wrap gap-10 p-16"
              ref={techIconsRef}
            >
              <TypeScriptSVG className={techIconClassname} />
              <NextjsSVG className={techIconClassname} />
              <TailwindCSSSVG className={techIconClassname} />
              <ExpressSVG className={techIconClassname} />
              <GraphQLSVG className={techIconClassname} />
              <MongoDBSVG className={techIconClassname} />
              <PostgresSVG className={techIconClassname} />
              <SvelteSVG className={techIconClassname} />
            </div>
          </div>
          <div className="flex-1 md:w-1/2">
            <p
              ref={technicalExperienceRef}
              className="p-16 md:px-16 px-28 font-semibold"
            >
              I primarily develop fullstack applications on the internet, and
              over time, I have built confidence with a few frameworks/libraries
              that significantly boost my productivity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
