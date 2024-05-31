"use client"
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"], 
  weight: '300'
});

// export const metadata: Metadata = {
//   title: "To Do List App",
//   description: "Simple website for create to do list",
// };

const disableNavbar = ['/'];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="wrapper">
          {!disableNavbar.includes(pathname) && <Sidebar />}
          {children}
        </div>
      </body>
    </html>
  );
}
