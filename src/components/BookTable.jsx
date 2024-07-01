//? react imports
import React from "react";
//! import components
import BookCard from "./BookCard";
//? styled components
import styled from "styled-components";
import colorPalette from "../colors/color-palette";
const Table = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

function BookTable({ books, likedBooks, setLikedBooks }) {
  return (
    <Table>
      {books.map((book, i) => (
        <BookCard key={i} book={book} likedBooks={likedBooks} setLikedBooks={setLikedBooks} />
      ))}
    </Table>
  );
}

export default BookTable;
