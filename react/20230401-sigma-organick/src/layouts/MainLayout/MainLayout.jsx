import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (<>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </>)
}

export default MainLayout;
