//? react imports
import { useEffect, useState } from "react";
//! import components
import Layout from "./components/Layout";
import BookTable from "./components/BookTable";
import initialBooks from "./constants/books";
import { getLocal, setLocal } from "./helpers/localstorage";

function App() {
  const initialLikedBooks = getLocal("likedBooks");
  const [books, setBooks] = useState(initialBooks);
  const [likedBooks, setLikedBooks] = useState(JSON.parse(initialLikedBooks) || []);
  //! side effects
  useEffect(() => {
    setLocal("likedBooks", JSON.stringify(likedBooks));
  });
  return (
    <Layout initialBooks={initialBooks} setBooks={setBooks}>
      {books.length ? <BookTable books={books} likedBooks={likedBooks} setLikedBooks={setLikedBooks} /> : <h2>Nothing in here</h2>}
    </Layout>
  );
}

export default App;
