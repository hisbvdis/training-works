import { createContext, useState } from "react";

export const Cart = createContext();

export const CartContext = ({children}) => {
  const [cartIsVisible, setCartVisibility] = useState(false);
  const [cartCount, setCount] = useState(0);
  const [cartGoods, setCartGoods] = useState([]);

  const increaseCount = () => setCount(prev => prev + 1);
  const decreaseCount = () => setCount(prev => prev - 1);
  const addToCart = (incomingGood) => {
    if (cartGoods.length === 0 || cartGoods.every(cartGood => cartGood.id !== incomingGood.id)) {
      setCartGoods(cartGoods => cartGoods.concat({...incomingGood, quantity: 1}));
      increaseCount();
      return;
    };

    setCartGoods(cartGoods => cartGoods.filter(cartGood => {
      if (cartGood.id === incomingGood.id) {
        cartGood.quantity++;
        return cartGood;
      } else {
        return cartGood;
      }
    }))
    increaseCount();
  }
  const removeFromCart = (id) => {
    setCartGoods((cartGoods) => {
      if (cartGoods.length === 0 || cartGoods.every(cartGood => cartGood.id !== id)) return;

      const targetGood = cartGoods.find(cartGood => cartGood.id === id);
      if (targetGood.quantity === 1) {
        decreaseCount();
        return cartGoods.filter(cartGood => cartGood.id !== id);
      } else {
        decreaseCount();
        return cartGoods.filter(cartGood => {
          if (cartGood.id === id) return cartGood.quantity--;
          else return cartGood;
        });
      }
    });
  }

  const value = {
    cartCount,

    addToCart,
    removeFromCart,

    cartGoods,
    
    cartIsVisible,
    setCartVisibility,
  };

  return (
    <Cart.Provider value={value}>
      {children}
    </Cart.Provider>
  )
}