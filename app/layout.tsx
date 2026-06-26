import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { AnalysisProvider }
from "./context/AnalysisContext";

import Navbar
from "@/components/Navbar";

import Sidebar
from "@/components/Sidebar";

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const metadata: Metadata = {
title: "Nexus Competitor Intelligence Platform",
description:
"AI-powered competitor analysis and lead generation platform",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {

return ( <html lang="en">
  <body
    className={`
      ${geistSans.variable}
      ${geistMono.variable}
      antialiased
    `}
  >

    <AnalysisProvider>

      <Navbar />

      <div className="flex overflow-x-hidden">

        <Sidebar />

        <main
          className="
            flex-1
            ml-64
            p-8
            bg-gray-50
            h-[calc(100vh-64px)]
            overflow-y-auto
            overflow-x-hidden
          "
        >
          {children}
        </main>

      </div>

    </AnalysisProvider>

  </body>

</html>

);
}
