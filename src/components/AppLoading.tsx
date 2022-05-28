import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const AppLoading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return loading ? (
    <div className="absolute h-1 w-full z-[99999999999999999999]">
      <div className="w-1/2 h-1 bg-sky-500 border-r-transparent rounded-r-full absolute animate-loading-grow"></div>
    </div>
  ) : (
    <></>
  );
};
