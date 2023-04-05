import "./SearchForm.css";
import React from "react";

const SearchForm = (props) => {
  return (
    <div className="flex mt-32 w-full justify-center">
      <form className="searchForm" onSubmit={props.handleOnSubmit}>
        <input
          type="search"
          placeholder={props.ph}
          value={props.search}
          onChange={props.handleOnChange}
        />
        <button className="hidden" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchForm;
