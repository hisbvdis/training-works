import Container from "../Container/Container";
import "./Hero.scss";
import Button from "../../components/Button/Button";

const Hero = () => {
  return (<>
    <section className="hero">
      <Container className="hero__container">
        <div className="hero__inner">
          <h1 className="heading  hero__heading">Test assignment for front-end developer</h1>
          <p className="hero__desc" color="secondary">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
          <Button link href="#signup">Sign up</Button>
        </div>
      </Container>
    </section>
  </>)
}

export default Hero;