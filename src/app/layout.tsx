import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

const pretendard = localFont({
  src: "../styles/fonts/PretendardVariable.woff2",
});

export const metadata: Metadata = {
  title: "ToDays",
  description: "Record Today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
