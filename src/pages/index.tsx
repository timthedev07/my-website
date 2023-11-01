import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { NextSeo } from "next-seo";
import heroImage from "../../public/images/home-hero.jpg";
import mathBgImage from "../../public/images/mathbg.png";
import { DevSVG } from "../components/svgs/home/Dev";
import { ExpressSVG } from "../components/svgs/home/Express";
import { GitHubSVG } from "../components/svgs/home/GitHub";
import { GraphQLSVG } from "../components/svgs/home/GraphQL";
import { MongoDBSVG } from "../components/svgs/home/MongoDB";
import { NextjsSVG } from "../components/svgs/home/Nextjs";
import { PostgresSVG } from "../components/svgs/home/Postgres";
import { PythonSVG } from "../components/svgs/home/Python";
import { SvelteSVG } from "../components/svgs/home/Svelte";
import { TailwindCSSSVG } from "../components/svgs/home/TailwindCSS";
import { TensorflowSVG } from "../components/svgs/home/Tensorflow";
import { TypeScriptSVG } from "../components/svgs/home/TypeScript";
import { useViewportClassname } from "../utils/hooks";
import { getBlurDataURL } from "../utils/blurDataUrl";
import { TwitterSVG } from "../components/svgs/home/Twitter";
import { InstagramSVG } from "../components/svgs/home/Instagram";

const Home: NextPage = () => {
  const sectionHeading2 = useRef<HTMLHeadingElement | null>(null);
  const alternativeCareerHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const techIconsRef = useRef<HTMLDivElement | null>(null);
  const techIconClassname =
    "rounded full w-20 h-20 md:w-24 md:h-24 animate-wiggle";
  const technicalExperienceRef = useRef<HTMLParagraphElement | null>(null);

  useViewportClassname(alternativeCareerHeadingRef, "animate-fade-in-slow", "");
  useViewportClassname(sectionHeading2, "animate-fade-in-up-slow", "");
  useViewportClassname(techIconsRef, "animate-fade-in-left", "opacity-0");
  useViewportClassname(
    technicalExperienceRef,
    "animate-fade-in-right",
    "opacity-0"
  );

  return (
    <>
      <NextSeo
        description="I'm Tim, a software engineer specialized in web development."
        title="Homepage"
      />
      <aside className="hidden h-96 animate-fade-in-slow md:flex flex-row items-center gap-4 uppercase font-mono text-zinc-200/80 tracking-widest text-sm fixed right-10 bottom-0 w-4 vertical-text whitespace-nowrap z-50">
        <Link href="mailto:timpersonal07@gmail.com">
          timpersonal07@gmail.com
        </Link>
        <div className="grow-1 flex-1 w-[1px] bg-zinc-200/80" />
      </aside>
      <aside className="hidden h-96 animate-fade-in-slow md:flex flex-row items-center gap-4 uppercase font-mono text-zinc-200/80 tracking-widest text-sm fixed left-10 bottom-0 w-4 vertical-text whitespace-nowrap z-50">
        <Link passHref href="https://github.com/timthedev07">
          <GitHubSVG className="h-8 w-8 cursor-pointer" />
        </Link>
        <Link passHref href="https://twitter.com/timthedev07">
          <TwitterSVG className="h-8 w-8 cursor-pointer" />
        </Link>
        <Link passHref href="https://www.instagram.com/timthedev07/">
          <InstagramSVG className="h-8 w-8 cursor-pointer" />
        </Link>
        <div className="grow-1 flex-1 w-[1px] bg-zinc-200/80" />
      </aside>
      <header className="h-screen w-full flex flex-col justify-center items-center md:items-start relative overflow-hidden">
        <Image
          src={heroImage}
          alt=""
          fill
          placeholder="blur"
          priority
          blurDataURL={getBlurDataURL(3648, 2432)}
          className="object-[50%_30%] absolute blur-[2px] brightness-[0.5] z-10 object-cover"
        />
        <div className="z-20 absolute flex flex-col px-6 sm:mx-0 md:w-[96%] md:flex-row md:justify-center gap-8 md:gap-32">
          <div className="flex flex-col items-start gap-8 md:gap-5">
            <span className="text-base text-neutral-50/60 animate-fade-in-slow">
              Hi, I am
            </span>
            <h1 className="font-semibold text-8xl animate-fade-in">Tim</h1>
            <h5 className="max-w-sm text-neutral-100/70 animate-fade-in-left md:animate-fade-in-up">
              A software developer interested and specialized in building
              machine learning models and real world projects on the web.
              Currently a full-time student pursuing his dream of studying at G5
              colleges.
            </h5>
          </div>
          <DevSVG
            className={`mx-auto md:mx-0 w-48 h-48 md:w-60 md:h-60 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite,fadeInRight_1300ms_ease-in-out]`}
          />
        </div>
      </header>
      <section
        id="technical-experience"
        className="min-h-[70vh] pt-24 h-max w-full relative overflow-hidden flex flex-col items-center"
      >
        <h1
          className="text-4xl md:text-5xl font-bold text-center w-full opacity-0 underline underline-offset-4 decoration-slate-400/40"
          ref={sectionHeading2}
        >
          Technical Experience
        </h1>
        <div className="relative flex flex-col w-10/12 md:flex-row md:items-center">
          <div className="md:w-1/2 flex flex-col gap-12 justify-center flex-1 relative after:hidden md:after:block after:content-[''] after:absolute after:right-0 after:h-[60%] after:top-[20%] after:bg-white/40 after:w-[1px]">
            <div
              className="flex justify-center flex-wrap gap-10 px-2 py-10 md:p-12"
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
              className="md:p-16 md:px-16 p-2 px-6 font-semibold"
            >
              I primarily develop fullstack applications on the Internet, and
              over time, I have built confidence with a few frameworks/libraries
              that significantly boost my productivity.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-24 mt-12 gap-12">
          <div className="w-fit flex gap-16">
            <PythonSVG className={`w-48 h-48 animate-wiggle`} />
            <TensorflowSVG className={`w-48 h-48 animate-wiggle`} />
          </div>
          <p className="max-w-[75%]">
            Aside from web development, another one of my main career focuses is{" "}
            <span className="underline">artificial intelligence</span>.<br /> I
            mostly build <span className="font-bold">machine learning</span>{" "}
            projects with Python and Tensorflow. I have some experience in NLP,
            image classification, and sentiment analysis.
          </p>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden w-full h-screen">
        <Image
          src={mathBgImage}
          alt=""
          fill
          placeholder="blur"
          priority
          blurDataURL={getBlurDataURL(3648, 2432)}
          className="object-[50%_30%] absolute opacity-20 blur-[0.5px] brightness-60 object-cover"
        />
        <h1
          ref={alternativeCareerHeadingRef}
          className="text-4xl mb-12 md:text-5xl font-bold text-center w-full opacity-0 underline underline-offset-4 decoration-slate-400/40"
        >
          Alternative Career Path - Mathematics
        </h1>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-5">
            <p>Math has always been a passion of mine.</p>
            <p>Below are some of my achievements as a student:</p>
            <ul className="text-base list-disc">
              <li>
                Gold in UKMT Intermediate Maths Challenge for 2 consecutive
                years; Best of School in 2023
              </li>
              <li>
                Gold, best of year and second of school in UKMT Senior Maths
                Challenge as a Y12, 2023
              </li>
              <li>Merit, UKMT Maclaurin 2023</li>
              <li>
                Province representative in &quot;Fase Autonòmica Olimpíada
                Matemàtica 2023&quot;
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
