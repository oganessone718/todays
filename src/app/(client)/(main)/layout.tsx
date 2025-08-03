import BottomNavigationBar from "@/components/common/layout/BottomNavigationBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex flex-col">{children}</div>
      <BottomNavigationBar />
    </div>
  );
};

export default MainLayout;
