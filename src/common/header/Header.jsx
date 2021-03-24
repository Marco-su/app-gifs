import "./Header.css";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header id="main-header" className="text-center py-2 mb-2">
      <Link className="text-decoration-none h1" to="/">
        Many Gifs
      </Link>
    </header>
  );
};

export default MainHeader;
