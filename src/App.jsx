import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./routes/Routes";
import TrendingTerms from "./components/TrendingTerms";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
