import React, { useEffect, useState } from "react";

function Header({ books, setBooks }) {
  const [search, setSearch] = useState("");
  const searchHandle = (ev) => {
    ev.preventDefault();
    setSearch(ev.target.value);
  };
  useEffect(() => {
    console.log(search);
    const newBooks = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));
    setBooks(newBooks);
  }, [search]);
  return (
    <header>
      <div className="header">
        <input value={search} type="text" placeholder="Search" onChange={(ev) => searchHandle(ev)} />
        <a href="https://github.com/mahdl-karami">icon</a>
      </div>
    </header>
  );
}

export default Header;
