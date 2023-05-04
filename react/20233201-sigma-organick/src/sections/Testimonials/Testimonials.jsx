import Heading from "../../components/Heading/Heading";
import Paragraph from "../../components/Paragraph/Paragraph";
import SubHeading from "../../components/SubHeading/SubHeading";
import Container from "../Container/Container";
import Section from "../Section/Section";
import photo from "./assets/photo.webp";
import { ReactComponent as Rating } from "./assets/rating.svg";
import "./Testimonials.scss";

const Testimonials = () => {
  return (<>
    <Section id="testimonials">
      <Container className="testimonials__container">
        <SubHeading className="section__subHeading" id="testimonials-heading" tag="h2">Testimonial</SubHeading>
        <Heading className="section__heading">What Our Customer Saying?</Heading>
        <article className="testimonials__item">
          <img className="testimonials__photo" src={photo} alt="Sara Taylor"/>
          <Rating className="testimonials__rating" />
          <Paragraph className="testimonials__text">Simply dummy text of the printing and industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</Paragraph>
          <Heading className="testimonials__name" size="6">Sara Taylor</Heading>
          <Paragraph size="small">Consumer</Paragraph>
        </article>
        <ul className="testimonials__statsList">
          <li className="testimonials__statsItem">
            <Heading>100%</Heading>
            <p className="testimonials__statsName">Organic</p>
          </li>
          <li className="testimonials__statsItem">
            <Heading>285</Heading>
            <p className="testimonials__statsName">Active Product</p>
          </li>
          <li className="testimonials__statsItem">
            <Heading>350+</Heading>
            <p className="testimonials__statsName">Organic Orchads</p>
          </li>
          <li className="testimonials__statsItem">
            <Heading>25+</Heading>
            <p className="testimonials__statsName">Years of Farming</p>
          </li>
        </ul>
      </Container>
    </Section>
  </>)
}

export default Testimonials;
