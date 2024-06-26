import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "React Ui",
  description: "React Ui is a component library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="overflow-x-hidden">
          <Navbar />
          <div className="min-h-screen px-3 sm:px-4 md:px-6 py-10">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
