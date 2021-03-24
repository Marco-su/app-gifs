//---Imports
import "./GifsList.css";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import { getGifs } from "../../services/getGifs";
import { IsIntersecting } from "../../services/intersectionObserver";
import Gif from "../../components/gif/Gif";

const GifsList = () => {
  const observedElement = useRef();

  //---Get param
  const { term } = useParams();

  //---States
  const [gifs, setGifs] = useState([]);
  const [page, setPage] = useState(0);
  const [readyForInfScroll, setReadyForInfScroll] = useState(false);
  const [allowNextPage, setAllowNextPage] = useState(false);
  const [initialParam, setInitialParam] = useState(term);
  const [errorSearching, setErrorSearching] = useState(null);

  const intersecting = IsIntersecting(observedElement, readyForInfScroll);

  if (initialParam !== term) {
    setGifs([]);
    setInitialParam(term);
  }

  //---Getting gifs
  useEffect(() => {
    const abortController = new AbortController();

    setReadyForInfScroll(false);

    getGifs(term, page)
      .then((res) => {
        setGifs((prevGifs) => prevGifs.concat(res.data.data));

        setTimeout(() => {
          setReadyForInfScroll(true);

          res.data.data.length < 20
            ? setAllowNextPage(false)
            : setAllowNextPage(true);
        }, 1000);
      })

      .catch((err) => {
        setErrorSearching(err);
        setReadyForInfScroll(false);
      });

    return () => abortController.abort();
  }, [term, page]);

  //---Config next page authorization
  useEffect(() => {
    if (intersecting && readyForInfScroll && allowNextPage) {
      setPage((prev) => prev + 1);
      setAllowNextPage(false);
    }
  }, [intersecting, readyForInfScroll, allowNextPage]);

  //---Render
  return (
    <div id="gifs-list">
      <h3 className="term">{term}</h3>

      <div className="row">
        <div className="loaded-gifs col-md-10 offset-md-1">
          {errorSearching ? (
            <span className="error-loading-gifs">Error loading gifs</span>
          ) : (
            gifs.map((gif) => (
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

      {gifs.length === 0 && readyForInfScroll ? (
        <h3 className="h4 mt-4 text-center">
          Sorry, no gifs were found for your search.
        </h3>
      ) : null}

      <div ref={observedElement}></div>
    </div>
  );
};

//---Export
export default GifsList;
