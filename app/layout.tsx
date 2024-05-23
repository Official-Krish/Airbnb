import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nunito } from "next/font/google"
import { Navbar } from "./components/navbar/Navbar";
import RegisterModal from "./components/Modals/RegisterModal";
import LoginModal from "./components/Modals/LoginModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};
const font = Nunito({
  subsets : ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        <RegisterModal/>
        <LoginModal/>
        {children}
        </body>
    </html>
  );
}
