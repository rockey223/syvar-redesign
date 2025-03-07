import LenisProvider from "@/utils/LenisProvider";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import ReduxProvider from "@/utils/ReduxProvider";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Syvar Technology pvt. ltd",
  description: "We offer tailored, innovative solutions backed by expertise and a proven track record of delivering timely, client-centric results. Search Engine Optimization.",
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
