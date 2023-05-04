import SubHeading from "../../components/SubHeading/SubHeading";
import Container from "../Container/Container";
import Heading from "../../components/Heading/Heading";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Section from "../Section/Section";
import "./Hero.scss";

const Hero = () => {
  return (<>
    <Section id="hero">
      <Container>
        <h2 className="srOnly" id="hero-heading">Site banner</h2>
        <SubHeading className="section__subHeading">100% Natural Food</SubHeading>
        <Heading className="section__heading" size="1">Choose the best<br/>healthier way<br/>of life</Heading>
        <ButtonLink color="yellow">Explore Now</ButtonLink>
      </Container>
    </Section>
  </>)
}

export default Hero;
