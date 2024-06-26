import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nunito } from "next/font/google"
import { Navbar } from "./components/navbar/Navbar";
import RegisterModal from "./components/Modals/RegisterModal";
import LoginModal from "./components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import { RentModal } from "./components/Modals/RentModal";
import SearchModal from "./components/Modals/SearchModal";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};
const font = Nunito({
  subsets : ["latin"]
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        
        <Suspense>
        <Navbar currentUser={currentUser}/>
        <RegisterModal/>
        <LoginModal/>
        <SearchModal/>
        <RentModal/>
        </Suspense>
        <div className="pb-20 pt-28">
          {children}
        </div>
        </body>
    </html>
  );
}
