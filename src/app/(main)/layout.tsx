import BottomNavigationBar from "@/components/common/BottomNavigationBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">{children}</div>
      <BottomNavigationBar />
    </div>
  );
}
