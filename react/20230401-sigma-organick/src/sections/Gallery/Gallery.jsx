import Section from "../Section/Section";
import Container from "../Container/Container";
import Heading from "../../components/Heading/Heading";
import "./Gallery.scss";

const Gallery = () => {
  return (<>
    <Section id="gallery">
      <Container className="gallery__container">
        <h2 className="srOnly" id="gallery-heading">Gallery</h2>
        <ul className="gallery__list">
          <li className="gallery__item  gallery__item--1">
            <Heading className="gallery__name" size="6">Organic Juice</Heading>
          </li>
          <li className="gallery__item  gallery__item--2">
            <Heading className="gallery__name" size="6">Organic Food</Heading>
          </li>
          <li className="gallery__item  gallery__item--3">
            <Heading className="gallery__name" size="6">Nuts Cookis</Heading>
          </li>
        </ul>
      </Container>
    </Section>
  </>)
}

export default Gallery;
