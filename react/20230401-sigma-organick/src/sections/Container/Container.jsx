import clsx from "clsx";
import "./Container.scss";

const Container = ({className, size, children}) => {
  return (
    <div className={clsx("container", className, size && `container--${size}`)}>
      {children}
    </div>
  );
}

export default Container;
