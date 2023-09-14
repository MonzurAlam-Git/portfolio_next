"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manzurul Alam | FrontEnd Developer",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="forest" lang="en">
      <body className={inter.className}>
        {children}
        <AnimatedCursor
          innerSize={18}
          outerSize={50}
          color="29, 185, 144"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </body>
    </html>
  );
}
