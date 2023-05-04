import { createContext, useEffect } from "react";
import { useState } from "react";

export const Cart = createContext();

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState({});
  
  const addToCart = ({id, quantity}) => {
    setCart((prev) => {
      const newCart = {...prev, [id]: (prev[id] || 0) + Number(quantity)};
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  }

  const setToCart = ({id, quantity}) => {
    setCart((prev) => {
      const newCart = {...prev, [id]: Number(quantity)};
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  }

  const deleteFromCart = ({id}) => {
    setCart((prev) => {
      const newPrev = {...prev};
      delete newPrev[id];
      localStorage.setItem("cart", JSON.stringify(newPrev));
      return newPrev;
    })
  }

  return (
    <Cart.Provider value={{ cart, addToCart, setToCart, setCart, deleteFromCart }}>
      {children}
    </Cart.Provider>
  );
}
