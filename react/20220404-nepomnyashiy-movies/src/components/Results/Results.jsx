import "./Results.css"

const Results = ({movies=[]}) => {
  if (movies.length === 0) return <h5>Нет данных</h5>

  return (<>
    <ul className="results">
      {movies.map(({Poster, Title, Type, Year}, index) => (
        <li key={index} className="results__item">
          {
            Poster === "N/A"
            ? <div className="results__noPhoto"></div>
            : <img className="results__img" src={Poster} width="300" height="300" alt={Title + "."} loading="lazy"/>
          }
          <div className="results__info">
            <h3 className="results__title">
              <a className="results__link" href="">
                <span className="srOnly">Фильм</span>
                <span>{Title}</span>
              </a>
            </h3>
            <p className="results__sub">
              <small>{Type}</small>
              <small>{Year}</small>
            </p>
          </div>
        </li>
      ))}
    </ul>
  </>)
}

export default Results;