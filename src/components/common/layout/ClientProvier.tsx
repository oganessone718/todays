"use client";

import { SessionProvider } from "next-auth/react";
import { OverlayProvider } from "overlay-kit";
import React from "react";

interface ClientProviderProps {
  children: React.ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  return (
    <SessionProvider>
      <OverlayProvider>{children}</OverlayProvider>
    </SessionProvider>
  );
};

export default ClientProvider;
