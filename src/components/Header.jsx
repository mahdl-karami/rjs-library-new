//? react imports
import { useEffect, useState } from "react";
//? import icons
import { FaGithub } from "react-icons/fa";
//? styled components
import styled from "styled-components";
import colorPalette from "../colors/color-palette";
const { mainColor, secondaryColor, secondaryColorDark } = colorPalette;
const Head = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${secondaryColorDark};
  padding: 1rem 2rem;
  border-radius: 5px;
  margin: 2rem 0;
`;
const Input = styled.input`
  border-radius: 5px;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1em;
  outline: none;
  background: ${secondaryColor};
  &::placeholder {
    color: ${secondaryColorDark};
  }
`;
const GitHub = styled.a`
  font-size: 2em;
  color: ${mainColor};
`;
function Header({ initialBooks, setBooks }) {
  const [search, setSearch] = useState("");
  //! side effects
  useEffect(() => {
    const newBooks = initialBooks.filter((book) => book.title.toLowerCase().includes(search.toLowerCase().trim()));
    setBooks(newBooks);
  }, [search]);
  return (
    <Head>
      <Input value={search} type="text" placeholder="Search" onChange={({ target }) => setSearch(target.value)} />
      <GitHub target="_Blank" href="https://github.com/mahdl-karami">
        <FaGithub />
      </GitHub>
    </Head>
  );
}

export default Header;
