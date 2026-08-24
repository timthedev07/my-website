import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import "dragontail-experimental/dist/base.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Tim's Website",
  description: "Tim is a software engineer specializing in full stack web development.",
  keywords: ["portfolio", "website", "coding", "programming", "faang"],
  authors: [{ name: "Tim" }],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", apple: "/logo192.png" },
  verification: { google: "ou31BwzL6hYs78yHQZrfEFRvZIBWxVoPkErFfm0f2z4" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
