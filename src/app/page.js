"use client";

import Product from "@/components/Product";
import ProductList from "@/components/ProductList";
import { ThemeContext } from "@/context/ThemeContext";
import { useState } from "react";
import products from "../data/products";

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <main className="flex-grow">
        <section className="h-full">
          <ProductList>
            {products.map((product, index) => {
              return <Product key={index} product={product} />;
            })}
          </ProductList>
          {/* <ul className="flex justify-center items-center gap-8">
            {products.map((product, index) => {
              return <Product key={index} product={product} />;
            })}
          </ul> */}
        </section>
      </main>
    </ThemeContext.Provider>
  );
}
