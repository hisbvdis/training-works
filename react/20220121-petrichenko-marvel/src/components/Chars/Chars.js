import { useEffect, useState } from "react";
import { getAllCharacters } from "../../services/MarvelService.js";
import Spinner from "../Spinner/Spinner.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage.js";
import "./Chars.scss";

const Chars = ({showChar}) => {
  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [offset, setOffset] = useState(0);
  const [newCharsLoading, setNewCharsLoading] = useState(false);
  const [itemsEnded, setItemsEnded] = useState(false);

  const onError = () => {
    setLoading(false);
    setError(true);
  }

  const loadChars = (first) => {
    setNewCharsLoading(true);

    getAllCharacters(offset)
      .then(list => {
        if (list.length < 9) setItemsEnded(true);
        setOffset(offset + 9);
        setChars(chars.concat(list));
        setLoading(false);
        setNewCharsLoading(false)
        return list;
      })
      .then(list => {
        if (first) showChar(null, list[1])
      })
      .catch(onError)
  }

  useEffect(() => loadChars("first"), []);

  const btnDisabled = newCharsLoading ? true : false;
  const srOnly = itemsEnded ? "srOnly" : "";

  if (error) return <ErrorMessage/>
  if (loading) return <Spinner/>;
  return (<>
    <section className="chars">
      <ul className="chars__list">
        {chars.map((char) => {
          const {id, name, imgSrc, homeLink} = char;
          return (
            <li className="chars__item" key={id}>
              <a className="chars__link" href={homeLink} onClick={(evt) => showChar(evt, char)}>
                <img className="chars__img" src={imgSrc} alt={name} width="200" height="200"/>
                <div className="chars__info">
                  <h3 className="chars__name">{name}</h3>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
      <button 
        className={`btn  chars__btn  ${srOnly}`}
        type="button"
        disabled={btnDisabled}
        onClick={() => loadChars()}>
        Load more
      </button>
    </section>
  </>)
}

export default Chars;