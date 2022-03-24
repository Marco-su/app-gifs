import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <nav id="main-header" className="py-2 mb-2">
      <div>
        <Link className="h3 ms-4" to="/">
          Many Gifs
        </Link>
      </div>

      <div>
        <Link className="h6 me-4" to="/info">
          Site Info
        </Link>
      </div>
    </nav>
  );
};

export default MainHeader;
