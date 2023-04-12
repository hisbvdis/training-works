import Container from "../../layouts/Container/Container";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import Nav from "../Nav/Nav";
import "./Header.scss";

const Header = () => {
  return (<>
    <header className="header">
      <Container className="header__container">
        <Logo className="header__logo"/>
        <Nav>
          <Button link href="#users">Users</Button>
          <Button link href="#signup">Sign up</Button>
        </Nav>
      </Container>
    </header>
  </>)
}

export default Header;