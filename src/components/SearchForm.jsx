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
    <div id="search-form">
      <form onSubmit={goTo}>
        <input
          className="form-control mb-3"
          type="search"
          placeholder="Search..."
          onChange={(e) => setKeyword(e.target.value)}
          required
        />
        <button className="btn btn-success mb-3">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default withRouter(SearchForm);
