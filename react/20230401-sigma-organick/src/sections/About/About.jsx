import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";
import Heading from "../../components/Heading/Heading";
import Paragraph from "../../components/Paragraph/Paragraph";
import SubHeading from "../../components/SubHeading/SubHeading";
import Container from "../Container/Container";
import Section from "../Section/Section";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import "./About.scss";

const About = () => {
  return (<>
    <Section id="about">
      <Container className="about__container" type="section">
        <div className="about__div  about__div--decor"></div>
        <div className="about__div  about__div--data">
          <SubHeading className="section__subHeading" tag="h2" id="about-heading">About Us</SubHeading>
          <Heading>We Believe in Working<br/>Accredited Farmers</Heading>
          <Paragraph className="about__paragraph">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Paragraph>
          <List className="about__list">
            <ListItem className="about__item">
              <span className="about__icon  about__icon--1"></span>
              <Heading size="6">Organic Foods Only</Heading>
              <Paragraph>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Paragraph>
            </ListItem>
            <ListItem className="about__item">
              <span className="about__icon  about__icon--2"></span>
              <Heading size="6">Quality Standards</Heading>
              <Paragraph>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Paragraph>
            </ListItem>
          </List>
          <ButtonLink>Shop Now</ButtonLink>
        </div>
      </Container>
    </Section>
  </>)
}

export default About;
