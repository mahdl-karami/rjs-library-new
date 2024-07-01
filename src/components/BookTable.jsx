//? react imports
import React from "react";
//! import components
import BookCard from "./BookCard";

function BookTable({ books, likedBooks, setLikedBooks }) {
  return (
    <div>
      {books.map((book, i) => (
        <BookCard key={i} book={book} likedBooks={likedBooks} setLikedBooks={setLikedBooks} />
      ))}
    </div>
  );
}

export default BookTable;
