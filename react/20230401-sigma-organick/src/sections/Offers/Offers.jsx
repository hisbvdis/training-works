import Section from "../../sections/Section/Section";
import Container from "../../sections/Container/Container";
import SubHeading from "../../components/SubHeading/SubHeading";
import Heading from "../../components/Heading/Heading";
import Cards from "../../components/Cards/Cards";
import { useProductsContext } from "../../context/ProductsContext/useProductsContext";
import "./Offers.scss";

const Offers = () => {
  const { products } = useProductsContext();

  return (<>
    <Section id="offers">
      <Container>
        <SubHeading className="section__subHeading  offers__subHeading" id="offers-heading" tag="h2">Offer</SubHeading>
        <Heading className="section__heading  offers__heading" color="white">We Offer Organic For You</Heading>
        <Cards data={products?.filter(({category}) => category === "Vegetable").slice(0, 4)} />
      </Container>
    </Section>
  </>)
}

export default Offers;
