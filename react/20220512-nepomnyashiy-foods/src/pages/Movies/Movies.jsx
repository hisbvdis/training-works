import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieService from "../../services/Movie.service";
import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { getMovies } = MovieService();
  
  useEffect(() => {
    getMovies().then(setMovies)
  }, [])
  
  return (<>
    <section className="movies">
      <ul className="movies__list">
        {movies.map(({imdbID, Title, Poster}) => (
          <li className="movies__item" key={imdbID}>
            <img className="movies__img" src={Poster}/>
            <Link className="movies__title" to={imdbID}>{Title}</Link>
          </li>
        ))}
      </ul>
    </section>
  </>)
}

export default Movies;