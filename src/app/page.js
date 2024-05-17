"use client";

import Product from "@/components/Product";
import ProductList from "@/components/ProductList";

import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex-grow">
      <section className="h-full">
        <ProductList></ProductList>
      </section>
    </main>
  );
}
