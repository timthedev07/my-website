import { Button } from "dragontail-experimental";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Success: NextPage = () => {
  const router = useRouter();

  const [msg, setMsg] = useState<string | null>("");
  const [prev, setPrev] = useState<string | null>(null);

  useEffect(() => {
    if (!router) return;

    const msg = router.query["msg"];
    const prev = router.query["prev"];

    if (!msg) setMsg(null);
    else setMsg(decodeURIComponent(msg.toString()));

    if (!prev) setPrev(null);
    else setPrev(decodeURIComponent(prev.toString()));
  }, [router]);

  return (
    <>
      <div className="w-full h-[70vh] flex flex-col gap-10 justify-center items-center pt-24 text-center">
        <h1 className="text-green-400 font-bold text-8xl">Success!</h1>
        <h4 className="text-green-200/80 text-lg">{msg}</h4>
        <div className="w-full flex justify-center items-center gap-10">
          <Button
            onClick={() => {
              if (prev) router.push(prev);
            }}
            color="light"
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

export default Success;
