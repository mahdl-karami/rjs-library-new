import React from "react";
import books from "../constants/books";
import BookCard from "./BookCard";

function BookTable() {
  return (
    <div>
      {books.map((book, i) => (
        <BookCard key={i} book={book} />
      ))}
    </div>
  );
}

export default BookTable;
