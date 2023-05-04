import SubHeading from "../../components/SubHeading/SubHeading";
import Container from "../Container/Container";
import Section from "../Section/Section";
import Heading from "../../components/Heading/Heading";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./News.scss";

const News = () => {
  return (<>
    <Section id="news">
      <Container>
        <SubHeading className="section__subHeading" id="news-heading" tag="h2">News</SubHeading>
        <header className="news__header">
          <Heading className="section__heading  news__mainHeading">Discover weekly content about organic food, & more</Heading>
          <ButtonLink color="white">More News</ButtonLink>
        </header>
        <ul className="news__list">
          <li className="news__item  news__item--1">
            <div className="news__date">
              <Heading size="6">25<br/>Nov</Heading>
            </div>
            <div className="news__content">
              <p className="news__author">By Rachi Card</p>
              <Heading className="news__heading" size="6">The Benefits of Vitamin D & How to Get It</Heading>
              <Paragraph className="news_p">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Paragraph>
              <ButtonLink color="yellow">Read More</ButtonLink>
            </div>
          </li>
          <li className="news__item  news__item--2">
            <div className="news__date">
              <Heading size="6">25<br/>Nov</Heading>
            </div>
            <div className="news__content">
              <p className="news__author">By Rachi Card</p>
              <Heading className="news__heading" size="6">Our Favourite Summertime Tommeto</Heading>
              <Paragraph className="news_p">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Paragraph>
              <ButtonLink color="yellow">Read More</ButtonLink>
            </div>
          </li>
        </ul>
      </Container>
    </Section>
  </>)
}

export default News;
