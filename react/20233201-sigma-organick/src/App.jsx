import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { useProductsContext } from "./context/ProductsContext/useProductsContext";
import "./assets/styles/style.scss";
import { useEffect } from "react";
// import { fetchProducts } from "./services/service";
import productsTest from "./assets/data/add.json";
import { useCartContext } from "./context/CartContext/useCartContext";

const App = () => {
  const { setProducts } = useProductsContext();
  const { setCart } = useCartContext();

  useEffect(() => {
    // fetchProducts().then((productsArray) => setProducts(productsArray));
    setProducts(productsTest);
    
    const localCart = JSON.parse(localStorage.getItem("cart"));
    if (localCart) {
      setCart(localCart);
    }
  }, [])
  
  return (<>    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;
