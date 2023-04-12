import "./CharInfo.scss";

const CharInfo = ({className, char}) => {
  const {id, name, imgSrc, desc, homeLink, wikiLink, comics=[]} = char;
  
  return (<>
    <section className={`charInfo  ${className}`}>
      <img className="charInfo__img" src={imgSrc} alt={name} width="150" height="150"/>
      <h3 className="charInfo__name">{name}</h3>
      <p className="charInfo__desc">{desc}</p>
      <p className="charInfo__links">
        <a className="btn" href={homeLink}>Homepage</a>
        <a className="btn" href={wikiLink}>Wiki</a>
      </p>
      <h4 className="charInfo__subTitle">Comics:</h4>
      <ul className="charInfo__comics">
        {comics.map(({name, resourceURI}, i) => (
          <li key={i} className="charInfo__comic">
            <a className="charInfo__comicLink" href={resourceURI}>{name}</a>
          </li>
        ))}
      </ul>
    </section>
  </>)
}

export default CharInfo;