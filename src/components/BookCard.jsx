//? react imports
import { useEffect, useState } from "react";

function BookCard({ book, likedBooks, setLikedBooks }) {
  //! destructuring props
  const { title, country, pages, author, image } = book;
  //! states
  const [isLiked, setIsLiked] = useState(0);
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
    <div>
      <div>
        <img src={`images/${image}`} />
        <div>
          <h2>{title}</h2>
          <p>{author}</p>
          <p>{country + " | " + pages + " Pages"}</p>
        </div>
      </div>
      <button onClick={likeHandle}>{isLiked ? "liked" : "like"}</button>
    </div>
  );
}

export default BookCard;
