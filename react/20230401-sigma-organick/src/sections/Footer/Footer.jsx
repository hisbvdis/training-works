import Container from "../Container/Container";
import Heading from "../../components/Heading/Heading";
import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";
import Logo from "../../components/Logo/Logo";
import Paragraph from "../../components/Paragraph/Paragraph";
import Socials from "../../components/Socials/Socials";
import "./Footer.scss";

const Footer = () => {
  return (<>
    <footer className="footer">
      <Container className="footer__container">
        <address className="footer__div  footer__div--1">
          <Heading className="footer__heading" size="5">Contact Us</Heading>
          <List>
            <ListItem>
              <p className="footer__contactTitle">Email</p>
              <a className="footer__link" href="mailto:needhelp@Organia.com">needhelp@Organia.com</a>
            </ListItem>
            <ListItem>
              <p className="footer__contactTitle">Phone</p>
              <a className="footer__link" href="tel:666888888">666 888 888</a>
            </ListItem>
            <ListItem>
              <p className="footer__contactTitle">Address</p>
              88 road, borklyn street, USA
            </ListItem>
          </List>
        </address>
        <div className="footer__div  footer__div--2">
          <Logo className="footer__logo"/>
          <Paragraph className="footer__paragraph">Simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum simply dummy text of the printing </Paragraph>
          <Socials className="footer__socials"/>
        </div>
        <div className="footer__div  footer__div--3">
          <Heading className="footer__heading" size="5">Utility Pages</Heading>
          <List>
            <ListItem>
              <a className="footer__link" href="#">Style Guide</a>
            </ListItem>
            <ListItem>
              <a className="footer__link" href="#">404 Not Found</a>
            </ListItem>
            <ListItem>
              <a className="footer__link" href="#">Password Protected</a>
            </ListItem>
            <ListItem>
              <a className="footer__link" href="#">Licences</a>
            </ListItem>
            <ListItem>
              <a className="footer__link" href="#">Changelog</a>
            </ListItem>
          </List>
        </div>
        <div className="footer__bottom">
          Copyright&nbsp;©&nbsp;<b>Organick</b> | Designed&nbsp;by&nbsp;<b>VictorFlow</b> Templates&nbsp;-&nbsp;Powered&nbsp;by&nbsp;<b>Webflow</b>
        </div>
      </Container>
    </footer>
  </>)
}

export default Footer;
