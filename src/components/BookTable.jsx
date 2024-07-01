//? react imports
import React from "react";
//! import components
import BookCard from "./BookCard";

function BookTable({books}) {
  return (
    <div>
      {books.map((book, i) => (
        <BookCard key={i} book={book} />
      ))}
    </div>
  );
}

export default BookTable;
