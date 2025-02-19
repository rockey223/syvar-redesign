import LenisProvider from "@/utils/LenisProvider";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
        {/* {children} */}
      </body>
    </html>
  );
}
