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
        <input value={search} type="text" placeholder="Search" onChange={(ev) => searchHandle(ev)} />
        <a href="https://github.com/mahdl-karami">icon</a>
      </div>
    </header>
  );
}

export default Header;
