import React from "react";
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header books={props.books} setBooks={props.setBooks} />
      {props.children}
    </>
  );
}

export default Layout;
