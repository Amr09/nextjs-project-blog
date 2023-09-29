import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "NextJs Blog App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 sm:p-6 lg:p-8 mt-4">
            <NavBar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
