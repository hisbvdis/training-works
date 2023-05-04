import CartBtn from "../../components/CartBtn/CartBtn";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";
import NavBtn from "../../components/NavBtn/NavBtn";
import Search from "../../components/Search/Search";
import Container from "../Container/Container";
import "./Header.scss";

const Header = () => {
  return (<>
    <header className="header">
      <Container className="header__container" size="big">
        <NavBtn className="header__navBtn" />
        <Logo className="header__logo" />
        <Nav className="header__nav" />
        <div className="header__actions">
          <Search className="header__search" />
          <CartBtn className="header__cartBtn" />
        </div>
      </Container>
    </header>
  </>)
}

export default Header;
