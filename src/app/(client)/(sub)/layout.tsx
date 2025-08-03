interface SubLayoutProps {
  children: React.ReactNode;
}

const SubLayout = ({ children }: SubLayoutProps) => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
};

export default SubLayout;
