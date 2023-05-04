import { createContext } from "react";
import { useState } from "react";

export const Products = createContext();

export const ProductsContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <Products.Provider
      value={{products, setProducts}}
    >
      {children}
    </Products.Provider>
  );
}
