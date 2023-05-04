import { useContext } from "react";
import { Products } from "./ProductsContext";


export const useProductsContext = () => {
  return useContext(Products);
}
