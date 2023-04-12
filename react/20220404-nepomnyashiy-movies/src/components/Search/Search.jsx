import { useState } from "react";
import Radio from "../Radio/Radio";
import Button from "../Button/Button";
import "./Search.css";

const Search = ({getData}) => {
  const [query, setQuery] = useState("matrix");
  const [type, setType] = useState("");

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    getData(query, type);
  }

  return (<>
    <form onSubmit={handleFormSubmit} className="search" data-js="form" aria-labelledby="search-title">
      <h2 className="srOnly" id="search-title">Панель поиска</h2>

      <div className="searchField">
        <label className="srOnly" htmlFor="search-field">Поиск по названию</label>
        <input
          className="searchField__input"
          id="search-field"
          type="text"
          value={query}
          onChange={(evt) => setQuery(evt.target.value)}
          required/>
        <Button>Search</Button>
      </div>
      
      <fieldset className="searchFilters">
        <legend className="srOnly">Type</legend>
        <Radio name="type" value="" state={[type, setType]}>All</Radio>
        <Radio name="type" value="movie" state={[type, setType]}>Movies</Radio>
        <Radio name="type" value="series" state={[type, setType]}>Series</Radio>
      </fieldset>
    </form>
  </>)
}

export default Search;