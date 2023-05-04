import clsx from "clsx";
import { createElement } from "react";
import { ReactComponent as Icon } from "./assets/arrow.svg";
import "./ButtonLink.scss";

const ButtonLink = (props) => {
  let { className, tag="button", icon=true, color, size } = props;

  if ("href" in props) tag = "a";

  let newClassName = clsx(
    "buttonLink",
    className,
    color && `buttonLink--${props.color}`, /* yellow, white */
    !icon && `buttonLink--withoutIcon`, /* false */
    size && `buttonLink--${props.size}`, /* small */
  );

  return createElement(tag, {...props, className: newClassName}, <>
    <span className="buttonLink__text">{props.children}</span>
    <Icon className="buttonLink__icon" />
  </>);
}

export default ButtonLink;
