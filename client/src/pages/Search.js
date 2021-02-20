import React, { useState } from "react";
import SearchDiv from "../components/SearchDiv";
import ResultsDiv from "../components/ResultsDiv";
import Book from "../components/Book";
import API from "../utils/API";

function Search() {
  const [resultsList, setResultsList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    API.getBooks()
      .then((books) => {
        var response = books.data.items;
        setResultsList(response);
        console.log("results: ", resultsList);
        // return;
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <SearchDiv onClick={handleSubmit} />
      <ResultsDiv resultsList={resultsList} />
    </div>
  );
}

export default Search;
