import { useState, useEffect } from "react";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = collection(db, "products");

    getDocs(productsRef)
      .then((snapshot) => {
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return products;
};
