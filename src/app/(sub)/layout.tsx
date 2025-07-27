const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
};

export default RootLayout;
