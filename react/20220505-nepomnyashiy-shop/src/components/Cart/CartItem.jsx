import { useCartContext } from "../../contexts/Cart/useCartContext.hook";
import Button from "../Button/Button";
import minusIcon from "./assets/minus.svg";
import plusIcon from "./assets/plus.svg";
import "./CartItem.css";

const CartItem = (props) => {
  const { id, name, price, quantity } = props;
  const { addToCart, removeFromCart } = useCartContext();
  
  return (<>
    <li className="cartItem">
      <span>{name}</span>
      <div className="cartItem__counting">
        <Button className="cartItem__btn" onClick={() => removeFromCart(id)}>
          <span className="srOnly">Уменьшить количество на 1</span>
          <img src={minusIcon} aria-hidden="true" width="24" height="24"/>
        </Button>
        <span>{"x" + quantity}</span>
        <Button className="cartItem__btn" onClick={() => addToCart(props)}>
          <span className="srOnly">Увеличить количество на 1</span>
          <img src={plusIcon} aria-hidden="true" width="24" height="24"/>
        </Button>
        <span>= {price * quantity} у.е.</span>
      </div>
    </li>
  </>);
};

export default CartItem;