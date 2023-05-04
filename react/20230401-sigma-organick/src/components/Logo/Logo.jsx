import clsx from "clsx";
import { ReactComponent as Icon } from "./logo.svg";
import "./Logo.scss";
import { Link } from "react-router-dom";

const Logo = ({className}) => {
  return (
    <Link className={clsx("logo", className)} to="/">
      <Icon className="logo__img" aria-label="Organick Logo"/>
      <span className="logo__text">Organick</span>
    </Link>
  )
}

export default Logo;
