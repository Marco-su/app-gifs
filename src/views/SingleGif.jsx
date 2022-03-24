import { useEffect, useState } from "react";
import { getSingleGif } from "../helpers/getGifs";
import { useParams } from "react-router-dom";

const SingleGif = () => {
  const [gif, setGif] = useState({});
  const [errorGif, setErrorGif] = useState(null);
  const { gifId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    getSingleGif(gifId)
      .then((res) => setGif(res.data.data))
      .catch((err) => {
        setErrorGif(true);
        console.log(err);
      });

    return () => abortController.abort();
  }, [gifId]);

  return (
    <div id="single-gif">
      {gif.id ? (
        <>
          <h2 className="mb-4 h4">{gif.title}</h2>
          <figure>
            <img src={gif.images.downsized_large.url} alt={gif.title} />
          </figure>
        </>
      ) : null}

      {errorGif ? (
        <span className="error-loading-gifs">Error loading this gif.</span>
      ) : null}
    </div>
  );
};

export default SingleGif;
