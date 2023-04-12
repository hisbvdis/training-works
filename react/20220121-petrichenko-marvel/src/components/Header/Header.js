import "./Header.scss";
import "./logo.scss";
import "./nav.scss";

const Header = ({className}) => {
  return (<>
    <header className={`header ${className}`}>
      <h1 className="logo">
        <a className="logo__link" href="#">
          <span className="logo__accent">Marvel</span> information portal
        </a>
      </h1>
    </header>
  </>)
}

export default Header;