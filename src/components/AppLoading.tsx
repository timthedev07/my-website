"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface AppLoadingContextType {
  appLoading: boolean;
  setAppLoading: (
    loading: SetStateAction<boolean>,
    withCoverElement?: boolean
  ) => void;
}
const AppLoadingContext = createContext<AppLoadingContextType>({
  appLoading: true,
  setAppLoading: () => {},
});

export const useAppLoading = () => {
  return useContext(AppLoadingContext);
};

export const AppLoadingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();

  const [appLoading, setAppLoading] = useState(false);
  const [withCover, setWithCover] = useState(false);

  useEffect(() => {
    setAppLoading(false);
  }, [pathname]);

  const handleLoading = (
    loading: SetStateAction<boolean>,
    withCoverElement = false
  ) => {
    setWithCover(withCoverElement);
    setAppLoading(loading);
  };

  const value: AppLoadingContextType = {
    appLoading: appLoading,
    setAppLoading: handleLoading,
  };

  return (
    <AppLoadingContext.Provider value={value}>
      {appLoading ? (
        <div className="absolute h-1 w-full z-[1000]">
          <div className="w-1/2 h-1 bg-sky-500 border-r-transparent rounded-r-full absolute animate-loading-grow"></div>
        </div>
      ) : null}
      {appLoading && withCover ? (
        <div className="z-[1000] overflow-hidden loading-cover w-screen h-screen fixed top-0 animate-appear" />
      ) : null}
      {children}
    </AppLoadingContext.Provider>
  );
};
