import clsx from "clsx";
import { useState } from "react";
import { ReactComponent as Icon } from "./zoom.svg";
import "./Search.scss";

const Search = ({className}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (evt) => {
    setSearchValue(evt.target.value);
  }

  const handeSubmit = (evt) => {
    evt.preventDefault();
  }
  
  return (<>
    <form className={clsx("search", className)} role="search" aria-labelledby="search-form-title" onSubmit={handeSubmit}>
      <h2 className="srOnly" id="search-form-title">Search</h2>
      <label className="srOnly" htmlFor="search-input">Search field</label>
      <input className="search__input" id="search-input" type="search" value={searchValue} onChange={handleChange}/>
      <button className="search__btn" type="submit">
        <Icon className="search__icon" width="22" height="21" aria-hidden="true" />
        <span className="srOnly">Find</span>
      </button>
    </form>
  </>)
}

export default Search;
