//? react imports
import { useEffect, useState } from "react";

function Header({ initialBooks, setBooks }) {
  const [search, setSearch] = useState("");
  //! side effects
  useEffect(() => {
    const newBooks = initialBooks.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));
    setBooks(newBooks);
  }, [search]);
  return (
    <header>
      <div className="header">
        <input value={search} type="text" placeholder="Search" onChange={({ target }) => setSearch(target.value)} />
        <a href="https://github.com/mahdl-karami">icon</a>
      </div>
    </header>
  );
}

export default Header;
