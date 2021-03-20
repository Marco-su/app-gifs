import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import MyRoutes from "./routes/Routes";
import TrendingTerms from "./components/trendingTerms/TrendingTerms";

function App() {
  return (
    <Router>
      <div className="App">
        <MyRoutes />
        <TrendingTerms />
      </div>
    </Router>
  );
}

export default App;
