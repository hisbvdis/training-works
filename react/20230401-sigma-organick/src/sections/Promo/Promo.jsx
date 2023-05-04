import Container from "../Container/Container";
import SubHeading from "../../components/SubHeading/SubHeading"
import Heading from "../../components/Heading/Heading";
import "./Promo.scss";
import Section from "../Section/Section";

const Promo = () => {
  return (<>
    <Section id="promo">
      <Container className="section__container">
        <h2 className="srOnly" id="promo-heading">Our promo</h2>
        <ul className="promo__list">
          <li className="promo__item  promo__item--1">
            <SubHeading color="white">Natural!!</SubHeading>
            <Heading size="3" color="white">Get Garden<br/>Fresh Fruits</Heading>
          </li>
          <li className="promo__item  promo__item--2">
            <SubHeading>Offer!!</SubHeading>
            <Heading size="3">Get 10% off<br/>on Vegetables</Heading>
          </li>
        </ul>
      </Container>
    </Section>
  </>)
}

export default Promo;
