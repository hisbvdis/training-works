import ReactDOM from "react-dom/client";
import App from "./App";
import { CartContext } from "./contexts/Cart/Cart.context";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <CartContext>
    <App/>
  </CartContext>
);