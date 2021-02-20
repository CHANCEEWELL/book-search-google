import React from "react";
import "./style.css";

function SearchBtn({ onClick }) {
  return (
    <div className="col-12 mx-auto">
      <button className="searchBtn" onClick={onClick}>Search</button>
    </div>
  );
}

export default SearchBtn;
