import { useEffect, useState } from "react";
import { getCharacter } from "../../services/MarvelService.js";
import Spinner from "../Spinner/Spinner.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage.js";
import "./Promo.scss";
import "./RandomChar.scss";

const Promo = ({className}) => {
  const [loading, setLoading] = useState(true);
  const [char, setCharacter] = useState({});
  const [error, setError] = useState();
  useEffect(() => updateChar(),[]);

  const updateChar = () => {
    setLoading(true);
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getCharacter(id)
      .then(res => {
        setCharacter(res);
        setLoading(false);
      })
      .catch(onError)
  }

  const onError = () => {
    setLoading(false);
    setError(true);
  }

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = !(loading || error) ? <View {...char}/> : null;
  
  return (<>
    <section className={`promo ${className}`}>
      <h2 className="srOnly" id="promo__title">Promo RandomChar</h2>
      <div className="promo__info">
        <p className="promo__infoText">Promo RandomChar for today!</p>
        <p className="promo__infoText">Do you want to get to know him better?</p>
        <p className="promo__infoText  promo__infoText--last">Or choose another one</p>
        <button className="btn  promo__btn" onClick={updateChar}>Update</button>
      </div>
      {errorMessage}
      {spinner}
      {content}
    </section>
  </>)
}


const View = ({name, desc, imgSrc, homeLink, wikiLink}) => {
  return (<>
    <article className={`randomChar`}>
      <img className="randomChar__img" src={imgSrc} alt={name} width="320" height="180"/>
      <div className="randomChar__info">
        <h3 className="randomChar__name">{name}</h3>
        <p className="randomChar__desc">{desc || "Нет описания"}</p>
        <p className="randomChar__links">
          <a className="btn  randomChar__link" href={homeLink}>Home</a>
          <a className="btn  randomChar__link" href={wikiLink}>Wiki</a>
        </p>
      </div>
    </article>
  </>)
}

export default Promo;