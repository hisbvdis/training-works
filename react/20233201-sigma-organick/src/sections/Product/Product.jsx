import Section from "../Section/Section";
import Container from "../Container/Container";
import Rating from "../../components/Rating/Rating";
import Paragraph from "../../components/Paragraph/Paragraph";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Chip from "../../components/Chip/Chip";
import Heading from "../../components/Heading/Heading";
import Price from "../../components/Price/Price";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { useState } from "react";
import "./Product.scss";
import TextField from "../../components/TextField/TextField";

const Product = ({id, name, category, rating, priceCurrent, priceOld, image, dummy, desc, additional}) => {
  const [tab, setTab] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();
  
  return (
    <>
      <Section id="product">
        <Container className="product__container">
          <figure className="product__figure">
            <Chip className="product__category">{category}</Chip>
            <img
              className="product__img"
              src={process.env.PUBLIC_URL + `/images/products/${image}`}
              alt={name}
            />
          </figure>
          <div className="product__data">
            <Heading className="product__heading" size="3">{name}</Heading>
            <Rating className="product__rating" rating={rating} />
            <Price className="product__price" oldValue={priceOld} currentValue={priceCurrent}/>
            <Paragraph className="product__paragraph">{dummy}</Paragraph>
            <div className="product__quantity">
              <span className="product__quantityLabel">Quantity :</span>
              <div className="product__quantityRow">
                <TextField
                  className="product__quantityField"
                  type="number"
                  label="Product quantity"
                  name="quantity"
                  value={quantity}
                  theme="border"
                  onChange={(evt) => setQuantity(evt.target.value)}
                />
                <ButtonLink onClick={() => addToCart({id, quantity})}>Add To Cart</ButtonLink>
              </div>
            </div>
          </div>
          <div className="product__info">
            <ButtonLink color={tab === 2 ? "white" : undefined} onClick={() => setTab(1)}>
              Product Description
            </ButtonLink>
            <ButtonLink color={tab === 1 ? "white" : undefined} onClick={() => setTab(2)}>
              Additional Info
            </ButtonLink>
            <Paragraph className="product__infoText">
              {tab === 1 ? desc : additional}
            </Paragraph>
          </div>
          <ButtonLink className="product__closeBtn" size="small" icon={false} data-close-btn>X</ButtonLink>
        </Container>
      </Section>
    </>
  );
}

export default Product;
