import Price from "../Price/Price";
import Heading from "../Heading/Heading";
import ButtonLink from "../ButtonLink/ButtonLink";
import { useProductsContext } from "../../context/ProductsContext/useProductsContext";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { useState } from "react";
import Form from "../Form/Form";
import "./Order.scss";
import TextField from "../TextField/TextField";

const Order = () => {
  const { products } = useProductsContext();
  const { cart, setToCart, deleteFromCart } = useCartContext();
  const [formShowing, setFormShowing] = useState(false);

  const currentSum = Object
    .entries(cart)
    .map(([key, amount]) => ({amount, ...products.find(({id}) => id === Number(key))}))
    .reduce((sum, {amount, priceCurrent}) => sum + amount * priceCurrent, 0)

  const maxSum = Object
    .entries(cart)
    .map(([key, amount]) => ({amount, ...products.find(({id}) => id === Number(key))}))
    .reduce((sum, {amount, priceCurrent, priceOld}) => {
      if (Number(priceOld)) {
        return sum + amount * Number(priceOld);
      } else {
        return sum + amount * Number(priceCurrent);
      }
    }, 0)

  const discount = maxSum - currentSum;

  return (<>
    <ul className="order">
    {Object
      .entries(cart)
      .map(([key]) => products.find(({id}) => id === Number(key)))
      .map(({ id, name, priceCurrent, priceOld, image }) => (
        <li key={id} className="order__item">
          <figure className="order__figure">
            <img className="order__img" src={process.env.PUBLIC_URL + `/images/products/${image}`} alt={name} />
          </figure>
          <div className="order__info">
            <Heading className="order__name" size="3">
              {name}
              <Price oldValue={priceOld} currentValue={priceCurrent}/>
            </Heading>
            <div className="order__quantity">
              <Heading className="order__quantityLabel" size="5">Quantity :</Heading>
              <TextField
                className="order__quantityField"
                type="number"
                label="Product quantity"
                name="quantity"
                value={Object.entries(cart).find(([key]) => Number(key) === id)[1]}
                theme="border"
                onChange={(evt) => setToCart({id, quantity: evt.target.value})}
              />
            </div>
          </div>
          <ButtonLink className="order__btn" icon={false} onClick={() => deleteFromCart({id})}>X</ButtonLink>
        </li>
    ))}
    </ul>
    <div className="order__totals">
      <Heading size="3">Total Cost {currentSum}$</Heading>
      <Heading size="3">Discount {discount}$</Heading>
    </div>
    <div className="order__bottom">
      {!formShowing && <ButtonLink className="order__bottomBtn" onClick={() => setFormShowing((prev) => true)}>To order</ButtonLink>}
      {formShowing && <Form/>}
    </div>
  </>)
}

export default Order;
