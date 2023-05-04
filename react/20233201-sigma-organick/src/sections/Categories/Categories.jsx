import Section from "../Section/Section";
import Container from "../Container/Container";
import SubHeading from "../../components/SubHeading/SubHeading";
import Heading from "../../components/Heading/Heading";
import Cards from "../../components/Cards/Cards";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import { useProductsContext } from "../../context/ProductsContext/useProductsContext";
import { useState } from "react";
import "./Categories.scss";


const Categories = () => {
  const { products } = useProductsContext();
  const [showAll, setShowAll] = useState(false);
  const [documentHeight, setDocumentHeight] = useState();
  const sortedProducts = products?.sort((a, b) => Number(b.isSale) - Number(a.isSale));

  const handleLoadMore = () => {
    if (showAll === false) {
      setDocumentHeight(document.documentElement.scrollHeight);
      setShowAll((prev) => !prev);
    } else {
      setShowAll((prev) => !prev);
      window.scrollBy(0, (document.documentElement.scrollHeight - documentHeight) * -1);
    }
  }
  
  return (
    <>
      <Section id="categories">
        <Container className="categories__container">
          <SubHeading className="section__subHeading">Categories</SubHeading>
          <Heading className="section__heading" tag="h2" id="categories-heading">Our products</Heading>
          <Cards
            className="categories__products"
            data={showAll ? sortedProducts : sortedProducts?.slice(0, 8)}
          />
          <ButtonLink onClick={handleLoadMore}>
            {!showAll ? "Load More" : "Hide All"}
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}

export default Categories;
