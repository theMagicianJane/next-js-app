"use client"
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@material-tailwind/react";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html style={{ fontSize: "16px" }}>
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
