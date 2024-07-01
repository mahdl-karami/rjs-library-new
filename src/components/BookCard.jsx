//? react imports
import { useEffect, useState } from "react";
//? import icons
import { PiHeartFill } from "react-icons/pi";
//? styled components
import styled from "styled-components";
import colorPalette from "../colors/color-palette";
const { mainColor, mainColorDark, secondaryColor, secondaryColorDark, danger } = colorPalette;
const Card = styled.div`
  width: 100%;
  background: ${secondaryColorDark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 5px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const ContentText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Like = styled.span`
  color: ${secondaryColor};
  cursor: pointer;
  transition: ease 0.2s;
  font-size: 1.8em;
  &:hover {
    transform: scale(1.2);
    color: ${danger};
  }
`;
const Link = styled.a`
  transition: all 0.3s ease;
  &:hover {
    color: ${mainColor};
  }
`;

function BookCard({ book, likedBooks, setLikedBooks }) {
  //! destructuring props
  const { title, country, pages, author, image, link } = book;
  //! states
  const [isLiked, setIsLiked] = useState(likedBooks.filter((likedBook) => likedBook.title == book.title).length);
  //! side effects
  useEffect(() => {
    if (isLiked) {
      setLikedBooks((prevS) => [...prevS, book]);
    } else {
      //* remove this book from liked books
      const newLikedBooks = likedBooks.filter((likedBook) => likedBook.title != book.title);
      setLikedBooks(newLikedBooks);
    }
  }, [isLiked]);
  //! functions
  const likeHandle = () => {
    setIsLiked((prevS) => !prevS);
  };
  return (
    <Card>
      <Content>
        <Link target="_blank" href={link}>
          <img src={`images/${image}`} />
        </Link>

        <ContentText>
          <Link target="_blank" href={link}>
            <h2>{title}</h2>
          </Link>
          <p>{author}</p>
          <p>{country + " | " + pages + " Pages"}</p>
        </ContentText>
      </Content>
      <Like onClick={likeHandle} className={isLiked ? "liked" : null}>
        <PiHeartFill />
      </Like>
    </Card>
  );
}

export default BookCard;
