import clsx from "clsx";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = ({className}) => {
  return (<>
    <nav className={clsx("nav", className)}>
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/">Home</Link>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="">About</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="">Pages</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="">Shop</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="">Project</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="">News</a>
        </li>
      </ul>
    </nav>
  </>)
}

export default Nav;
