import React from "react";
import SearchBtn from "../SearchBtn";
import "./style.css";

function SearchDiv({ onClick }) {
  return (
    <div className="searchDiv col-11 mx-auto mt-5 p-3">
      <h5>Book Search</h5>
      <p>Book:</p>
      <input className="col-12" type="text"></input>
      <SearchBtn 
      onClick={onClick}
      />
    </div>
  );
}

export default SearchDiv;
