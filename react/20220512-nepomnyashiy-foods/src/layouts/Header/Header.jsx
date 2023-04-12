import Logo from "../../components/Logo/Logo";
import Container from "../Container/Container";
import "./Header.css";

const Header = () => {
  return (<>
    <header className="header">
      <Container>
        <Logo/>
      </Container>
    </header>
  </>)
}

export default Header;