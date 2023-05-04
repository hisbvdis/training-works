import clsx from "clsx";
import "./NavBtn.scss";

const NavBtn = ({className}) => {
  const handleClick = () => {
    const root = document.querySelector("#root");
    root.classList.toggle("root--navOpened");
  }

  return (<>
    <button className={clsx("navBtn", className)} type="button" onClick={handleClick}>
      <span className="navBtn__line  navBtn__line--1"></span>
      <span className="navBtn__line  navBtn__line--2"></span>
      <span className="navBtn__line  navBtn__line--3"></span>
      <span className="srOnly">Открыть меню</span>
    </button>
  </>)
}

export default NavBtn;
