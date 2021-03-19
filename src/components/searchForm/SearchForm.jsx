import { useState } from "react";
import { withRouter } from "react-router-dom";

const SearchForm = (props) => {
  const { history } = props;

  const [keyword, setKeyword] = useState("");

  const goTo = (e) => {
    e.preventDefault();
    history.push(`/search/${keyword}`);
  };

  return (
    <div>
      <form onSubmit={goTo}>
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default withRouter(SearchForm);
