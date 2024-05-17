import { Karla } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "CRUDA: Joyas auténticas, artesanales, hechas a mano con pasión ",
  description:
    "Materiales nobles, artesanía tradicional y diseños únicos. Piezas que reflejan la esencia natural de cada elemento. Celebramos la singularidad y la belleza atemporal. Más que joyas, una conexión con lo verdadero.",
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
