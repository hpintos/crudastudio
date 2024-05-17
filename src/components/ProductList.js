import { useProducts } from "@/hooks/use-products";
import { Suspense } from "react";
import Product from "./Product";

function Loading() {
  return (
    <div className="text-center">
      <p className="text-2xl">Cargando productos...</p>
    </div>
  );
}

const ProductList = ({ children }) => {
  const products = useProducts();

  if (!products?.length) {
    return <Loading />;
  }
  return (
    <Suspense fallback={<Loading />}>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {products.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </ul>
    </Suspense>
  );
};

export default ProductList;
