"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNavigationBar = () => {
  const pathName = usePathname();

  const navigatorItems = [
    { href: "/", icon: "sticky_note_2" },
    { href: "/friends", icon: "group" },
    { href: "/create", icon: "add_box" },
    { href: "/notifications", icon: "notifications" },
    { href: "/diary", icon: "person" },
  ];

  return (
    <div>
      <div className="fixed w-full bottom-0 z-50 flex justify-between items-center h-[56px] px-[16px] py-[16px] border-t-[1px] border-t-gray-300 bg-white">
        {navigatorItems.map((navigatorItem) => (
          <Link
            href={navigatorItem.href}
            key={navigatorItem.href}
            className="h-[40px] w-[40px] flex items-center justify-center"
          >
            <span
              className={
                "icons-default " +
                ((pathName === "/" && pathName === navigatorItem.href) ||
                (pathName !== "/" &&
                  navigatorItem.href !== "/" &&
                  pathName.startsWith(navigatorItem.href))
                  ? " icons-filled"
                  : " text-gray-900")
              }
            >
              {navigatorItem.icon}
            </span>
          </Link>
        ))}
      </div>
      {/* spacer */}
      <div className="h-[56px]"></div>
    </div>
  );
};

export default BottomNavigationBar;
