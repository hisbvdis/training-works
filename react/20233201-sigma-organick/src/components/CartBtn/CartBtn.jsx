import { Link } from "react-router-dom";
import clsx from "clsx";
import { ReactComponent as Icon } from "./cart.svg";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./CartBtn.scss";

const CartBtn = ({className}) => {
  const { cart } = useCartContext();

  return (<>
    <Link className={clsx("cartBtn", className)} to="cart">
      <span className="cartBtn__circle">
        <Icon className="cartBtn__icon" width="24" height="22" aria-hidden="true"/>
      </span>
      <span className="cartBtn__title">Cart</span>
      <span className="cartBtn__count">
        <span className="cartBtn__paren">(</span>
        <span className="cartBtn__number">{Object.entries(cart).length}</span>
        <span className="cartBtn__paren">)</span>
      </span>
    </Link>
  </>)
}

export default CartBtn;
