import Link from "next/link";

const { default: Image } = require("next/image");

const ProductMedia = ({ image, isSale }) => {
  return (
    <div className="relative">
      {isSale && (
        <div className="absolute bottom-2 left-2 bg-gray-900 text-white px-2 py-1 rounded-md text-xs font-medium">
          Sale
        </div>
      )}
      <Image
        alt="Product Image"
        className="w-full h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
        height="200"
        src={image}
        style={{
          aspectRatio: "263/200",
          objectFit: "cover",
        }}
        width="263"
      />
    </div>
  );
};
const ProudctContent = ({ name, price, pvp, isSale }) => {
  return (
    <>
      <div className="mt-4">
        <p className="text-gray-700 text-sm whitespace-normal">{name}</p>
      </div>
      <div className="flex items-baseline mt-2">
        {isSale && (
          <span className="text-gray-500 text-xs line-through mr-2">
            {pvp}€
          </span>
        )}
        <span className="text-black text-lg font-semibold">{price}€</span>
      </div>
    </>
  );
};

export const Product = ({ product }) => {
  const {
    name = "Elegant and timeless piece to enhance your living space.",
    price,
    image,
    pvp,
  } = product;
  const isSale = pvp > price;
  return (
    <li className="flex flex-col max-w-[263px]">
      <Link href="/products/first-post">
        <ProductMedia image={image} isSale={isSale} />
        <ProudctContent name={name} price={price} pvp={pvp} isSale={isSale} />
      </Link>
    </li>
  );
};
export default Product;
