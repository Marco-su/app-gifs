//---Imports
import { useState, useEffect } from "react";
import Gif from "../components/Gif";
import { getTrendingGifs } from "../helpers/getGifs";

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
    <div className="row">
      <div className="loaded-gifs col-md-10 offset-md-1">
        {errorGifs ? (
          <span className="error-loading-gifs">Error loading gifs.</span>
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
    </div>
  );
};

//---Export
export default DefaultGifs;
