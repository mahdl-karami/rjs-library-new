import React, { useState } from "react";
import Layout from "./components/Layout";
import BookTable from "./components/BookTable";
import initialBooks from "./constants/books";

function App() {
  const [books, setBooks] = useState(initialBooks);
  return (
    <Layout books={initialBooks} setBooks={setBooks}>
      <BookTable books={books} />
    </Layout>
  );
}

export default App;
