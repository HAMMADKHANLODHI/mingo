"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import IconSection from "./component/IconSection";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ❌ REMOVE metadata here because "use client" is not compatible with export metadata
// export const metadata = {...}

export default function RootLayout({ children }) {
  const [menus, setMenus] = useState(false);

  return (
    <html lang="en">
      <body
        className={`flex w-screen h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={`w-[4%] h-full ${
            menus ? "relative" : ""
          }`}>
        <IconSection menus={menus} setMenus={setMenus} />
        </div>
        
          {children}
        
      </body>
    </html>
  );
}
