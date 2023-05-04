import clsx from "clsx";
import "./Price.scss";

const Price = ({className, oldValue, currentValue}) => {
  return (<>
    <span className={clsx("price", className)}>
      {oldValue && <span className="price__old">{`$${oldValue}`}</span>}
      <span className="price__current">{`$${currentValue}`}</span>
    </span>
  </>)
}

export default Price;
