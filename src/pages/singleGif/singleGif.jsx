import { useEffect, useState } from "react";
import { getSingleGif } from "../../services/getGifs";
import { useParams } from "react-router-dom";

const SingleGif = () => {
  const [gif, setGif] = useState({});
  const { gifId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    getSingleGif(gifId)
      .then((res) => setGif(res.data.data))
      .catch((err) => console.log(err));

    return () => abortController.abort();
  }, [gifId]);

  return (
    <>
      {gif.id ? (
        <div>
          <h2>{gif.title}</h2>
          <figure>
            <img src={gif.images.downsized_large.url} alt={gif.title} />
          </figure>
        </div>
      ) : null}
    </>
  );
};

export default SingleGif;
