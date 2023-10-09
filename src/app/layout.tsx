import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import ReactQueryWrapper from "@/components/wrappers/ReactQueryWrapper";
import ReduxProvider from "@/components/wrappers/ReduxProvider";
import NavBar from "@/components/utils/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bloggers | Home",
  description: "Join the blogging community",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <body className={inter.className}>
        <ReduxProvider>
          <ReactQueryWrapper>
            <div>
              <NavBar />
              <div className="max-w-3xl mx-auto py-8">{children}</div>
              <Toaster position="top-center" />
            </div>
          </ReactQueryWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
