"use client"
import type { Metadata } from "next";
//import font
import {Poppins } from "next/font/google";
import "./globals.css";
import NavbarItems from "./components/navbar";
import FooterComponent from "./components/footer";
import { usePathname } from "next/navigation";

//kecualikan route/path blog

//make that import as an reusable variable
const poppins = Poppins({ //
  weight: "400",
  subsets : ["latin"],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); //restructure pathname
  const hideComponent = pathname.startsWith("/pages/blog") || pathname.startsWith("/login"); 
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {!hideComponent && <NavbarItems />}
        <div className="h-screen w-screen flex justify-center items-center">
          {children}
        </div>
        {!hideComponent && <FooterComponent />}
        
      </body>
    </html>
  );
}
