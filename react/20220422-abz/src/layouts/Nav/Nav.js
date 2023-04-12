import "./Nav.scss";

const Nav = ({className="", children}) => {
  return (<>
    <nav className={`nav  ${className}`}>
      {children}
    </nav>
  </>)
}

export default Nav;