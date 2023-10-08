"use client";

import { AuthContextProvider } from "@/context/AuthContext";
import "./globals.css";
import { usePathname } from "next/navigation";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <html lang="en">
      <AuthContextProvider>
        <body>{children}</body>
      </AuthContextProvider>
    </html>
  );
}
