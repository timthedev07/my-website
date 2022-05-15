import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <header className="h-96 w-[95%] flex flex-col justify-center px-12 items-start">
        <h4>Hi there</h4>
        <h1 className="font-bold text-8xl">I&apos;m Tim</h1>
      </header>
    </div>
  );
};

export default Home;
