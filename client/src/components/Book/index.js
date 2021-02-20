import React from "react";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";
import "./style.css";

function Book({ resultsList }) {
  return (
    <div>
      {resultsList.map((book) => (
        <div className="bookCard p-3">
          <h5>{book.volumeInfo.title}</h5>
          <ViewBtn />
          <SaveBtn />
          <p>Written by Author</p>
          <img src="" alt={book.volumeInfo.title}></img>
          <p>{book.volumeInfo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Book;
