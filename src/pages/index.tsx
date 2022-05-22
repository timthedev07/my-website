import type { NextPage } from "next";
import Image from "next/image";
import heroImage from "../../public/images/home-hero.jpg";
import { DevSVG } from "../components/svgs/Dev";
import { blurDataUrl } from "../utils/blurDataUrl";

const Home: NextPage = () => {
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
      <section className="h-screen w-full overflow-hidden"></section>
    </>
  );
};

export default Home;
