
import "./globals.css";

export const metadata = {
  title: "Syvar Technology pvt. ltd",
  description: "We offer tailored, innovative solutions backed by expertise and a proven track record of delivering timely, client-centric results. Search Engine Optimization.",
};
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className="w-full">
         
              {children}
              
          {/* {children} */}
        </body>
      </html>
    </>
  );
}
