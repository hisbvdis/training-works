import Header from "./layouts/Header/Header";
import Logo from "./components/Logo/Logo";
import Goods from "./components/Goods/Goods";
import CartBtn from "./components/Cart/CartBtn";
import "./assets/styles/style.css";
import Cart from "./components/Cart/Cart";
import { useCartContext } from "./contexts/Cart/useCartContext.hook";

const App = () => {
  const { cartIsVisible } = useCartContext();
  
  return (<>
    <Header>
      <Logo/>
      <CartBtn/>
    </Header>
    <main>
      {cartIsVisible ? <Cart/> : null}
      <Goods/>
    </main>
  </>)
}

export default App;