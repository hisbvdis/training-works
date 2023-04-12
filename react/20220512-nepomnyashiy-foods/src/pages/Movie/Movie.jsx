import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieService from "../../services/Movie.service";

const Movie = () => {
  const { movieId } = useParams();
  const { getMovieById, isLoading } = MovieService();
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [])

  if (isLoading === true) return "Загрузка";
  const { Title, Released, Genre, Poster, Plot } = movie;

  return (<>
    <h1>{Title}</h1>
    <p>{Released}</p>
    <p>{Genre}</p>
    <img src={Poster}/>
    <p>{Plot}</p>
  </>)
};

export default Movie;
