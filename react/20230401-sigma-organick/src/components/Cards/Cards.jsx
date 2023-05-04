import clsx from "clsx";
import Card from "./Card";
import "./Cards.scss";

const Cards = ({className, data=[]}) => {
  return (<>
    <ul className={clsx("cards", className)}>
      {data.map((offer) => <Card key={offer.id} {...offer}/>)}
    </ul>
  </>)
}

export default Cards;
