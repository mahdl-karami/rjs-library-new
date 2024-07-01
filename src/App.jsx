//? react imports
import { useState } from "react";
//! import components
import Layout from "./components/Layout";
import BookTable from "./components/BookTable";
import initialBooks from "./constants/books";

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [likedBooks, setLikedBooks] = useState([]);

  return (
    <Layout initialBooks={initialBooks} setBooks={setBooks}>
      <BookTable books={books} likedBooks={likedBooks} setLikedBooks={setLikedBooks} />
    </Layout>
  );
}

export default App;
