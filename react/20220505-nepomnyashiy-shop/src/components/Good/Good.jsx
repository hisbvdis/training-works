import Button from "../Button/Button";
import { useCartContext } from "../../contexts/Cart/useCartContext.hook";
import "./Good.css";

const Good = (props) => {
  const { id, name, desc, price, icon } = props;
  const { addToCart } = useCartContext();
  
  return (<>
    <li className="good">
      <img className="good__img" src={icon} width="320" alt={name} loading="lazy"/>
      <div className="good__content  good__content--info">
        <h3 className="good__name">{name}</h3>
        <p className="good__desc">{desc}</p>
      </div>
      <div className="good__content  good__content--buy">
        <Button onClick={() => addToCart(props)}>Купить</Button>
        <p className="good__price">{price}</p>
      </div>
    </li>
  </>)
}

export default Good;