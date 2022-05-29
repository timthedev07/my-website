import { useRouter } from "next/router";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface AppLoadingContextType {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
const AppLoadingContext = createContext<AppLoadingContextType>({
  loading: true,
  setLoading: () => {},
});

export const useAppLoading = () => {
  return useContext(AppLoadingContext);
};

export const AppLoadingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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

  const value: AppLoadingContextType = {
    loading,
    setLoading,
  };

  return (
    <AppLoadingContext.Provider value={value}>
      {loading ? (
        <div className="absolute h-1 w-full z-[99999999999999999999]">
          <div className="w-1/2 h-1 bg-sky-500 border-r-transparent rounded-r-full absolute animate-loading-grow"></div>
        </div>
      ) : null}
      {children}
    </AppLoadingContext.Provider>
  );
};
