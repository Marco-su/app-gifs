//---Imports
import { useState, useEffect } from "react";
import Gif from "../../components/gif/Gif";

import SearchForm from "../../components/searchForm/SearchForm";
import { getTrendingGifs } from "../../services/getGifs";

const DefaultGifs = () => {
  //---States
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [errorGifs, setErrorGifs] = useState(null);

  //---Get gifs
  useEffect(() => {
    const abortController = new AbortController();

    getTrendingGifs()
      .then((res) => setTrendingGifs(res.data.data))
      .catch((err) => setErrorGifs(err));

    return () => abortController.abort();
  }, []);

  //---Render
  return (
    <div id="default-gifs-container">
      <SearchForm />

      {errorGifs ? (
        <span className="error-default-gifs">Error loading gifs</span>
      ) : (
        trendingGifs.map((gif) => (
          <Gif
            key={gif.id}
            id={gif.id}
            src={gif.images.fixed_width.url}
            alt={gif.title}
          />
        ))
      )}
    </div>
  );
};

//---Export
export default DefaultGifs;
