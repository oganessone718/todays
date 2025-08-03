import ClientProvider from "@/components/common/layout/ClientProvier";
import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

const pretendard = localFont({
  src: "../../styles/fonts/PretendardVariable.woff2",
});

export const metadata: Metadata = {
  title: "ToDays",
  description: "Record Today",
};

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
}: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className={pretendard.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
