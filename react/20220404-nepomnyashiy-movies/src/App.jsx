import { useEffect, useState } from "react";

import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";

import "./styles/styles.css";


const App = () => {
  const [movies, setMovies] = useState();

  const getData = (query="matrix", type="") => {
    fetch(`https://www.omdbapi.com/?apikey=e1f841c2&s=${query}&type=${type}`)
      .then(response => response.json())
      .then(data => setMovies(data.Search))
  }

  useEffect(() => {
    getData();
  }, [])

  return (<>
    <Header/>
    <Main>
      <Search getData={getData}/>
      <Results movies={movies}/>
    </Main>
  </>)
}

export default App;