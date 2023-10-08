"use client";

import { AuthContextProvider } from "@/context/AuthContext";
import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/Navbar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <html lang="en">
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <body>{children}</body>
        </QueryClientProvider>
      </AuthContextProvider>
    </html>
  );
}
