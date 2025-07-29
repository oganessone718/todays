"use client";

import { OverlayProvider } from "overlay-kit";
import React from "react";

interface ClientProviderProps {
  children: React.ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  return <OverlayProvider>{children}</OverlayProvider>;
};

export default ClientProvider;
