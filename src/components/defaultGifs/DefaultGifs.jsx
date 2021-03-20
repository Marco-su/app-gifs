//---Imports
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SearchForm from "../searchForm/SearchForm";
import { getTrendingGifs } from "../../services/getGifs";

const DefaultGifs = () => {
  //---States
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [errorGifs, setErrorGifs] = useState(null);

  //---Get gifs
  useEffect(() => {
    getTrendingGifs()
      .then((res) => setTrendingGifs(res.data.data))
      .catch((err) => setErrorGifs(err));
  }, []);

  //---Render
  return (
    <div id="default-gifs-container">
      <SearchForm />

      {errorGifs ? (
        <span className="error-default-gifs">Error loading gifs</span>
      ) : (
        trendingGifs.map((gif) => (
          <figure className="gif-container" key={gif.id}>
            <Link to={`/gif/${gif.id}`}>
              <img
                className="gif"
                src={gif.images.fixed_width.url}
                alt={gif.title}
              />
            </Link>
          </figure>
        ))
      )}
    </div>
  );
};

//---Export
export default DefaultGifs;
