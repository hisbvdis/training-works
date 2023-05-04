import clsx from "clsx";
import { createElement } from "react";
import "./Heading.scss";

const Heading = (props) => {
  let { className, tag="p", size=2, color, children } = props;

  let newClassName = clsx(
    "heading",
    className,
    `heading--${size}`, /* 1, 2, 3, 4, 5, 6 */
    color && `heading--${color}`, /* white */
  );
  
  return createElement(tag, {...props, className: newClassName}, children);
}

export default Heading;
