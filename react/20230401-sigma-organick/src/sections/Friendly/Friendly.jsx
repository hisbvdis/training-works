import Heading from "../../components/Heading/Heading";
import SubHeading from "../../components/SubHeading/SubHeading";
import Container from "../Container/Container";
import Section from "../Section/Section";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./Friendly.scss";
import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";

const Friendly = () => {
  return (<>
    <Section id="friendly">
      <Container className="friendly__container">
        <SubHeading className="section__subHeading" id="friendly-heading" tag="h2">Eco Friendly</SubHeading>
        <Heading className="section__heading">Econis is a Friendly<br/>Organic Store</Heading>
        <List>
          <ListItem>
            <Heading size="6">Start with Our Company First</Heading>
            <Paragraph>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</Paragraph>
          </ListItem>
          <ListItem>
            <Heading size="6">Learn How to Grow Yourself</Heading>
            <Paragraph>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</Paragraph>
          </ListItem>
          <ListItem>
            <Heading size="6">Farming Strategies of Today</Heading>
            <Paragraph>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</Paragraph>
          </ListItem>
        </List>
      </Container>
    </Section>
  </>)
}

export default Friendly;
