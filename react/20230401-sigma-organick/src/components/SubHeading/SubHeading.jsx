import clsx from "clsx";
import { createElement } from "react";
import "./SubHeading.scss";

const SubHeading = (props) => {
  let {className, tag="p", color, children} = props;

  let newClassName = clsx(
    "subHeading",
    className,
    color && `subHeading--${color}` /* white */
  );

  return createElement(tag, {...props, className: newClassName}, children);
}

export default SubHeading;
