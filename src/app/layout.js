import { Karla } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "Cruda Studio",
  description: "Tu tienda de accesorios de moda favorita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${karla.className} bg-c-primary bg-cover flex flex-col min-h-screen my-0 mx-auto max-w-5xl`}
      >
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
