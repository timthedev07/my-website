import { Button } from "dragontail-experimental";
import { NextPage } from "next";
import { useRouter } from "next/router";

const NotFound: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full h-[70vh] flex flex-col gap-10 justify-center items-center pt-24 text-center">
        <h1 className="text-red-400 font-bold text-8xl">404</h1>
        <h4 className="text-red-200/80 text-lg font-semibold">
          Page not Found
        </h4>
        <div className="w-full flex justify-center items-center gap-10">
          <Button
            onClick={() => {
              if (router) router.back();
            }}
            color="emerald"
          >
            Previous
          </Button>
          <Button
            onClick={() => {
              router.push("/");
            }}
            color="orange"
          >
            Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
