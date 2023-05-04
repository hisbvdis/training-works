import Hero from "../../sections/Hero/Hero";
import Promo from "../../sections/Promo/Promo";
import About from "../../sections/About/About";
import Testimonials from "../../sections/Testimonials/Testimonials";
import Offers from "../../sections/Offers/Offers";
import Friendly from "../../sections/Friendly/Friendly";
import Gallery from "../../sections/Gallery/Gallery";
import News from "../../sections/News/News";
import Subscribe from "../../sections/Subscribe/Subscribe";
import Categories from "../../sections/Categories/Categories";
import Modal from "../../components/Modal/Modal";

const Home = () => {
  return (<>
    <h1 className="srOnly">Organick — healthy food store</h1>
    <Hero/>
    <Promo/>
    <About/>
    <Categories/>
    <Testimonials/>
    <Offers/>
    <Friendly/>
    <Gallery/>
    <News/>
    <Subscribe/>
    <Modal/>
  </>)
}

export default Home;
