import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { Montserrat } from "next/font/google";
import NavBar from "../components/HeroSection/navBar";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "Car Rental",
  description:
    "This website is an online platform that allows users to rent cars for personal or business use",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://ik.imagekit.io/joel/hilux.jpg?updatedAt=1697712037718"
          type="image/x-icon"
        />
      </head>
      <body
        className={`${montserrat.variable} font-mont w-full h-full lg:min-w-full md:min-w-[150%] min-w-[300%] mx-auto overflow-x-hidden`}
      >
        <ClerkProvider>
          <NavBar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
