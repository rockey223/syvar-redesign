import LenisProvider from "@/utils/LenisProvider";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Head from "next/head";
import Contact from "@/components/Contact";
export const metadata = {
  title: "Creating Portfolio",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="w-full ">
        <LenisProvider>
          {children}

          <Footer />
          {/* <Contact/> */}
        </LenisProvider>
        {/* {children} */}
      </body>
    </html>
  );
}
