import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <Link to="/">
        <h1>Many Gifs</h1>
      </Link>
    </header>
  );
};

export default MainHeader;
