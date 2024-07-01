//? react imports
import { useEffect, useState } from "react";
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
  transition: linear 0.2s;
  &:hover {
    transform: scale(1.2);
    color: ${danger};
  }
`;

function BookCard({ book, likedBooks, setLikedBooks }) {
  //! destructuring props
  const { title, country, pages, author, image } = book;
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
        <img src={`images/${image}`} />
        <ContentText>
          <h2>{title}</h2>
          <p>{author}</p>
          <p>{country + " | " + pages + " Pages"}</p>
        </ContentText>
      </Content>
      <Like onClick={likeHandle} className={isLiked ? "liked" : null}>
        {isLiked ? "liked" : "like"}
      </Like>
    </Card>
  );
}

export default BookCard;
