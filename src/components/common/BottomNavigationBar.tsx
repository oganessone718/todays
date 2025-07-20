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
    { href: "/my-todays", icon: "person" },
  ];

  return (
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
    </div>
  );
};

export default BottomNavigationBar;
