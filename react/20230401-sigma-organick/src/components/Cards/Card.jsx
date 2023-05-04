import clsx from "clsx";
import Rating from "../Rating/Rating";
import Chip from "../Chip/Chip";
import Price from "../Price/Price";
import { useModalContext } from "../../context/ModalContext/useModalContext";
import "./Card.scss";

const Card = ({id, className, name, category, rating, priceCurrent, priceOld, image}) => {
  const { setModalOpened } = useModalContext();
  
  const handleClick = (evt) => {
    evt.preventDefault();
    setModalOpened(id);
  }
  
  return (<>
    <li className={clsx("card", className)}>
      <Chip className="card__category">{category}</Chip>
      <figure className="card__figure">
        <img className="card__img" src={process.env.PUBLIC_URL + `/images/products/${image}`} alt={name} />
      </figure>
      <a className="card__link" href="#" onClick={handleClick}>
        <h3 className="card__name">{name}</h3>
      </a>
      <div className="card__bottom">
        <Price oldValue={priceOld} currentValue={priceCurrent}/>
        <Rating rating={rating}/>
      </div>
    </li>
  </>)
}

export default Card;
