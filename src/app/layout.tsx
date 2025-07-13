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
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
