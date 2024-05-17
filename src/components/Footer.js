import Image from "next/image";
import { IconInstagram } from "./Icons/IconInstagram";
import Link from "next/link";
import { IconWhatsapp } from "./Icons/IconWhatsapp";

const Footer = () => {
  const crudaLogoSrc = "/images/isologo.png";

  return (
    <footer className="fix bottom-0 grid grid-cols-1 sm:grid-cols-3 justify-center px-8 py-8">
      <div className="flex flex-col gap-5">
        <Link href="https://www.instagram.com/crudastudio.es/" target="_blank">
          <IconInstagram />
        </Link>
      </div>
      <div className="flex justify-center p-12 sm:p-0">
        <Image
          className="w-12 h-12"
          src={crudaLogoSrc}
          alt="Logo de CrudaStudio"
          width="50"
          height="50"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="">Información de contacto</h2>
        <Link href="mailto:crudastudio.es@gmail.com" target="_blank">
          <span>crudastudio.es@gmail.com</span>
        </Link>

        <Link href="https://wa.me/+34695848765" target="_blank">
          <span className="underline">Contacto por Whatsapp</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
