import { memo } from "react";
import { Link } from "react-router-dom";

const Gif = ({ id, src, alt }) => {
  return (
    <figure className="gif-container">
      <Link to={`/gif/${id}`}>
        <img className="gif-image" src={src} alt={alt} />
      </Link>
    </figure>
  );
};

export default memo(Gif);
