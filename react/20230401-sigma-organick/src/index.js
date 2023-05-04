import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductsContext } from "./context/ProductsContext/ProductsContext";
import { ModalContext } from "./context/ModalContext/ModalContext";
import { CartContext } from "./context/CartContext/CartContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ProductsContext>
      <ModalContext>
        <CartContext>
          <App />
        </CartContext>
      </ModalContext>
    </ProductsContext>
  </React.StrictMode>
);
