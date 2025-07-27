"use client";

import React from "react";
import { OverlayProvider } from "overlay-kit";

export const ClientProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <OverlayProvider>{children}</OverlayProvider>;
};
