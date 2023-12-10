import "./globals.css";
import NavBar from "../components/generic/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] to-black from-slate-950">
        <NavBar></NavBar>
        <div className="px-4 pt-14">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "",
  },
};
