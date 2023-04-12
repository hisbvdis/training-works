import { useContext } from "react";
import { Cart } from "./Cart.context";

export const useCartContext = () => {
  const data = useContext(Cart);

  return data;
}