import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Manzurul Alam | FrontEnd Developer",
// };

export default function RootLayout({ children }) {
  return (
    <html data-theme="forest" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
