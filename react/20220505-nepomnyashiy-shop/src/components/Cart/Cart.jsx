import { useCartContext } from "../../contexts/Cart/useCartContext.hook";
import Button from "../Button/Button";
import CartItem from "./CartItem";
import "./Cart.css";
import Container from "../../layouts/Container/Container";

const Cart = () => {
  const { cartGoods } = useCartContext();

  return (<>
    <section className="cart">
      <Container>
        <h3>Корзина</h3>
        <ul className="cart__list">
          {(cartGoods.length === 0)
            ? "Нет товаров"
            : cartGoods.map(good => (
              <CartItem key={good.id} {...good}/>
          ))}
        </ul>
        <Button>Оформить</Button>
      </Container>
    </section>
  </>)
}

export default Cart;