import "./TrendingTerms.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getTrendingTerm } from "../../services/getGifs";

const TrendingTerms = () => {
  const [trendingTerms, setTrendingTerms] = useState([]);
  const [errorTerms, setErrorTerms] = useState(null);

  useEffect(() => {
    getTrendingTerm()
      .then((res) => setTrendingTerms(res.data.data))
      .catch((err) => setErrorTerms(err));
  }, []);

  return (
    <div id="trending-terms">
      {errorTerms ? null : (
        <>
          <h4>Trending</h4>

          <div className="mb-3">
            <ul className="list-inline">
              {trendingTerms.map((term) => (
                <li className="list-inline-item my-1" key={term}>
                  <Link
                    className="term text-decoration-none rounded-1"
                    to={`/search/${term}`}
                  >
                    {term}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default TrendingTerms;
