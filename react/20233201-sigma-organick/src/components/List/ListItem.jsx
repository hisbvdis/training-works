import clsx from "clsx";

const ListItem = ({className, children}) => {
  return (<>
    <li className={clsx("list__item", className)}>
      {children}
    </li>
  </>)
}

export default ListItem;
