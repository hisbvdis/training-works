import { useContext } from "react";
import { Cart } from "./CartContext";

export const useCartContext = () => {
  return useContext(Cart);
}
