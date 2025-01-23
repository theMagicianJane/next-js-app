"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar/page';
import { QueryClient, QueryClientProvider } from "react-query";


import { ThemeProvider } from "@material-tailwind/react";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <div className="container">
              {children}
            </div>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
