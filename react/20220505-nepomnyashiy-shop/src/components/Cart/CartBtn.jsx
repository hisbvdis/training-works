import { useCartContext } from "../../contexts/Cart/useCartContext.hook";
import Button from "../Button/Button.jsx";
import "./CartBtn.css";

const CartBtn = () => {
  const { cartCount, setCartVisibility } = useCartContext();
  
  return (<>
    <Button className="cartBtn" onClick={() => setCartVisibility(prev => !prev)}>
      <span className="srOnly">Shopping Cart</span>
      <span className="cartBtn__icon"></span>
      <span className="cartBtn__count">{cartCount || ""}</span>
    </Button>
  </>)
}

export default CartBtn;