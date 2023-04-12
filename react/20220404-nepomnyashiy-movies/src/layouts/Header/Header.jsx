import Container from "../Container/Container";
import "./Header.css";

const Header = () => {
  return (<>
    <header className="header">
      <Container>
        <div className="header__logo">
          <a className="header__logoLink" href="/">Movies</a>
        </div>
      </Container>
    </header>
  </>)
}

export default Header;