import type { Metadata } from "next";
//import font
import {Poppins } from "next/font/google";
import "./globals.css";
import NavbarItems from "./components/navbar";
import FooterComponent from "./components/footer";


//make that import as an reusable variable
const poppins = Poppins({ //
  weight: "400",
  subsets : ["latin"],
})

export const metadata: Metadata = {
  title: "Website Vincent",
  description: "A Simple Website by vincent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <NavbarItems />
        <div className="h-screen w-screen flex justify-center items-center">
          {children}
        </div>
        <FooterComponent />
        
      </body>
    </html>
  );
}
