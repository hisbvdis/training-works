import clsx from "clsx";
import "./List.scss";

const List = ({className, children}) => {
  return (<>
    <ul className={clsx("list", className)}>
      {children}
    </ul>
  </>)
}

export default List;
