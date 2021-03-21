import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import MyRoutes from "./routes/Routes";
import TrendingTerms from "./common/trendingTerms/TrendingTerms";
import MainHeader from "./common/header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <MainHeader />
        <TrendingTerms />
        <MyRoutes />
      </div>
    </Router>
  );
}

export default App;
