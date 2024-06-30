import React, { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");
  const searchHandle = (ev) => {
    ev.preventDefault();
    setSearch(ev.target.value);
  };
  return (
    <header>
      <div className="header">
        <form onChange={(ev) => searchHandle(ev)}>
          <input value={search} type="text" placeholder="Search" />
        </form>
        <a href="https://github.com/mahdl-karami">icon</a>
      </div>
    </header>
  );
}

export default Header;
