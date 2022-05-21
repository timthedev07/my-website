import type { NextPage } from "next";
import Image from "next/image";
import heroImage from "../../public/images/home-hero.jpg";

const Home: NextPage = () => {
  return (
    <header className="h-screen w-screen flex flex-col justify-center px-12 items-start relative">
      <Image
        src={heroImage}
        alt=""
        layout="fill"
        objectFit="cover"
        className="object-[50%_30%] absolute"
      />
    </header>
  );
};

export default Home;
