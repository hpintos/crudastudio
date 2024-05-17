import Image from "next/image";
import { IconInstagram } from "./Icons/IconInstagram";
import Link from "next/link";

const Footer = () => {
  const crudaLogoSrc = "/images/isologo.png";

  return (
    <footer className="fix bottom-0 grid grid-cols-3 justify-center px-8 py-8">
      <div className="flex flex-col gap-5">
        <h2>CrudaStudio</h2>
        <Link href="https://www.instagram.com/crudastudio.es/" target="_blank">
          <IconInstagram />
        </Link>
      </div>
      <div className="flex justify-center">
        <Image
          src={crudaLogoSrc}
          alt="Logo de CrudaStudio"
          width={50}
          height={50}
        />
      </div>
      <div className="flex justify-center">
        <h2>Información de contacto</h2>
      </div>
    </footer>
  );
};

export default Footer;
