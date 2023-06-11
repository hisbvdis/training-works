import { createElement } from "react";
import styles from "./ButtonLink.module.css";

const ButtonLink = (props) => {
  const { children } = props;
  const tag = props.tag || props.href ? "a" : "button";
  const className = `${styles.buttonLink} ${props.className || ""}`;

  return createElement(tag, {...props, className}, <>
    <span className={styles["buttonLink__text"]}>{children}</span>
  </>);
}

export default ButtonLink;
