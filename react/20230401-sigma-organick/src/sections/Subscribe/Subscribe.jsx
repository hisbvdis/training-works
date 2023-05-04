import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Heading from "../../components/Heading/Heading";
import Container from "../Container/Container";
import Section from "../Section/Section";
import "./Subscribe.scss";
import TextField from "../../components/TextField/TextField";

const Subscribe = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  }
  
  return (
    <>
      <Section id="subscribe">
        <Container className="subscribe__container">
          <div className="subscribe__inner">
            <Heading className="subscribe__heading" id="subscribe-heading" tag="h2" color="white">
              Subscribe&nbsp;to our&nbsp;Newsletter
            </Heading>
            <form className="subscribe__form" onSubmit={handleSubmit}>
              <TextField
                className="subscribe__field"
                label="Email"
                placeholder="Your Email Address"
              />
              <ButtonLink type="submit" icon={false}>Subscribe</ButtonLink>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Subscribe;
