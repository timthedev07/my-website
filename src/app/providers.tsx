"use client";

import { DragontailProvider } from "dragontail-experimental";
import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";
import { AppLoadingProvider } from "../components/AppLoading";
import { NavProvider } from "../components/nav/Navbar";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <DragontailProvider theme="dark">
        <div id="App" className="bg-slate-950">
          <AppLoadingProvider>
            <NavProvider>
              <main className="w-full min-w-[250px] text-white">{children}</main>
            </NavProvider>
          </AppLoadingProvider>
        </div>
      </DragontailProvider>
    </SessionProvider>
  );
}
