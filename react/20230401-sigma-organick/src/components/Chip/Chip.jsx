import clsx from "clsx";
import "./Chip.scss";

const Chip = ({className, children}) => {
  return (<>
    <span className={clsx("chip", className)}>{children}</span>
  </>)
}

export default Chip;
