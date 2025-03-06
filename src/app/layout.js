import LenisProvider from "@/utils/LenisProvider";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Head from "next/head";
import Contact from "@/components/Contact";
import ReduxProvider from "@/utils/ReduxProvider";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Syvar Technology pvt. ltd",
  description: "",
};
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className="w-full">
          <ReduxProvider>
            <LenisProvider>
              <Navbar />
              {children}

              <Footer />
              {/* <Contact/> */}
            </LenisProvider>
          </ReduxProvider>
          {/* {children} */}
        </body>
      </html>
    </>
  );
}
