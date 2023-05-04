import clsx from "clsx";
import { ReactComponent as Star } from "./assets/star.svg";
import "./Rating.scss";

const Rating = ({className, rating}) => {
  return (<>
    <ul className={clsx("rating", className)}>
      {Array(rating).fill().map((_, i) => <Star key={i} className="rating__star" />)}
    </ul>
  </>)
}

export default Rating;
