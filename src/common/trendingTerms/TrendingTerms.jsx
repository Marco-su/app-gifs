import { useState, useEffect } from "react";

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
          <h3>Trending Terms</h3>
          {trendingTerms.map((term) => (
            <span className="trending-term" key={term}>
              {term}
            </span>
          ))}
        </>
      )}
    </div>
  );
};

export default TrendingTerms;
