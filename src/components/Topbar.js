import Image from "next/image";
import { IconMagnifingGlass } from "./Icons/IconMagnifingGlass";
import { IconShoppingBag } from "./Icons/IconShoppingBag";

const Topbar = () => {
  const crudaLogoSrc = "/images/cruda-studio-transparent.png";

  return (
    <header className="fix top-0 grid grid-cols-3 justify-center p-8 min-h-15">
      <div></div>
      <div className="flex justify-center">
        <Image
          src={crudaLogoSrc}
          alt="Logo de CrudaStudio"
          width={200}
          height={200}
        />
      </div>
      <div className="flex justify-end items-center gap-3">
        <IconMagnifingGlass />
        <IconShoppingBag />
      </div>
    </header>
  );
};

export default Topbar;
