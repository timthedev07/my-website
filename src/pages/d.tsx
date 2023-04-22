import { NextPage } from "next";
import Image from "next/image";

const H: NextPage = () => {
  return (
    <div className="w-[80vw]">
      <Image
        width={1920}
        height={1080}
        alt=""
        src="https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/fullstack.jpg"
      />
    </div>
  );
};

export default H;
