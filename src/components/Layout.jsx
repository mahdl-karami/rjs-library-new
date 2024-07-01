//! import components
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header initialBooks={props.initialBooks} setBooks={props.setBooks} />
      {props.children}
    </>
  );
}

export default Layout;
