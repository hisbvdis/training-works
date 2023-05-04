import Heading from "../../components/Heading/Heading";
import Container from "../../sections/Container/Container";
import Section from "../../sections/Section/Section";
import Order from "../../components/Order/Order";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Cart.scss";

const Cart = () => {
  const { cart } = useCartContext();
  
  return (<>
    <Section id="cart">
      <div className="cart__banner">
        <Heading tag="h2" size="1" id="cart-heading">Cart</Heading>
      </div>
      <div className="cart__content">
        <Container>
          {
            Object.entries(cart).length > 0
            ? <Order /> 
            : <Heading className="cart__placeholder" size="4">There is no products in the cart</Heading>
          }
        </Container>
      </div>
    </Section>
  </>)
}

export default Cart;
