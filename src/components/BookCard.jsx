//? react imports
import React from "react";

function BookCard({ book }) {
  const { title, country, pages, author, image } = book;
  return (
    <div>
      <div>
        <img src={`images/${image}`} />
        <div>
          <h2>{title}</h2>
          <p>{author}</p>
          <p>{country + " | " + pages + " Pages"}</p>
        </div>
      </div>
      <button>like</button>
    </div>
  );
}

export default BookCard;
