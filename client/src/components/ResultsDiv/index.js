import React from "react";
import Book from "../Book";
import "./style.css";

function ResultsDiv({ resultsList }) {
  return (
    <main className="col-11 mx-auto mt-4 p-3">
      <h5>Search Results</h5>
      <hr></hr>
      <Book 
      resultsList={resultsList}
      />
    </main>
  );
}

export default ResultsDiv;
