import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import MyRoutes from "./routes/Routes";
import TrendingTerms from "./common/trendingTerms/TrendingTerms";
import MainHeader from "./common/header/Header";
import SearchForm from "./common/searchForm/SearchForm";

function App() {
  return (
    <Router>
      <div className="App">
        <MainHeader />
        <div className="container">
          <TrendingTerms />
          <SearchForm />
          <MyRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
